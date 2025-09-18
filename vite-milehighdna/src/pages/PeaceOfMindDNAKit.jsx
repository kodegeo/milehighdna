import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { loadStripe } from "@stripe/stripe-js";
import { createClient } from "@supabase/supabase-js";
import peaceOfMindKitImage from "../assets/images/peace-of-mind-kit.jpg";
import { getShippingFee } from "../utils/shipping";


// Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// Supabase (⚠️ use anon key, not service key)
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const PeaceOfMindDNAKit = () => {
  const [showUSModal, setShowUSModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form state for collecting customer info
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [country, setCountry] = useState("US"); // default U.S.

  const benefits = [
    "Fast results in 3-5 business days",
    "99.9% accuracy guarantee",
    "Completely confidential and private",
    "Easy-to-use home collection kit",
    "Professional laboratory testing",
    "Detailed results report included",
    "No court appearance required",
    "Affordable pricing with no hidden fees",
  ];

  const createCheckout = async (type, countryCode = "US") => {
    try {
      setLoading(true);
  
      const shippingFee = await getShippingFee(type, countryCode);
  
      // Validate inputs
      if (!firstName.trim() || !lastName.trim() || !customerEmail.trim()) {
        alert("Please enter your first name, last name, and email before checkout.");
        setLoading(false);
        return;
      }
  
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
              test_type: "Online Paternity",
            },
          ])
          .select()
          .single();
  
        if (newCustErr) throw newCustErr;
        customer = newCustomer;
      }
      const customerId = customer.id;
  
      // Step 2: Insert order
      const orderTotal = 199 + shippingFee;
  
      const { data: order, error: orderErr } = await supabase
        .from("orders")
        .insert([
          {
            customer_id: customerId,
            order_status: "Initiated",
            order_source: type === "domestic" ? "online_domestic" : "online_international",
            order_total_usd: orderTotal,
            shipping_cost_usd: shippingFee,
            country: countryCode,
            currency: "USD",
          },
        ])
        .select()
        .single();
  
      if (orderErr) throw orderErr;
      const orderId = order.id;
  
      // Step 3: Insert order items
      const { error: itemsErr } = await supabase.from("orderitems").insert([
        {
          order_id: orderId,
          product_name: "Peace of Mind Paternity Kit",
          quantity: 1,
          unit_price_usd: 199,
        },
        {
          order_id: orderId,
          product_name: "Shipping",
          quantity: 1,
          unit_price_usd: shippingFee,
        },
      ]);
      if (itemsErr) throw itemsErr;
  
      // Step 4: Call backend to create Stripe Checkout
      const resp = await fetch(`${import.meta.env.VITE_API_URL}/api/payments/create-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId,
          customerCode: `CUST-${customerId}`,
          firstName,
          lastName,
          email: customerEmail,
          productName: "Peace of Mind Paternity Kit",
          subtotalUsd: 199,
          shippingUsd: shippingFee,
          orderSource: type === "domestic" ? "online_domestic" : "online_international",
          country: countryCode,
        }),
      });
  
      const result = await resp.json();
      if (result.error) {
        alert(result.error);
        return;
      }
  
      if (result.url) {
        window.location.href = result.url;
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Something went wrong. Please try again or contact info@milehighdnatesting.com");
    } finally {
      setLoading(false);
    }
  };
    
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Peace of Mind DNA Test Kit | Mile High DNA</title>
        <meta
          name="description"
          content="Confidential, accurate paternity test results for personal knowledge only. Fast, discreet home collection kit with 99%+ accuracy. Not for legal use."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src={peaceOfMindKitImage}
                  alt="Peace of Mind Paternity Test Kit"
                  className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  $199 + Shipping
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Peace of Mind
                    <span className="block text-blue-600">
                      Paternity Test Kit
                    </span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Get the answers you need with our fast, accurate, and
                    completely confidential paternity test. Perfect for personal
                    peace of mind without the legal requirements.
                  </p>
                </div>

                {/* Customer Info Form */}
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full border rounded-lg px-4 py-2"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full border rounded-lg px-4 py-2"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)} required
                    className="w-full border rounded-lg px-4 py-2"
                  />

                  {/* Country select (for international orders) */}
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full border rounded-lg px-4 py-2"
                  >
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="MX">Mexico</option>
                    <option value="GB">United Kingdom</option>
                    <option value="DE">Germany</option>
                    <option value="IN">India</option>
                    <option value="AU">Australia</option>
                    <option value="BR">Brazil</option>
                    <option value="ZA">South Africa</option>
                    {/* Add more as needed */}
                  </select>
                </div>

                {/* Benefits List */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    What's Included:
                  </h3>
                  <ul className="space-y-2">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4 pt-6">
                  {/* U.S. Order Button (with modal for Appointment vs Ship) */}
                  <button
                    onClick={() => setShowUSModal(true)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    Order Within the U.S.
                  </button>

                  {/* International Button */}
                  <button
                    onClick={() => createCheckout("international", country)}
                    disabled={loading}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300 disabled:opacity-50"
                  >
                    {loading ? "Processing..." : "Order Internationally"}
                  </button>
                </div>
                <p className="text-xs text-gray-500 text-center">
                  Secure checkout powered by Stripe
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* U.S. Order Modal */}
      {showUSModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Choose Your Order Method
              </h2>
              <button
                onClick={() => setShowUSModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => {
                  window.open(
                    "https://calendly.com/milehighdnatesting/non-legal-paternity-test",
                    "_blank"
                  );
                  setShowUSModal(false);
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Schedule In-Office Appointment
              </button>

              <button
                onClick={() => createCheckout("domestic", "US")}
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 disabled:opacity-50"
              >
                {loading ? "Processing..." : "Ship to My Address"}
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-4 text-center">
              Both options include the same comprehensive test kit and results.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PeaceOfMindDNAKit;
