const fs = require('fs');
const path = require('path');

const dir = '/Users/abir/Desktop/SNAPIT';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const newNav = `    <!-- NAVIGATION -->
    <nav class="nav">
        <div class="nav-inner">
            <div class="nav-brand">
                <span class="brand-text">QUIKIE</span>
                <span class="brand-sub">by Ankit</span>
            </div>
            <div class="nav-links">
                <a href="index.html" class="nav-link">Home</a>
                <a href="module1.html" class="nav-link">Module 1</a>
                <a href="module2.html" class="nav-link">Module 2</a>
                <a href="module3.html" class="nav-link">Module 3</a>
                <a href="module4.html" class="nav-link">Module 4</a>
                <a href="diagrams.html" class="nav-link">Diagrams</a>
                <a href="qanda.html" class="nav-link">Q&A</a>
                <a href="revision.html" class="nav-link">Revision</a>
            </div>
        </div>
    </nav>`;

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    content = content.replace(/<!-- NAVIGATION -->[\s\S]*?<\/nav>/, newNav);
    fs.writeFileSync(path.join(dir, file), content);
    console.log(`Updated ${file}`);
});
