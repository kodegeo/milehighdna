import Stripe from "stripe";
import { supabase } from "../infrastructure/supabaseClient.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function processCheckout(payload) {
  const {
    firstName,
    lastName,
    customerEmail,
    phoneNumber,
    productName,
    unitPrice,
    stripePriceId, // Resolved from productKey in checkoutRoutes
    productKey, // Product key for metadata
    testType, // Test type for metadata and customer record
    legal, // Legal flag for metadata
    shippingFee,
    orderSource,
    country,
    shippingMethod,
    locations = 1,

    // Address fields
    address,
    city,
    stateOrRegion,
    postalCode,

    // INTERNATIONAL nested address (optional)
    primaryAddress,
    secondaryAddress,

    // Dynamic URLs passed from create-checkout route
    success_url,
    cancel_url,
  } = payload;

  // 🔍 DEBUG: Log incoming productKey and resolved stripePriceId
  console.log("🔍 [CHECKOUT] Incoming productKey:", productKey);
  console.log("🔍 [CHECKOUT] Resolved stripePriceId:", stripePriceId);
  console.log("🔍 [CHECKOUT] Product name:", productName);

  // ⚠️ STRICT VALIDATION: Fail loudly if productKey or stripePriceId is missing
  if (!productKey || !productKey.trim()) {
    const errorMsg = `❌ [CHECKOUT] productKey is REQUIRED but missing. Product: ${productName || "unknown"}`;
    console.error(errorMsg);
    throw new Error(errorMsg);
  }

  if (!stripePriceId || !stripePriceId.trim()) {
    const errorMsg = `❌ [CHECKOUT] stripePriceId is REQUIRED but missing. ProductKey: ${productKey}, Product: ${productName || "unknown"}`;
    console.error(errorMsg);
    throw new Error(errorMsg);
  }

  let finalAddress = address;
  let finalCity = city;
  let finalStateOrRegion = stateOrRegion;
  let finalPostalCode = postalCode;

  // If the frontend sent nested fields
  if (primaryAddress) {
    finalAddress = primaryAddress.street || null;
    finalCity = primaryAddress.city || null;
    finalStateOrRegion = primaryAddress.region || null;
    finalPostalCode = primaryAddress.postalCode || null;
  }

  // If any field is still missing, force null
  finalAddress = finalAddress || null;
  finalCity = finalCity || null;
  finalStateOrRegion = finalStateOrRegion || null;
  finalPostalCode = finalPostalCode || null;

  try {
    // 1. Upsert customer
    // Map testType to database format (e.g., "paternity" -> "paternity", "grandparent" -> "grandparentage")
    const dbTestType = testType === "grandparent" ? "grandparentage" : (testType || "peace_of_mind");
    
    const { data: customer, error: customerErr } = await supabase
      .from("customerdb")
      .upsert(
        {
          first_name: firstName,
          last_name: lastName,
          email: customerEmail,
          phone: phoneNumber,
          test_type: dbTestType,
        },
        { onConflict: ["email"], returning: "representation" }
      )
      .select()
      .single();

    if (customerErr) throw customerErr;
    const customerId = customer.id;

    // 2. Insert order
    const orderTotal = Number(unitPrice) + Number(shippingFee);

    const orderRow = {
      customer_id: customerId,
      order_status: "Initiated",
      order_source: orderSource,
      order_total_usd: orderTotal,
      shipping_cost_usd: shippingFee,
      country,
      currency: "USD",
      shipping_method: shippingMethod,
      shipping_locations: locations,

      // Normalized address for DB
      address: finalAddress,
      city: finalCity,
      state_or_region: finalStateOrRegion,
      postal_code: finalPostalCode,

      // Save phone number into order table too
      phone_number: phoneNumber,
    };

    if (secondaryAddress) {
      orderRow.secondary_address = secondaryAddress;
    }

    const { data: order, error: orderErr } = await supabase
      .from("orders")
      .insert([orderRow])
      .select()
      .single();

    if (orderErr) throw orderErr;
    const orderId = order.id;

    // 3. Insert items
    const { error: itemErr } = await supabase.from("orderitems").insert([
      {
        order_id: orderId,
        product_name: productName,
        unit_price_usd: unitPrice,
        quantity: 1,
        line_total: unitPrice,
      },
      {
        order_id: orderId,
        product_name: "Shipping",
        unit_price_usd: shippingFee,
        quantity: 1,
        line_total: shippingFee,
      },
    ]);

    if (itemErr) throw itemErr;

    // 4. Define Stripe line items
    // stripePriceId should already be validated above, but double-check before Stripe API call
    const trimmedPriceId = stripePriceId.trim();
    console.log("🔍 [CHECKOUT] Creating Stripe session with priceId:", trimmedPriceId);
    
    if (!trimmedPriceId) {
      const errorMsg = `❌ [CHECKOUT] stripePriceId is empty after trim. ProductKey: ${productKey}, Product: ${productName}`;
      console.error(errorMsg);
      throw new Error(errorMsg);
    }

    const productLineItem = { price: trimmedPriceId, quantity: 1 };

    const lineItems = [
      productLineItem,
      {
        price_data: {
          currency: "usd",
          product_data: { name: "Shipping" },
          unit_amount: Math.round(Number(shippingFee) * 100),
        },
        quantity: 1,
      },
    ];

    // 5. Create Stripe checkout session (fix success_url!)
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: lineItems,
      customer_email: customerEmail,

      // ⭐ FIXED: use dynamic success_url & cancel_url
      success_url: success_url || `${process.env.FRONTEND_URL}/success`,
      cancel_url: cancel_url || `${process.env.FRONTEND_URL}/cancel`,

      // ⭐ Metadata must be strings
      metadata: {
        orderId: String(orderId),
        firstName: firstName || "",
        lastName: lastName || "",
        productName: productName || "",
        productKey: productKey || "", // Product key for order tracking
        testType: testType || "", // Test type (paternity, grandparent, sibling, discreet, addon)
        legal: String(legal || false), // Legal flag as string
        country: country || "",
        phoneNumber,
        shippingMethod: shippingMethod || "",
        shippingLocations: String(locations),
      },
    });

    return { url: session.url };
  } catch (err) {
    console.error("Checkout error:", err);
    return { error: err?.message || String(err) };
  }
}
