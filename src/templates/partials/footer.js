export function footer({ lang, translations, basePath = '.' }) {
  const t = translations[lang];

  const getPageHref = (page) => {
    if (lang === 'es') return `${basePath}/${page}`;
    return `${basePath}/${lang}/${page}`;
  };

  return `
    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-brand">
                <span class="footer-logo">Domingo Camino</span>
                <p class="footer-tagline">${t['footer.tagline']}</p>
            </div>
            <div class="footer-links">
                <a href="${getPageHref('index.html')}">${t['nav.portfolio']}</a>
                <a href="${getPageHref('about.html')}">${t['nav.about']}</a>
                <a href="https://www.flickr.com/photos/dcaminosastre/" target="_blank" rel="noopener">Flickr</a>
                <a href="https://www.instagram.com/dcaminosastre/" target="_blank" rel="noopener">Instagram</a>
            </div>
            <div class="footer-social">
                <a href="https://www.flickr.com/photos/dcaminosastre/" target="_blank" rel="noopener" aria-label="Flickr">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="6" cy="12" r="4.5" stroke="currentColor" stroke-width="1" fill="none"/>
                        <circle cx="18" cy="12" r="4.5" fill="currentColor"/>
                    </svg>
                </a>
                <a href="https://www.instagram.com/dcaminosastre/" target="_blank" rel="noopener" aria-label="Instagram">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                </a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>${t['footer.copyright']}</p>
        </div>
    </footer>`;
}
