import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const TRUST_BULLETS = [
  "Accurate & Confidential",
  "24 Genetic Markers Tested",
  "Mail-In Testing Included",
];

const HOW_IT_WORKS_STEPS = [
  { title: "Order your test kit", text: "Choose your test and complete your order online. Your kit ships securely to you." },
  { title: "Collect samples at home", text: "Follow the simple instructions. Most tests use easy cheek swab collection." },
  { title: "Mail samples to the lab", text: "Use the prepaid label to return samples. All handled with strict confidentiality." },
  { title: "Receive secure results", text: "Results delivered privately, typically within 2–3 business days after lab receipt." },
];

const MISSION_COPY = {
  intro: "Mile High DNA Testing exists to provide access to accurate, private, and ethical at-home DNA testing. We believe questions about biological relationships deserve clear answers without pressure or judgment.",
  commitment: "We are committed to privacy, accuracy, and responsible testing practices. Every test is processed by an accredited laboratory, and we serve individuals and families nationwide with a community-centered, respectful approach.",
};

const TRUST_SECTION_COPY =
  "All tests are processed by AABB-accredited laboratories using industry-standard DNA analysis.";

/**
 * Shared layout for shop bucket (category) pages.
 * Props: title, subhead, heroImage, products[], whoThisIsFor[], canonicalUrl, metaTitle, metaDescription
 * When categoryLayout=true: after product grid shows only Trust section + Footer CTA (link to /services). No How it works, Who this is for, Mission, or Google review.
 */
const ShopBucketLayout = ({
  title,
  subhead,
  heroImage,
  products = [],
  whoThisIsFor = [],
  canonicalUrl,
  metaTitle,
  metaDescription,
  categoryLayout = false,
}) => {
  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <html lang="en" />
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      {/* 1. Hero (image left, copy right; mobile: image above) */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <div className="md:w-2/5 flex-shrink-0 order-2 md:order-1">
              <div className="aspect-square max-w-sm mx-auto md:mx-0 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                <img
                  src={heroImage}
                  alt=""
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </div>
            <div className="md:w-3/5 order-1 md:order-2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {title}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {subhead}
              </p>
              <ul className="space-y-2 mb-8">
                {TRUST_BULLETS.map((bullet) => (
                  <li key={bullet} className="flex items-center text-gray-700">
                    <span className="text-blue-600 mr-2">✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <Link
                to="#product-options"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition font-semibold"
              >
                View Test Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Product options grid */}
      <section id="product-options" className="bg-[#F5F7FA] py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A3C59] mb-8">
            Available Test Options
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={product.detailUrl ? `${product.detailUrl}-${index}` : `product-${index}`}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                  {product.image ? (
                    <img src={product.image} alt="" className="w-full h-full object-contain p-4" />
                  ) : (
                    <div className="w-full h-full min-h-[120px]" aria-hidden />
                  )}
                </div>
                <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                {product.description && (
                  <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                    {product.description}
                  </p>
                )}
                {product.participantSummary && (
                  <p className="text-sm text-gray-600 mb-2">
                    {product.participantSummary}
                  </p>
                )}
                {typeof product.price === "number" && (
                  <p className="text-sm text-gray-700 mb-4">
                    ${product.price.toFixed(0)}
                    <span className="text-gray-500"> + shipping</span>
                  </p>
                )}
                <Link
                  to={product.detailUrl || "#"}
                  className="inline-block text-blue-600 font-semibold hover:text-blue-800 transition"
                >
                  {product.cta || "Buy Now"}
                </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {categoryLayout ? (
        <>
          <section className="bg-white py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-gray-700 leading-relaxed max-w-3xl">
                {TRUST_SECTION_COPY}
              </p>
            </div>
          </section>
          <section className="bg-[#F5F7FA] py-8 border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-sm text-gray-600">
                Looking for legal or in-person DNA testing?{" "}
                <Link to="/services" className="text-blue-600 hover:text-blue-800 font-medium underline">
                  View our services
                </Link>
                .
              </p>
            </div>
          </section>
        </>
      ) : (
        <>
      {/* 3. How it works */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A3C59] mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS_STEPS.map((step, i) => (
              <div key={i}>
                <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold mb-3">
                  {i + 1}
                </span>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Who this is for */}
      <section className="bg-[#F5F7FA] py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A3C59] mb-6">
            Who This Is For
          </h2>
          <ul className="space-y-3 text-gray-700">
            {whoThisIsFor.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-blue-600 mr-2 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Mission / trust */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A3C59] mb-6">
            Why Mile High DNA Testing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {MISSION_COPY.intro}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {MISSION_COPY.commitment}
          </p>
        </div>
      </section>

      {/* 6. Google review (What Our Clients Say) */}
      <section className="bg-[#F5F7FA] py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A3C59] text-center mb-10">
            What Our Clients Say
          </h2>
          <div className="max-w-2xl mx-auto">
            <a
              href="https://www.google.com/maps?q=Mile+High+DNA+Testing+Denver"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="mb-4 flex justify-center">
                <img
                  src="/images/5-star-rating.svg"
                  alt="5 star rating"
                  className="w-24 h-auto"
                />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-1">Misha Herbert</h4>
              <p className="text-gray-600 text-sm mb-4">Mother in Denver, CO</p>
              <p className="text-gray-700 leading-relaxed">
                Mile High DNA was great! She was very helpful honest and efficient. I truly appreciate her and will definitely be working with her again in the future.
              </p>
              <p className="text-sm text-gray-500 mt-4">Google Review</p>
            </a>
          </div>
        </div>
      </section>

      {/* 7. Site footer */}
      <Footer />
        </>
      )}

      {categoryLayout && <Footer />}
    </main>
  );
};

export default ShopBucketLayout;
