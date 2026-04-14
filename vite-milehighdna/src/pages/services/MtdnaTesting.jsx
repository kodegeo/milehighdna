import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const CALENDLY_EN = "https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment";
const ADDRESS = "975 N Lincoln Street, Suite 205C, Denver, CO 80203";

const MtdnaTesting = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const faqs = [
    { question: "What is mtDNA testing?", answer: "Mitochondrial DNA (mtDNA) testing traces maternal ancestry through the direct maternal line. mtDNA is inherited from mother to child. This test is useful when close maternal relatives are unavailable and is commonly used for genealogy and extended maternal relationship testing." },
    { question: "Can mtDNA results be used in court?", answer: "mtDNA testing is used for genealogy and maternal line verification. It is not a substitute for legal maternity or paternity testing when court-admissible results are required. For court use, legal paternity or maternity testing is needed." },
    { question: "How does mtDNA differ from Y-STR?", answer: "mtDNA traces the maternal line (mother to child). Y-STR traces the paternal line (father to son) and is only for males. If you need both lines, you may consider both tests." }
  ];

  const processSteps = [
    { step: 1, title: "Schedule your appointment", description: "Book online or call our Denver office." },
    { step: 2, title: "DNA sample collection", description: "A DNA sample (e.g., cheek swab) is collected." },
    { step: 3, title: "Mitochondrial DNA analysis", description: "Mitochondrial DNA is analyzed (inherited from mother to child)." },
    { step: 4, title: "Results report", description: "Results show maternal line relatedness and can support genealogy research. Delivered in a clear, confidential report." }
  ];

  const schemaWebPage = { "@context": "https://schema.org", "@type": "WebPage", "@id": "https://milehighdnatesting.com/services/mtdna-testing#webpage", "url": "https://milehighdnatesting.com/services/mtdna-testing", "name": "mtDNA Testing in Denver | Mile High DNA", "description": "Mitochondrial DNA testing for maternal lineage and genealogy. Denver, Colorado." };
  const schemaService = { "@context": "https://schema.org", "@type": "Service", "name": "mtDNA Testing", "description": "Mitochondrial DNA testing for maternal ancestry and genealogy.", "provider": { "@type": "Organization", "name": "Mile High DNA Testing", "url": "https://milehighdnatesting.com" }, "areaServed": { "@type": "City", "name": "Denver", "addressRegion": "CO" } };
  const schemaBreadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://milehighdnatesting.com" }, { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://milehighdnatesting.com/services" }, { "@type": "ListItem", "position": 3, "name": "mtDNA Testing", "item": "https://milehighdnatesting.com/services/mtdna-testing" }] };
  const schemaFAQ = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };

  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>mtDNA Testing in Denver | Maternal Lineage & Genealogy | Mile High DNA</title>
        <meta name="description" content="Mitochondrial DNA (mtDNA) testing in Denver traces maternal ancestry through the direct maternal line. Genealogy and maternal relationship testing. Mile High DNA." />
        <link rel="canonical" href="https://milehighdnatesting.com/services/mtdna-testing" />
        <meta property="og:title" content="mtDNA Testing in Denver | Mile High DNA" />
        <meta property="og:description" content="Maternal lineage and genealogy DNA testing. Denver, Colorado." />
        <meta property="og:url" content="https://milehighdnatesting.com/services/mtdna-testing" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white">mtDNA Testing in Denver</h1>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl">Maternal lineage and genealogy through mitochondrial DNA.</p>
          <p className="text-blue-100 mb-8 max-w-2xl">Mitochondrial DNA (mtDNA) testing traces maternal ancestry through the direct maternal line. This test is useful when close maternal relatives are unavailable and is commonly used for genealogy and extended maternal relationship testing.</p>
          <ul className="space-y-2 text-blue-100 mb-8">
            <li>✔ Maternal line verification</li>
            <li>✔ Genealogy research</li>
            <li>✔ Simple cheek swab</li>
            <li>✔ Clear, confidential reports</li>
          </ul>
          <a href={CALENDLY_EN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Book Your Appointment</a>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-gray-700 text-sm md:text-base">
            <span>✓ Accredited Laboratory Partners</span>
            <span>✓ Confidential & Secure</span>
            <span>✓ Genealogy & Relationship Use</span>
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
              <h4 className="text-2xl font-bold text-gray-800 mb-2">mtDNA Testing</h4>
              <p className="text-3xl font-bold text-blue-600 mb-2">$349+</p>
              <p className="text-sm text-gray-500 mb-4">Maternal line / genealogy.</p>
              <p className="text-gray-600 mb-4">Mitochondrial DNA analysis with clear reporting for personal use.</p>
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
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Y-STR + mtDNA Combo</h4>
              <p className="text-3xl font-bold text-green-600 mb-2">From $349+</p>
              <p className="text-sm text-gray-500 mb-4">Combined lineage panels (scope varies).</p>
              <p className="text-gray-600 mb-4">Often quoted together—ask for details based on your research goals.</p>
              <a
                href={CALENDLY_EN}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 transition font-semibold text-lg inline-block w-full"
              >
                Book Consultation
              </a>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-6">
            Pricing may vary by testing panel and reporting. Testing may be performed through accredited laboratories depending on your needs.
          </p>

          <p className="text-gray-700 mb-6 text-lg">
            For paternal line testing, see{" "}
            <Link to="/services/y-str-dna-testing" className="text-blue-600 underline">Y-STR DNA testing</Link>.
          </p>
        </div>
      </section>

      {/* What Is / When needed */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What Is mtDNA Testing?</h2>
          <p className="text-gray-700 mb-4">Mitochondrial DNA (mtDNA) testing traces maternal ancestry through the direct maternal line. mtDNA is inherited from mother to child. This test is useful when close maternal relatives are unavailable and is commonly used for genealogy and extended maternal relationship testing.</p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">When Is This Test Used?</h2>
          <p className="text-gray-700 mb-4">mtDNA testing is used for <strong>genealogy and maternal line verification</strong>. It is helpful when a direct maternal relative is unavailable for standard testing. It is not a substitute for legal maternity or paternity testing when court-admissible results are required.</p>
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
          <p className="text-gray-700 mb-4">We offer mtDNA testing in Denver and Colorado. Contact us to explore your maternal genetic lineage with clear, confidential testing.</p>
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
          <h2 className="text-3xl font-bold mb-4 text-white">Schedule mtDNA Testing</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">Book an appointment to explore your maternal genetic lineage.</p>
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
            <Link to="/services/y-str-dna-testing" className="text-blue-600 hover:underline">Y-STR (Paternal Lineage) Testing</Link>
            {' · '}
            <Link to="/appointments" className="text-blue-600 hover:underline">All Appointments</Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default MtdnaTesting;
