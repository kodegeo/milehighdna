import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const CALENDLY_EN = "https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment";
const ADDRESS = "975 N Lincoln Street, Suite 205C, Denver, CO 80203";

const GpsOriginsDNATest = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const faqs = [
    { question: "What does the GPS Origins DNA Test show?", answer: "The GPS Origins DNA Test provides detailed ancestry insights and geographic genetic origins using advanced DNA analysis. You receive a report showing ancestral composition and geographic origins." },
    { question: "Is the GPS Origins test used for legal or court purposes?", answer: "No. The GPS Origins DNA Test is for personal ancestry and genealogy only—not for legal or court use. It does not replace paternity, maternity, or other relationship DNA tests when legal documentation is required." },
    { question: "How is the sample collected?", answer: "A DNA sample (e.g., cheek swab) is collected in our Denver office or as directed. Your DNA is analyzed for ancestry and geographic origin markers and results are delivered confidentially." }
  ];

  const processSteps = [
    { step: 1, title: "Schedule your appointment", description: "Book online or call our Denver office." },
    { step: 2, title: "DNA sample collection", description: "A DNA sample (e.g., cheek swab) is collected." },
    { step: 3, title: "Ancestry and origin analysis", description: "Your DNA is analyzed for ancestry and geographic origin markers." },
    { step: 4, title: "Report delivery", description: "You receive a report showing ancestral composition and geographic origins. Results are delivered confidentially for personal use." }
  ];

  const schemaWebPage = { "@context": "https://schema.org", "@type": "WebPage", "@id": "https://milehighdnatesting.com/services/gps-origins-dna-test#webpage", "url": "https://milehighdnatesting.com/services/gps-origins-dna-test", "name": "GPS Origins DNA Test in Denver | Mile High DNA", "description": "GPS Origins DNA Test for ancestry and geographic genetic origins. Denver, Colorado." };
  const schemaService = { "@context": "https://schema.org", "@type": "Service", "name": "GPS Origins DNA Test", "description": "Ancestry and geographic genetic origins DNA testing.", "provider": { "@type": "Organization", "name": "Mile High DNA Testing", "url": "https://milehighdnatesting.com" }, "areaServed": { "@type": "City", "name": "Denver", "addressRegion": "CO" } };
  const schemaBreadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://milehighdnatesting.com" }, { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://milehighdnatesting.com/services" }, { "@type": "ListItem", "position": 3, "name": "GPS Origins DNA Test", "item": "https://milehighdnatesting.com/services/gps-origins-dna-test" }] };
  const schemaFAQ = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };

  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>GPS Origins DNA Test in Denver | Ancestry & Geographic Origins | Mile High DNA</title>
        <meta name="description" content="GPS Origins DNA Test in Denver provides detailed ancestry and geographic genetic origins. Discover your genetic origins with advanced DNA analysis. Mile High DNA." />
        <link rel="canonical" href="https://milehighdnatesting.com/services/gps-origins-dna-test" />
        <meta property="og:title" content="GPS Origins DNA Test in Denver | Mile High DNA" />
        <meta property="og:description" content="Ancestry and geographic genetic origins. Denver, Colorado." />
        <meta property="og:url" content="https://milehighdnatesting.com/services/gps-origins-dna-test" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white">GPS Origins DNA Test in Denver</h1>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl">Ancestry and geographic genetic origins.</p>
          <p className="text-blue-100 mb-8 max-w-2xl">The GPS Origins DNA Test provides detailed ancestry insights and geographic genetic origins using advanced DNA analysis. This test is ideal for individuals seeking deeper ancestral and regional genetic information.</p>
          <ul className="space-y-2 text-blue-100 mb-8">
            <li>✔ Ancestral composition</li>
            <li>✔ Geographic origins</li>
            <li>✔ Personal use only</li>
            <li>✔ Confidential results</li>
          </ul>
          <a href={CALENDLY_EN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Book Your Appointment</a>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-gray-700 text-sm md:text-base">
            <span>✓ Professional Laboratory Analysis</span>
            <span>✓ Confidential & Secure</span>
            <span>✓ Personal Ancestry Use</span>
            <span>✓ Denver & Colorado</span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing-info" className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Choose Your Testing Option</h3>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">GPS Origins DNA Test</h4>
              <p className="text-3xl font-bold text-blue-600 mb-2">$169</p>
              <p className="text-sm text-gray-500 mb-4">Ancestry &amp; geographic genetic origins.</p>
              <p className="text-gray-600 mb-4">Traces ancestral roots and migration patterns with geographic detail.</p>
              <a
                href={CALENDLY_EN}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition font-semibold text-lg inline-block w-full"
              >
                Book Appointment
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">More Lifestyle &amp; Ancestry</h4>
              <p className="text-3xl font-bold text-green-600 mb-2">From $149</p>
              <p className="text-sm text-gray-500 mb-4">Wellness and other panels.</p>
              <p className="text-gray-600 mb-4">Explore Healthy Weight and other options in one place.</p>
              <Link
                to="/services/lifestyle-ancestry-dna-testing"
                className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 transition font-semibold text-lg inline-block w-full"
              >
                View All Options
              </Link>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-6">
            Report options may vary. GPS Origins is for personal ancestry only—not for legal or court use.
          </p>

          <p className="text-gray-700 mb-6 text-lg">
            Prefer wellness-focused genetics? See the{" "}
            <Link to="/services/healthy-weight-dna-test" className="text-blue-600 underline">Healthy Weight DNA Test</Link>.
          </p>
        </div>
      </section>

      {/* What Is / When needed */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What Is the GPS Origins DNA Test?</h2>
          <p className="text-gray-700 mb-4">The GPS Origins DNA Test provides detailed ancestry insights and geographic genetic origins using advanced DNA analysis. This test is ideal for individuals seeking deeper ancestral and regional genetic information.</p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">When Is This Test Used?</h2>
          <p className="text-gray-700 mb-4">The GPS Origins DNA Test is for <strong>personal ancestry and genealogy</strong>—not for legal or court use. It is chosen by individuals interested in discovering their genetic origins and ancestral regions. It does not replace paternity, maternity, or other relationship DNA tests when legal documentation is required.</p>
        </div>
      </section>

      {/* How the process works */}
      <section className="py-12 md:py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">How the Process Works</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block" />
            <div className="space-y-8">
              {processSteps.map(({ step, title, description }) => (
                <div key={step} className="relative flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold z-10">{step}</div>
                  <div className="flex-grow bg-white rounded-xl p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                    <p className="text-gray-700">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-12 md:py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Mile High DNA Testing?</h2>
          <p className="text-gray-700 mb-4">We offer the GPS Origins DNA Test in Denver and Colorado. Contact us to discover your genetic origins with professional, confidential testing.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button onClick={() => toggleFaq(i)} className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50">
                  <span className="font-medium text-gray-800 pr-4">{faq.question}</span>
                  <svg className={`w-6 h-6 text-gray-500 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openFaq === i && <div className="px-6 pb-5 border-t border-gray-100"><p className="pt-4 text-gray-700">{faq.answer}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Schedule Your GPS Origins DNA Test</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">Book an appointment to discover your genetic origins.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CALENDLY_EN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition">Book Appointment</a>
          </div>
          <p className="mt-8 text-blue-200">📍 {ADDRESS}</p>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-10 px-6 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center text-gray-700">
          <p>
            <Link to="/services/lifestyle-ancestry-dna-testing" className="text-blue-600 hover:underline">Lifestyle & Ancestry DNA Tests</Link>
            {' · '}
            <Link to="/appointments" className="text-blue-600 hover:underline">All Appointments</Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default GpsOriginsDNATest;
