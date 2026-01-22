/**
 * Static HTML Build Script
 * Generates HTML files for each language from templates
 */

import { readFileSync, writeFileSync, mkdirSync, cpSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// Load config
const config = JSON.parse(readFileSync(resolve(ROOT, 'config/site.json'), 'utf-8'));

// Load translations
const translations = JSON.parse(readFileSync(resolve(ROOT, 'config/translations.json'), 'utf-8'));

// Import templates
const { indexPage } = await import('../src/templates/index.js');
const { aboutPage } = await import('../src/templates/about.js');

// Languages to generate
const languages = ['es', 'ca', 'en'];

// Output directory
const DIST = resolve(ROOT, 'dist');

// Ensure dist directory exists
mkdirSync(DIST, { recursive: true });

// Copy static assets
console.log('Copying static assets...');

// Copy CSS
mkdirSync(resolve(DIST, 'css'), { recursive: true });
cpSync(resolve(ROOT, 'css'), resolve(DIST, 'css'), { recursive: true });

// Copy JS
mkdirSync(resolve(DIST, 'js'), { recursive: true });
cpSync(resolve(ROOT, 'js/main.js'), resolve(DIST, 'js/main.js'));

// Copy images
if (existsSync(resolve(ROOT, 'images'))) {
  mkdirSync(resolve(DIST, 'images'), { recursive: true });
  cpSync(resolve(ROOT, 'images'), resolve(DIST, 'images'), { recursive: true });
}

// Generate HTML for each language
console.log('Generating HTML files...');

for (const lang of languages) {
  console.log(`  Generating ${lang}...`);

  // Determine output directory and basePath
  let outDir;
  let basePath;

  if (lang === 'es') {
    // Spanish is the default, goes in root
    outDir = DIST;
    basePath = '.';
  } else {
    // Other languages go in subdirectories
    outDir = resolve(DIST, lang);
    mkdirSync(outDir, { recursive: true });
    basePath = '..';
  }

  // Generate index page
  const indexHtml = indexPage({ lang, config, translations, basePath });
  writeFileSync(resolve(outDir, 'index.html'), indexHtml);
  console.log(`    ✓ ${lang === 'es' ? '' : lang + '/'}index.html`);

  // Generate about page
  const aboutHtml = aboutPage({ lang, config, translations, basePath });
  writeFileSync(resolve(outDir, 'about.html'), aboutHtml);
  console.log(`    ✓ ${lang === 'es' ? '' : lang + '/'}about.html`);
}

console.log('\nBuild complete! Output in dist/');
console.log('Run "npm run dev" to preview or "npm run build" to create production build.');
