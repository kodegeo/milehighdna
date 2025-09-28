import Stripe from "stripe";
import supabase from "../infrastructure/supabaseClient.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function processCheckout({
  firstName,
  lastName,
  customerEmail,
  productName,
  unitPrice,
  shippingFee,
  orderSource,
  country,
  shippingMethod,
  locations,
  primaryAddress,     // stays in customerdb
  secondaryAddress,   // stored in orders if present
}) {
  try {
    // 1. Upsert customer in customerdb
    const { data: customer, error: customerErr } = await supabase
      .from("customerdb")
      .upsert(
        [
          {
            first_name: firstName,
            last_name: lastName,
            email: customerEmail,
            address: primaryAddress || null, // primary lives here
          },
        ],
        { onConflict: ["email"] }
      )
      .select()
      .single();

    if (customerErr) throw customerErr;
    const customerId = customer.id;

    // 2. Insert order into orders with new fields
    const orderTotal = unitPrice + shippingFee;
    const { data: order, error: orderErr } = await supabase
      .from("orders")
      .insert([
        {
          customer_id: customerId,
          order_status: "Initiated",
          order_source: orderSource,
          order_total_usd: orderTotal,
          shipping_cost_usd: shippingFee,
          country,
          currency: "USD",
          shipping_method: shippingMethod,
          shipping_locations: locations,
          secondary_address: secondaryAddress || null,
        },
      ])
      .select()
      .single();

    if (orderErr) throw orderErr;
    const orderId = order.id;

    // 3. Insert order items
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

    // 4. Create Stripe checkout session with metadata
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: productName },
            unit_amount: Math.round(unitPrice * 100),
          },
          quantity: 1,
        },
        {
          price_data: {
            currency: "usd",
            product_data: { name: "Shipping" },
            unit_amount: Math.round(shippingFee * 100),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
      metadata: {
        orderId,
        customerId,
        shippingMethod,
        shippingLocations: locations,
        secondaryAddress: secondaryAddress || "",
      },
    });

    return { url: session.url };
  } catch (err) {
    console.error("Checkout error:", err);
    return { error: err.message };
  }
}
