import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const CheckoutDomestic = () => {
  const location = useLocation();
  const {
    firstName,
    lastName,
    customerEmail,
    productName = "At Home DNA Testing Kit",
    unitPrice = 199,
    country = "US",
  } = location.state || {};

  // Shipping state
  const [shippingMethod, setShippingMethod] = useState("regular"); // "regular" | "overnight"
  const [locations, setLocations] = useState(1); // 1 | 2
  const [shippingRate, setShippingRate] = useState(0);

  const [primaryAddress, setPrimaryAddress] = useState({
    street: "",
    city: "",
    state: "",
    zipCode: ""
  });

  const [secondaryAddress, setSecondaryAddress] = useState({
    street: "",
    city: "",
    state: "",
    zipCode: ""
  });

  const [loading, setLoading] = useState(false);

  // ✅ Fetch shipping dynamically from backend instead of hardcoded
  useEffect(() => {
    const fetchShipping = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/shipping/rate?country=${country}&method=${shippingMethod}`
        );

        if (!res.ok) throw new Error("Failed to fetch shipping rate");
        const { shipping } = await res.json();
        setShippingRate(Number(shipping[shippingMethod]) || 0);

      } catch (err) {
        console.error("Shipping fetch error:", err);
        // fallback defaults
        setShippingRate(shippingMethod === "regular" ? 20 : 50);
      }
    };
    fetchShipping();
  }, [country, shippingMethod]);

  // Totals
  const shippingTotal = Number(shippingRate) * Number(locations);
  const total = (Number(unitPrice) + Number(shippingTotal)).toFixed(2);

  const createCheckout = async () => {
    if (
      !primaryAddress.street ||
      !primaryAddress.city ||
      !primaryAddress.state ||
      !primaryAddress.zipCode
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
            productName,
            unitPrice,
            shippingFee: shippingTotal,
            country,
            orderSource: "online_domestic",
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
        <title>Domestic Checkout | Mile High DNA</title>
        <meta
          name="description"
          content="Domestic checkout for Mile High DNA Testing. Choose shipping method and location."
        />
      </Helmet>

      <div className="max-w-3xl mx-auto py-12 px-6 bg-white shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Domestic Checkout
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
                Regular Mail ($20)
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="shippingMethod"
                  value="overnight"
                  checked={shippingMethod === "overnight"}
                  onChange={(e) => setShippingMethod(e.target.value)}
                  className="mr-2"
                />
                Overnight Mail ($50){" "}
                <span className="text-sm text-gray-500 ml-2">
                  *Order before 2:00 PM MST
                </span>
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
               <h3 className="text-lg font-semibold text-gray-900 mb-4">Primary Shipping Address</h3>
               <div className="space-y-3">
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">
                     Street Address *
                   </label>
                   <input
                     type="text"
                     value={primaryAddress.street}
                     onChange={(e) => setPrimaryAddress({...primaryAddress, street: e.target.value})}
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
                       value={primaryAddress.city}
                       onChange={(e) => setPrimaryAddress({...primaryAddress, city: e.target.value})}
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
                       value={primaryAddress.state}
                       onChange={(e) => setPrimaryAddress({...primaryAddress, state: e.target.value})}
                       className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                       required
                     >
                       <option value="">Select State</option>
                       <option value="AL">Alabama</option>
                       <option value="AK">Alaska</option>
                       <option value="AZ">Arizona</option>
                       <option value="AR">Arkansas</option>
                       <option value="CA">California</option>
                       <option value="CO">Colorado</option>
                       <option value="CT">Connecticut</option>
                       <option value="DE">Delaware</option>
                       <option value="FL">Florida</option>
                       <option value="GA">Georgia</option>
                       <option value="HI">Hawaii</option>
                       <option value="ID">Idaho</option>
                       <option value="IL">Illinois</option>
                       <option value="IN">Indiana</option>
                       <option value="IA">Iowa</option>
                       <option value="KS">Kansas</option>
                       <option value="KY">Kentucky</option>
                       <option value="LA">Louisiana</option>
                       <option value="ME">Maine</option>
                       <option value="MD">Maryland</option>
                       <option value="MA">Massachusetts</option>
                       <option value="MI">Michigan</option>
                       <option value="MN">Minnesota</option>
                       <option value="MS">Mississippi</option>
                       <option value="MO">Missouri</option>
                       <option value="MT">Montana</option>
                       <option value="NE">Nebraska</option>
                       <option value="NV">Nevada</option>
                       <option value="NH">New Hampshire</option>
                       <option value="NJ">New Jersey</option>
                       <option value="NM">New Mexico</option>
                       <option value="NY">New York</option>
                       <option value="NC">North Carolina</option>
                       <option value="ND">North Dakota</option>
                       <option value="OH">Ohio</option>
                       <option value="OK">Oklahoma</option>
                       <option value="OR">Oregon</option>
                       <option value="PA">Pennsylvania</option>
                       <option value="RI">Rhode Island</option>
                       <option value="SC">South Carolina</option>
                       <option value="SD">South Dakota</option>
                       <option value="TN">Tennessee</option>
                       <option value="TX">Texas</option>
                       <option value="UT">Utah</option>
                       <option value="VT">Vermont</option>
                       <option value="VA">Virginia</option>
                       <option value="WA">Washington</option>
                       <option value="WV">West Virginia</option>
                       <option value="WI">Wisconsin</option>
                       <option value="WY">Wyoming</option>
                     </select>
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">
                       ZIP Code *
                     </label>
                     <input
                       type="text"
                       value={primaryAddress.zipCode}
                       onChange={(e) => setPrimaryAddress({...primaryAddress, zipCode: e.target.value})}
                       className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                       placeholder="80202"
                       pattern="[0-9]{5}(-[0-9]{4})?"
                       required
                     />
                   </div>
                 </div>
               </div>
             </div>

             {locations === 2 && (
               <div>
                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Secondary Shipping Address</h3>
                 <div className="space-y-3">
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">
                       Street Address *
                     </label>
                     <input
                       type="text"
                       value={secondaryAddress.street}
                       onChange={(e) => setSecondaryAddress({...secondaryAddress, street: e.target.value})}
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
                         value={secondaryAddress.city}
                         onChange={(e) => setSecondaryAddress({...secondaryAddress, city: e.target.value})}
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
                         value={secondaryAddress.state}
                         onChange={(e) => setSecondaryAddress({...secondaryAddress, state: e.target.value})}
                         className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                         required
                       >
                         <option value="">Select State</option>
                         <option value="AL">Alabama</option>
                         <option value="AK">Alaska</option>
                         <option value="AZ">Arizona</option>
                         <option value="AR">Arkansas</option>
                         <option value="CA">California</option>
                         <option value="CO">Colorado</option>
                         <option value="CT">Connecticut</option>
                         <option value="DE">Delaware</option>
                         <option value="FL">Florida</option>
                         <option value="GA">Georgia</option>
                         <option value="HI">Hawaii</option>
                         <option value="ID">Idaho</option>
                         <option value="IL">Illinois</option>
                         <option value="IN">Indiana</option>
                         <option value="IA">Iowa</option>
                         <option value="KS">Kansas</option>
                         <option value="KY">Kentucky</option>
                         <option value="LA">Louisiana</option>
                         <option value="ME">Maine</option>
                         <option value="MD">Maryland</option>
                         <option value="MA">Massachusetts</option>
                         <option value="MI">Michigan</option>
                         <option value="MN">Minnesota</option>
                         <option value="MS">Mississippi</option>
                         <option value="MO">Missouri</option>
                         <option value="MT">Montana</option>
                         <option value="NE">Nebraska</option>
                         <option value="NV">Nevada</option>
                         <option value="NH">New Hampshire</option>
                         <option value="NJ">New Jersey</option>
                         <option value="NM">New Mexico</option>
                         <option value="NY">New York</option>
                         <option value="NC">North Carolina</option>
                         <option value="ND">North Dakota</option>
                         <option value="OH">Ohio</option>
                         <option value="OK">Oklahoma</option>
                         <option value="OR">Oregon</option>
                         <option value="PA">Pennsylvania</option>
                         <option value="RI">Rhode Island</option>
                         <option value="SC">South Carolina</option>
                         <option value="SD">South Dakota</option>
                         <option value="TN">Tennessee</option>
                         <option value="TX">Texas</option>
                         <option value="UT">Utah</option>
                         <option value="VT">Vermont</option>
                         <option value="VA">Virginia</option>
                         <option value="WA">Washington</option>
                         <option value="WV">West Virginia</option>
                         <option value="WI">Wisconsin</option>
                         <option value="WY">Wyoming</option>
                       </select>
                     </div>
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">
                         ZIP Code *
                       </label>
                       <input
                         type="text"
                         value={secondaryAddress.zipCode}
                         onChange={(e) => setSecondaryAddress({...secondaryAddress, zipCode: e.target.value})}
                         className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                         placeholder="80202"
                         pattern="[0-9]{5}(-[0-9]{4})?"
                         required
                       />
                     </div>
                   </div>
                 </div>
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
          {loading ? "Processing..." : "Complete Checkout"}
        </button>
      </div>
    </div>
  );
};

export default CheckoutDomestic;
