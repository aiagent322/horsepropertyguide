(function(){
  const path = window.location.pathname;
  const links = [
    { href: '/agents/', label: 'Find an Agent' },
    { href: '/qa/usda-loan-horse-property.html', label: 'Financing' },
    { href: '/qa/zoning-that-allows-horses.html', label: 'Zoning' },
    { href: '/guides/horse-property-red-flags.html', label: 'Guides' },
    { href: '/glossary/water-rights.html', label: 'Glossary' },
  ];

  const liItems = links.map(l => {
    const active = path.startsWith(l.href.replace(/\/[^/]+\.html$/, '')) ? ' class="active"' : '';
    return '<li><a href="' + l.href + '"' + active + '>' + l.label + '</a></li>';
  }).join('');

  const navEl = document.createElement('nav');
  navEl.id = 'site-nav';
  navEl.innerHTML =
    '<div class="nav-inner">' +
      '<a href="/" class="nav-logo">HorsePropertyGuide.com</a>' +
      '<button class="nav-toggle" id="nav-btn" aria-label="Menu"><span></span><span></span><span></span></button>' +
      '<ul class="nav-links">' + liItems + '</ul>' +
    '</div>';

  const style = document.createElement('style');
  style.textContent = `
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
  .nav-logo { font-size: .82rem; }
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
}
  `;

  document.head.appendChild(style);
  document.body.insertBefore(navEl, document.body.firstChild);

  document.getElementById('nav-btn').addEventListener('click', function() {
    document.getElementById('site-nav').classList.toggle('open');
  });
  document.addEventListener('click', function(e) {
    const nav = document.getElementById('site-nav');
    if (nav && !nav.contains(e.target)) nav.classList.remove('open');
  });
})();
