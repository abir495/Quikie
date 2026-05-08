const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const serverless = require('serverless-http');

// Load env vars
dotenv.config();

const app = express();

// Body parser
app.use(express.json());

// --- MONGODB CONNECTION CACHING ---
let cachedDb = null;

const connectDB = async () => {
    if (cachedDb) {
        return cachedDb;
    }
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000 // 5 seconds
        });
        cachedDb = conn;
        return cachedDb;
    } catch (err) {
        console.error(`Error connecting to MongoDB: ${err.message}`);
        throw err;
    }
};

// We need the User model logic here to avoid path resolution issues in serverless
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please add a username'],
        unique: true,
        trim: true,
        maxlength: [50, 'Username can not be more than 50 characters']
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: 6,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Avoid OverwriteModelError in serverless reloads
let User;
try {
    User = mongoose.model('User');
} catch (error) {
    // Encrypt password using bcrypt (inline fallback since bcrypt is a dependency)
    const bcrypt = require('bcryptjs');
    userSchema.pre('save', async function (next) {
        if (!this.isModified('password')) {
            next();
        }
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    });

    userSchema.methods.matchPassword = async function (enteredPassword) {
        return await bcrypt.compare(enteredPassword, this.password);
    };
    User = mongoose.model('User', userSchema);
}

// Generate Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE || '30d'
    });
};

// --- API ROUTES ---
const router = express.Router();

router.post('/auth/register', async (req, res) => {
    try {
        await connectDB();
        const { username, password } = req.body;

        const userExists = await User.findOne({ username });
        if (userExists) {
            return res.status(400).json({ success: false, message: 'Username already taken' });
        }

        const user = await User.create({ username, password });
        const token = generateToken(user._id);

        res.status(201).json({
            success: true,
            token,
            user: { id: user._id, username: user.username }
        });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server Error: ' + err.message });
    }
});

router.post('/auth/login', async (req, res) => {
    try {
        await connectDB();
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ success: false, message: 'Please provide username and password' });
        }

        const user = await User.findOne({ username }).select('+password');

        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        const isMatch = await user.matchPassword(password);

        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        const token = generateToken(user._id);

        res.status(200).json({
            success: true,
            token,
            user: { id: user._id, username: user.username }
        });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server Error: ' + err.message });
    }
});

// Mount the router on multiple possible prefixes to be extremely robust
// Netlify sometimes sends the full internal path, sometimes the rewritten path
app.use(['/.netlify/functions/api', '/api', '/'], router);

// Export the serverless app
module.exports.handler = serverless(app);
