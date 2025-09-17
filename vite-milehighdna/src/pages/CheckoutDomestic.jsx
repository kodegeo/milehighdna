import React, { useState } from "react";
import { supabase } from "../infrastructure/supabaseClient";

function generateCustomerCode() {
  const prefix = "MH";
  const randomNum = Math.floor(10000 + Math.random() * 90000);
  return `${prefix}${randomNum}`;
}

const CheckoutDomestic = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const customerCode = generateCustomerCode();
    const orderTotal = 199.0;                 // items subtotal
    const DOMESTIC_FLAT_RATE = 12.00; // New flat-rate shipping
    const shippingCost = DOMESTIC_FLAT_RATE;

    try {
      // 1) Customer
      const { data: customerData, error: customerError } = await supabase
        .from("customerdb")
        .insert([
          {
            first_name: form.firstName,
            last_name: form.lastName,
            email: form.email,
            phone: form.phone,
            customer_code: customerCode,
            use_case: "at_home_kit", // online orders = at-home kits (non-legal)
            test_type: "paternity",  // at-home kits are paternity
          },
        ])
        .select()
        .single();
      if (customerError) throw customerError;

      // 2) Order
      const { data: orderData, error: orderError } = await supabase
        .from("orders")
        .insert([
          {
            customer_id: customerData.id,
            order_source: "online_domestic",
            order_type: "at_home_kit",         // add to match international flow
            order_status: "Pending",
            order_total_usd: orderTotal,
            shipping_cost_usd: shippingCost,
            address: form.address,
            city: form.city,
            state_or_region: form.state,
            postal_code: form.zip,
            country: "United States",
          },
        ])
        .select()
        .single();
      if (orderError) throw orderError;

      // 3) Order item
      const { error: itemError } = await supabase.from("orderitems").insert([
        {
          order_id: orderData.id,
          product_name: "At-Home Paternity Test Kit",
          quantity: 1,
          unit_price_usd: orderTotal,
        },
      ]);
      if (itemError) throw itemError;

      // 4) Confirmation email
      await fetch("/api/send-confirmation-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          toCustomer: form.email,
          toAdmin: "cynthia@milehighdnatesting.com",
          from: "info@milehighdnatesting.com",
          subject: "Order Confirmation – At-Home DNA Kit",
          orderDetails: {
            customerName: `${form.firstName} ${form.lastName}`,
            orderNumber: customerCode,
            productName: "At-Home Paternity DNA Kit",
            price: orderTotal.toFixed(2),
            shipping: shippingCost.toFixed(2), // 12.00
            total: (orderTotal + shippingCost).toFixed(2), // 111.00
            orderType: "domestic",
          },
        }),
      });

      // Success UI
      setSuccessMessage(
        `Order submitted! Code: ${customerCode}. Total: $${(orderTotal + shippingCost).toFixed(2)} (Items $${orderTotal.toFixed(2)} + Shipping $${shippingCost.toFixed(2)})`
      );
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
      });
    } catch (error) {
      console.error("Error submitting order:", error?.message || error);
      alert("There was an issue submitting your order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md max-w-lg w-full space-y-4"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Domestic Checkout</h2>
        <p className="text-gray-600 mb-4">At-Home Paternity Test Kit</p>

        <div className="grid grid-cols-2 gap-4">
          <input
            className="border p-2 rounded"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            required
          />
          <input
            className="border p-2 rounded"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <input
          className="border p-2 rounded w-full"
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="border p-2 rounded w-full"
          name="phone"
          type="tel"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          className="border p-2 rounded w-full"
          name="address"
          placeholder="Street Address"
          value={form.address}
          onChange={handleChange}
          required
        />
        <div className="grid grid-cols-3 gap-2">
          <input
            className="border p-2 rounded"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            required
          />
          <input
            className="border p-2 rounded"
            name="state"
            placeholder="State"
            value={form.state}
            onChange={handleChange}
            required
          />
          <input
            className="border p-2 rounded"
            name="zip"
            placeholder="ZIP Code"
            value={form.zip}
            onChange={handleChange}
            required
          />
        </div>

        {successMessage && (
          <div className="bg-green-100 text-green-800 p-4 rounded">{successMessage}</div>
        )}

        <button
          className="bg-blue-600 text-white py-3 rounded-lg w-full hover:bg-blue-700 font-semibold"
          type="submit"
          disabled={loading}
        >
          {loading ? "Processing..." : "Submit Order"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutDomestic;
