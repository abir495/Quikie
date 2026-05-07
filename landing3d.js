/* ═══ PREMIUM 3D ENGINE + SCROLL ANIMATIONS ═══ */
(function(){
  const isHome = document.body.getAttribute('data-page') === 'home';

  // ══════════ 1. STARFIELD CANVAS (Home Only) ══════════
  if (isHome) {
    const c = document.getElementById('galaxy-canvas');
    if (c) {
      const ctx = c.getContext('2d');
      let w, h, stars = [], nebulae = [];
      const resize = () => { w = c.width = window.innerWidth; h = c.height = window.innerHeight; };
      resize(); window.addEventListener('resize', resize);

      for (let i = 0; i < 180; i++) stars.push({
        x: Math.random()*w, y: Math.random()*h,
        r: Math.random()*1.4+0.2, spd: Math.random()*0.25+0.03,
        o: Math.random()*0.5+0.15, ph: Math.random()*6.28
      });

      let mx = w/2, my = h/2;
      window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

      (function draw() {
        ctx.clearRect(0,0,w,h);
        // Nebula
        const g = ctx.createRadialGradient(mx*0.2+w*0.4, my*0.2+h*0.4, 0, w/2, h/2, w*0.65);
        g.addColorStop(0,'rgba(124,109,250,0.025)');
        g.addColorStop(0.4,'rgba(0,212,170,0.012)');
        g.addColorStop(1,'transparent');
        ctx.fillStyle = g; ctx.fillRect(0,0,w,h);

        const t = Date.now()*0.001;
        stars.forEach(s => {
          s.y -= s.spd; if(s.y<-2){s.y=h+2;s.x=Math.random()*w;}
          const fl = Math.sin(t*1.5+s.ph)*0.35+0.65;
          ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,6.28);
          ctx.fillStyle = `rgba(210,205,255,${s.o*fl})`; ctx.fill();
        });

        // Connections
        ctx.lineWidth = 0.4;
        for(let i=0;i<stars.length;i++)for(let j=i+1;j<stars.length;j++){
          const dx=stars[i].x-stars[j].x, dy=stars[i].y-stars[j].y, d=Math.sqrt(dx*dx+dy*dy);
          if(d<90){ctx.strokeStyle=`rgba(124,109,250,${(1-d/90)*0.08})`;ctx.beginPath();ctx.moveTo(stars[i].x,stars[i].y);ctx.lineTo(stars[j].x,stars[j].y);ctx.stroke();}
        }
        requestAnimationFrame(draw);
      })();
    }

    // Particles
    const pc = document.getElementById('particles-container');
    if (pc) {
      const cols = ['rgba(124,109,250,0.25)','rgba(0,212,170,0.2)','rgba(255,107,157,0.18)','rgba(255,179,71,0.15)'];
      for(let i=0;i<30;i++){
        const p=document.createElement('div');p.className='particle';
        const sz=Math.random()*4+1.5;
        p.style.cssText=`width:${sz}px;height:${sz}px;left:${Math.random()*100}%;top:${Math.random()*100}%;background:${cols[i%4]};--dur:${7+Math.random()*12}s;animation-delay:${Math.random()*6}s;`;
        pc.appendChild(p);
      }
    }
  }

  // ══════════ 2. SCROLL-BASED REVEAL ANIMATIONS (ALL PAGES) ══════════
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e,i) => {
      if (e.isIntersecting) {
        // Stagger children if it's a grid
        if (e.target.classList.contains('modules-grid') || e.target.classList.contains('tools-grid') || e.target.classList.contains('home-grid')) {
          e.target.querySelectorAll('.module-card,.tool-card,.home-card').forEach((child,idx) => {
            child.style.transitionDelay = `${idx*120}ms`;
            child.classList.add('fade-in-up','visible');
          });
        }
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, {threshold:0.08, rootMargin:'0px 0px -40px 0px'});

  document.querySelectorAll('.fade-in-up,.fade-in-left,.scale-in,.modules-grid,.tools-grid,.home-grid,#topic-container').forEach(el => obs.observe(el));

  // ══════════ 3. TOPIC CARD STAGGER ON SCROLL (Module Pages) ══════════
  const topicObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        topicObs.unobserve(e.target);
      }
    });
  }, {threshold:0.05, rootMargin:'0px 0px -20px 0px'});

  // Observe after a tick (content is rendered by script.js)
  setTimeout(() => {
    document.querySelectorAll('.topic-card,.qa-card,.tl-item,.glos-item').forEach((el,i) => {
      el.classList.add('fade-in-up');
      el.style.transitionDelay = `${Math.min(i*60,600)}ms`;
      topicObs.observe(el);
    });
  }, 100);

  // ══════════ 4. 3D TILT ON MODULE CARDS (Home) ══════════
  if (isHome) {
    document.querySelectorAll('.module-card').forEach(card => {
      const wr = card.querySelector('.card-3d-wrapper');
      card.addEventListener('mousemove', e => {
        const r=card.getBoundingClientRect(), x=e.clientX-r.left, y=e.clientY-r.top;
        const rx=((y-r.height/2)/r.height)*-14, ry=((x-r.width/2)/r.width)*14;
        wr.style.transition='none';
        wr.style.transform=`perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.03,1.03,1.03)`;
      });
      card.addEventListener('mouseleave',()=>{wr.style.transition='transform 0.6s cubic-bezier(.175,.885,.32,1.275)';wr.style.transform='';});
    });

    // Tool card tilt
    document.querySelectorAll('.tool-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r=card.getBoundingClientRect();
        const x=(e.clientX-r.left)/r.width-0.5, y=(e.clientY-r.top)/r.height-0.5;
        card.style.transition='none';
        card.style.transform=`translateY(-10px) perspective(600px) rotateX(${-y*12}deg) rotateY(${x*12}deg) scale(1.02)`;
      });
      card.addEventListener('mouseleave',()=>{card.style.transition='all 0.5s cubic-bezier(.175,.885,.32,1.275)';card.style.transform='';});
    });

    // Parallax timeline chips
    const chips = document.querySelectorAll('.timeline-chip');
    window.addEventListener('mousemove', e => {
      const mx=(e.clientX/window.innerWidth-0.5)*2, my=(e.clientY/window.innerHeight-0.5)*2;
      chips.forEach(ch => {
        const d=parseFloat(ch.dataset.depth||0.3);
        ch.style.transform=`translate(${mx*d*25}px,${my*d*18}px)`;
      });
    });

    // Animated stat counters
    const sObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if(e.isIntersecting){
          e.target.querySelectorAll('.stat-number').forEach(n => {
            const target=parseInt(n.dataset.count), start=performance.now();
            (function tick(now){
              const p=Math.min((now-start)/2200,1), eased=1-Math.pow(1-p,4);
              n.textContent=Math.floor(eased*target);
              if(p<1)requestAnimationFrame(tick);
            })(start);
          });
          sObs.unobserve(e.target);
        }
      });
    },{threshold:0.5});
    const sg=document.querySelector('.stats-grid'); if(sg)sObs.observe(sg);

    // Scroll indicator fade
    const si=document.getElementById('scroll-indicator');
    if(si) window.addEventListener('scroll',()=>{si.style.opacity=window.scrollY>60?'0':'1';},{passive:true});
  }

  // ══════════ 5. NAV SCROLL EFFECT (ALL PAGES) ══════════
  const nav = document.querySelector('.nav');
  if(nav){
    let lastScroll = 0;
    window.addEventListener('scroll',()=>{
      const y = window.scrollY;
      nav.classList.toggle('scrolled', y > 80);
      // Hide nav on scroll down, show on scroll up
      if (y > lastScroll && y > 200) nav.style.transform = 'translateY(-120%)';
      else nav.style.transform = 'translateY(0)';
      lastScroll = y;
    },{passive:true});
  }

  // ══════════ 6. CUSTOM CURSOR (ALL PAGES) ══════════
  if (window.matchMedia('(hover:hover)').matches) {
    const dot = document.createElement('div'); dot.className='cursor-dot';
    const ring = document.createElement('div'); ring.className='cursor-ring';
    document.body.appendChild(dot); document.body.appendChild(ring);

    let cx=0,cy=0,rx=0,ry=0;
    window.addEventListener('mousemove',e=>{cx=e.clientX;cy=e.clientY;dot.style.left=cx+'px';dot.style.top=cy+'px';});
    (function loop(){rx+=(cx-rx)*0.12;ry+=(cy-ry)*0.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(loop);})();

    document.addEventListener('mouseover',e=>{
      if(e.target.closest('a,button,.nav-link,.topic-head,.qa-card,.module-card,.tool-card,.pill,.timeline-chip,.glass-avatar,.glass-btn,.hero-cta-primary,.hero-cta-secondary'))
        document.body.classList.add('cursor-hover');
    });
    document.addEventListener('mouseout',e=>{
      if(e.target.closest('a,button,.nav-link,.topic-head,.qa-card,.module-card,.tool-card,.pill,.timeline-chip,.glass-avatar,.glass-btn,.hero-cta-primary,.hero-cta-secondary'))
        document.body.classList.remove('cursor-hover');
    });
  }

  // ══════════ 7. SMOOTH PAGE TRANSITION ══════════
  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (href && href.endsWith('.html') && !href.startsWith('http')) {
      a.addEventListener('click', e => {
        e.preventDefault();
        document.body.style.opacity = '0';
        document.body.style.transform = 'scale(0.98)';
        document.body.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
        setTimeout(() => window.location.href = href, 350);
      });
    }
  });

  // Page enter animation
  document.body.style.opacity = '0';
  document.body.style.transform = 'scale(0.98)';
  requestAnimationFrame(() => {
    document.body.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    document.body.style.opacity = '1';
    document.body.style.transform = 'scale(1)';
  });

  // ══════════ 8. MAGNETIC BUTTONS ══════════
  document.querySelectorAll('.hero-cta-primary,.hero-cta-secondary,.nav-link,.glass-avatar,.glass-btn').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r=el.getBoundingClientRect();
      const x=e.clientX-r.left-r.width/2, y=e.clientY-r.top-r.height/2;
      el.style.transform=`translate(${x*0.25}px,${y*0.25}px)`;
    });
    el.addEventListener('mouseleave',()=>{el.style.transform='';el.style.transition='transform 0.4s cubic-bezier(.175,.885,.32,1.275)';});
    el.addEventListener('mouseenter',()=>{el.style.transition='none';});
  });

})();
