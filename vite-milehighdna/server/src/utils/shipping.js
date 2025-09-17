export async function getShippingFee(type, countryCode) {
    try {
      const resp = await fetch(
        `${import.meta.env.VITE_API_URL}/api/shipping/rate?country=${countryCode}`
      );
      if (!resp.ok) throw new Error("Failed to fetch shipping rate");
      const { shipping } = await resp.json();
      return shipping;
    } catch (err) {
      console.error("Shipping API error:", err);
      return type === "domestic" ? 15 : 50; // fallback defaults
    }
  }
  