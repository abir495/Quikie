const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const path = require('path');
const User = require('./models/User');

// Load env vars
dotenv.config();

const app = express();

// Body parser
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
// The current directory has the HTML files, but it's better practice to put them in a public folder,
// or just serve the current directory since this is a simple project.
app.use(express.static(__dirname));

// Connect to MongoDB
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Error connecting to MongoDB: ${err.message}`);
        // Do not exit process, let the server run so user can see UI even if DB fails
    }
};

connectDB();

// --- AUTH API ROUTES ---

// Generate Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
};

// @route   POST /api/auth/register
// @desc    Register a user
app.post('/api/auth/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if user exists
        const userExists = await User.findOne({ username });
        if (userExists) {
            return res.status(400).json({ success: false, message: 'Username already taken' });
        }

        // Create user
        const user = await User.create({
            username,
            password
        });

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

// @route   POST /api/auth/login
// @desc    Login user & get token
app.post('/api/auth/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validate username and password
        if (!username || !password) {
            return res.status(400).json({ success: false, message: 'Please provide username and password' });
        }

        // Check for user
        const user = await User.findOne({ username }).select('+password');

        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        // Check if password matches
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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
