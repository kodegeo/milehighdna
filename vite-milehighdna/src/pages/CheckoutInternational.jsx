import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Select from "react-select";
import countryRegionData from "country-region-data/data.json";
import { getShippingRate } from "../utils/getShippingRate";



const CheckoutInternational = () => {
  const location = useLocation();
  const countries = countryRegionData;

  const {
    firstName,
    lastName,
    customerEmail,
    phoneNumber,           // <-- ADD THIS
    productName = "At Home DNA Testing Kit",
    unitPrice = 199,
    country: initialCountry = "CA",
  } = location.state || {};

  // Shipping state
  const [shippingMethod, setShippingMethod] = useState("regular");
  const [locations, setLocations] = useState(1);
  const [shippingRate, setShippingRate] = useState(0);

  // Primary Address (International)
  const [country1, setCountry1] = useState(initialCountry);
  const [regions1, setRegions1] = useState([]);
  const [hasRegions, setHasRegions] = useState(false);
  const [primaryAddress, setPrimaryAddress] = useState({
    street: "",
    city: "",
    region: "",
    postalCode: "",
  });

  // Secondary Address (US)
  const [country2, setCountry2] = useState("US");
  const [regions2, setRegions2] = useState([]);
  const [secondaryAddress, setSecondaryAddress] = useState({
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [loading, setLoading] = useState(false);

  // Field labels for international addresses
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

  // Load region lists dynamically
  useEffect(() => {
    const selected = countries.find((c) => c.countryShortCode === country1);
    const regionList =
      selected && selected.regions.length
        ? selected.regions.map((r) => ({ value: r.shortCode, label: r.name }))
        : [];
    setRegions1(regionList);
    setHasRegions(regionList.length > 0);
  }, [country1]);

  useEffect(() => {
    const selected = countries.find((c) => c.countryShortCode === country2);
    setRegions2(
      selected && selected.regions.length
        ? selected.regions.map((r) => ({ value: r.shortCode, label: r.name }))
        : []
    );
  }, [country2]);

  // ✅ Compute shipping via helper
  useEffect(() => {
    const rate = getShippingRate(country1, shippingMethod);
    setShippingRate(rate);
  }, [country1, shippingMethod]);
     

  // Totals
  const shippingTotal = Number(shippingRate) * Number(locations);
  const total = (Number(unitPrice) + Number(shippingTotal)).toFixed(2);

  // ✅ Create Checkout
  const createCheckout = async () => {

    // Validate basic customer info
    if (!firstName || !lastName || !customerEmail || !phoneNumber) {
      alert("Please fill in your details before continuing.");
      return;
    }
      
    if (
      !primaryAddress.street ||
      !primaryAddress.city ||
      !primaryAddress.region ||
      !primaryAddress.postalCode
    ) {
      alert("Please complete all primary shipping address fields.");
      return;
    }
  
    if (
      locations === 2 &&
      (!secondaryAddress.street ||
        !secondaryAddress.city ||
        !secondaryAddress.state ||
        !secondaryAddress.zipCode)
    ) {
      alert("Please complete all secondary shipping address fields.");
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
            phoneNumber,                     // <-- ADD THIS
            productName,
            unitPrice,
            shippingFee: shippingTotal,
            country: country1,
            orderSource: "online_international",
            shippingMethod,
            locations,
            primaryAddress,
            secondaryAddress: locations === 2 ? secondaryAddress : null,
          }),
        }
      );
  
      const result = await res.json();
  
      // 🚨 NEW: Handle backend errors
      if (result.error) {
        console.error("Checkout error:", result.error);
        alert(
          "Unable to create checkout session. Please verify your information and try again."
        );
        return;
      }
  
      // 🚀 Redirect to Stripe
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
          content="International checkout for Mile High DNA Testing. Choose shipping method and location."
        />
      </Helmet>

      <div className="max-w-3xl mx-auto py-12 px-6 bg-white shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          International Checkout
        </h1>

        {/* Order Summary */}
        <div className="bg-gray-50 p-6 rounded-lg mb-6 space-y-4">
          <p>
            <strong>Name:</strong> {firstName} {lastName}
          </p>
          <p>
            <strong>Email:</strong> {customerEmail}
          </p>
          <p>
            <strong>Product:</strong> {productName}
          </p>
          <p>
            <strong>Price:</strong> ${Number(unitPrice).toFixed(2)}
          </p>

          {/* Shipping Method */}
          <div>
            <label className="block font-semibold mb-2">Shipping Method:</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="shippingMethod"
                  value="regular"
                  checked={shippingMethod === "regular"}
                  onChange={(e) => setShippingMethod(e.target.value)}
                  className="mr-2"
                />
                Regular Mail (${shippingRate})
              </label>
            </div>
          </div>

          {/* Multiple Locations */}
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

          {/* Address Inputs */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Primary Shipping Address (International)
              </h3>
              <InternationalAddressForm
                address={primaryAddress}
                setAddress={setPrimaryAddress}
                country={country1}
                setCountry={setCountry1}
                regions={regions1}
                labels={getLabels(country1)}
                countryOptions={countryOptions}
                hasRegions={hasRegions}
              />
            </div>

            {locations === 2 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Secondary Shipping Address (US)
                </h3>
                <USAddressForm
                  address={secondaryAddress}
                  setAddress={setSecondaryAddress}
                />
              </div>
            )}
          </div>

          {/* Totals */}
          <p>
            <strong>Shipping:</strong> ${Number(shippingTotal).toFixed(2)}
          </p>
          <p className="text-lg font-semibold">Total: ${total}</p>
        </div>

        <button
          onClick={createCheckout}
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 disabled:opacity-50"
        >
          {loading ? "Processing..." : "Payment"}
        </button>
      </div>
    </div>
  );
};

// ✅ International Address component
const InternationalAddressForm = ({
  address,
  setAddress,
  country,
  setCountry,
  regions,
  labels,
  countryOptions,
  hasRegions,
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
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Street Address *
      </label>
      <input
        type="text"
        value={address.street}
        onChange={(e) => setAddress({ ...address, street: e.target.value })}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="123 Main Street"
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
          onChange={(e) => setAddress({ ...address, city: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Toronto"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {labels.region} *
        </label>
        {hasRegions ? (
          <Select
            options={regions}
            value={regions.find((r) => r.value === address.region)}
            onChange={(val) =>
              setAddress({ ...address, region: val?.value || "" })
            }
            isClearable
            placeholder={`Select ${labels.region}`}
            className="react-select-container"
            classNamePrefix="react-select"
          />
        ) : (
          <input
            type="text"
            value={address.region}
            onChange={(e) =>
              setAddress({ ...address, region: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={labels.region}
            required
          />
        )}
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
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="M5H 2N2"
          required
        />
      </div>
    </div>
  </div>
);

// ✅ US Address component (unchanged)
const USAddressForm = ({ address, setAddress }) => (
  <div className="space-y-3">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Street Address *
      </label>
      <input
        type="text"
        value={address.street}
        onChange={(e) => setAddress({ ...address, street: e.target.value })}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="123 Main Street"
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
          onChange={(e) => setAddress({ ...address, city: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Denver"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          State *
        </label>
        <select
          value={address.state}
          onChange={(e) => setAddress({ ...address, state: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        >
          <option value="">Select State</option>
          {[
            "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS",
            "KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY",
            "NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV",
            "WI","WY",
          ].map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          ZIP Code *
        </label>
        <input
          type="text"
          value={address.zipCode}
          onChange={(e) => setAddress({ ...address, zipCode: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="80202"
          pattern="[0-9]{5}(-[0-9]{4})?"
          required
        />
      </div>
    </div>
  </div>
);

export default CheckoutInternational;
