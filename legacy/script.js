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
            card.classList.toggle('open');
        });
    });

    // Q&A Accordion
    document.querySelectorAll('.qa-q-row').forEach(q => {
        q.addEventListener('click', () => {
            q.parentElement.classList.toggle('open');
        });
    });

    // Highlight active nav link
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
}
