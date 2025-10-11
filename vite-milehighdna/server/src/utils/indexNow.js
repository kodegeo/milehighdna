import axios from "axios";

const INDEXNOW_API_KEY = process.env.INDEXNOW_API_KEY; // store key in environment variable

export async function notifyIndexNow(urls = []) {
  if (!INDEXNOW_API_KEY) {
    console.warn("⚠️ INDEXNOW_API_KEY not set. Skipping IndexNow notification.");
    return;
  }

  if (!urls.length) {
    console.warn("⚠️ No URLs provided to IndexNow.");
    return;
  }

  try {
    const response = await axios.post("https://api.indexnow.org/indexnow", {
      host: "milehighdnatesting.com",
      key: INDEXNOW_API_KEY,
      keyLocation: `https://milehighdnatesting.com/${INDEXNOW_API_KEY}.txt`,
      urlList: urls,
    }, {
      headers: { "Content-Type": "application/json" },
    });

    console.log(`✅ IndexNow ping successful (${urls.length} URLs):`, urls);
    return response.data;
  } catch (error) {
    console.error("❌ IndexNow ping failed:", error.message);
  }
}
