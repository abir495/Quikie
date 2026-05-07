/* ═══ LANDING PAGE — 3D Effects, Galaxy BG, Particles ═══ */
(function() {
    if (document.body.getAttribute('data-page') !== 'home') return;

    // ── 1. WEBGL GALAXY BACKGROUND ──
    const canvas = document.getElementById('galaxy-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let w, h, stars = [];
        function resize() {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        // Create stars
        for (let i = 0; i < 200; i++) {
            stars.push({
                x: Math.random() * w,
                y: Math.random() * h,
                r: Math.random() * 1.5 + 0.3,
                speed: Math.random() * 0.3 + 0.05,
                opacity: Math.random() * 0.6 + 0.2,
                pulse: Math.random() * Math.PI * 2
            });
        }

        let mouseX = w / 2, mouseY = h / 2;
        window.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });

        function drawGalaxy() {
            ctx.clearRect(0, 0, w, h);

            // Nebula glow
            const grd = ctx.createRadialGradient(mouseX * 0.3 + w * 0.35, mouseY * 0.3 + h * 0.35, 0, w / 2, h / 2, w * 0.7);
            grd.addColorStop(0, 'rgba(124,109,250,0.03)');
            grd.addColorStop(0.5, 'rgba(0,201,160,0.015)');
            grd.addColorStop(1, 'transparent');
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, w, h);

            // Stars
            const time = Date.now() * 0.001;
            stars.forEach(s => {
                s.y -= s.speed;
                if (s.y < -5) { s.y = h + 5; s.x = Math.random() * w; }
                const flicker = Math.sin(time * 2 + s.pulse) * 0.3 + 0.7;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(200,195,255,${s.opacity * flicker})`;
                ctx.fill();
            });

            // Connecting lines between close stars
            ctx.strokeStyle = 'rgba(124,109,250,0.04)';
            ctx.lineWidth = 0.5;
            for (let i = 0; i < stars.length; i++) {
                for (let j = i + 1; j < stars.length; j++) {
                    const dx = stars[i].x - stars[j].x;
                    const dy = stars[i].y - stars[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(stars[i].x, stars[i].y);
                        ctx.lineTo(stars[j].x, stars[j].y);
                        ctx.globalAlpha = (1 - dist / 100) * 0.3;
                        ctx.stroke();
                        ctx.globalAlpha = 1;
                    }
                }
            }
            requestAnimationFrame(drawGalaxy);
        }
        drawGalaxy();
    }

    // ── 2. FLOATING PARTICLES ──
    const pc = document.getElementById('particles-container');
    if (pc) {
        const colors = ['rgba(124,109,250,0.3)', 'rgba(0,201,160,0.25)', 'rgba(255,107,157,0.2)', 'rgba(255,179,71,0.2)'];
        for (let i = 0; i < 25; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            const size = Math.random() * 4 + 2;
            p.style.cssText = `
                width:${size}px;height:${size}px;
                left:${Math.random()*100}%;top:${Math.random()*100}%;
                background:${colors[Math.floor(Math.random()*colors.length)]};
                animation-duration:${8+Math.random()*10}s;
                animation-delay:${Math.random()*5}s;
            `;
            pc.appendChild(p);
        }
    }

    // ── 3. 3D CARD TILT ON MODULE CARDS ──
    document.querySelectorAll('.module-card').forEach(card => {
        const wrapper = card.querySelector('.card-3d-wrapper');
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cx = rect.width / 2;
            const cy = rect.height / 2;
            const rotX = ((y - cy) / cy) * -12;
            const rotY = ((x - cx) / cx) * 12;
            wrapper.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02,1.02,1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            wrapper.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)';
            wrapper.style.transition = 'transform 0.5s ease';
            setTimeout(() => wrapper.style.transition = '', 500);
        });
        card.addEventListener('mouseenter', () => { wrapper.style.transition = 'none'; });
    });

    // ── 4. PARALLAX TIMELINE CHIPS ON MOUSE ──
    const chips = document.querySelectorAll('.timeline-chip');
    window.addEventListener('mousemove', e => {
        const mx = (e.clientX / window.innerWidth - 0.5) * 2;
        const my = (e.clientY / window.innerHeight - 0.5) * 2;
        chips.forEach(chip => {
            const depth = parseFloat(chip.dataset.depth || 0.3);
            const moveX = mx * depth * 20;
            const moveY = my * depth * 15;
            chip.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });

    // ── 5. ANIMATED COUNTER FOR STATS ──
    const statObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.stat-number').forEach(num => {
                    const target = parseInt(num.dataset.count);
                    const duration = 2000;
                    const start = performance.now();
                    function tick(now) {
                        const progress = Math.min((now - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        num.textContent = Math.floor(eased * target);
                        if (progress < 1) requestAnimationFrame(tick);
                    }
                    requestAnimationFrame(tick);
                });
                statObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    const statsGrid = document.querySelector('.stats-grid');
    if (statsGrid) statObserver.observe(statsGrid);

    // ── 6. NAV BLUR ON SCROLL ──
    const nav = document.getElementById('main-nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(13,13,20,0.85)';
                nav.style.boxShadow = '0 10px 40px rgba(0,0,0,0.6)';
            } else {
                nav.style.background = 'rgba(13,13,20,0.65)';
                nav.style.boxShadow = '0 10px 40px rgba(0,0,0,0.4)';
            }
        });
    }

    // ── 7. SCROLL INDICATOR HIDE ──
    const scrollInd = document.getElementById('scroll-indicator');
    if (scrollInd) {
        window.addEventListener('scroll', () => {
            scrollInd.style.opacity = window.scrollY > 50 ? '0' : '1';
        });
    }

    // ── 8. TOOL CARD 3D TILT ──
    document.querySelectorAll('.tool-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.transform = `translateY(-8px) perspective(600px) rotateX(${-y*10}deg) rotateY(${x*10}deg)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.transition = 'all 0.4s cubic-bezier(.175,.885,.32,1.275)';
        });
        card.addEventListener('mouseenter', () => { card.style.transition = 'none'; });
    });
})();
