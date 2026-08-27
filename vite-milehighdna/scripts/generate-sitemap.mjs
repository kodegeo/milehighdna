#!/usr/bin/env node
/**
 * generate-sitemap.mjs
 *
 * Single source of truth for milehighdnatesting.com's sitemap.
 * Run at build time so the sitemap can never drift from the router again.
 *
 *   package.json →  "build": "node scripts/generate-sitemap.mjs && vite build"
 *
 * Root cause this fixes: the sitemap was hand-maintained. After the January
 * URL restructure it still advertised the OLD /legal-paternity-tests style
 * URLs at priority 0.1 and omitted every new /services/* URL entirely.
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ORIGIN = "https://milehighdnatesting.com";
const OUT = resolve(dirname(fileURLToPath(import.meta.url)), "../public/sitemap.xml");
const TODAY = new Date().toISOString().split("T")[0];

/* ------------------------------------------------------------------ *
 * EXCLUDED — never put these in a sitemap.
 * Private tooling, transactional endpoints, thin/duplicate routes, and
 * anything disallowed in robots.txt (a URL must never be in both).
 * ------------------------------------------------------------------ */
const EXCLUDED = new Set([
  "/admin-dashboard", "/admin-uploader", "/test-admin", "/reset-password",
  "/my-results", "/my-results-page", "/get-results",
  "/es/admin-uploader", "/es/restablecer-contrasena",
  "/es/mis-resultados", "/es/pagina-de-resultados", "/es/consultar-resultados",
  "/checkout-domestic", "/checkout-international",
  "/confirmation", "/cancel", "/success",
  "/appointment-form", "/appointment-wizard",
  // Already 301'd at the edge in vercel.json (cost-guide consolidation).
  // A URL must never be both a redirect source and a sitemap entry.
  "/guides/aabb-labs-for-immigration",
  "/mile-high-dna-corner/legal-dna-cost-guide",
  "/mile-high-dna-corner/non-legal-dna-cost-guide",
  "/mile-high-dna-corner/prenatal-dna-cost-guide",
]);

/* ------------------------------------------------------------------ *
 * hreflang pairs. Verified against the live router.
 * ------------------------------------------------------------------ */
const ALT = {
  "/": "/es",
  "/about": "/es/sobre-nosotros",
  "/faq": "/es/preguntas-frecuentes",
  "/appointments": "/es/programar-cita",
  "/shop": "/es/tienda",
  "/partner-laboratory-denver": "/es/laboratorio-asociado-denver",
  "/services/legal-paternity-testing": "/es/prueba-de-paternidad-legal",
  "/services/non-legal-paternity-testing": "/es/prueba-paternidad-tranquilidad",
  "/services/prenatal-paternity-testing": "/es/prueba-de-paternidad-prenatal",
  "/services/immigration-dna-testing": "/es/prueba-de-inmigracion",
  "/services/grandparentage-testing": "/es/prueba-de-abuelidad",
  "/services/siblingship-testing": "/es/prueba-de-hermanos",
};

const LOCATIONS = [
  "arvada", "aurora", "boulder", "centennial", "colorado-springs", "denver",
  "englewood", "fort-collins", "greeley", "lakewood", "littleton", "longmont",
  "loveland", "pueblo", "thornton", "westminster",
];

const GUIDES = [
  "aabb-labs-for-immigration", "accredited-laboratories-immigration-dna-testing",
  "avuncular-dna-testing-explained", "chain-of-custody-dna-testing",
  "court-admissible-dna-testing", "dna-test-for-child-custody", "dna-test-for-court",
  "dna-test-while-pregnant", "dna-test-without-the-father", "dna-testing-after-death",
  "dna-testing-denver", "dna-testing-results-explained", "embassy-dna-testing",
  "grandparent-dna-testing-explained", "how-accurate-is-dna-testing",
  "how-dna-testing-works", "how-long-does-dna-testing-take",
  "how-to-prepare-for-a-dna-test", "immigration-dna-test-timeline",
  "immigration-dna-testing-process", "legal-dna-test-cost", "non-legal-dna-test-cost",
  "paternity-test-guide", "prenatal-dna-test-cost", "prenatal-dna-test-cost-breakdown",
  "prenatal-dna-test-timeline", "prenatal-paternity-test-accuracy",
  "prenatal-paternity-test-safety", "siblingship-dna-testing-explained",
  "single-profile-dna-testing", "uscis-dna-testing",
];

const CORNER = [
  "best-at-home-paternity-dna-kit-denver", "dna-test-near-me-denver",
  "family-relationship-dna-testing-denver", "how-much-does-a-prenatal-dna-test-cost",
  "how-reliable-and-accurate-are-home-dna-tests", "immigration-dna-testing-denver",
  "legal-dna-cost-guide", "legal-vs-non-legal-dna-test", "non-legal-dna-cost-guide",
  "peace-of-mind-paternity-testing-denver", "prenatal-dna-cost-guide",
  "prenatal-paternity-testing-denver",
  "what-to-expect-non-invasive-prenatal-dna-test-denver",
  "when-dna-tells-the-truth-paternity-testing-denver",
  "why-bilingual-dna-testing-matters-denver",
];

const SHOP = [
  "at-home-paternity-test", "at-home-paternity-test-multiple-children",
  "discreet-dna-test", "fast-track-results-upgrade", "grandparent-dna-test",
  "multi-location-paternity-dna-test", "paternity-dna-test",
  "peace-of-mind-dna-test", "sibling-dna-test",
];

/* priority / changefreq  — money pages first */
const routes = [
  ["/", 1.0, "daily"],

  // Revenue-driving service pages (these were MISSING from the old sitemap)
  ["/services", 0.9, "weekly"],
  ["/services/legal-paternity-testing", 0.9, "weekly"],
  ["/services/non-legal-paternity-testing", 0.9, "weekly"],
  ["/services/prenatal-paternity-testing", 0.9, "weekly"],
  ["/services/immigration-dna-testing", 0.9, "weekly"],
  ["/services/siblingship-testing", 0.8, "monthly"],
  ["/services/grandparentage-testing", 0.8, "monthly"],
  ["/services/at-home-dna-kits", 0.8, "monthly"],
  ["/services/avuncular-dna-testing", 0.7, "monthly"],
  ["/services/discreet-dna-testing", 0.7, "monthly"],
  ["/services/infidelity-dna-testing", 0.6, "monthly"],
  ["/services/postmortem-paternity-testing", 0.6, "monthly"],
  ["/services/single-dna-profile", 0.6, "monthly"],
  ["/services/forensic-dna-analysis", 0.6, "monthly"],
  ["/services/gender-reveal-dna-testing", 0.6, "monthly"],
  ["/services/gps-origins-dna-test", 0.6, "monthly"],
  ["/services/twin-zygosity-testing", 0.5, "monthly"],
  ["/services/y-str-dna-testing", 0.5, "monthly"],
  ["/services/mtdna-testing", 0.5, "monthly"],
  ["/services/healthy-weight-dna-test", 0.5, "monthly"],
  ["/services/lifestyle-ancestry-dna-testing", 0.5, "monthly"],

  ["/appointments", 0.9, "weekly"],
  ["/shop", 0.8, "weekly"],
  ["/locations", 0.7, "monthly"],
  ["/guides", 0.7, "weekly"],
  ["/mile-high-dna-corner", 0.7, "weekly"],
  ["/dna-testing-colorado", 0.6, "monthly"],
  ["/family-relationship-dna", 0.6, "monthly"],
  ["/about", 0.6, "monthly"],
  ["/faq", 0.6, "monthly"],
  ["/why-choose-us", 0.6, "monthly"],
  ["/partner-laboratory-denver", 0.5, "monthly"],

  ...LOCATIONS.map((s) => [`/locations/${s}`, 0.7, "monthly"]),
  ...GUIDES.map((s) => [`/guides/${s}`, 0.7, "monthly"]),
  ...CORNER.map((s) => [`/mile-high-dna-corner/${s}`, 0.6, "monthly"]),
  ...SHOP.map((s) => [`/shop/${s}`, 0.7, "weekly"]),

  // Spanish
  ["/es", 0.9, "daily"],
  ["/es/prueba-de-paternidad-legal", 0.9, "weekly"],
  ["/es/prueba-paternidad-tranquilidad", 0.9, "weekly"],
  ["/es/prueba-de-paternidad-prenatal", 0.9, "weekly"],
  ["/es/prueba-de-inmigracion", 0.9, "weekly"],
  ["/es/prueba-de-abuelidad", 0.8, "monthly"],
  ["/es/prueba-de-hermanos", 0.8, "monthly"],
  ["/es/programar-cita", 0.8, "weekly"],
  ["/es/tienda", 0.7, "weekly"],
  ["/es/sobre-nosotros", 0.6, "monthly"],
  ["/es/preguntas-frecuentes", 0.6, "monthly"],
  ["/es/laboratorio-asociado-denver", 0.5, "monthly"],
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const seen = new Set();
const entries = [];

for (const [path, priority, changefreq] of routes) {
  if (EXCLUDED.has(path)) continue;
  if (seen.has(path)) {
    console.warn(`  duplicate route skipped: ${path}`);
    continue;
  }
  seen.add(path);

  const en = Object.entries(ALT).find(([k]) => k === path);
  const es = Object.entries(ALT).find(([, v]) => v === path);

  let alternates = "";
  if (en) {
    alternates =
      `\n    <xhtml:link rel="alternate" hreflang="en-us" href="${ORIGIN}${en[0] === "/" ? "/" : en[0]}" />` +
      `\n    <xhtml:link rel="alternate" hreflang="es-us" href="${ORIGIN}${en[1]}" />` +
      `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${ORIGIN}${en[0] === "/" ? "/" : en[0]}" />`;
  } else if (es) {
    alternates =
      `\n    <xhtml:link rel="alternate" hreflang="en-us" href="${ORIGIN}${es[0] === "/" ? "/" : es[0]}" />` +
      `\n    <xhtml:link rel="alternate" hreflang="es-us" href="${ORIGIN}${es[1]}" />` +
      `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${ORIGIN}${es[0] === "/" ? "/" : es[0]}" />`;
  }

  entries.push(
    `  <url>\n` +
      `    <loc>${esc(ORIGIN + path)}</loc>\n` +
      `    <lastmod>${TODAY}</lastmod>\n` +
      `    <changefreq>${changefreq}</changefreq>\n` +
      `    <priority>${priority.toFixed(1)}</priority>${alternates}\n` +
      `  </url>`
  );
}

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
  `        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
  entries.join("\n") +
  `\n</urlset>\n`;

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, xml, "utf8");
console.log(`sitemap.xml written — ${entries.length} URLs → ${OUT}`);
