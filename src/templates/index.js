import { head } from './partials/head.js';
import { nav } from './partials/nav.js';
import { footer } from './partials/footer.js';

export function indexPage({ lang, config, translations, basePath = '.' }) {
  const t = translations[lang];
  const hero = config.hero;
  const gallery = config.gallery;
  const photos = config.photos;
  const stats = config.stats;
  const quote = config.quote;
  const categories = config.categories;

  // Generate filter buttons
  const filterButtons = [
    `<button class="filter-btn active" data-filter="all">${gallery.filterLabels.all[lang]}</button>`,
    ...categories.map(cat =>
      `<button class="filter-btn" data-filter="${cat.id}">${cat.name[lang]}</button>`
    )
  ].join('\n                ');

  // Generate gallery items
  const galleryItems = photos.map(photo => {
    const sizeClass = photo.size ? ` gallery-item-${photo.size}` : '';
    return `<div class="gallery-item${sizeClass}" data-category="${photo.category}">
                    <img src="${basePath}/${photo.image}" alt="${photo.alt}" loading="lazy">
                    <div class="gallery-overlay">
                        <span class="gallery-location">${photo.location[lang]}</span>
                        <h3 class="gallery-title">${photo.caption[lang]}</h3>
                    </div>
                </div>`;
  }).join('\n                ');

  // Generate stats
  const statsItems = `
                <div class="stat-item">
                    <span class="stat-number">${stats.photos.toLocaleString()}+</span>
                    <span class="stat-label">${stats.labels.photos[lang]}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${stats.followers}+</span>
                    <span class="stat-label">${stats.labels.followers[lang]}</span>
                </div>`;

  return `${head({ title: 'Domingo Camino | Photography', lang, basePath, description: t['meta.description.home'], siteUrl: config.site.url })}
<body>
    <!-- Loading State -->
    <div class="page-loader" id="pageLoader">
        <div class="loader-content">
            <span class="loader-logo">Domingo Camino</span>
            <div class="loader-bar"></div>
        </div>
    </div>

    <!-- Cursor follower -->
    <div class="cursor-dot"></div>
    <div class="cursor-outline"></div>

    ${nav({ lang, currentPage: 'index.html', translations, basePath })}

    <!-- Hero Section -->
    <header class="hero">
        <div class="hero-bg" style="background-image: linear-gradient(135deg, rgba(26, 26, 26, 0.7) 0%, rgba(26, 26, 26, 0.4) 100%), url('${basePath}/${hero.backgroundImage}')">
            <div class="hero-gradient"></div>
        </div>
        <div class="hero-content">
            <div class="hero-text">
                <p class="hero-subtitle">${hero.subtitle[lang]}</p>
                <h1 class="hero-title">
                    <span class="title-line">${hero.title[lang][0]}</span>
                    <span class="title-line title-italic">${hero.title[lang][1]}</span>
                </h1>
                <p class="hero-description">${hero.description[lang]}</p>
            </div>
            <div class="scroll-indicator">
                <span class="scroll-text">${hero.scrollText[lang]}</span>
                <div class="scroll-line"></div>
            </div>
        </div>
    </header>

    <!-- Gallery Section -->
    <section class="gallery-section" id="gallery">
        <div class="section-header">
            <h2 class="section-title">${gallery.title[lang]}</h2>
            <p class="section-subtitle">${gallery.subtitle[lang]}</p>
        </div>

        <!-- Filter -->
        <div class="gallery-filter" id="galleryFilter">
            ${filterButtons}
        </div>

        <!-- Gallery Grid -->
        <div class="gallery-grid" id="galleryGrid">
            ${galleryItems}
        </div>

        <div class="gallery-cta">
            <a href="https://www.flickr.com/photos/dcaminosastre/" target="_blank" rel="noopener" class="btn-primary">
                <span>${gallery.ctaText[lang]}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
            </a>
        </div>
    </section>

    <!-- Quote Section -->
    <section class="quote-section">
        <div class="quote-container">
            <blockquote>
                <p>"${quote.text[lang]}"</p>
                <cite>— ${quote.author}</cite>
            </blockquote>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
        <div class="stats-grid">${statsItems}
        </div>
    </section>

    ${footer({ lang, translations, basePath })}

    <!-- Lightbox -->
    <div class="lightbox" id="lightbox">
        <button class="lightbox-close" aria-label="${t['aria.close']}">&times;</button>
        <button class="lightbox-prev" aria-label="${t['aria.previous']}">&larr;</button>
        <button class="lightbox-next" aria-label="${t['aria.next']}">&rarr;</button>
        <div class="lightbox-content">
            <img src="" alt="" id="lightbox-img">
            <div class="lightbox-caption">
                <span class="lightbox-location"></span>
                <h3 class="lightbox-title"></h3>
            </div>
        </div>
    </div>

    <script src="${basePath}/js/main.js"></script>
</body>
</html>`;
}
