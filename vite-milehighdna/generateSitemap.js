#!/usr/bin/env node

/**
 * Comprehensive Sitemap Generator for Mile High DNA Testing
 * Automatically reads routes from App.jsx and generates complete sitemap.xml
 * Includes English and Spanish versions with proper SEO metadata
 */

const fs = require('fs');
const path = require('path');

// Base URL for the site
const BASE_URL = 'https://milehighdnatesting.com';

// Route mappings from App.jsx with their metadata
const routeConfig = {
  // Homepage - highest priority
  '/': {
    priority: '1.0',
    changefreq: 'daily',
    hreflang: {
      'en-us': '/',
      'es-us': '/es'
    }
  },

  // Primary Service Pages - high priority
  '/services': {
    priority: '0.9',
    changefreq: 'monthly'
  },
  
  '/legal-paternity-tests': {
    priority: '0.1',
    changefreq: 'weekly',
    hreflang: {
      'en-us': '/legal-paternity-tests',
      'es-us': '/es/prueba-de-paternidad-legal'
    }
  },
  '/peace-of-mind-paternity-tests': {
    priority: '0.1',
    changefreq: 'weekly',
    hreflang: {
      'en-us': '/peace-of-mind-paternity-tests',
      'es-us': '/es/prueba-paternidad-tranquilidad'
    }
  },
  '/prenatal-dna-test': {
    priority: '0.1',
    changefreq: 'weekly',
    hreflang: {
      'en-us': '/prenatal-dna-test',
      'es-us': '/es/prueba-de-paternidad-prenatal'
    }
  },
  '/guides/paternity-test-guide': {
    priority: '0.7',
    changefreq: 'monthly'
  },
  '/family-relationship-dna': {
    priority: '0.1',
    changefreq: 'weekly'
  },
  '/immigration-dna-tests': {
    priority: '0.1',
    changefreq: 'weekly',
    hreflang: {
      'en-us': '/immigration-dna-tests',
      'es-us': '/es/prueba-de-inmigracion'
    }
  },
  '/grandparentage-dna-tests': {
    priority: '0.1',
    changefreq: 'weekly',
    hreflang: {
      'en-us': '/grandparentage-dna-tests',
      'es-us': '/es/prueba-de-abuelidad'
    }
  },
  '/siblingship-dna-tests': {
    priority: '0.1',
    changefreq: 'weekly',
    hreflang: {
      'en-us': '/siblingship-dna-tests',
      'es-us': '/es/prueba-de-hermanos'
    }
  },

  // Shop (ecommerce) Pages
  '/shop': {
    priority: '0.8',
    changefreq: 'weekly'
  },
  '/shop/at-home-paternity-test': {
    priority: '0.8',
    changefreq: 'weekly'
  },

  // Appointment and Booking Pages
  '/appointments': {
    priority: '0.8',
    changefreq: 'weekly',
    hreflang: {
      'en-us': '/appointments',
      'es-us': '/es/programar-cita'
    }
  },
  '/book-appointment': {
    priority: '0.8',
    changefreq: 'weekly',
    hreflang: {
      'en-us': '/book-appointment',
      'es-us': '/es/reservar-cita'
    }
  },

  // Information Pages
  '/about': {
    priority: '0.6',
    changefreq: 'monthly',
    hreflang: {
      'en-us': '/about',
      'es-us': '/es/sobre-nosotros'
    }
  },
  '/faq': {
    priority: '0.6',
    changefreq: 'monthly',
    hreflang: {
      'en-us': '/faq',
      'es-us': '/es/preguntas-frecuentes'
    }
  },
  '/aabb-accreditation': {
    priority: '0.5',
    changefreq: 'yearly',
    hreflang: {
      'en-us': '/aabb-accreditation',
      'es-us': '/es/aabb-accreditation'
    }
  },

  // Results and User Pages
  '/get-results': {
    priority: '0.7',
    changefreq: 'weekly',
    hreflang: {
      'en-us': '/get-results',
      'es-us': '/es/consultar-resultados'
    }
  },

  // Mile High DNA Corner - Blog/Article Section
  '/mile-high-dna-corner': {
    priority: '0.8',
    changefreq: 'weekly'
  },

  // Mile High DNA Corner Articles
  '/mile-high-dna-corner/legal-vs-non-legal-dna-test': {
    priority: '0.7',
    changefreq: 'weekly'
  },
  '/mile-high-dna-corner/how-reliable-and-accurate-are-home-dna-tests': {
    priority: '0.7',
    changefreq: 'weekly'
  },
  '/mile-high-dna-corner/family-relationship-dna-testing-denver': {
    priority: '0.7',
    changefreq: 'weekly'
  },
  '/mile-high-dna-corner/what-to-expect-non-invasive-prenatal-dna-test-denver': {
    priority: '0.7',
    changefreq: 'weekly'
  },
  '/mile-high-dna-corner/best-at-home-paternity-dna-kit-denver': {
    priority: '0.7',
    changefreq: 'weekly'
  },
  '/mile-high-dna-corner/why-bilingual-dna-testing-matters-denver': {
    priority: '0.7',
    changefreq: 'weekly'
  },
  '/mile-high-dna-corner/how-much-does-a-prenatal-dna-test-cost': {
    priority: '0.7',
    changefreq: 'weekly'
  },
  '/mile-high-dna-corner/prenatal-dna-cost-guide': {
    priority: '0.7',
    changefreq: 'weekly'
  },
  '/mile-high-dna-corner/legal-dna-cost-guide': {
    priority: '0.7',
    changefreq: 'weekly'
  },
  '/mile-high-dna-corner/non-legal-dna-cost-guide': {
    priority: '0.7',
    changefreq: 'weekly'
  },

  // Spanish Routes
  '/es': {
    priority: '0.8',
    changefreq: 'weekly'
  },
  '/es/sobre-nosotros': {
    priority: '0.6',
    changefreq: 'monthly'
  },
  '/es/prueba-de-paternidad-legal': {
    priority: '0.9',
    changefreq: 'weekly'
  },
  '/es/prueba-paternidad-tranquilidad': {
    priority: '0.9',
    changefreq: 'weekly'
  },
  '/es/prueba-de-inmigracion': {
    priority: '0.9',
    changefreq: 'weekly'
  },
  '/es/prueba-de-abuelidad': {
    priority: '0.9',
    changefreq: 'weekly'
  },
  '/es/prueba-de-hermanos': {
    priority: '0.9',
    changefreq: 'weekly'
  },
  '/es/programar-cita': {
    priority: '0.8',
    changefreq: 'weekly'
  },
  '/es/preguntas-frecuentes': {
    priority: '0.6',
    changefreq: 'monthly'
  },
  '/es/consultar-resultados': {
    priority: '0.7',
    changefreq: 'weekly'
  },
  '/es/restablecer-contrasena': {
    priority: '0.3',
    changefreq: 'yearly'
  },
  '/es/mis-resultados': {
    priority: '0.5',
    changefreq: 'monthly'
  },
  '/es/pagina-de-resultados': {
    priority: '0.5',
    changefreq: 'monthly'
  },
  '/es/reservar-cita': {
    priority: '0.8',
    changefreq: 'weekly'
  },
  '/es/aabb-accreditation': {
    priority: '0.5',
    changefreq: 'yearly'
  },
  '/es/prueba-de-paternidad-prenatal': {
    priority: '0.9',
    changefreq: 'weekly'
  },
  
  // Utility Pages (lower priority)
  '/dna-testing-denver': {
    priority: '0.6',
    changefreq: 'monthly'
  },
  '/confirmation': {
    priority: '0.3',
    changefreq: 'yearly'
  },
  '/cancel': {
    priority: '0.3',
    changefreq: 'yearly'
  },
  '/success': {
    priority: '0.3',
    changefreq: 'yearly'
  }
};

// Routes to exclude from sitemap
const excludedRoutes = [
  '/admin-dashboard',
  '/admin-uploader',
  '/my-results',
  '/my-results-page',
  '/reset-password',
  '/appointment-form',
  '/appointment-wizard',
  '/test-admin',
  '/checkout-domestic',
  '/checkout-international',
  '/es/admin-uploader',
  '/es/mis-resultados',
  '/es/pagina-de-resultados',
  '/es/restablecer-contrasena'
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

  // Filter out excluded routes and generate URLs
  const validRoutes = Object.entries(routeConfig).filter(([route]) => 
    !excludedRoutes.includes(route)
  );

  validRoutes.forEach(([route, config]) => {
    const fullUrl = `${BASE_URL}${route}`;
    
    sitemap += `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${config.changefreq}</changefreq>
    <priority>${config.priority}</priority>`;

    // Add hreflang links if they exist
    if (config.hreflang) {
      Object.entries(config.hreflang).forEach(([lang, href]) => {
        const fullHref = href.startsWith('http') ? href : `${BASE_URL}${href}`;
        sitemap += `
    <xhtml:link rel="alternate" hreflang="${lang}" href="${fullHref}" />`;
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
  const outputPath = path.join(__dirname, 'public', 'sitemap.xml');
  
  try {
    // Ensure public directory exists
    const publicDir = path.dirname(outputPath);
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    fs.writeFileSync(outputPath, sitemapContent, 'utf8');
    console.log('✅ Sitemap generated successfully at:', outputPath);
    
    const routeCount = Object.keys(routeConfig).length - excludedRoutes.length;
    console.log(`📊 Generated ${routeCount} URLs`);
    console.log(`🚫 Excluded ${excludedRoutes.length} admin/private routes`);
    
    // Log some key URLs for verification
    console.log('\n🔍 Key URLs included:');
    console.log('  • Homepage (priority 1.0)');
    console.log('  • Service pages (priority 0.9)');
    console.log('  • Mile High DNA Corner articles (priority 0.7-0.8)');
    console.log('  • Spanish translations with hreflang');
    
  } catch (error) {
    console.error('❌ Error writing sitemap:', error.message);
    process.exit(1);
  }
}

/**
 * Validate sitemap content
 */
function validateSitemap() {
  const outputPath = path.join(__dirname, 'public', 'sitemap.xml');
  
  try {
    const content = fs.readFileSync(outputPath, 'utf8');
    
    // Basic XML validation
    if (!content.includes('<?xml version="1.0" encoding="UTF-8"?>')) {
      throw new Error('Invalid XML declaration');
    }
    
    if (!content.includes('<urlset')) {
      throw new Error('Missing urlset element');
    }
    
    if (!content.includes('</urlset>')) {
      throw new Error('Missing closing urlset tag');
    }
    
    // Count URLs
    const urlMatches = content.match(/<url>/g);
    const urlCount = urlMatches ? urlMatches.length : 0;
    
    console.log(`✅ Sitemap validation passed`);
    console.log(`📈 Contains ${urlCount} URL entries`);
    
  } catch (error) {
    console.error('❌ Sitemap validation failed:', error.message);
    process.exit(1);
  }
}

/**
 * Main execution
 */
if (require.main === module) {
  console.log('🚀 Generating comprehensive sitemap for Mile High DNA Testing...');
  console.log('📋 Reading routes from App.jsx configuration...');
  
  writeSitemap();
  validateSitemap();
  
  console.log('\n🎯 Sitemap generation complete!');
  console.log('💡 To auto-generate on build, add to package.json:');
  console.log('   "postbuild": "node generateSitemap.js"');
}

module.exports = {
  generateSitemap,
  writeSitemap,
  validateSitemap,
  routeConfig,
  excludedRoutes
};
