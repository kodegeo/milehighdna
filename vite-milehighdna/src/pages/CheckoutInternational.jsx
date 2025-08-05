import React, { useState } from "react";
import { supabase } from "../infrastructure/supabaseClient";
import shippingRates from "../data/Intl_Shipping_Rates.json";

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

  const selectedRate = shippingRates.find(
    (rate) => rate.country_name === form.country
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const customerCode = generateCustomerCode();
    const orderTotal = 99.0; // Base kit price, can adjust for international
    const shippingCost = selectedRate
      ? selectedRate.estimated_shipping_cost_usd
      : 0.0;

    try {
      // 1. Insert into CustomerDb
      const { data: customerData, error: customerError } = await supabase
        .from("CustomerDb")
        .insert([
          {
            first_name: form.firstName,
            last_name: form.lastName,
            email: form.email,
            phone: form.phone,
            customer_code: customerCode,
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
            order_status: "Pending",
            order_total_usd: orderTotal + shippingCost,
            shipping_cost_usd: shippingCost,
            shipping_days: selectedRate
              ? selectedRate.estimated_shipping_days
              : null,
            prepaid_return: true,
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
          product_name: "Peace of Mind Paternity Test Kit",
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
        <p className="text-gray-600 mb-4">
          Peace of Mind Paternity Test Kit
        </p>

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
            <option key={rate.iso_code} value={rate.country_name}>
              {rate.country_name}
            </option>
          ))}
        </select>

        {selectedRate && (
          <div className="bg-gray-100 p-4 rounded font-semibold space-y-1">
            <p>
              Estimated Shipping: {selectedRate.estimated_shipping_days} business
              days
            </p>
            <p>
              Shipping Cost: $
              {selectedRate.estimated_shipping_cost_usd.toFixed(2)} USD
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
