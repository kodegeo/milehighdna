import React, { useState } from "react";
import { supabase } from "../infrastructure/supabaseClient";
import shippingRates from "../data/shipping_rates.json";

function generateCustomerCode() {
  const prefix = "MH";
  const randomNum = Math.floor(10000 + Math.random() * 90000);
  return `${prefix}${randomNum}`;
}

const CheckoutInternational = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const norm = (s) => String(s || "").trim().toLowerCase();
    const selectedRate = form.country 
    ? shippingRates.find((rate) => 
    norm(rate.country) === norm(form.country) || norm(rate.iso) === norm(form.country)) : null;
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const customerCode = generateCustomerCode();
    const orderTotal = 199.0; // Base kit price, can adjust for international
    const shippingCost = selectedRate ? Number(selectedRate.finalrate) : 0;

    try {
      // 1. Insert into CustomerDb
      const { data: customerData, error: customerError } = await supabase
        .from("customerdb")
        .insert([
          {
            first_name: form.firstName,
            last_name: form.lastName,
            email: form.email,
            phone: form.phone,
            customer_code: customerCode,
            use_case: "at_home_kit",  // online orders = at-home kits (non-legal)
            test_type: "paternity",   // at-home kits are paternity
          },
        ])
        .select()
        .single();

      if (customerError) throw customerError;
      const customerId = customerData.id;

      // 2. Insert into Orders
      const { data: orderData, error: orderError } = await supabase
        .from("orders")
        .insert([
          {
            customer_id: customerId,
            order_source: "online_international",
            order_type: "at_home_kit",          // add for consistent reporting
            order_status: "Pending",
            order_total_usd: orderTotal,        // items subtotal ONLY (align w/ domestic)
            shipping_cost_usd: shippingCost,
            shipping_zone: selectedRate ? selectedRate.zone : null,
            shipping_export_usd: selectedRate ? Number(selectedRate.export) : null,
            shipping_import_usd: selectedRate ? Number(selectedRate.import) : null,
            shipping_roundtrip_usd: selectedRate ? Number(selectedRate.roundtrip) : null,
            shipping_days: selectedRate
              ? selectedRate.estimated_shipping_days
              : null,
              address: form.address,
            city: form.city,
            state_or_region: null,
            postal_code: form.postalCode,
            country: form.country,

          },
        ])
        .select()
        .single();

      if (orderError) throw orderError;
      const orderId = orderData.id;

      // 3. Insert into OrderItems
      const { error: itemError } = await supabase.from("orderitems").insert([
        {
          order_id: orderId,
          product_name: "At-Home Paternity Test Kit",
          quantity: 1,
          unit_price_usd: orderTotal,
        },
      ]);

      if (itemError) throw itemError;

      setSuccessMessage(
        `Order submitted successfully! Your Customer Code is ${customerCode}`
      );

      // Reset form
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
      });
    } catch (error) {
      console.error("Error submitting international order:", error.message);
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
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          International Checkout
        </h2>
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
        <div className="grid grid-cols-2 gap-2">
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
            name="postalCode"
            placeholder="Postal Code"
            value={form.postalCode}
            onChange={handleChange}
            required
          />
        </div>

        <select
          className="border p-2 rounded w-full"
          name="country"
          value={form.country}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Country --</option>
          {shippingRates.map((rate) => (
            <option key={rate.iso} value={rate.country}>
              {rate.country}
            </option>
          ))}
        </select>

        {selectedRate && (
          <div className="bg-gray-100 p-4 rounded font-semibold space-y-1">
            <p>
              Shipping Cost (includes round-trip): ${selectedRate.finalrate.toFixed(2)} USD
            </p>
            <p className="text-sm text-gray-500">
              Based on round-trip DHL rates to/from {selectedRate.zone}
            </p>
            {selectedRate.prepaid_return_available && (
              <p>✅ Prepaid return included</p>
            )}
          </div>
        )}

        {successMessage && (
          <div className="bg-green-100 text-green-800 p-4 rounded">
            {successMessage}
          </div>
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

export default CheckoutInternational;
