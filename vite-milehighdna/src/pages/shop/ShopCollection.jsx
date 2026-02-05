import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import atHomePaternityKitImage from "../../assets/images/peace-of-mind-kit.jpg";

const SHOP_PRODUCTS = [
  {
    slug: "at-home-paternity-test",
    name: "At-Home Paternity DNA Test",
    price: 199,
    benefits: [
      "Private, confidential results — no appointment needed",
      "Easy cheek swab collection; fast lab turnaround",
    ],
    image: atHomePaternityKitImage,
  },
  // Future products can be added here
];

const ShopCollection = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>At-Home DNA Test Kits | Mile High DNA</title>
        <meta
          name="description"
          content="Shop at-home DNA test kits. Private, convenient, and accurate — no appointment required. Fast turnaround and secure shipping."
        />
        <link rel="canonical" href="https://milehighdnatesting.com/shop" />
      </Helmet>

      {/* Hero */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto py-12 md:py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            At-Home DNA Test Kits
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Privacy, convenience, and accuracy. Order your kit online, collect at home, and mail in for fast, confidential results.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SHOP_PRODUCTS.map((product) => (
            <div
              key={product.slug}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h2>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  {product.benefits.map((bullet, i) => (
                    <li key={i}>• {bullet}</li>
                  ))}
                </ul>
                <p className="text-2xl font-bold text-gray-900 mb-4">
                  ${product.price.toFixed(2)}
                  <span className="text-sm font-normal text-gray-500"> + shipping</span>
                </p>
                <Link
                  to={`/shop/${product.slug}`}
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white border-t border-gray-200 py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-semibold text-gray-900 mb-1">Confidential</p>
              <p className="text-sm text-gray-600">Discreet packaging and private results</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">CLIA / AABB</p>
              <p className="text-sm text-gray-600">Lab analysis by accredited facilities</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Fast Turnaround</p>
              <p className="text-sm text-gray-600">Results in 2–3 business days after lab receipt</p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">Secure shipping included</p>
        </div>
      </section>

      {/* Footer cross-link — services only, no appointment CTA */}
      <footer className="border-t border-gray-200 bg-gray-50 py-8 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-600 text-sm">
            Need a court-admissible or in-person test?{" "}
            <Link to="/services" className="text-blue-600 hover:text-blue-800 font-medium underline">
              View our DNA testing services
            </Link>
            .
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ShopCollection;
