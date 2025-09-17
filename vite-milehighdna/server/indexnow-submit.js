// /vite-milehighdna/server/indexnow-submit.js
const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");
const xml2js = require("xml2js");

const key = "5905CEB57CBF0561C0CECACC8EB705D6"; // must match indexnow.txt
const endpoint = "https://www.bing.com/indexnow";

async function notifyIndexNow(urls) {
  const body = {
    host: "milehighdnatesting.com",
    key: key,
    urlList: urls,
  };

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    console.log("IndexNow response:", res.status, await res.text());
  } catch (err) {
    console.error("IndexNow error:", err);
  }
}

async function getUrlsFromSitemap() {
  const sitemapPath = path.resolve(__dirname, "../public/sitemap.xml"); // sitemap location
  const sitemapXml = fs.readFileSync(sitemapPath, "utf-8");
  const parsed = await xml2js.parseStringPromise(sitemapXml);

  return parsed.urlset.url.map((entry) => entry.loc[0]);
}

(async () => {
  const urls = await getUrlsFromSitemap();
  console.log(`Submitting ${urls.length} URLs to Bing via IndexNow...`);
  await notifyIndexNow(urls);
})();
