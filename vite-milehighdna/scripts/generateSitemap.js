#!/usr/bin/env node

/**
 * Comprehensive Sitemap Generator for Mile High DNA Testing
 * Parses App.jsx directly to extract all routes and generates sitemap.xml
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://milehighdnatesting.com';
const APP_JSX_PATH = path.join(__dirname, '..', 'src', 'App.jsx');
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'sitemap.xml');

// Routes to exclude from sitemap (admin, internal, etc.)
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
  '/dna-testing-denver', // Not part of current strategy
  '/dna-testing-types', // 301 to /guides/paternity-test-guide
  '*', // 404 page
];

// Routes that start with /es are excluded (handled via hreflang)
const EXCLUDED_PATTERNS = [
  /^\/es/, // Spanish routes
];

/**
 * Extract all routes from App.jsx
 */
function extractRoutesFromAppJsx() {
  const appContent = fs.readFileSync(APP_JSX_PATH, 'utf8');
  const routes = [];
  
  // Match Route components: <Route path="/path" element={<Component />} />
  const routeRegex = /<Route\s+path=["']([^"']+)["']\s+element=\{<([^>]+)\s*\/>\}\s*\/>/g;
  
  let match;
  while ((match = routeRegex.exec(appContent)) !== null) {
    const routePath = match[1];
    const componentName = match[2];
    
    // Skip excluded routes
    if (EXCLUDED_ROUTES.includes(routePath)) {
      continue;
    }
    
    // Skip routes matching excluded patterns
    if (EXCLUDED_PATTERNS.some(pattern => pattern.test(routePath))) {
      continue;
    }
    
    routes.push({
      path: routePath,
      component: componentName,
    });
  }
  
  return routes;
}

/**
 * Get priority and changefreq for a route
 * Priority hierarchy: Home > State Authority > City-Service > Generic Service > Location > Blog > Legacy
 */
function getPriorityAndFreq(route) {
  // Home page - highest priority
  if (route === '/') {
    return { priority: '1.0', changefreq: 'daily' };
  }
  
  // Redirect-only pages - must be checked early, before generic rules
  if (route === '/prenatal-dna-test') {
    return { priority: '0.3', changefreq: 'yearly' };
  }
  
  // State authority pages - second highest priority (informational authority)
  if (route === '/dna-testing-colorado' || route === '/paternity-test-colorado') {
    return { priority: '0.9', changefreq: 'monthly' };
  }
  
  // City-specific service pages - high priority (transactional, location-specific)
  // Pattern: /services/*-testing-{city}
  // Use regex to detect routes that start with /services/ and end with -testing-{city}
  const cityServicePattern = /^\/services\/.+-testing-[a-z-]+$/;
  if (cityServicePattern.test(route)) {
    return { priority: '0.85', changefreq: 'monthly' };
  }
  
  // Generic service pages - medium priority (educational reference)
  if (route.startsWith('/services/')) {
    return { priority: '0.6', changefreq: 'monthly' };
  }
  
  // /services hub page
  if (route === '/services') {
    return { priority: '0.7', changefreq: 'monthly' };
  }
  
  // Guide pages - individual guides slightly de-emphasized
  if (route.startsWith('/guides/') && route !== '/guides') {
    return { priority: '0.7', changefreq: 'monthly' };
  }
  
  // /guides index page
  if (route === '/guides') {
    return { priority: '0.8', changefreq: 'monthly' };
  }
  
  // Location pages - high priority (local intent)
  if (route.startsWith('/locations')) {
    return { priority: '0.8', changefreq: 'monthly' };
  }
  
  // Appointments page (primary conversion)
  if (route === '/appointments') {
    return { priority: '0.8', changefreq: 'weekly' };
  }
  
  // Blog posts - medium-high priority
  if (route.startsWith('/mile-high-dna-corner/')) {
    return { priority: '0.7', changefreq: 'monthly' };
  }
  
  // Main blog index
  if (route === '/mile-high-dna-corner') {
    return { priority: '0.7', changefreq: 'monthly' };
  }
  
  // Important action pages
  if (route === '/book-appointment' || 
      route === '/get-results') {
    return { priority: '0.8', changefreq: 'monthly' };
  }
  
  // Information pages
  if (route === '/about' || 
      route === '/faq' || 
      route === '/aabb-accreditation') {
    return { priority: '0.6', changefreq: 'monthly' };
  }
  
  // Legacy and redirect-only pages - low priority
  // These should remain in sitemap if present in App.jsx but be de-prioritized
  if (route.includes('/legal-paternity-tests') ||
      route.includes('/peace-of-mind-paternity-tests') ||
      route.includes('/immigration-dna-tests') ||
      route.includes('/grandparentage-dna-tests') ||
      route.includes('/siblingship-dna-tests') ||
      route.includes('/discreet-dna-testing') ||
      route.includes('/forensic-dna-analysis')) {
    return { priority: '0.3', changefreq: 'yearly' };
  }
  
  // Other legacy patterns
  if (route === '/family-relationship-dna' ||
      route.startsWith('/products/')) {
    return { priority: '0.3', changefreq: 'yearly' };
  }
  
  // Default - medium priority
  return { priority: '0.8', changefreq: 'monthly' };
}

/**
 * Get hreflang mappings for bilingual pages
 */
function getHreflang(route) {
  const hreflangMap = {
    '/': { 'en-us': '/', 'es-us': '/es' },
    '/about': { 'en-us': '/about', 'es-us': '/es/sobre-nosotros' },
    '/legal-paternity-tests': { 'en-us': '/legal-paternity-tests', 'es-us': '/es/prueba-de-paternidad-legal' },
    '/peace-of-mind-paternity-tests': { 'en-us': '/peace-of-mind-paternity-tests', 'es-us': '/es/prueba-paternidad-tranquilidad' },
    '/immigration-dna-tests': { 'en-us': '/immigration-dna-tests', 'es-us': '/es/prueba-de-inmigracion' },
    '/grandparentage-dna-tests': { 'en-us': '/grandparentage-dna-tests', 'es-us': '/es/prueba-de-abuelidad' },
    '/siblingship-dna-tests': { 'en-us': '/siblingship-dna-tests', 'es-us': '/es/prueba-de-hermanos' },
    '/services/prenatal-paternity-testing': { 'en-us': '/services/prenatal-paternity-testing', 'es-us': '/es/prueba-de-paternidad-prenatal' },
    '/appointments': { 'en-us': '/appointments', 'es-us': '/es/programar-cita' },
    '/book-appointment': { 'en-us': '/book-appointment', 'es-us': '/es/reservar-cita' },
    '/faq': { 'en-us': '/faq', 'es-us': '/es/preguntas-frecuentes' },
    '/get-results': { 'en-us': '/get-results', 'es-us': '/es/consultar-resultados' },
    '/aabb-accreditation': { 'en-us': '/aabb-accreditation', 'es-us': '/es/aabb-accreditation' },
  };
  
  return hreflangMap[route] || null;
}

/**
 * Generate XML sitemap content
 */
function generateSitemap() {
  const routes = extractRoutesFromAppJsx();
  const currentDate = new Date().toISOString();
  
  // Sort routes: home first, then by path
  routes.sort((a, b) => {
    if (a.path === '/') return -1;
    if (b.path === '/') return 1;
    return a.path.localeCompare(b.path);
  });
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

`;

  routes.forEach(routeData => {
    const { priority, changefreq } = getPriorityAndFreq(routeData.path);
    const hreflang = getHreflang(routeData.path);
    
    sitemap += `  <url>
    <loc>${BASE_URL}${routeData.path}</loc>
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
      const { priority, changefreq } = getPriorityAndFreq(r.path);
      console.log(`   ${i + 1}. ${r.path} (priority: ${priority}, changefreq: ${changefreq})`);
    });
    
    // Verify against App.jsx
    console.log('\n✅ Verification:');
    console.log(`   - Parsed ${count} routes from App.jsx`);
    console.log(`   - All routes include priority and changefreq`);
    console.log(`   - Hreflang tags added for bilingual pages`);
    
  } catch (error) {
    console.error('❌ Error writing sitemap:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

/**
 * Main execution
 */
if (require.main === module) {
  console.log('🚀 Generating comprehensive sitemap for Mile High DNA Testing...');
  console.log(`📄 Parsing routes from: ${APP_JSX_PATH}\n`);
  writeSitemap();
}

module.exports = {
  generateSitemap,
  writeSitemap,
  extractRoutesFromAppJsx,
};
