export function nav({ lang, currentPage, translations, basePath = '.', isDark = false }) {
  const t = translations[lang];
  const langNames = { es: 'Español', ca: 'Català', en: 'English' };
  const langs = ['es', 'ca', 'en'];

  const getLangHref = (l) => {
    if (l === 'es') return `${basePath}/${currentPage}`;
    return `${basePath}/${l}/${currentPage}`;
  };

  const langLinks = langs.map(l => {
    const isActive = l === lang;
    return `<a href="${getLangHref(l)}" class="lang-option${isActive ? ' active' : ''}">
      <span class="lang-flag">${l.toUpperCase()}</span>
      <span class="lang-name">${langNames[l]}</span>
    </a>`;
  }).join('\n                        ');

  const getPageHref = (page) => {
    if (lang === 'es') return `${basePath}/${page}`;
    return `${basePath}/${lang}/${page}`;
  };

  return `
    <!-- Navigation -->
    <nav class="nav${isDark ? ' nav-dark' : ''}">
        <div class="nav-container">
            <a href="${getPageHref('index.html')}" class="logo">
                <span class="logo-text">Domingo Camino</span>
            </a>
            <div class="nav-right">
                <!-- Language Picker -->
                <div class="lang-picker">
                    <button class="lang-current" id="langToggle" aria-label="${t['aria.selectLanguage']}">
                        <span class="lang-code">${lang.toUpperCase()}</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                    <div class="lang-dropdown" id="langDropdown">
                        ${langLinks}
                    </div>
                </div>
                <div class="nav-toggle" id="navToggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul class="nav-menu" id="navMenu">
                    <button class="nav-menu-close" id="navMenuClose" aria-label="${t['aria.closeMenu']}">&times;</button>
                    <li><a href="${getPageHref('index.html')}"${currentPage === 'index.html' ? ' class="active"' : ''}>${t['nav.portfolio']}</a></li>
                    <li><a href="${getPageHref('about.html')}"${currentPage === 'about.html' ? ' class="active"' : ''}>${t['nav.about']}</a></li>
                    <li><a href="https://www.flickr.com/photos/dcaminosastre/" target="_blank" rel="noopener">Flickr</a></li>
                    <li><a href="https://www.instagram.com/dcaminosastre/" target="_blank" rel="noopener">Instagram</a></li>
                </ul>
            </div>
        </div>
    </nav>`;
}
