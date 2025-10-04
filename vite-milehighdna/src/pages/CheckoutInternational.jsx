import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Select from "react-select";
import { countries } from "country-region-data";

const CheckoutInternational = () => {
  const location = useLocation();
  const {
    firstName,
    lastName,
    customerEmail,
    productName = "Peace of Mind DNA Kit",
    unitPrice = 199,
    country: initialCountry = "CA",
  } = location.state || {};

  const [loading, setLoading] = useState(false);
  const [locations, setLocations] = useState(1);

  // Primary
  const [country1, setCountry1] = useState(initialCountry);
  const [regions1, setRegions1] = useState([]);
  const [shipping1, setShipping1] = useState(0);
  const [primaryAddress, setPrimaryAddress] = useState({
    street: "",
    city: "",
    region: "",
    postalCode: "",
  });

  // Secondary
  const [country2, setCountry2] = useState("US");
  const [regions2, setRegions2] = useState([]);
  const [shipping2, setShipping2] = useState(0);
  const [secondaryAddress, setSecondaryAddress] = useState({
    street: "",
    city: "",
    region: "",
    postalCode: "",
  });

  // Field labels
  const fieldLabels = {
    US: { region: "State", postal: "ZIP Code" },
    CA: { region: "Province", postal: "Postal Code" },
    GB: { region: "County", postal: "Postcode" },
    AU: { region: "State / Territory", postal: "Postcode" },
    DE: { region: "Region", postal: "Postal Code" },
    IN: { region: "State", postal: "PIN Code" },
  };
  const getLabels = (c) =>
    fieldLabels[c] || { region: "State / Region", postal: "Postal Code" };

  const countryOptions = countries.map((c) => ({
    value: c.countryShortCode,
    label: c.countryName,
  }));

  // Load region lists
  useEffect(() => {
    const selected = countries.find((c) => c.countryShortCode === country1);
    setRegions1(
      selected && selected.regions.length
        ? selected.regions.map((r) => ({ value: r.shortCode, label: r.name }))
        : []
    );
  }, [country1]);

  useEffect(() => {
    const selected = countries.find((c) => c.countryShortCode === country2);
    setRegions2(
      selected && selected.regions.length
        ? selected.regions.map((r) => ({ value: r.shortCode, label: r.name }))
        : []
    );
  }, [country2]);

  // Fetch shipping
  const fetchShipping = async (country, setFn) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/shipping/rate?country=${country}`
      );
      const data = await res.json();
      const rate =
        typeof data.shipping === "object"
          ? Object.values(data.shipping)[0]
          : Number(data.shipping);
      setFn(rate || 50);
    } catch (err) {
      console.error("Shipping fetch error:", err);
      setFn(50);
    }
  };

  useEffect(() => {
    fetchShipping(country1, setShipping1);
  }, [country1]);

  useEffect(() => {
    if (locations === 2) fetchShipping(country2, setShipping2);
  }, [country2, locations]);

  // Totals
  const totalShipping =
    Number(shipping1) + (locations === 2 ? Number(shipping2) : 0);
  const total = (Number(unitPrice) + Number(totalShipping)).toFixed(2);

  // Validation helper
  const isComplete = (a) =>
    a.street && a.city && a.region && a.postalCode;

  const createCheckout = async () => {
    if (!isComplete(primaryAddress)) {
      alert("Please complete all required fields for the primary address.");
      return;
    }
    if (locations === 2 && !isComplete(secondaryAddress)) {
      alert("Please complete all required fields for the secondary address.");
      return;
    }

    setLoading(true);
    try {
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
            shippingFee: totalShipping,
            country: country1,
            orderSource: "online_international",
            locations,
            primaryAddress,
            secondaryAddress: locations === 2 ? secondaryAddress : null,
          }),
        }
      );
      const result = await res.json();
      if (result.url) {
        window.location.href = result.url;
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>International Checkout | Mile High DNA</title>
        <meta
          name="description"
          content="International checkout for Mile High DNA Testing with support for one or two shipping locations."
        />
      </Helmet>

      <div className="max-w-3xl mx-auto py-12 px-6 bg-white shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          International Checkout
        </h1>

        {/* Summary */}
        <div className="bg-gray-50 p-6 rounded-lg mb-6 space-y-4">
          <p><strong>Name:</strong> {firstName} {lastName}</p>
          <p><strong>Email:</strong> {customerEmail}</p>
          <p><strong>Product:</strong> {productName}</p>
          <p><strong>Price:</strong> ${Number(unitPrice).toFixed(2)}</p>

          {/* Multi-location toggle */}
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={locations === 2}
                onChange={() => setLocations(locations === 1 ? 2 : 1)}
                className="mr-2"
              />
              Ship to two locations
            </label>
          </div>

          {/* Primary */}
          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-4">
            Primary Shipping Address
          </h3>
          <AddressForm
            address={primaryAddress}
            setAddress={setPrimaryAddress}
            country={country1}
            setCountry={setCountry1}
            regions={regions1}
            labels={getLabels(country1)}
            countryOptions={countryOptions}
          />

          {/* Secondary */}
          {locations === 2 && (
            <>
              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-4">
                Secondary Shipping Address
              </h3>
              <AddressForm
                address={secondaryAddress}
                setAddress={setSecondaryAddress}
                country={country2}
                setCountry={setCountry2}
                regions={regions2}
                labels={getLabels(country2)}
                countryOptions={countryOptions}
              />
            </>
          )}

          <p><strong>Shipping:</strong> ${Number(totalShipping).toFixed(2)}</p>
          <p className="text-lg font-semibold">Total: ${total}</p>
        </div>

        <button
          onClick={createCheckout}
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 disabled:opacity-50"
        >
          {loading ? "Processing..." : "Complete Checkout"}
        </button>
      </div>
    </div>
  );
};

// ✅ Address component
const AddressForm = ({
  address,
  setAddress,
  country,
  setCountry,
  regions,
  labels,
  countryOptions,
}) => (
  <div className="space-y-3">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Country *
      </label>
      <Select
        options={countryOptions}
        value={countryOptions.find((opt) => opt.value === country)}
        onChange={(val) => setCountry(val.value)}
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Street Address *
      </label>
      <input
        type="text"
        value={address.street}
        onChange={(e) =>
          setAddress({ ...address, street: e.target.value })
        }
        className="w-full border border-gray-300 rounded-lg px-4 py-2"
        required
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          City *
        </label>
        <input
          type="text"
          value={address.city}
          onChange={(e) =>
            setAddress({ ...address, city: e.target.value })
          }
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {labels.region} *
        </label>
        <Select
          options={regions}
          value={regions.find((r) => r.value === address.region)}
          onChange={(val) =>
            setAddress({ ...address, region: val?.value || "" })
          }
          isClearable
          placeholder="Select region"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {labels.postal} *
        </label>
        <input
          type="text"
          value={address.postalCode}
          onChange={(e) =>
            setAddress({ ...address, postalCode: e.target.value })
          }
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          required
        />
      </div>
    </div>
  </div>
);

export default CheckoutInternational;
