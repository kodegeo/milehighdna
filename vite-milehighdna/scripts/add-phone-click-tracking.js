/**
 * Automated Phone Click Tracking Injector for Mile High DNA Testing
 * ---------------------------------------------------------------
 * This Cursor script:
 *  1. Scans all .jsx files recursively
 *  2. Detects <a href="tel:..."> phone links
 *  3. Adds a tracking onClick handler if missing:
 *        onClick={() => {
 *          window.dataLayer = window.dataLayer || [];
 *          window.dataLayer.push({
 *            event: "phone_click",
 *            phone_number: "<detected number>",
 *            page_path: window.location.pathname,
 *            source_component: "<file>"
 *          });
 *        }}
 *  4. Skips links that already contain onClick
 *  5. Saves modified files
 *  6. Prints a report
 */

const fs = require("fs");
const path = require("path");

const ROOT_DIR = "./src"; // change if needed

// Regex to match tel links WITHOUT existing onClick
const TEL_REGEX = /<a([^>]*?)href=["']tel:([^"']+)["'](?![^>]*onClick)([^>]*)>/g;

const results = {
  updated: [],
  skipped: [],
  noTelFound: []
};

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      walk(filePath);
    } else if (file.endsWith(".jsx")) {
      processFile(filePath);
    }
  }
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  const originalContent = content;

  let modified = false;

  content = content.replace(TEL_REGEX, (match, beforeAttrs, phoneNumber, afterAttrs) => {
    modified = true;

    const safePhone = phoneNumber.trim();
    const componentName = path.basename(filePath);

    return `<a${beforeAttrs}href="tel:${safePhone}" onClick={() => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "phone_click",
        phone_number: "${safePhone}",
        page_path: window.location.pathname,
        source_component: "${componentName}"
      });
    }}${afterAttrs}>`;
  });

  if (modified) {
    fs.writeFileSync(filePath, content, "utf8");
    results.updated.push(filePath);
  } else {
    // Check whether file contains ANY tel: links
    if (/href=["']tel:/.test(originalContent)) {
      results.skipped.push(filePath);
    } else {
      results.noTelFound.push(filePath);
    }
  }
}

// Run script
console.log("\n📞 Running Phone Click Tracking Injector...\n");
walk(ROOT_DIR);

console.log("✅ DONE\n");

console.log("📌 Updated Files:");
console.table(results.updated);

console.log("\n📌 Already Tracked (Skipped):");
console.table(results.skipped);

console.log("\n📌 No Phone Links Found:");
console.table(results.noTelFound);

console.log("\n📣 IMPORTANT:");
console.log("➡ Review changes in Git before committing.");
console.log("➡ Then deploy to Vercel.");
console.log("\n");
