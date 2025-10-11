#!/usr/bin/env node

/**
 * Sitemap Generator for Mile High DNA Testing
 * Generates sitemap.xml with all key URLs and proper SEO metadata
 */

const fs = require('fs');
const path = require('path');

// Define all URLs with their priorities and metadata
const urls = [
  // Home page (highest priority)
  {
    loc: 'https://milehighdnatesting.com/',
    priority: '1.0',
    changefreq: 'weekly',
    hreflang: {
      'en-us': 'https://milehighdnatesting.com/',
      'es-us': 'https://milehighdnatesting.com/es'
    }
  },
  
  // Service Pages (Priority 0.8)
  {
    loc: 'https://milehighdnatesting.com/products/peace-of-mind-dna-kit',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    loc: 'https://milehighdnatesting.com/peace-of-mind-paternity-tests',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    loc: 'https://milehighdnatesting.com/legal-paternity-tests',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    loc: 'https://milehighdnatesting.com/prenatal-dna-test',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    loc: 'https://milehighdnatesting.com/dna-testing-types',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    loc: 'https://milehighdnatesting.com/family-relationship-dna',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    loc: 'https://milehighdnatesting.com/grandparentage-dna-tests',
    priority: '0.8',
    changefreq: 'weekly',
    hreflang: {
      'en-us': 'https://milehighdnatesting.com/grandparentage-dna-tests',
      'es-us': 'https://milehighdnatesting.com/es/prueba-de-abuelidad'
    }
  },
  {
    loc: 'https://milehighdnatesting.com/siblingship-dna-tests',
    priority: '0.8',
    changefreq: 'weekly',
    hreflang: {
      'en-us': 'https://milehighdnatesting.com/siblingship-dna-tests',
      'es-us': 'https://milehighdnatesting.com/es/prueba-de-hermanos'
    }
  },
  {
    loc: 'https://milehighdnatesting.com/get-results',
    priority: '0.8',
    changefreq: 'weekly',
    hreflang: {
      'en-us': 'https://milehighdnatesting.com/get-results',
      'es-us': 'https://milehighdnatesting.com/es/consultar-resultados'
    }
  },
  
  // Information Pages (Priority 0.6)
  {
    loc: 'https://milehighdnatesting.com/faq',
    priority: '0.6',
    changefreq: 'weekly',
    hreflang: {
      'en-us': 'https://milehighdnatesting.com/faq',
      'es-us': 'https://milehighdnatesting.com/es/preguntas-frecuentes'
    }
  },
  {
    loc: 'https://milehighdnatesting.com/about',
    priority: '0.6',
    changefreq: 'weekly',
    hreflang: {
      'en-us': 'https://milehighdnatesting.com/about',
      'es-us': 'https://milehighdnatesting.com/es/sobre-nosotros'
    }
  },
  
  // Additional Service Pages
  {
    loc: 'https://milehighdnatesting.com/prenatal-dna-test',
    priority: '0.8',
    changefreq: 'weekly',
    hreflang: {
      'en-us': 'https://milehighdnatesting.com/prenatal-dna-test',
      'es-us': 'https://milehighdnatesting.com/es/prueba-prenatal'
    }
  },
  {
    loc: 'https://milehighdnatesting.com/legal-paternity-tests',
    priority: '0.8',
    changefreq: 'weekly',
    hreflang: {
      'en-us': 'https://milehighdnatesting.com/legal-paternity-tests',
      'es-us': 'https://milehighdnatesting.com/es/prueba-de-paternidad-legal'
    }
  },
  {
    loc: 'https://milehighdnatesting.com/immigration-dna-tests',
    priority: '0.8',
    changefreq: 'weekly',
    hreflang: {
      'en-us': 'https://milehighdnatesting.com/immigration-dna-tests',
      'es-us': 'https://milehighdnatesting.com/es/prueba-de-inmigracion'
    }
  },
  {
    loc: 'https://milehighdnatesting.com/appointments',
    priority: '0.8',
    changefreq: 'weekly',
    hreflang: {
      'en-us': 'https://milehighdnatesting.com/appointments',
      'es-us': 'https://milehighdnatesting.com/es/programar-cita'
    }
  },
  {
    loc: 'https://milehighdnatesting.com/book-appointment',
    priority: '0.8',
    changefreq: 'weekly',
    hreflang: {
      'en-us': 'https://milehighdnatesting.com/book-appointment',
      'es-us': 'https://milehighdnatesting.com/es/reservar-cita'
    }
  },
  {
    loc: 'https://milehighdnatesting.com/aabb-accreditation',
    priority: '0.6',
    changefreq: 'weekly',
    hreflang: {
      'en-us': 'https://milehighdnatesting.com/aabb-accreditation',
      'es-us': 'https://milehighdnatesting.com/es/aabb-accreditation'
    }
  },
  // Mile High DNA Corner Articles (Priority 0.7)
{
  loc: 'https://milehighdnatesting.com/mile-high-dna-corner',
  priority: '0.7',
  changefreq: 'weekly',
},
{
  loc: 'https://milehighdnatesting.com/mile-high-dna-corner/legal-vs-non-legal-dna-test',
  priority: '0.7',
  changefreq: 'weekly',
},
{
  loc: 'https://milehighdnatesting.com/mile-high-dna-corner/how-reliable-and-accurate-are-home-dna-tests',
  priority: '0.7',
  changefreq: 'weekly',
},
{
  loc: 'https://milehighdnatesting.com/mile-high-dna-corner/how-much-does-a-prenatal-dna-test-cost',
  priority: '0.7',
  changefreq: 'weekly',
},
{
  loc: 'https://milehighdnatesting.com/mile-high-dna-corner/family-relationship-dna-testing-denver',
  priority: '0.7',
  changefreq: 'weekly',
},
{
  loc: 'https://milehighdnatesting.com/mile-high-dna-corner/best-at-home-paternity-dna-kit-denver',
  priority: '0.7',
  changefreq: 'weekly',
},
{
  loc: 'https://milehighdnatesting.com/mile-high-dna-corner/what-to-expect-non-invasive-prenatal-dna-test-denver',
  priority: '0.7',
  changefreq: 'weekly',
},
{
  loc: 'https://milehighdnatesting.com/mile-high-dna-corner/non-legal-dna-cost-guide',
  priority: '0.7',
  changefreq: 'weekly',
},
{
  loc: 'https://milehighdnatesting.com/mile-high-dna-corner/legal-dna-cost-guide',
  priority: '0.7',
  changefreq: 'weekly',
},
{
  loc: 'https://milehighdnatesting.com/mile-high-dna-corner//prenatal-dna-cost-guide',
  priority: '0.7',
  changefreq: 'weekly',
}

];

/**
 * Generate XML sitemap content
 */
function generateSitemap() {
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

`;

  urls.forEach(url => {
    sitemap += `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>`;

    // Add hreflang links if they exist
    if (url.hreflang) {
      Object.entries(url.hreflang).forEach(([lang, href]) => {
        sitemap += `
    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}" />`;
      });
    }

    sitemap += `
  </url>

`;
  });

  sitemap += `</urlset>`;
  
  return sitemap;
}

/**
 * Write sitemap to file
 */
function writeSitemap() {
  const sitemapContent = generateSitemap();
  const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  
  try {
    fs.writeFileSync(outputPath, sitemapContent, 'utf8');
    console.log('✅ Sitemap generated successfully at:', outputPath);
    console.log(`📊 Generated ${urls.length} URLs`);
  } catch (error) {
    console.error('❌ Error writing sitemap:', error.message);
    process.exit(1);
  }
}

/**
 * Main execution
 */
if (require.main === module) {
  console.log('🚀 Generating sitemap for Mile High DNA Testing...');
  writeSitemap();
}

module.exports = {
  generateSitemap,
  writeSitemap,
  urls
};

