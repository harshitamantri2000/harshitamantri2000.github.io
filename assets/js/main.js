/* ================================================
   HARSHITA MANTRI — Portfolio V4 JS
   Scroll reveals + scroll position memory
   ================================================ */

// ── Scroll Reveal ─────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  revealEls.forEach(el => obs.observe(el));
}

// ── 3D Card Tilt ──────────────────────────────────
const tiltCards = document.querySelectorAll('.project-card');
tiltCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.12s ease, box-shadow 0.35s ease';
  });

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -4;
    const rotateY = ((x - cx) / cx) * 4;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.45s ease, box-shadow 0.35s ease';
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  });
});

// ── Scroll Position Memory ────────────────────────
// Save scroll position before leaving the page
window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('scrollPos_' + location.pathname, window.scrollY);
});

// Restore scroll position on load (and instantly reveal elements above)
window.addEventListener('load', () => {
  const saved = sessionStorage.getItem('scrollPos_' + location.pathname);
  if (saved) {
    const y = parseInt(saved, 10);
    // Instantly show all reveal elements so they don't animate on return
    revealEls.forEach(el => {
      if (el.getBoundingClientRect().top + y < window.innerHeight + y) {
        el.classList.add('visible');
      }
    });
    window.scrollTo(0, y);
    sessionStorage.removeItem('scrollPos_' + location.pathname);
  }
});

// ── Case Study Side Nav ───────────────────────────────
(function () {
  const sidenav = document.querySelector('.cs-sidenav');
  if (!sidenav) return; // not a case study page, exit early

  const links = Array.from(sidenav.querySelectorAll('.cs-sidenav-link'));
  const sections = links
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  // — Fade in once cs-body scrolls into view —
  const csBody = document.querySelector('.cs-body');
  if (csBody) {
    const visObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sidenav.classList.add('cs-sidenav--visible');
          visObs.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    visObs.observe(csBody);
  }

  // — Scroll spy: mark the section nearest the top of viewport as active —
  let activeIndex = -1;

  const spyObs = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        const idx = sections.indexOf(entry.target);
        if (idx === -1) return;

        if (entry.isIntersecting) {
          // Find the section with the smallest positive top offset
          let bestIdx = 0;
          let bestTop = Infinity;
          sections.forEach((sec, i) => {
            const top = sec.getBoundingClientRect().top;
            if (top >= 0 && top < bestTop) {
              bestTop = top;
              bestIdx = i;
            }
          });
          if (bestIdx !== activeIndex) {
            if (activeIndex !== -1) links[activeIndex].classList.remove('cs-sidenav-link--active');
            links[bestIdx].classList.add('cs-sidenav-link--active');
            activeIndex = bestIdx;
          }
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60% 0px' }
  );

  sections.forEach(sec => spyObs.observe(sec));

  // — Smooth scroll on click —
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
