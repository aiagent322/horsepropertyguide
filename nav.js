(function(){
  const path = window.location.pathname;
  const links = [
    { href: '/markets/', label: 'Markets' },
    { href: '/financing/', label: 'Financing' },
    { href: '/guides/', label: 'Guides' },
    { href: '/qa/', label: 'Q&A' },
    { href: '/glossary/', label: 'Glossary' },
    { href: '/agents/', label: 'Find an Agent' },
  ];

  const liItems = links.map(l => {
    const active = !l.external && path.startsWith(l.href.replace(/\/[^/]+\.html$/, '')) ? ' class="active"' : '';
    const ext = l.external ? ' target="_blank" rel="noopener"' : '';
    return '<li><a href="' + l.href + '"' + ext + active + '>' + l.label + '</a></li>';
  }).join('');

  const navEl = document.createElement('nav');
  navEl.id = 'site-nav';
  navEl.innerHTML =
    '<div class="nav-inner">' +
      '<a href="/" class="nav-logo"><span class="logo-full">HorsePropertyGuide.com</span><span class="logo-short">Horse Property</span></a>' +
      '<button class="nav-toggle" id="nav-btn" aria-label="Menu"><span></span><span></span><span></span></button>' +
      '<ul class="nav-links">' + liItems + '</ul>' +
    '</div>';

  const style = document.createElement('style');
  style.textContent = `
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; overflow-x: hidden; }
#site-nav {
  background: #2c5f2e;
  position: sticky; top: 0; z-index: 200;
  border-bottom: 1px solid rgba(0,0,0,.15);
  box-shadow: 0 1px 4px rgba(0,0,0,.12);
}
.nav-inner {
  max-width: 960px; margin: 0 auto;
  display: flex; align-items: center;
  padding: 0 16px; height: 50px;
}
.nav-logo {
  font-family: Georgia, serif;
  font-size: .95rem; font-weight: 700;
  color: #fff; text-decoration: none;
  flex-shrink: 0; margin-right: 12px;
  white-space: nowrap;
}
.nav-links {
  list-style: none; display: flex;
  gap: 2px; margin: 0; padding: 0; margin-left: auto;
}
.nav-links a {
  font-family: Georgia, serif;
  font-size: .85rem; color: rgba(255,255,255,.85);
  text-decoration: none; padding: 7px 11px;
  border-radius: 3px; white-space: nowrap; display: block;
  transition: background .15s, color .15s;
}
.nav-links a:hover { background: rgba(255,255,255,.12); color: #fff; }
.nav-links a.active { color: #fff; font-weight: 700; }
.nav-links li:first-child a {
  background: #8b5e3c; color: #fff; font-weight: 700;
}
.nav-links li:first-child a:hover { background: #a06b44; }
.nav-toggle {
  display: none; flex-direction: column;
  justify-content: center; gap: 5px;
  background: none; border: none; cursor: pointer;
  padding: 10px 6px; margin-left: auto;
  min-height: 44px; min-width: 44px;
}
.nav-toggle span {
  display: block; width: 22px; height: 2px;
  background: rgba(255,255,255,.85); border-radius: 2px;
}
@media (max-width: 640px) {
  .nav-logo { font-size: .9rem; }
  .logo-full { display: none; }
  .logo-short { display: inline; }
  .nav-toggle { display: flex; }
  .nav-links {
    display: none; position: absolute;
    top: 50px; left: 0; right: 0;
    background: #2c5f2e; flex-direction: column;
    gap: 0; border-top: 1px solid rgba(255,255,255,.1);
    padding: 6px 0; box-shadow: 0 4px 16px rgba(0,0,0,.2);
    z-index: 199;
  }
  #site-nav.open .nav-links { display: flex; }
  .nav-links a { padding: 13px 20px; border-radius: 0; font-size: 1rem; }
  .nav-links li:first-child a { background: none; color: #fff; font-weight: 700; }
}
@media (min-width: 641px) {
  .nav-inner { padding: 0 24px; }
  .logo-short { display: none; }
}
/* Page main container */
.page-main {
  max-width: 700px;
  margin: 20px auto;
  font-family: Georgia, serif;
  line-height: 1.7;
  padding: 0 16px;
}

/* Content list items — touch-friendly minimum height */
.page-main ul li {
  padding: 6px 0;
  min-height: 44px;
  display: flex;
  align-items: center;
}

/* Override for related links which have their own styling */
h2.related-heading + ul li {
  padding: 13px 0;
  min-height: 44px;
  display: flex;
  align-items: center;
}

/* Mobile H1 — long market page titles need reduction */
@media (max-width: 480px) {
  .page-main h1 {
    font-size: 1.35em;
    line-height: 1.3;
  }
}

/* Content page H1 top spacing — excludes homepage via section wrapper */
main > h1 {
  margin-top: 20px;
}

/* Content page H2 spacing — Key Takeaways, Key Points, Key Risks */
main h2:not(.related-heading) {
  margin-top: 36px;
  padding-top: 4px;
}

/* Related section styling — scoped to .related-heading class only */
h2.related-heading {
  margin-top: 32px;
  padding-top: 16px;
  border-top: 2px solid #e8e0d8;
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #666;
}
h2.related-heading + ul {
  list-style: none;
  padding-left: 0;
  margin-top: 10px;
}
h2.related-heading + ul li {
  border-bottom: 1px solid #eee;
  padding: 13px 0;
  min-height: 44px;
  display: flex;
  align-items: center;
}
h2.related-heading + ul li:last-child {
  border-bottom: none;
}
h2.related-heading + ul li a {
  color: #2c5f2e;
  text-decoration: none;
  font-size: 0.97em;
}
h2.related-heading + ul li a:hover {
  text-decoration: underline;
}
  `;

  document.head.appendChild(style);

  // Fix 6: robots meta
  const robots = document.createElement('meta');
  robots.name = 'robots';
  robots.content = 'index, follow';
  document.head.appendChild(robots);

  // Fix 9: canonical tag
  const canonical = document.createElement('link');
  canonical.rel = 'canonical';
  canonical.href = window.location.origin + window.location.pathname;
  document.head.appendChild(canonical);

  document.body.insertBefore(navEl, document.body.firstChild);

  document.getElementById('nav-btn').addEventListener('click', function() {
    document.getElementById('site-nav').classList.toggle('open');
  });
  document.addEventListener('click', function(e) {
    const nav = document.getElementById('site-nav');
    if (nav && !nav.contains(e.target)) nav.classList.remove('open');
  });
})();
