import React from "react";
import { Helmet } from 'react-helmet-async';
import HeroImage from "../assets/images/peace-of-mind-kit.jpg"; // Adjust path as needed

const PeaceOfMindPaternityPage = () => {
  console.log("PeaceOfMindPaternityPage is rendering"); // Debug log

  return (
    <main className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Peace of Mind Paternity Test Kit | Personal DNA Testing | Mile High DNA</title>
        <meta 
          name="description" 
          content="Get confidential, accurate paternity test results for personal knowledge only. Fast, discreet home collection kit with 99%+ accuracy. Not for legal use." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Peace of Mind Paternity Test Kit
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Clear Answers. Confidential Results.
            </p>
            <p className="text-gray-700 mb-8">
              Get the clarity you deserve with our at-home Peace of Mind Paternity Test Kit.
              Fast, accurate, and 100% confidential results for personal knowledge only.
            </p>
            <a
              href="/checkout-domestic"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition font-semibold text-lg inline-block"
            >
              Order Your Kit Today
            </a>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src={HeroImage}
              alt="Peace of Mind Paternity Test Kit"
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Why Choose Our Peace of Mind Paternity Test?
          </h2>
          <ul className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
            <li>✅ 99%+ Accuracy — Same technology used in court‑admissible labs</li>
            <li>✅ Completely Discreet — Unbranded packaging, personal data protected</li>
            <li>✅ Simple Home Collection — Easy cheek swab, no needles required</li>
            <li>✅ Speedy Results — As few as 2–3 business days after lab receives your kit</li>
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How It Works</h2>
          <ol className="grid md:grid-cols-4 gap-6 text-center text-gray-700">
            <li className="p-4 bg-gray-50 rounded-lg shadow">1. Order Your Kit</li>
            <li className="p-4 bg-gray-50 rounded-lg shadow">2. Collect Samples at Home</li>
            <li className="p-4 bg-gray-50 rounded-lg shadow">3. Ship Back to Lab</li>
            <li className="p-4 bg-gray-50 rounded-lg shadow">4. Receive Results Securely</li>
          </ol>
        </div>
      </section>

      {/* Pricing and CTA */}
      <section id="order-now" className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">$99–$129</h3>
          <p className="text-gray-600 mb-8">*(Price may vary by promotion or volume.)*</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/checkout-domestic"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition font-semibold text-lg inline-block"
            >
              Order Domestic (US)
            </a>
            <a
              href="/checkout-international"
              className="bg-green-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-green-700 transition font-semibold text-lg inline-block"
            >
              Order International
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PeaceOfMindPaternityPage;
