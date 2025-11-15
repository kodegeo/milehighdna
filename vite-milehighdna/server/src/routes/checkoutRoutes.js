router.post("/create-checkout", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      customerEmail,
      productName,
      unitPrice,
      shippingFee,
      country,
      shippingMethod,
      locations,
      primaryAddress,
      secondaryAddress,
    } = req.body;

    // Build success URL
    const successUrl = `${process.env.FRONTEND_URL}/confirmation?orderId={CHECKOUT_SESSION_ID}&customerEmail=${encodeURIComponent(
      customerEmail
    )}&customerName=${encodeURIComponent(
      `${firstName} ${lastName}`
    )}&productName=${encodeURIComponent(
      productName
    )}&price=${unitPrice}&shippingFee=${shippingFee}&shippingMethod=${shippingMethod}&locations=${locations}&orderType=${
      country === "US" ? "Domestic" : "International"
    }&primaryStreet=${encodeURIComponent(
      primaryAddress.street
    )}&primaryCity=${encodeURIComponent(
      primaryAddress.city
    )}&primaryState=${encodeURIComponent(
      primaryAddress.state
    )}&primaryZip=${encodeURIComponent(primaryAddress.zipCode)}${
      locations === 2
        ? `&secondaryStreet=${encodeURIComponent(
            secondaryAddress.street
          )}&secondaryCity=${encodeURIComponent(
            secondaryAddress.city
          )}&secondaryState=${encodeURIComponent(
            secondaryAddress.state
          )}&secondaryZip=${encodeURIComponent(secondaryAddress.zipCode)}`
        : ""
    }`;

    // ✅ Map fields for checkoutUtils.js
    const mappedPayload = {
      ...req.body,
      success_url: successUrl,
      address: primaryAddress.street,
      city: primaryAddress.city,
      stateOrRegion: primaryAddress.state,
      postalCode: primaryAddress.zipCode,
      secondaryAddress:
        locations === 2
          ? {
              address: secondaryAddress.street,
              city: secondaryAddress.city,
              stateOrRegion: secondaryAddress.state,
              postalCode: secondaryAddress.zipCode,
            }
          : null,
    };

    // Create checkout session
    const result = await processCheckout(mappedPayload);

    if (result.error) {
      console.error("❌ Stripe checkout session error:", result.error);
      return res.status(400).json({ error: result.error });
    }

    if (result.url) {
      const orderDetails = {
        customerName: `${firstName || ""} ${lastName || ""}`.trim(),
        productName: productName || "At Home DNA Test",
        price: Number(unitPrice || 0).toFixed(2),
        shippingFee: Number(shippingFee || 0).toFixed(2),
        total: (Number(unitPrice || 0) + Number(shippingFee || 0)).toFixed(2),
        orderType: country === "US" ? "Domestic" : "International",
        shippingMethod: shippingMethod || "Regular",
        locations: locations || 1,
        primaryAddress: primaryAddress || {},
        secondaryAddress: locations === 2 ? secondaryAddress : null,
      };

      try {
        await axios.post(
          `${process.env.BACKEND_URL || "https://milehighdna-backend.onrender.com"}/api/send-confirmation`,
          {
            toCustomer: customerEmail,
            toAdmin: "cynthia@milehighdnatesting.com",
            from: "info@milehighdnatesting.com",
            subject: `Order Confirmation - Mile High DNA Testing`,
            orderDetails,
          }
        );
      } catch (emailErr) {
        console.error(
          "❌ Error sending confirmation email:",
          emailErr.response?.data || emailErr.message
        );
      }
    }

    res.json(result);
  } catch (err) {
    console.error("❌ Checkout error:", err);
    res.status(500).json({ error: "Error creating checkout session" });
  }
});
