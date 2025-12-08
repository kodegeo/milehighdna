#!/usr/bin/env node

/**
 * Comprehensive Sitemap Generator for Mile High DNA Testing
 * Automatically scans pages directory and generates sitemap.xml with all routes
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://milehighdnatesting.com';
const PAGES_DIR = path.join(__dirname, '..', 'src', 'pages');
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'sitemap.xml');

// Pages to exclude from sitemap (admin, internal, etc.)
const EXCLUDED_PAGES = [
  'NotFound.jsx',
  'AdminUploaderPage.jsx',
  'TestAdmin.jsx',
  'AppointmentFormPage.jsx',
  'AppointmentWizard.jsx',
  'MyResults.jsx',
  'MyResultsPage.jsx',
  'CheckoutDomestic.jsx',
  'CheckoutInternational.jsx',
  'Confirmation.jsx',
  'Cancel.jsx',
  'Success.jsx',
  'ResetPassword.jsx',
  'index.jsx', // locations index is handled separately
];

// Pages that should be excluded (admin routes)
const EXCLUDED_ROUTES = [
  '/admin-dashboard',
  '/admin-uploader',
  '/test-admin',
  '/appointment-form',
  '/appointment-wizard',
  '/my-results',
  '/my-results-page',
  '/checkout-domestic',
  '/checkout-international',
  '/reset-password',
  '/confirmation',
  '/cancel',
  '/success',
];

// Route mappings from App.jsx (file name -> route path)
const ROUTE_MAPPINGS = {
  'Home.jsx': '/',
  'AboutUs.jsx': '/about',
  'LegalPaternityTests.jsx': '/legal-paternity-tests',
  'PeaceOfMindPaternityTests.jsx': '/peace-of-mind-paternity-tests',
  'ImmigrationDNATests.jsx': '/immigration-dna-tests',
  'GrandparentageTests.jsx': '/grandparentage-dna-tests',
  'Siblingship.jsx': '/siblingship-dna-tests',
  'Prenatal.jsx': '/prenatal-dna-test',
  'Appointments.jsx': '/appointments',
  'FAQ.jsx': '/faq',
  'GetResults.jsx': '/get-results',
  'BookAppointment.jsx': '/book-appointment',
  'AABBAccreditation.jsx': '/aabb-accreditation',
  'DNATestingDenverPage.jsx': '/dna-testing-denver',
  'Services.jsx': '/services',
  'DiscreetDNATesting.jsx': '/discreet-dna-testing',
  'ForensicDNAAnalysis.jsx': '/forensic-dna-analysis',
  'PeaceOfMindDNAKit.jsx': '/products/peace-of-mind-dna-kit',
  'FamilyRelationshipDNA.jsx': '/family-relationship-dna',
  'MileHighDNACorner.jsx': '/mile-high-dna-corner',
  'DNATestingTypes.jsx': '/dna-testing-types',
};

// Mile High DNA Corner blog post mappings
const BLOG_POST_MAPPINGS = {
  'PrenatalDNAGuide.jsx': '/mile-high-dna-corner/prenatal-dna-cost-guide',
  'PrenatalDNACost.jsx': '/mile-high-dna-corner/how-much-does-a-prenatal-dna-test-cost',
  'LegalVsNonLegal.jsx': '/mile-high-dna-corner/legal-vs-non-legal-dna-test',
  'HomeDNATestAccuracy.jsx': '/mile-high-dna-corner/how-reliable-and-accurate-are-home-dna-tests',
  'AnswersMatterMost.jsx': '/mile-high-dna-corner/family-relationship-dna-testing-denver',
  'WhatToExpectNIPP.jsx': '/mile-high-dna-corner/what-to-expect-non-invasive-prenatal-dna-test-denver',
  'BestAtHomePaternityDNAKit.jsx': '/mile-high-dna-corner/best-at-home-paternity-dna-kit-denver',
  'BilingualDNATestingDenver.jsx': '/mile-high-dna-corner/why-bilingual-dna-testing-matters-denver',
  'LegalDNACostGuide.jsx': '/mile-high-dna-corner/legal-dna-cost-guide',
  'NonLegalDNACostGuide.jsx': '/mile-high-dna-corner/non-legal-dna-cost-guide',
};

// Location page mappings
const LOCATION_MAPPINGS = {
  'denver.jsx': '/locations/denver',
  'aurora.jsx': '/locations/aurora',
  'lakewood.jsx': '/locations/lakewood',
  'littleton.jsx': '/locations/littleton',
  'centennial.jsx': '/locations/centennial',
  'englewood.jsx': '/locations/englewood',
  'arvada.jsx': '/locations/arvada',
  'westminster.jsx': '/locations/westminster',
  'thornton.jsx': '/locations/thornton',
  'boulder.jsx': '/locations/boulder',
  'longmont.jsx': '/locations/longmont',
  'fort-collins.jsx': '/locations/fort-collins',
  'loveland.jsx': '/locations/loveland',
  'greeley.jsx': '/locations/greeley',
  'colorado-springs.jsx': '/locations/colorado-springs',
  'pueblo.jsx': '/locations/pueblo',
};

// Priority and changefreq settings
const getPriorityAndFreq = (route) => {
  // Home page
  if (route === '/') {
    return { priority: '1.0', changefreq: 'daily' };
  }
  
  // Service pages
  if (route.includes('/legal-paternity-tests') ||
      route.includes('/peace-of-mind-paternity-tests') ||
      route.includes('/immigration-dna-tests') ||
      route.includes('/grandparentage-dna-tests') ||
      route.includes('/siblingship-dna-tests') ||
      route.includes('/prenatal-dna-test') ||
      route.includes('/discreet-dna-testing') ||
      route.includes('/forensic-dna-analysis') ||
      route.includes('/services')) {
    return { priority: '0.8', changefreq: 'monthly' };
  }
  
  // Location pages
  if (route.startsWith('/locations/')) {
    return { priority: '0.8', changefreq: 'monthly' };
  }
  
  // Blog posts
  if (route.startsWith('/mile-high-dna-corner/')) {
    return { priority: '0.7', changefreq: 'monthly' };
  }
  
  // Main blog index
  if (route === '/mile-high-dna-corner') {
    return { priority: '0.8', changefreq: 'monthly' };
  }
  
  // Important pages
  if (route === '/appointments' || route === '/book-appointment' || route === '/get-results') {
    return { priority: '0.8', changefreq: 'monthly' };
  }
  
  // Information pages
  if (route === '/about' || route === '/faq' || route === '/aabb-accreditation') {
    return { priority: '0.6', changefreq: 'monthly' };
  }
  
  // Default
  return { priority: '0.8', changefreq: 'monthly' };
};

// Hreflang mappings for bilingual pages
const getHreflang = (route) => {
  const hreflangMap = {
    '/': { 'en-us': '/', 'es-us': '/es' },
    '/about': { 'en-us': '/about', 'es-us': '/es/sobre-nosotros' },
    '/legal-paternity-tests': { 'en-us': '/legal-paternity-tests', 'es-us': '/es/prueba-de-paternidad-legal' },
    '/peace-of-mind-paternity-tests': { 'en-us': '/peace-of-mind-paternity-tests', 'es-us': '/es/prueba-paternidad-tranquilidad' },
    '/immigration-dna-tests': { 'en-us': '/immigration-dna-tests', 'es-us': '/es/prueba-de-inmigracion' },
    '/grandparentage-dna-tests': { 'en-us': '/grandparentage-dna-tests', 'es-us': '/es/prueba-de-abuelidad' },
    '/siblingship-dna-tests': { 'en-us': '/siblingship-dna-tests', 'es-us': '/es/prueba-de-hermanos' },
    '/prenatal-dna-test': { 'en-us': '/prenatal-dna-test', 'es-us': '/es/prueba-de-paternidad-prenatal' },
    '/appointments': { 'en-us': '/appointments', 'es-us': '/es/programar-cita' },
    '/book-appointment': { 'en-us': '/book-appointment', 'es-us': '/es/reservar-cita' },
    '/faq': { 'en-us': '/faq', 'es-us': '/es/preguntas-frecuentes' },
    '/get-results': { 'en-us': '/get-results', 'es-us': '/es/consultar-resultados' },
    '/aabb-accreditation': { 'en-us': '/aabb-accreditation', 'es-us': '/es/aabb-accreditation' },
  };
  
  return hreflangMap[route] || null;
};

/**
 * Collect all routes from pages directory
 */
function collectRoutes() {
  const routes = [];
  
  // Always include core pages
  const coreRoutes = [
    '/',
    '/locations',
    '/appointments',
    '/book-appointment',
    '/get-results',
    '/faq',
  ];
  
  coreRoutes.forEach(route => {
    if (!EXCLUDED_ROUTES.includes(route)) {
      routes.push({
        loc: `${BASE_URL}${route}`,
        route: route,
      });
    }
  });
  
  // Scan main pages directory
  const mainPagesDir = PAGES_DIR;
  if (fs.existsSync(mainPagesDir)) {
    const files = fs.readdirSync(mainPagesDir);
    files.forEach(file => {
      if (file.endsWith('.jsx') && !EXCLUDED_PAGES.includes(file)) {
        const route = ROUTE_MAPPINGS[file];
        if (route && !EXCLUDED_ROUTES.includes(route)) {
          routes.push({
            loc: `${BASE_URL}${route}`,
            route: route,
          });
        }
      }
    });
  }
  
  // Scan locations directory
  const locationsDir = path.join(PAGES_DIR, 'locations');
  if (fs.existsSync(locationsDir)) {
    const files = fs.readdirSync(locationsDir);
    files.forEach(file => {
      if (file.endsWith('.jsx') && file !== 'index.jsx') {
        const route = LOCATION_MAPPINGS[file];
        if (route) {
          routes.push({
            loc: `${BASE_URL}${route}`,
            route: route,
          });
        }
      }
    });
  }
  
  // Add locations index
  routes.push({
    loc: `${BASE_URL}/locations`,
    route: '/locations',
  });
  
  // Scan mile-high-dna-corner directory
  const blogDir = path.join(PAGES_DIR, 'mile-high-dna-corner');
  if (fs.existsSync(blogDir)) {
    const files = fs.readdirSync(blogDir);
    files.forEach(file => {
      if (file.endsWith('.jsx')) {
        const route = BLOG_POST_MAPPINGS[file];
        if (route) {
          routes.push({
            loc: `${BASE_URL}${route}`,
            route: route,
          });
        }
      }
    });
  }
  
  // Remove duplicates
  const uniqueRoutes = [];
  const seen = new Set();
  routes.forEach(route => {
    if (!seen.has(route.loc)) {
      seen.add(route.loc);
      uniqueRoutes.push(route);
    }
  });
  
  return uniqueRoutes.sort((a, b) => {
    // Sort: home first, then alphabetical
    if (a.route === '/') return -1;
    if (b.route === '/') return 1;
    return a.route.localeCompare(b.route);
  });
}

/**
 * Generate XML sitemap content
 */
function generateSitemap() {
  const routes = collectRoutes();
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

`;

  routes.forEach(routeData => {
    const { priority, changefreq } = getPriorityAndFreq(routeData.route);
    const hreflang = getHreflang(routeData.route);
    
    sitemap += `  <url>
    <loc>${routeData.loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>`;

    // Add hreflang links if they exist
    if (hreflang) {
      Object.entries(hreflang).forEach(([lang, href]) => {
        sitemap += `
    <xhtml:link rel="alternate" hreflang="${lang}" href="${BASE_URL}${href}" />`;
      });
    }

    sitemap += `
  </url>

`;
  });

  sitemap += `</urlset>`;
  
  return { sitemap, count: routes.length, routes };
}

/**
 * Write sitemap to file
 */
function writeSitemap() {
  const { sitemap, count, routes } = generateSitemap();
  
  try {
    // Ensure directory exists
    const outputDir = path.dirname(OUTPUT_PATH);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    fs.writeFileSync(OUTPUT_PATH, sitemap, 'utf8');
    console.log('✅ Sitemap generated successfully!');
    console.log(`📊 Total URLs: ${count}`);
    console.log(`📁 Output: ${OUTPUT_PATH}`);
    console.log('\n📋 Included Routes:');
    routes.forEach((r, i) => {
      console.log(`   ${i + 1}. ${r.loc}`);
    });
    
    // Check for missing pages
    console.log('\n⚠️  Pages that may need manual review:');
    const allPages = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.jsx'));
    allPages.forEach(file => {
      if (!EXCLUDED_PAGES.includes(file) && !ROUTE_MAPPINGS[file]) {
        console.log(`   - ${file} (not in route mappings)`);
      }
    });
    
  } catch (error) {
    console.error('❌ Error writing sitemap:', error.message);
    process.exit(1);
  }
}

/**
 * Main execution
 */
if (require.main === module) {
  console.log('🚀 Generating comprehensive sitemap for Mile High DNA Testing...\n');
  writeSitemap();
}

module.exports = {
  generateSitemap,
  writeSitemap,
  collectRoutes,
};
