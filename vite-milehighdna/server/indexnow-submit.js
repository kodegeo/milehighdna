// /vite-milehighdna/server/indexnow-submit.js
const fetch = require("node-fetch");

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
    const text = await res.text();
    console.log("IndexNow response:", text);
  } catch (err) {
    console.error("IndexNow error:", err);
  }
}

// Example URLs
notifyIndexNow([
  "https://milehighdnatesting.com/prenatal-dna-test",
  "https://milehighdnatesting.com/es/prueba-prenatal"
]);
