import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer";

const TRUST_BULLETS = [
  "Accurate & Confidential",
  "24 Genetic Markers Tested",
  "Mail-In Testing Included",
];

const WHATS_INCLUDED = [
  "DNA collection swabs and materials",
  "Step-by-step instructions",
  "Pre-paid return packaging",
  "Secure laboratory analysis",
  "Online results access",
];

const HOW_IT_WORKS = [
  { step: 1, title: "Order your kit", text: "Complete your order online. Your kit ships securely to you." },
  { step: 2, title: "Collect samples", text: "Follow the simple instructions at home." },
  { step: 3, title: "Mail samples back", text: "Use the prepaid mailer to return samples to the lab." },
  { step: 4, title: "Receive results", text: "Get confidential results securely, typically within 2–3 business days after lab receipt." },
];

const IMPORTANT_NOTE =
  "This test is for private use only and not court-admissible. For legal or immigration testing, please use our in-person services.";

/**
 * Reusable product detail page template for shop PDPs.
 * Image-left, copy-right hero; order form that routes into existing Stripe checkout.
 * @param {Object} product - { title, shortDescription, unitPrice, metaDescription, breadcrumbParentLabel, productKey }
 * @param {string} image - Product image (import or URL)
 * @param {string} canonicalUrl - Full canonical URL
 * @param {string} metaTitle - Page title for Helmet
 * @param {string} breadcrumbParentUrl - e.g. /shop/paternity-dna-test or /shop/grandparent-dna-test
 */
const ProductDetailTemplate = ({ product, image, canonicalUrl, metaTitle, breadcrumbParentUrl = "/shop/paternity-dna-test" }) => {
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
        productName: product.title,
        unitPrice: product.unitPrice,
        productKey: product.productKey, // Pass productKey instead of stripePriceId
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
        productName: product.title,
        unitPrice: product.unitPrice,
        productKey: product.productKey, // Pass productKey instead of stripePriceId
        shippingFee: internationalShipping,
      },
    });
  };

  const price = product.unitPrice;

  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <html lang="en" />
        <title>{metaTitle}</title>
        <meta name="description" content={product.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-gray-700">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gray-700">Shop</Link>
          <span className="mx-2">/</span>
          <Link to={breadcrumbParentUrl} className="hover:text-gray-700">
            {product.breadcrumbParentLabel || "DNA Test Kits"}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.title}</span>
        </nav>

        {/* Hero: image left, copy right; mobile: image above */}
        <section className="border-b border-gray-200 pb-10 md:pb-12">
          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
            <div className="md:w-2/5 flex-shrink-0 order-2 md:order-1">
              <div className="aspect-square max-w-sm mx-auto md:mx-0 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                <img src={image} alt="" className="w-full h-full object-contain p-4" />
              </div>
            </div>
            <div className="md:w-3/5 order-1 md:order-2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {product.title}
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {product.shortDescription}
              </p>
              <ul className="space-y-2 mb-4">
                {TRUST_BULLETS.map((bullet) => (
                  <li key={bullet} className="flex items-center text-gray-700">
                    <span className="text-blue-600 mr-2">✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-700 mb-6">
                <span className="font-medium">${price}</span>
                <span className="text-gray-500"> + shipping</span>
              </p>

              {/* Order form / CTA */}
              <div className="bg-[#F5F7FA] rounded-xl border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Order your test</h2>
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
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-xl transition-colors"
                  >
                    {domesticShipping != null
                      ? `Buy Now — U.S. ($${price} + shipping)`
                      : "Loading…"}
                  </button>
                  <button
                    onClick={goToInternational}
                    disabled={internationalShipping == null}
                    className="w-full bg-gray-800 hover:bg-gray-900 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-xl transition-colors"
                  >
                    {internationalShipping != null
                      ? `Buy Now — International ($${price} + shipping)`
                      : "Loading…"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-10 md:py-12 border-b border-gray-200 bg-[#F5F7FA]">
          <h2 className="text-2xl font-bold text-[#1A3C59] mb-8">How it works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map(({ step, title, text }) => (
              <div key={step}>
                <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold mb-3">
                  {step}
                </span>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What's included */}
        <section className="py-10 md:py-12 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-[#1A3C59] mb-6">What&apos;s included</h2>
          <ul className="space-y-2 text-gray-700">
            {WHATS_INCLUDED.map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-blue-600 mr-2 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Important note */}
        <section className="py-10 md:py-12 border-b border-gray-200 bg-[#F5F7FA]">
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            {IMPORTANT_NOTE}
          </p>
        </section>

        {/* Compare / back */}
        <section className="py-8">
          <Link
            to={breadcrumbParentUrl}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Compare test options
          </Link>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default ProductDetailTemplate;
