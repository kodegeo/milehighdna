import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import atHomePaternityKitImage from "../../assets/images/peace-of-mind-kit.jpg";

const PRICE = 199;
const PRODUCT_NAME = "At-Home Paternity DNA Test";

const AtHomePaternityTest = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [domesticShipping, setDomesticShipping] = useState(null);
  const [internationalShipping, setInternationalShipping] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/shipping/rate?country=US`)
      .then((res) => res.json())
      .then((data) => setDomesticShipping(data.shipping?.regular))
      .catch(() => setDomesticShipping(0));
    fetch(`${import.meta.env.VITE_API_URL}/api/shipping/rate?country=CA`)
      .then((res) => res.json())
      .then((data) => setInternationalShipping(Number(data.shipping?.regular ?? 0)))
      .catch(() => setInternationalShipping(0));
  }, []);

  const goToDomestic = () => {
    if (!firstName?.trim() || !lastName?.trim() || !customerEmail?.trim()) {
      alert("Please fill in your details before continuing.");
      return;
    }
    navigate("/checkout-domestic", {
      state: {
        fromShop: true,
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        customerEmail: customerEmail.trim(),
        phoneNumber: phoneNumber.trim(),
        country: "US",
        productName: PRODUCT_NAME,
        unitPrice: PRICE,
        shippingFee: domesticShipping,
      },
    });
  };

  const goToInternational = () => {
    if (!firstName?.trim() || !lastName?.trim() || !customerEmail?.trim()) {
      alert("Please fill in your details before continuing.");
      return;
    }
    navigate("/checkout-international", {
      state: {
        fromShop: true,
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        customerEmail: customerEmail.trim(),
        phoneNumber: phoneNumber.trim(),
        productName: PRODUCT_NAME,
        unitPrice: PRICE,
        shippingFee: internationalShipping,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>At-Home Paternity DNA Test | Mile High DNA</title>
        <meta
          name="description"
          content="Order the at-home paternity DNA test kit. Private, accurate, mail-in testing with fast results. Domestic and international shipping."
        />
        <link rel="canonical" href="https://milehighdnatesting.com/shop/at-home-paternity-test" />
      </Helmet>

      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-500">
          <Link to="/" className="hover:text-gray-700">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gray-700">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{PRODUCT_NAME}</span>
        </nav>

        {/* Hero Product Section */}
        <section className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={atHomePaternityKitImage}
                alt={PRODUCT_NAME}
                className="w-full h-full object-contain p-4"
              />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {PRODUCT_NAME}
              </h1>
              <p className="text-gray-600 mb-4">
                Private, accurate paternity results from the comfort of home. No appointment needed — order your kit, collect samples, and mail back for fast results.
              </p>
              <p className="text-3xl font-bold text-gray-900 mb-2">
                ${PRICE.toFixed(2)}
                <span className="text-base font-normal text-gray-500"> + shipping</span>
              </p>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="font-semibold text-gray-900 mb-3">Your details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <input
                    type="text"
                    placeholder="First name *"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last name *"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email *"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm mb-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                <div className="space-y-2">
                  <button
                    onClick={goToDomestic}
                    disabled={domesticShipping == null}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                  >
                    {domesticShipping != null
                      ? `Buy now — U.S. ($${PRICE.toFixed(2)} + shipping)`
                      : "Loading…"}
                  </button>
                  <button
                    onClick={goToInternational}
                    disabled={internationalShipping == null}
                    className="w-full bg-gray-800 hover:bg-gray-900 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                  >
                    {internationalShipping != null
                      ? `Buy now — International ($${PRICE.toFixed(2)} + shipping)`
                      : "Loading…"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="bg-white rounded-xl shadow-md border border-gray-200 p-6 md:p-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">What’s Included</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
            <li>• Swabs and collection materials</li>
            <li>• Step-by-step instructions</li>
            <li>• Pre-paid return packaging</li>
            <li>• Secure online results access</li>
          </ul>
        </section>

        {/* How It Works */}
        <section className="bg-white rounded-xl shadow-md border border-gray-200 p-6 md:p-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">How It Works</h2>
          <ol className="space-y-3 text-gray-700">
            <li><strong>1. Order kit</strong> — We ship your at-home kit.</li>
            <li><strong>2. Collect samples at home</strong> — Simple cheek swabs.</li>
            <li><strong>3. Mail back</strong> — Use the included return packaging.</li>
            <li><strong>4. Get results</strong> — Access your results securely online.</li>
          </ol>
        </section>

        {/* Who This Is For / Not For */}
        <section className="bg-white rounded-xl shadow-md border border-gray-200 p-6 md:p-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Who This Is For</h2>
          <p className="text-gray-700 mb-6">
            Peace of mind, private testing, and non-legal use. Ideal when you want confidential answers without going to a lab or scheduling an appointment.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Who This Is <em>Not</em> For</h2>
          <p className="text-gray-700 mb-2">
            This at-home kit is not for court or government use. If you need:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li><strong>Court-admissible results</strong> — use our <Link to="/services/legal-paternity-testing" className="text-blue-600 hover:text-blue-800 underline">legal paternity testing</Link>.</li>
            <li><strong>Immigration (USCIS) cases</strong> — use our <Link to="/services/immigration-dna-testing" className="text-blue-600 hover:text-blue-800 underline">immigration DNA testing</Link>.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-xl shadow-md border border-gray-200 p-6 md:p-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">FAQ</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">How accurate is the test?</h3>
              <p className="text-gray-700 text-sm">Results are processed in an accredited lab and are typically 99%+ accurate for inclusion/exclusion of paternity.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">How long until I get results?</h3>
              <p className="text-gray-700 text-sm">Usually 2–3 business days after the lab receives your samples.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Is my information private?</h3>
              <p className="text-gray-700 text-sm">Yes. We use discreet packaging and secure, confidential reporting.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">What is your refund policy?</h3>
              <p className="text-gray-700 text-sm">Contact us for refund and return policy details before or after purchase.</p>
            </div>
          </div>
        </section>

        {/* Back to shop */}
        <div className="text-center pb-8">
          <Link to="/shop" className="text-blue-600 hover:text-blue-800 font-medium">
            ← Back to shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AtHomePaternityTest;
