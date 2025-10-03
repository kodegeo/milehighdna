import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const CheckoutInternational = () => {
  const location = useLocation();
  const {
    firstName,
    lastName,
    customerEmail,
    productName = "Peace of Mind DNA Kit",
    unitPrice = 199,
    shippingFee,
    country: initialCountry = "CA",
  } = location.state || {};

  const [country, setCountry] = useState(initialCountry);
  const [dynamicShipping, setDynamicShipping] = useState(shippingFee || null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const [availableCountries, setAvailableCountries] = useState([]);

  useEffect(() => {
    // fetch shipping for initial country
    handleCountryChange(country);
  }, []);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/shipping/countries`);
        const result = await res.json();
        setAvailableCountries(result.countries); // backend should return { countries: ["CA", "MX", ...] }
      } catch (err) {
        console.error("Failed to fetch country list", err);
        setAvailableCountries(["CA","MX","GB","DE","IN","AU","BR","ZA"]); // fallback
      }
    };
    fetchCountries();
  }, []);

  // Fetch shipping fee dynamically if country changes
  const handleCountryChange = async (selectedCountry) => {
    setCountry(selectedCountry);
    setErrorMessage(null);
    setDynamicShipping(null);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/shipping/rate?country=${selectedCountry}`
      );

      const result = await res.json();
      if (result.error) {
        setErrorMessage(`${result.error} Contact: ${result.contact}`);
        setDynamicShipping(50); // fallback
      } else {
        setDynamicShipping(result.shipping);
      }
    } catch (err) {
      console.error("Shipping fetch error:", err);
      setErrorMessage("Failed to load shipping rate.");
      setDynamicShipping(50); // fallback
    }
  };

  // Create checkout session
  const createCheckout = async () => {
    setLoading(true);
    try {
      if (!dynamicShipping) {
        alert("Please select a valid shipping country.");
        return;
      }

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/create-checkout`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName,
            lastName,
            customerEmail,
            productName,
            unitPrice,
            shippingFee: dynamicShipping,
            country,
            orderSource: "online_international",
          }),
        }
      );

      const result = await res.json();
      if (result.url) {
        window.location.href = result.url; // Stripe redirect
      } else {
        alert("Checkout failed. Please try again.");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("There was an issue creating your checkout session.");
    } finally {
      setLoading(false);
    }
  };

  const total = (unitPrice + (dynamicShipping || 0)).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>International Checkout | Mile High DNA</title>
        <meta
          name="description"
          content="Checkout for international orders with Mile High DNA Testing. Country-based shipping rates included."
        />
      </Helmet>

      <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><a href="/" className="hover:text-gray-700">Home</a></li>
            <li>/</li>
            <li><a href="/peace-of-mind-kit" className="hover:text-gray-700">Checkout</a></li>
            <li>/</li>
            <li><span className="text-gray-900">International</span></li>
          </ol>
        </nav>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              International Checkout
            </h1>

            {/* Order Summary */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-semibold">Name:</span>
                  <span>{firstName} {lastName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Email:</span>
                  <span>{customerEmail}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Product:</span>
                  <span>{productName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Price:</span>
                  <span>${unitPrice.toFixed(2)}</span>
                </div>
                
                <div className="border-t pt-3 mt-3">
                  <label className="block font-semibold mb-2">Shipping Country:</label>
                    <select
                      value={country}
                      onChange={(e) => handleCountryChange(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {availableCountries.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                      </div>
                {dynamicShipping && (
                  <div className="flex justify-between">
                    <span className="font-semibold">Shipping:</span>
                    <span>${dynamicShipping.toFixed(2)}</span>
                  </div>
                )}
                
                {errorMessage && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-red-600 font-semibold text-sm">{errorMessage}</p>
                  </div>
                )}

                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between text-lg font-semibold text-gray-900">
                    <span>Total:</span>
                    <span>${total}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={createCheckout}
                disabled={loading || !dynamicShipping}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Processing..." : "Complete Checkout"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutInternational;
