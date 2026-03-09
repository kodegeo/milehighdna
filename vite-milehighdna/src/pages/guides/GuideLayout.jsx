import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ServingColorado from "../../components/common/ServingColorado";
import CallToAction from "../../components/corner/CallToAction";

const BASE = "https://milehighdnatesting.com/guides";

export default function GuideLayout({
  title,
  slug,
  breadcrumbLabel,
  description,
  ogTitle,
  serviceLink,
  serviceLabel,
  heroSubline,
  faqs,
  overview,
  whenUsed,
  process,
  legal,
  relatedGuides,
  ctaHeading,
  ctaSubline,
}) {
  const canonical = `${BASE}/${slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": "https://milehighdnatesting.com/images/banner-1200.png",
    "author": { "@type": "Organization", "name": "Mile High DNA Testing" },
    "publisher": {
      "@type": "Organization",
      "name": "Mile High DNA Testing",
      "logo": { "@type": "ImageObject", "url": "https://milehighdnatesting.com/logo.png" }
    },
    "url": canonical,
    "mainEntityOfPage": canonical,
    "datePublished": "2025-01-01",
    "dateModified": "2026-01-24"
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  };

  return (
    <main>
      <Helmet>
        <title>{title} | Mile High DNA</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={ogTitle || title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <script type="application/ld+json">{JSON.stringify([articleSchema, faqSchema])}</script>
      </Helmet>

      <section className="relative h-[60vh] min-h-[400px] overflow-hidden bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {heroSubline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => document.getElementById("overview")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-blue-600 text-white px-8 py-4 font-bold uppercase tracking-wide rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg"
              >
                Read the Guide
              </button>
              <Link
                to={serviceLink || "/appointments"}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 font-semibold uppercase tracking-wide rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 text-center"
              >
                {serviceLabel || "Schedule a Test"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 px-6 md:px-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">›</span>
            <Link to="/guides" className="hover:text-blue-600">Guides</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-800">{breadcrumbLabel}</span>
          </nav>
        </div>
      </section>

      <section className="py-8 px-6 md:px-12 bg-blue-50 border-b border-blue-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
            <p className="text-gray-700 text-lg">
              <strong>About This Guide:</strong> This page is an <em>informational guide only</em>. For booking or service-specific information, visit our{" "}
              {serviceLink ? (
                <Link to={serviceLink} className="text-blue-600 underline font-medium">{serviceLabel || "service page"}</Link>
              ) : (
                <Link to="/appointments" className="text-blue-600 underline font-medium">appointments page</Link>
              )}
              .
            </p>
          </div>
        </div>
      </section>

      <section id="overview" className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Overview</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            {overview}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">When This Test Is Used</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            {whenUsed}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How The Process Works</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            {process}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Legal vs Non-Legal Considerations</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            {legal}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          {relatedGuides && relatedGuides.length >= 2 && (
            <p className="mt-8 text-gray-600">
              Related guides: <Link to={relatedGuides[0].path} className="text-blue-600 underline">{relatedGuides[0].title}</Link>
              {" · "}
              <Link to={relatedGuides[1].path} className="text-blue-600 underline">{relatedGuides[1].title}</Link>
            </p>
          )}
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{ctaHeading}</h2>
          <p className="text-xl text-blue-100 mb-8">{ctaSubline}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={serviceLink || "/appointments"}
              className="bg-white text-blue-600 px-8 py-4 font-bold uppercase tracking-wide rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg border-2 border-white"
            >
              {serviceLabel || "Schedule a Test"}
            </Link>
            <Link
              to="/appointments"
              className="bg-blue-800 text-white px-8 py-4 font-bold uppercase tracking-wide rounded-lg hover:bg-blue-900 transition-all duration-300 shadow-lg border-2 border-blue-300"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>

      <ServingColorado />
      <CallToAction />
    </main>
  );
}
