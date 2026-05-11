(function(){
  const path = window.location.pathname;
  const links = [
    { href: '/',         label: 'Find an Agent' },
    { href: '/agents/',  label: 'All Agents' },
    { href: '/learn/',   label: 'Buyer Guides' },
    { href: 'https://horsepropertyguide.com/guides/', label: 'Horse Property Guide', external: true },
    { href: 'https://bridleandbit.com', label: 'Bridle & Bit', external: true },
  ];

  // Build nav HTML
  const liItems = links.map(l => {
    const active = !l.external && (path === l.href || (l.href !== '/' && path.startsWith(l.href))) ? ' class="active"' : '';
    const ext = l.external ? ' target="_blank" rel="noopener"' : '';
    return '<li><a href="' + l.href + '"' + ext + active + '>' + l.label + '</a></li>';
  }).join('');

  const navEl = document.createElement('nav');
  navEl.id = 'site-nav';
  navEl.innerHTML =
    '<div class="nav-inner">' +
      '<a href="/" class="nav-logo">HorsePropertyAgents.com</a>' +
      '<button class="nav-toggle" aria-label="Menu" id="nav-btn"><span></span><span></span><span></span></button>' +
      '<ul class="nav-links">' + liItems + '</ul>' +
      '<a href="https://www.bridleandbit.com" target="_blank" rel="noopener" class="bb-nav-logo"><img src="https://imagedelivery.net/9VlM7Y9GaQMXOu5Ypg50yA/bb-hp-0/public" alt="Bridle &amp; Bit Magazine" height="34"></a>' +
    '</div>';

  const style = document.createElement('style');
  style.textContent = `
#site-nav {
  background: #0b3c5d;
  position: sticky; top: 0; z-index: 200;
  border-bottom: 1px solid rgba(0,0,0,.15);
  box-shadow: 0 1px 4px rgba(0,0,0,.12);
}
.nav-inner {
  max-width: 1200px; margin: 0 auto;
  display: flex; align-items: center;
  padding: 0 16px; height: 54px; gap: 8px;
}
.nav-logo {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: .9rem; font-weight: 700;
  color: #fff; text-decoration: none;
  letter-spacing: .01em; flex-shrink: 0;
  margin-right: 12px; white-space: nowrap;
}
.nav-links {
  list-style: none; display: flex; gap: 2px;
  margin: 0; padding: 0; margin-left: auto;
}
.nav-links a {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: .8rem; font-weight: 400;
  color: rgba(255,255,255,.85);
  text-decoration: none;
  padding: 7px 11px; border-radius: 3px;
  transition: background .15s, color .15s;
  white-space: nowrap; display: block;
}
.nav-links a:hover { background: rgba(255,255,255,.12); color: #fff; }
.nav-links a.active { color: #fff; font-weight: 700; }
.nav-links li:last-child a {
  background: rgba(255,255,255,.15);
  font-weight: 700; color: #fff;
}
.nav-links li:last-child a:hover { background: rgba(255,255,255,.25); }
.nav-toggle {
  display: none; flex-direction: column; justify-content: center; gap: 5px;
  background: none; border: none; cursor: pointer;
  padding: 10px 8px; margin-left: auto; min-height: 44px; min-width: 44px;
}
.nav-toggle span {
  display: block; width: 22px; height: 2px;
  background: rgba(255,255,255,.85); border-radius: 2px;
  transition: background .2s;
}
.nav-toggle:hover span { background: #fff; }
@media (max-width: 768px) {
  .nav-logo { font-size: .82rem; }
  .nav-toggle { display: flex; }
  .nav-links {
    display: none; position: absolute;
    top: 54px; left: 0; right: 0;
    background: #0b3c5d; flex-direction: column;
    gap: 0; border-top: 1px solid rgba(255,255,255,.1);
    padding: 6px 0; box-shadow: 0 4px 16px rgba(0,0,0,.25);
    z-index: 199;
  }
  #site-nav.open .nav-links { display: flex; }
  .nav-links a { padding: 13px 20px; border-radius: 0; font-size: .88rem; }
  .nav-links li:last-child a { background: none; }
}
@media (min-width: 769px) {
  .nav-inner { padding: 0 24px; }
}
.bb-nav-logo { display:none; align-items:center; line-height:0; margin-left:12px; flex-shrink:0; }
@media (min-width: 769px) { .bb-nav-logo { display:flex; } }
  `;

  // Insert into page
  document.head.appendChild(style);
  document.body.insertBefore(navEl, document.body.firstChild);

  // Hamburger toggle
  document.getElementById('nav-btn').addEventListener('click', function() {
    document.getElementById('site-nav').classList.toggle('open');
  });

  // Close on outside click
  document.addEventListener('click', function(e) {
    const nav = document.getElementById('site-nav');
    if (nav && !nav.contains(e.target)) nav.classList.remove('open');
  });
})();
