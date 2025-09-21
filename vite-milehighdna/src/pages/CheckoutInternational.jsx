import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { getShippingFee } from "../utils/shipping";
import { processCheckout } from "../utils/checkoutUtils";

const CheckoutInternational = () => {
  const location = useLocation();
  const prefill = location.state || {};

  const [firstName, setFirstName] = useState(prefill.firstName || "");
  const [lastName, setLastName] = useState(prefill.lastName || "");
  const [customerEmail, setCustomerEmail] = useState(prefill.customerEmail || "");
  const [productName] = useState(prefill.productName || "Peace of Mind Paternity Kit");
  const [unitPrice] = useState(prefill.price || 199);
  const [quantity] = useState(prefill.quantity || 1);

  const [country, setCountry] = useState(prefill.country || "CA"); // default Canada
  const [shippingFee, setShippingFee] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCountryChange = async (selectedCountry) => {
    setCountry(selectedCountry);
    setErrorMessage(null);
    setShippingFee(null);

    const result = await getShippingFee("international", selectedCountry);
    if (result.error) {
      setErrorMessage(`${result.error} Contact: ${result.contact}`);
    } else {
      setShippingFee(result.shipping);
    }
  };

  const createCheckout = async () => {
    setLoading(true);
    try {
      if (!firstName.trim() || !lastName.trim() || !customerEmail.trim()) {
        alert("Please enter your first name, last name, and email.");
        return;
      }
      if (errorMessage) {
        alert(errorMessage);
        return;
      }
      if (!shippingFee) {
        alert("Please select a valid shipping country.");
        return;
      }

      const result = await processCheckout({
        firstName,
        lastName,
        customerEmail,
        productName,
        unitPrice,
        quantity,
        shippingFee,
        country,
        orderSource: "online_international",
      });

      if (result.url) {
        window.location.href = result.url;
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("There was an issue creating your checkout session.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>International Checkout | Mile High DNA</title>
        <meta
          name="description"
          content="Checkout for international orders with Mile High DNA Testing. Country-based shipping rates included."
        />
      </Helmet>

      <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white shadow rounded-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          International Checkout
        </h1>

        <div className="space-y-4">
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
            onChange={(e) => setCustomerEmail(e.target.value)}
            className="w-full border rounded-lg px-4 py-2"
          />

          <select
            value={country}
            onChange={(e) => handleCountryChange(e.target.value)}
            className="w-full border rounded-lg px-4 py-2"
          >
            <option value="CA">Canada</option>
            <option value="MX">Mexico</option>
            <option value="GB">United Kingdom</option>
            <option value="DE">Germany</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
            <option value="BR">Brazil</option>
            <option value="ZA">South Africa</option>
          </select>
        </div>

        {shippingFee && (
          <p className="mt-4 text-gray-700">
            Shipping Fee: <strong>${shippingFee}</strong>
          </p>
        )}
        {errorMessage && (
          <p className="mt-4 text-red-600 font-semibold">{errorMessage}</p>
        )}

        <div className="mt-6">
          <button
            onClick={createCheckout}
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 disabled:opacity-50"
          >
            {loading ? "Processing..." : "Complete Checkout"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutInternational;
