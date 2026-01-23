export function head({ title, lang, basePath = '.', description = '', siteUrl = '' }) {
  const imageUrl = siteUrl ? `${siteUrl}/images/preview.jpg` : '';

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>${description ? `
    <meta name="description" content="${description}">` : ''}
    <meta property="og:title" content="${title}">
    <meta property="og:type" content="website">${description ? `
    <meta property="og:description" content="${description}">` : ''}${imageUrl ? `
    <meta property="og:image" content="${imageUrl}">` : ''}
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">${description ? `
    <meta name="twitter:description" content="${description}">` : ''}${imageUrl ? `
    <meta name="twitter:image" content="${imageUrl}">` : ''}
    <link rel="stylesheet" href="${basePath}/css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-H17B95XSJK"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-H17B95XSJK');
    </script>
</head>`;
}
