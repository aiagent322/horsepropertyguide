(function(){
  const path = window.location.pathname;

  const primary = [
    { href: '/markets/', label: 'Markets' },
    { href: '/financing/', label: 'Financing' },
    { href: '/guides/', label: 'Guides' },
    { href: '/qa/', label: 'Q&A' },
    { href: '/glossary/', label: 'Glossary' },
    { href: 'https://www.horsepropertyagents.com', label: 'Find an Agent' },
  ];

  const secondary = [
    { href: '/guides/horse-property-wells.html', label: 'Wells' },
    { href: '/guides/horse-property-red-flags.html', label: 'Red Flags' },
    { href: '/guides/horse-property-survey.html', label: 'Surveys' },
    { href: '/guides/horse-property-outbuildings.html', label: 'Outbuildings' },
    { href: '/financing/usda-loans.html', label: 'USDA Loans' },
    { href: '/financing/conventional-loans.html', label: 'Conventional Loans' },
    { href: '/financing/mortgage-brokers.html', label: 'Mortgage Brokers' },
    { href: '/qa/zoning-that-allows-horses.html', label: 'Zoning' },
    { href: '/qa/horses-per-acre-arizona.html', label: 'Horses Per Acre' },
    { href: '/qa/usda-loan-horse-property.html', label: 'USDA Q&A' },
  ];

  function makeLinks(arr) {
    return arr.map(function(l) {
      var active = (path === l.href) ? ' class="active"' : '';
      return '<li><a href="' + l.href + '"' + active + '>' + l.label + '</a></li>';
    }).join('');
  }

  var allLinks = primary.concat(secondary);
  var mobileItems = allLinks.map(function(l) {
    var active = (path === l.href) ? ' class="active"' : '';
    return '<li><a href="' + l.href + '"' + active + '>' + l.label + '</a></li>';
  }).join('');

  var navEl = document.createElement('nav');
  navEl.id = 'site-nav';
  navEl.innerHTML =
    '<div class="nav-inner">' +
      '<a href="/" class="nav-logo"><span class="logo-full">HorsePropertyGuide.com</span><span class="logo-short">Horse Property</span></a>' +
      '<button class="nav-toggle" id="nav-btn" aria-label="Menu"><span></span><span></span><span></span></button>' +
      '<ul class="nav-links nav-primary">' + makeLinks(primary) + '</ul>' +
    '</div>' +
    '<div class="nav-secondary-bar">' +
      '<ul class="nav-links nav-secondary">' + makeLinks(secondary) + '</ul>' +
    '</div>' +
    '<ul class="nav-mobile-menu">' + mobileItems + '</ul>';

  var style = document.createElement('style');
  style.textContent = [
    '*, *::before, *::after { box-sizing: border-box; }',
    'body { margin: 0; overflow-x: hidden; }',
    '#site-nav { background: #2c5f2e; position: sticky; top: 0; z-index: 200; border-bottom: 2px solid rgba(0,0,0,.18); box-shadow: 0 2px 6px rgba(0,0,0,.14); }',
    '.nav-inner { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; padding: 0 16px; height: 46px; }',
    '.nav-logo { font-family: Georgia,serif; font-size: .95rem; font-weight: 700; color: #fff; text-decoration: none; flex-shrink: 0; margin-right: 16px; white-space: nowrap; }',
    '.nav-links { list-style: none; display: flex; gap: 2px; margin: 0; padding: 0; }',
    '.nav-primary { margin-left: auto; }',
    '.nav-links a { font-family: Georgia,serif; font-size: .82rem; color: rgba(255,255,255,.88); text-decoration: none; padding: 6px 10px; border-radius: 3px; white-space: nowrap; display: block; transition: background .15s,color .15s; }',
    '.nav-links a:hover { background: rgba(255,255,255,.13); color: #fff; }',
    '.nav-links a.active { color: #fff; font-weight: 700; background: rgba(255,255,255,.1); }',
    '.nav-primary li:last-child a { background: #8b5e3c; color: #fff; font-weight: 700; padding: 6px 12px; }',
    '.nav-primary li:last-child a:hover { background: #a06b44; }',
    '.nav-secondary-bar { background: rgba(0,0,0,.18); border-top: 1px solid rgba(255,255,255,.08); }',
    '.nav-secondary { max-width: 1400px; margin: 0 auto; padding: 0 16px; flex-wrap: wrap; gap: 0; }',
    '.nav-secondary a { font-size: .78rem; padding: 5px 9px; color: rgba(255,255,255,.75); }',
    '.nav-secondary a:hover { color: #fff; }',
    '.nav-toggle { display: none; flex-direction: column; justify-content: center; gap: 5px; background: none; border: none; cursor: pointer; padding: 10px 6px; margin-left: auto; min-height: 44px; min-width: 44px; }',
    '.nav-toggle span { display: block; width: 22px; height: 2px; background: rgba(255,255,255,.85); border-radius: 2px; }',
    '.nav-mobile-menu { display: none; list-style: none; margin: 0; padding: 6px 0; background: #2c5f2e; border-top: 1px solid rgba(255,255,255,.1); box-shadow: 0 4px 16px rgba(0,0,0,.2); }',
    '.nav-mobile-menu a { display: block; padding: 13px 20px; font-family: Georgia,serif; font-size: 1rem; color: rgba(255,255,255,.9); text-decoration: none; border-bottom: 1px solid rgba(255,255,255,.06); }',
    '.nav-mobile-menu a:hover { background: rgba(255,255,255,.08); color: #fff; }',
    '.nav-mobile-menu a.active { color: #fff; font-weight: 700; }',
    '@media (max-width: 640px) { .nav-logo { font-size: .9rem; } .logo-full { display: none; } .logo-short { display: inline; } .nav-toggle { display: flex; } .nav-primary { display: none; } .nav-secondary-bar { display: none; } #site-nav.open .nav-mobile-menu { display: block; } }',
    '@media (min-width: 641px) { .logo-short { display: none; } .nav-inner { padding: 0 24px; } .nav-secondary { padding: 0 24px; } }',

    /* Page content styles */
    '.page-main { max-width: 700px; margin: 12px auto 0; font-family: Georgia,serif; line-height: 1.7; padding: 0 16px 40px; }',
    '.page-main ul li { padding: 9px 0; min-height: 44px; display: flex; align-items: center; border-bottom: 1px solid #f0ebe4; }',
    '.page-main ul li:last-child { border-bottom: none; }',
    '.page-main a { color: #2c5f2e; }',
    '.page-main p { margin-top: 0; }',
    '@media (max-width: 480px) { .page-main h1 { font-size: 1.35em; line-height: 1.3; margin-top: 16px; } .page-main h2 { font-size: 1.1em; } }',
    '@media (min-width: 641px) { .page-main { padding: 0 24px 40px; margin-top: 20px; } }',
    '@media (min-width: 641px) and (max-width: 899px) { .page-main { max-width: 640px; } .hp-main { max-width: 640px; } }',
    // Desktop breakpoints
    '@media (min-width: 900px) { .page-main { max-width: 820px; padding: 0 32px 40px; margin-top: 24px; } .hp-main { max-width: 820px; padding: 0 32px; } .hp-hero { padding: 48px 0 36px; } .hp-hero h1 { font-size: 2.2em; } .hp-section h2 { font-size: 1.5em; } }',
    '@media (min-width: 1100px) { .page-main { max-width: 980px; } .hp-main { max-width: 980px; } }',
    '@media (min-width: 1400px) { .page-main { max-width: 1160px; } .hp-main { max-width: 1160px; } .hp-hero h1 { font-size: 2.5em; } }',
    '@media (min-width: 1800px) { .page-main { max-width: 1320px; } .hp-main { max-width: 1320px; } }',
    'main > h1 { margin-top: 20px; }',
    'main h2:not(.related-heading) { margin-top: 36px; padding-top: 4px; }',
    'h2.related-heading { margin-top: 32px; padding-top: 16px; border-top: 2px solid #e8e0d8; font-size: 1em; text-transform: uppercase; letter-spacing: .06em; color: #666; }',
    'h2.related-heading + ul { list-style: none; padding-left: 0; margin-top: 10px; }',
    'h2.related-heading + ul li { border-bottom: 1px solid #eee; padding: 13px 0; min-height: 44px; display: flex; align-items: center; }',
    'h2.related-heading + ul li:last-child { border-bottom: none; }',
    'h2.related-heading + ul li a { color: #2c5f2e; text-decoration: none; font-size: .97em; }',
    'h2.related-heading + ul li a:hover { text-decoration: underline; }',
    '#next-page-link { margin-top: 30px; margin-bottom: 36px; padding: 16px; background: #f4f9f4; border-left: 4px solid #8b5e3c; border-radius: 4px; }',
    '#next-page-link div:first-child { font-size: 0.8em; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; }',
    '#next-page-link a { font-size: 1em; color: #8b5e3c; text-decoration: none; font-weight: bold; line-height: 1.4; display: block; min-height: 44px; display: flex; align-items: center; }',
    '#next-page-link a:hover { text-decoration: underline; }',
  ].join('\n');

  document.head.appendChild(style);

  var robots = document.createElement('meta');
  robots.name = 'robots'; robots.content = 'index, follow';
  document.head.appendChild(robots);

  document.body.insertBefore(navEl, document.body.firstChild);

  document.getElementById('nav-btn').addEventListener('click', function() {
    document.getElementById('site-nav').classList.toggle('open');
  });
  document.addEventListener('click', function(e) {
    var nav = document.getElementById('site-nav');
    if (nav && !nav.contains(e.target)) nav.classList.remove('open');
  });
})();


