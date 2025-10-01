import Stripe from "stripe";
import supabase from "../infrastructure/supabaseClient.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/**
 * Create a Stripe Checkout session and persist order + items in Supabase
 */
export async function processCheckout(payload) {
  const {
    firstName,
    lastName,
    customerEmail,
    productName,
    unitPrice,
    shippingFee,
    orderSource,
    country,

    // shipping options
    shippingMethod, // "regular" | "overnight"
    locations = 1,

    // address fields for orders table
    address,
    city,
    stateOrRegion,
    postalCode,
    secondaryAddress,
  } = payload;

  try {
    // 1. Upsert customer in customerdb (no address here)
    const { data: customer } = await supabase
    .from("customerdb")
    .upsert(
      {
        first_name: firstName,
        last_name: lastName,
        email: customerEmail,
        test_type: "peace_of_mind", // default for now, can be dynamic
      },
      { onConflict: ["email"], returning: "representation" }    )
    .select()
    .single();

    if (customerErr) throw customerErr;
    const customerId = customer.id;

    // 2. Insert order in orders
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
      address: address || null,
      city: city || null,
      state_or_region: stateOrRegion || null,
      postal_code: postalCode || null,
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

    // 3. Insert order items (product + shipping)
    const { error: itemErr } = await supabase.from("orderitems").insert([
      {
        order_id: orderId,
        product_name: productName,
        unit_price: unitPrice,
        quantity: 1,
        line_total: unitPrice,
      },
      {
        order_id: orderId,
        product_name: "Shipping",
        unit_price: shippingFee,
        quantity: 1,
        line_total: shippingFee,
      },
    ]);

    if (itemErr) throw itemErr;

    // 4. Create Stripe Checkout session
    const lineItems = [
      process.env.STRIPE_TEST_PRICE_ID
        ? { price: process.env.STRIPE_TEST_PRICE_ID, quantity: 1 }
        : {
            price_data: {
              currency: "usd",
              product_data: { name: productName },
              unit_amount: Math.round(Number(unitPrice) * 100),
            },
            quantity: 1,
          },
      {
        price_data: {
          currency: "usd",
          product_data: { name: "Shipping" },
          unit_amount: Math.round(Number(shippingFee) * 100),
        },
        quantity: 1,
      },
    ];

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: lineItems,
      customer_email: customerEmail,
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
      metadata: {
        orderId,
        firstName,
        lastName,
        productName,
        country,
        shippingMethod: shippingMethod || "",
        shippingLocations: String(locations || 1),
      },
    });

    return { url: session.url };
  } catch (err) {
    console.error("Checkout error:", err);
    return { error: err?.message || String(err) };
  }
}
