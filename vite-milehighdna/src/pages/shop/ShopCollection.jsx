import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import shopHero from "../../assets/images/banner_bg_Res_2.png";
import paternityImg from "../../assets/images/shop/paternity-box.png";
import grandparentImg from "../../assets/images/shop/grandparent-box.png";
import siblingImg from "../../assets/images/shop/sibling-box.png";
import discreetImg from "../../assets/images/shop/discreet-box.png";

const PHONE = "720-900-9342";
const PHONE_TEL = "tel:+17209009342";
const ADDRESS = "975 N Lincoln Street, Suite 205C, Denver, CO 80203";
const CALENDLY_EN = "https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment";
const CALENDLY_ES = "https://calendly.com/milehighdnatesting/cita-prueba-adn";

const ShopCollection = () => {
  const collections = [
    {
      title: "Paternity DNA Test",
      description:
        "Designed to help confirm biological fatherhood for personal knowledge and peace of mind.",
      link: "/shop/paternity-dna-test",
      image: paternityImg,
    },
    {
      title: "Grandparent DNA Test",
      description:
        "Used when a parent is unavailable, helping establish biological relationships across generations.",
      link: "/shop/grandparent-dna-test",
      image: grandparentImg,
    },
    {
      title: "Sibling DNA Test",
      description:
        "Used to determine whether two individuals share one or both biological parents.",
      link: "/shop/sibling-dna-test",
      image: siblingImg,
    },
    {
      title: "Discreet DNA Test",
      description:
        "Private testing options using personal items, designed for maximum confidentiality.",
      link: "/shop/discreet-dna-test",
      image: discreetImg,
    },
  ];

  const scrollToProducts = () => {
    document.getElementById("product-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Helmet>
        <html lang="en" />
        <title>DNA Relationship Test Kits | Mile High DNA</title>
        <meta
          name="description"
          content="At-home DNA relationship testing kits designed for peace of mind, privacy, and accuracy. Serving individuals and families nationwide."
        />
        <link rel="canonical" href="https://milehighdnatesting.com/shop" />
      </Helmet>

      {/* Hero */}
      <section
        className="relative bg-gray-900 py-16 md:py-24 px-4 md:px-8 bg-cover bg-center"
        style={{ backgroundImage: `url(${shopHero})` }}
        aria-label="Order a professional DNA test kit"
      >
        <div className="absolute inset-0 bg-black/50" aria-hidden />
        <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Order a Professional DNA Test Kit Online
          </h1>
          <p className="mt-4 text-lg text-blue-100">
            Processed by AABB-Accredited Laboratory Partners. Accurate. Confidential. Fast.
          </p>

          <div className="mt-6 space-y-2 text-sm md:text-base text-blue-50">
            <p>✔ AABB-Accredited Laboratory Partner</p>
            <p>✔ Court-Admissible Options Available</p>
            <p>✔ Secure & Confidential Results</p>
            <p>✔ English & Spanish Support</p>
          </div>

          <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
            <button
              type="button"
              onClick={scrollToProducts}
              className="bg-white text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Order DNA Kit
            </button>
            <Link
              to="/appointments"
              className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition text-center"
            >
              Need a Legal DNA Test Instead?
            </Link>
          </div>
        </div>
      </section>

      {/* AABB Certification */}
      <section className="bg-gray-50 py-10 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 text-center">
            Why AABB Accreditation Matters
          </h2>

          <div className="mt-6 space-y-4 text-gray-700 text-sm md:text-base">
            <p>
              AABB accreditation ensures strict laboratory quality control standards,
              proper chain-of-custody procedures for legal testing, and results that
              meet court and USCIS requirements when applicable.
            </p>
            <p>
              Mile High DNA Testing works exclusively with AABB-accredited laboratory
              partners to ensure reliable, professional-grade results.
            </p>
          </div>
        </div>
      </section>

      {/* Test Type Differentiation */}
      <section className="bg-white py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">
              At-Home DNA Kit (Peace of Mind)
            </h3>
            <ul className="mt-4 space-y-2 text-gray-700 text-sm md:text-base">
              <li>• Personal knowledge testing</li>
              <li>• Private and discreet</li>
              <li>• No legal documentation required</li>
              <li>• Lower cost option</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">
              Legal DNA Test
            </h3>
            <ul className="mt-4 space-y-2 text-gray-700 text-sm md:text-base">
              <li>• Required for court cases</li>
              <li>• Required for USCIS immigration</li>
              <li>• Chain-of-custody required</li>
              <li>• Must schedule in-person appointment</li>
            </ul>
            <Link
              to="/appointments"
              className="inline-block mt-6 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition font-semibold"
            >
              Schedule Legal Test
            </Link>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section id="product-section" className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {collections.map((collection) => (
              <div key={collection.link} className="text-center">
                <div className="mx-auto mb-6 w-full max-w-[240px] aspect-[4/3] flex items-center justify-center bg-white">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  {collection.title}
                </h2>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {collection.description}
                </p>

                <Link
                  to={collection.link}
                  className="inline-block text-blue-600 font-medium hover:text-blue-800"
                >
                  Buy Now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION / WHY WE DO THIS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Why We Do This
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At Mile High DNA Testing, we believe access to accurate and ethical
            DNA testing should be simple, private, and respectful. Questions
            about family and biological relationships can be deeply personal,
            and we exist to help people find clarity without pressure or judgment.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            While our roots are in <a href="https://milehighdnatesting.com/dna-testing-colorado" className="text-blue-600 hover:text-blue-800 transition duration-300">Colorado</a>, our mission extends far beyond any
            single city. We serve individuals and families across the country
            who are seeking answers, understanding, and peace of mind through
            reliable DNA testing.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            We are committed to community, transparency, and responsible testing
            practices — designing product experiences that respect both the
            science and the human stories behind every result.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Take Action Now</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">If the other party is unavailable, you can still move forward. Secure your DNA profile today and maintain control over your timeline.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CALENDLY_EN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition">Book Your Appointment (English)</a>
            <a href={CALENDLY_ES} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition">Cita en español</a>
          </div>
          <p className="mt-8 text-blue-200">📍 {ADDRESS}</p>
          <p className="mt-4 text-blue-200 text-sm">Call or text our office if you are unsure whether legal or non-legal documentation is appropriate for your situation. <a href={PHONE_TEL} className="underline font-semibold" onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "phone_click", phone_number: PHONE }); }}>{PHONE}</a></p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600">
            Looking for court-admissible or in-person DNA testing?{" "}
            <Link
              to="/services"
              className="text-blue-600 hover:text-blue-800 font-medium underline"
            >
              View our services
            </Link>
            .
          </p>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] p-3 flex justify-between items-center z-50">
        <span className="font-semibold text-gray-900">
          Order DNA Kit
        </span>
        <button
          type="button"
          onClick={scrollToProducts}
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition"
        >
          Order Now
        </button>
      </div>
    </main>
  );
};

export default ShopCollection;
