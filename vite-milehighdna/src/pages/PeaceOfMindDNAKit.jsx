import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const PeaceOfMindDNAKit = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  const goToDomestic = () => {
    if (!firstName || !lastName || !customerEmail) {
      alert("Please fill in your details before continuing.");
      return;
    }
    navigate("/checkout/domestic", {
      state: { firstName, lastName, customerEmail, country: "US" },
    });
  };

  const goToInternational = () => {
    if (!firstName || !lastName || !customerEmail) {
      alert("Please fill in your details before continuing.");
      return;
    }
    navigate("/checkout/international", {
      state: { firstName, lastName, customerEmail },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Peace of Mind DNA Kit | Mile High DNA</title>
        <meta
          name="description"
          content="Order your Peace of Mind DNA Kit online. Choose domestic (U.S.) or international shipping for fast, confidential results."
        />
      </Helmet>

      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white shadow rounded-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Peace of Mind DNA Kit
        </h1>
        <p className="text-gray-700 mb-6">
          The Peace of Mind DNA Kit is a non-legal, at-home paternity test kit
          designed to give you fast, confidential results. Perfect for personal
          knowledge and peace of mind.
        </p>

        <div className="space-y-4 mb-8">
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
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={goToDomestic}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          >
            Order Within U.S.
          </button>
          <button
            onClick={goToInternational}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          >
            Order Internationally
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeaceOfMindDNAKit;
