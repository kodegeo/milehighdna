/**
 * @deprecated This page is no longer used. The route /products/peace-of-mind-dna-kit
 * redirects to /shop/at-home-paternity-test. See src/pages/shop/AtHomePaternityTest.jsx.
 * File kept for reference; safe to remove in a future cleanup.
 */
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import peaceOfMindKitImage from "../assets/images/peace-of-mind-kit.jpg";

const PeaceOfMindDNAKit = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [domesticShipping, setDomesticShipping] = useState(null);
  const [internationalShipping, setInternationalShipping] = useState(null);

  const price = 199;
  const productName = "At Home DNA Testing Kit";

  // Fetch shipping rates from backend
  useEffect(() => {
    // Domestic (US)
    fetch(`${import.meta.env.VITE_API_URL}/api/shipping/rate?country=US`)
      .then((res) => res.json())
      .then((data) => setDomesticShipping(data.shipping.regular))
      .catch((err) => console.error("Domestic shipping fetch error:", err));
  
    // International (default Canada preview)
    fetch(`${import.meta.env.VITE_API_URL}/api/shipping/rate?country=CA`)
      .then((res) => res.json())
      .then((data) => setInternationalShipping(Number(data.shipping?.regular ?? 0)))
      .catch((err) => console.error("International shipping fetch error:", err));
  }, []);
  
  const goToDomestic = () => {
    if (!firstName || !lastName || !customerEmail) {
      alert("Please fill in your details before continuing.");
      return;
    }
    navigate("/checkout-domestic", {
      state: {
        firstName,
        lastName,
        customerEmail,
        phoneNumber,   // <-- ADD THIS
        country: "US",
        productName,
        unitPrice: price,
        shippingFee: domesticShipping,
      },
    });    
  };

  const goToInternational = () => {
    if (!firstName || !lastName || !customerEmail) {
      alert("Please fill in your details before continuing.");
      return;
    }
    navigate("/checkout-international", {
      state: {
        firstName,
        lastName,
        customerEmail,
        phoneNumber,   // <-- ADD THIS
        productName,
        unitPrice: price,
        shippingFee: internationalShipping,
      },
    });    
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>At Home DNA Testing Kit | Mile High DNA</title>
        <meta
          name="description"
          content="Order your At Home DNA Testing Kit online. Choose domestic (U.S.) or international shipping for fast, confidential results."
        />
      </Helmet>

      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><a href="/" className="hover:text-gray-700">Home</a></li>
            <li>/</li>
            <li><span className="text-gray-900">At Home DNA Testing Kit</span></li>
          </ol>
        </nav>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image Section */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={peaceOfMindKitImage}
                  alt="At Home DNA Testing Kit"
                  className="w-full h-full object-contain p-4"
                />
              </div>
              
              {/* Product Features */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Key Features</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Fast, Accurate, Confidential</li>
                  <li>• Non-legal, at-home testing</li>
                  <li>• Easy-to-use collection kit</li>
                  <li>• Professional laboratory analysis</li>
                </ul>
              </div>
            </div>

            {/* Product Details Section */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  At Home DNA Testing Kit
                </h1>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-3xl font-bold text-green-600">${Number(price).toFixed(2)}</span>
                  <span className="text-sm text-gray-500">+ shipping & handling</span>
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-sm max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  The At Home DNA Testing Kit is a non-legal, at-home paternity test kit
                  designed to give you fast, confidential results. Perfect for personal
                  knowledge and peace of mind. This comprehensive kit includes everything
                  you need for accurate DNA testing in the comfort of your own home.
                </p>
              </div>

              {/* Customer Details Form */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Information</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Order Buttons */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Shipping Option</h3>
                <div className="space-y-3">
                  <button
                    onClick={goToDomestic}
                    disabled={!domesticShipping}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <span className="text-lg">
                      {domesticShipping
                        ? `Order Within U.S. — $${Number(price).toFixed(2)} plus shipping`
                        : "Loading Domestic..."}
                    </span>
                  </button>
                  <button
                    onClick={goToInternational}
                    disabled={internationalShipping == null}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <span className="text-lg">
                      {internationalShipping != null
                        ? `Order Internationally — $${Number(price).toFixed(2)} plus shipping`
                        : "Loading International..."}
                    </span>
                  </button>
                </div>
                
                <div className="mt-4 text-sm text-gray-500 text-center">
                  <p>Secure checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Collection Kit</h3>
              <p className="text-sm text-gray-600">Everything you need for easy, painless sample collection</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Lab Analysis</h3>
              <p className="text-sm text-gray-600">Professional laboratory testing with certified technicians</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Results Report</h3>
              <p className="text-sm text-gray-600">Clear, easy-to-understand results delivered confidentially</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Shipping & Handling</h3>
              <p className="text-sm text-gray-600">Pre-paid receiving and returning included for easy submission</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeaceOfMindDNAKit;
