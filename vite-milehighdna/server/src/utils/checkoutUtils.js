import { supabase } from "../infrastructure/supabaseClient";

export async function processCheckout({
  firstName,
  lastName,
  customerEmail,
  productName,
  unitPrice,
  quantity,
  shippingFee,
  country,
  orderSource = "online_domestic",
}) {
  // Step 1: Upsert customer
  let { data: customer, error: custErr } = await supabase
    .from("customerdb")
    .select("id")
    .eq("email", customerEmail.trim().toLowerCase())
    .maybeSingle();
  if (custErr) throw custErr;

  if (!customer) {
    const { data: newCustomer, error: newCustErr } = await supabase
      .from("customerdb")
      .insert([
        {
          first_name: firstName.trim(),
          last_name: lastName.trim(),
          email: customerEmail.trim().toLowerCase(),
          test_type: "Online Order",
        },
      ])
      .select()
      .single();
    if (newCustErr) throw newCustErr;
    customer = newCustomer;
  }
  const customerId = customer.id;

  // Step 2: Insert order
  const subtotal = unitPrice * quantity;
  const orderTotal = subtotal + shippingFee;

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
      },
    ])
    .select()
    .single();
  if (orderErr) throw orderErr;
  const orderId = order.id;

  // Step 3: Insert order items
  const itemsToInsert = [
    {
      order_id: orderId,
      product_name: productName,
      quantity,
      unit_price_usd: unitPrice,
    },
  ];
  if (shippingFee > 0) {
    itemsToInsert.push({
      order_id: orderId,
      product_name: "Shipping",
      quantity: 1,
      unit_price_usd: shippingFee,
    });
  }

  const { error: itemsErr } = await supabase.from("orderitems").insert(itemsToInsert);
  if (itemsErr) throw itemsErr;

  // Step 4: Stripe session
  const resp = await fetch(
    `${import.meta.env.VITE_API_URL}/api/payments/create-session`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        orderId,
        customerCode: `CUST-${customerId}`,
        firstName,
        lastName,
        email: customerEmail,
        productName,
        subtotalUsd: subtotal,
        shippingUsd: shippingFee,
        orderSource,
        country,
      }),
    }
  );

  const result = await resp.json();
  if (result.error) throw new Error(result.error);
  return result;
}
