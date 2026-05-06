document.addEventListener('DOMContentLoaded', () => {
    const pageType = document.body.getAttribute('data-page');

    // PROTECT ROUTES: Home is public, everything else requires login
    const token = localStorage.getItem('quikieToken');
    if (!token && pageType !== 'home' && window.location.pathname !== '/login.html' && window.location.pathname !== '/') {
        window.location.href = 'login.html';
        return;
    }

    // Show username dynamically on Home Page instead of Nav
    const user = localStorage.getItem('quikieUser');
    if (user && pageType === 'home') {
        const homeTitle = document.querySelector('.home-title');
        if (homeTitle) {
            // Capitalize first letter of user
            const userName = user.charAt(0).toUpperCase() + user.slice(1);
            homeTitle.textContent = `Welcome ${userName}, to your Study Guide`;
        }
        
        const homeSub = document.querySelector('.home-sub');
        if (homeSub) {
            homeSub.innerHTML = `<em>"The beautiful thing about learning is nobody can take it away from you."</em><br><br>Select a resource below or dive into a module from the navigation bar.`;
        }
    }

    // Add Login/Logout button to Navigation
    const navInner = document.querySelector('.nav-inner');
    if (navInner) {
        // Remove the old button logic from nav-links if any
        const oldBtn = document.querySelector('.nav-links .nav-link[href="login.html"]');
        if (oldBtn) oldBtn.remove();
        
        const authContainer = document.createElement('div');
        authContainer.className = 'auth-avatar-container';
        
        if (token && user) {
            authContainer.innerHTML = `
                <a href="#" id="logout-btn" class="glass-avatar" title="Logout">
                    ${user.charAt(0).toUpperCase()}
                </a>
            `;
            navInner.appendChild(authContainer);
            
            document.getElementById('logout-btn').addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.removeItem('quikieToken');
                localStorage.removeItem('quikieUser');
                window.location.reload();
            });
        } else {
            authContainer.innerHTML = `
                <a href="login.html" class="glass-btn">Login</a>
            `;
            navInner.appendChild(authContainer);
        }
    }

    if (pageType === 'm1' || pageType === 'm2' || pageType === 'm3' || pageType === 'm4') {
        renderSpecificModule(pageType);
    } else if (pageType === 'diagrams') {
        renderDiagrams();
    } else if (pageType === 'qanda') {
        renderQandA();
    } else if (pageType === 'revision') {
        renderTimeline();
        renderGlossary();
    }

    setupInteractions(pageType);
});

function renderSpecificModule(moduleId) {
    const container = document.getElementById('module-container');
    if (!container) return;
    
    let html = '';
    const mod = courseData.modules.find(m => m.id === moduleId);
    
    if (mod) {
        html += `
            <section class="sec ${moduleId}">
                <div class="mod-head">
                    <span class="mod-tag">${mod.number}</span>
                    <h2 class="mod-title">${mod.title}</h2>
                </div>
        `;

        mod.topics.forEach(topic => {
            const priorityClass = topic.priority === 'high' ? 'pri-high' 
                                : topic.priority === 'medium' ? 'pri-med' 
                                : 'pri-bg';
            
            html += `
                <div class="topic-card fade-in-up">
                    <div class="topic-head">
                        <div class="topic-icon">📚</div>
                        <div class="topic-name">${topic.title}</div>
                        <span class="pri-badge ${priorityClass}">${topic.priority}</span>
                        <div class="chev">↓</div>
                    </div>
                    <div class="topic-body">
                        <div class="topic-inner">
                            ${topic.content}
                        </div>
                    </div>
                </div>
            `;
        });

        html += `</section>`;
    }
    container.innerHTML = html;
}

function renderDiagrams() {
    const container = document.getElementById('diagrams-container');
    if (!container) return;
    
    let html = '';
    if (courseData.diagrams && courseData.diagrams.length > 0) {
        courseData.diagrams.forEach((diag) => {
            html += `
                <div class="topic-card fade-in-up">
                    <div class="topic-head">
                        <div class="topic-icon">📊</div>
                        <div class="topic-name">${diag.title}</div>
                        <div class="chev">↓</div>
                    </div>
                    <div class="topic-body">
                        <div class="topic-inner">
                            <p class="prose" style="margin-bottom: 1.5rem;"><em>${diag.description}</em></p>
                            <div class="diagram-wrapper">
                                ${diag.htmlOverride ? diag.htmlOverride : `<div class="mermaid">${diag.mermaid}</div>`}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    container.innerHTML = html;
}

function renderQandA() {
    const container = document.getElementById('qa-container');
    if (!container) return;
    
    let html = '';
    if (courseData.qanda) {
        courseData.qanda.forEach(qa => {
            html += `
                <div class="qa-card fade-in-up">
                    <div class="qa-q-row">
                        <div class="qa-q-icon">Q</div>
                        <div class="qa-q-text">${qa.q}</div>
                        <span class="marks m${qa.marks}">${qa.marks} Marks</span>
                    </div>
                    <div class="qa-ans">
                        <div class="qa-ans-inner">${qa.a}</div>
                    </div>
                </div>
            `;
        });
    }
    container.innerHTML = html;
}

function renderTimeline() {
    const container = document.getElementById('timeline-container');
    if (!container) return;
    
    let html = '';
    if (courseData.timeline) {
        courseData.timeline.forEach(item => {
            html += `
                <div class="tl-item fade-in-up">
                    <div class="tl-date">${item.date}</div>
                    <div class="tl-event">${item.event}</div>
                    <div class="tl-desc">${item.desc}</div>
                </div>
            `;
        });
    }
    container.innerHTML = html;
}

function renderGlossary() {
    const container = document.getElementById('glossary-grid');
    if (!container) return;
    
    let html = '';
    if (courseData.glossary) {
        courseData.glossary.forEach(item => {
            html += `
                <div class="glos-item fade-in-up">
                    <div class="glos-term">${item.term}</div>
                    <div class="glos-def">${item.def}</div>
                </div>
            `;
        });
    }
    container.innerHTML = html;
}

function setupInteractions(pageType) {
    // Topic Accordion
    document.querySelectorAll('.topic-head').forEach(head => {
        head.addEventListener('click', () => {
            const card = head.parentElement;
            const isOpen = card.classList.contains('open');
            if (!isOpen) card.classList.add('open');
            else card.classList.remove('open');
        });
    });

    // Q&A Accordion
    document.querySelectorAll('.qa-q-row').forEach(q => {
        q.addEventListener('click', () => {
            const card = q.parentElement;
            const isOpen = card.classList.contains('open');
            if (!isOpen) card.classList.add('open');
            else card.classList.remove('open');
        });
    });

    // Highlight active nav link based on current page
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        let expectedHref = `${pageType}.html`;
        if (pageType === 'home') expectedHref = 'index.html';
        if (pageType === 'm1') expectedHref = 'module1.html';
        if (pageType === 'm2') expectedHref = 'module2.html';
        if (pageType === 'm3') expectedHref = 'module3.html';
        if (pageType === 'm4') expectedHref = 'module4.html';
        
        if (link.getAttribute('href') === expectedHref) {
            link.classList.add('active');
        }
    });

    // Advanced Staggered Scroll Animations
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // If it's a grid container, stagger the children
                if (entry.target.classList.contains('home-grid') || entry.target.id === 'topic-container') {
                    const children = entry.target.querySelectorAll('.home-card, .topic-card');
                    children.forEach((child, index) => {
                        child.style.transitionDelay = `${index * 100}ms`;
                        child.classList.add('fade-in-up', 'visible');
                    });
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up, .home-grid, #topic-container').forEach(el => observer.observe(el));
    
    setupAdvancedAnimations();
}

function setupAdvancedAnimations() {
    // 1. Custom Glowing Cursor
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    const cursorRing = document.createElement('div');
    cursorRing.className = 'cursor-ring';
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorRing);

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    });

    // Smooth trailing ring loop
    function animateCursor() {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        cursorRing.style.left = `${ringX}px`;
        cursorRing.style.top = `${ringY}px`;
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover Magnet Effect
    const interactables = document.querySelectorAll('a, button, .nav-link, .home-card, .qa-card, .topic-head');
    interactables.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });

    // 2. Parallax & Interactive Liquid Background for Orbs
    const orbs = document.querySelectorAll('.orb');
    let scrollY = 0;
    window.addEventListener('scroll', () => scrollY = window.scrollY);
    
    // Orb physics
    function animateOrbs() {
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 0.1;
            const rect = orb.getBoundingClientRect();
            const orbCenterX = rect.left + rect.width / 2;
            const orbCenterY = rect.top + rect.height / 2;
            
            // Calculate distance from mouse
            const dx = mouseX - orbCenterX;
            const dy = mouseY - orbCenterY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            // Repel force if mouse is close
            let repelX = 0, repelY = 0;
            if (dist < 400) {
                const force = (400 - dist) / 400;
                repelX = -(dx / dist) * force * 50;
                repelY = -(dy / dist) * force * 50;
            }
            
            orb.style.transform = `translate3d(${repelX}px, ${scrollY * speed + repelY}px, 0)`;
        });
        requestAnimationFrame(animateOrbs);
    }
    animateOrbs();

    // 3. True 3D Tilt Effect and Dynamic Glare on Cards
    const cards = document.querySelectorAll('.home-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Set CSS variables for dynamic glare gradient
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
            
            const rotateX = ((y - centerY) / centerY) * -15; // Increased for more 3D pop
            const rotateY = ((x - centerX) / centerX) * 15;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });

    // 4. Magnetic Buttons (Hero pills and Nav links)
    const magnets = document.querySelectorAll('.hero-pill, .nav-link, .glass-avatar, .glass-btn, .magnet-btn');
    magnets.forEach(magnet => {
        magnet.addEventListener('mousemove', (e) => {
            const rect = magnet.getBoundingClientRect();
            const h = rect.width / 2;
            const v = rect.height / 2;
            const x = e.clientX - rect.left - h;
            const y = e.clientY - rect.top - v;
            
            // Pull the button towards the cursor
            magnet.style.transform = `translate3d(${x * 0.3}px, ${y * 0.3}px, 0)`;
        });
        
        magnet.addEventListener('mouseleave', () => {
            magnet.style.transform = ''; // Reset to CSS default
        });
    });

    // 5. Cinematic Text Reveal (Hero h1)
    const heroH1 = document.querySelector('.hero h1');
    if (heroH1 && !heroH1.classList.contains('revealed')) {
        heroH1.classList.add('revealed');
        // WebKit has a bug where background-clip:text disappears if children have transforms.
        // We removed the letter splitting to preserve the beautiful gradient.
        // The animation is now handled globally on the h1 via CSS.
    }
}
