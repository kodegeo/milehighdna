import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const CALENDLY_EN = "https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment";
const ADDRESS = "975 N Lincoln Street, Suite 205C, Denver, CO 80203";

const GenderRevealDNATesting = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const faqs = [
    { question: "How early can I take the Peek-A-Boo gender reveal test?", answer: "The test can be performed as early as 6 weeks into pregnancy using a simple maternal blood draw. Results are delivered quickly and confidentially." },
    { question: "Is the test safe for my baby?", answer: "Yes. The Peek-A-Boo gender reveal DNA test is non-invasive and uses cell-free fetal DNA from the mother's blood. There is no risk to the baby." },
    { question: "Can I use this instead of prenatal paternity testing?", answer: "No. This test is for personal use and early gender reveal only. It is not a substitute for prenatal paternity testing or medical prenatal screening. For paternity questions during pregnancy, see our prenatal paternity testing service." }
  ];

  const processSteps = [
    { step: 1, title: "Schedule your appointment", description: "Book online or call our Denver office. Testing is typically available from 6 weeks pregnancy." },
    { step: 2, title: "Maternal blood draw", description: "A small blood sample is taken from the mother." },
    { step: 3, title: "Cell-free fetal DNA analysis", description: "Cell-free fetal DNA in the mother's blood is analyzed in the laboratory." },
    { step: 4, title: "Results delivered", description: "Results are delivered quickly and confidentially." }
  ];

  const schemaWebPage = { "@context": "https://schema.org", "@type": "WebPage", "@id": "https://milehighdnatesting.com/services/gender-reveal-dna-testing#webpage", "url": "https://milehighdnatesting.com/services/gender-reveal-dna-testing", "name": "Peek-A-Boo Gender Reveal DNA Test in Denver | Mile High DNA", "description": "Early gender reveal DNA testing from 6 weeks. Safe, non-invasive. Denver and Colorado." };
  const schemaService = { "@context": "https://schema.org", "@type": "Service", "name": "Peek-A-Boo Gender Reveal DNA Test", "description": "Early gender reveal DNA test from 6 weeks pregnancy. Non-invasive maternal blood draw.", "provider": { "@type": "Organization", "name": "Mile High DNA Testing", "url": "https://milehighdnatesting.com" }, "areaServed": { "@type": "City", "name": "Denver", "addressRegion": "CO" } };
  const schemaBreadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://milehighdnatesting.com" }, { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://milehighdnatesting.com/services" }, { "@type": "ListItem", "position": 3, "name": "Gender Reveal DNA Testing", "item": "https://milehighdnatesting.com/services/gender-reveal-dna-testing" }] };
  const schemaFAQ = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };

  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>Peek-A-Boo Gender Reveal DNA Test in Denver | Early Gender Testing | Mile High DNA</title>
        <meta name="description" content="Peek-A-Boo gender reveal DNA test in Denver. Determine your baby's gender as early as 6 weeks with a simple blood draw. Safe, non-invasive early gender testing. Mile High DNA." />
        <link rel="canonical" href="https://milehighdnatesting.com/services/gender-reveal-dna-testing" />
        <meta property="og:title" content="Peek-A-Boo Gender Reveal DNA Test in Denver | Mile High DNA" />
        <meta property="og:description" content="Early gender reveal DNA testing from 6 weeks. Safe, non-invasive. Denver, Colorado." />
        <meta property="og:url" content="https://milehighdnatesting.com/services/gender-reveal-dna-testing" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white">Peek-A-Boo Gender Reveal DNA Test in Denver</h1>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl">Early gender reveal as early as 6 weeks. Safe, non-invasive, fast results.</p>
          <p className="text-blue-100 mb-8 max-w-2xl">The Peek-A-Boo Gender Reveal DNA test determines your baby's gender as early as 6 weeks into pregnancy using a simple maternal blood draw. This early gender DNA test is safe, non-invasive, and delivers fast, reliable results.</p>
          <ul className="space-y-2 text-blue-100 mb-8">
            <li>✔ Available from 6 weeks pregnancy</li>
            <li>✔ Simple maternal blood draw</li>
            <li>✔ Non-invasive, safe for baby</li>
            <li>✔ Fast, confidential results</li>
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
            <span>✓ Fast Results</span>
            <span>✓ Denver & Colorado</span>
          </div>
        </div>
      </section>

      {/* What Is / When needed */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What Is the Peek-A-Boo Gender Reveal DNA Test?</h2>
          <p className="text-gray-700 mb-4">The Peek-A-Boo Gender Reveal DNA test determines your baby's gender as early as 6 weeks into pregnancy using a simple maternal blood draw. This early gender DNA test is safe, non-invasive, and delivers fast, reliable results.</p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">When Is This Test Used?</h2>
          <p className="text-gray-700 mb-4">This test is for <strong>personal use and early gender reveal only</strong>. It is not a substitute for prenatal paternity testing or medical prenatal screening. It is chosen by expectant parents who want to learn their baby's gender early in pregnancy in a safe, accurate way.</p>
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

      {/* Pricing note */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700">Pricing and availability may vary. Contact us for current pricing and to schedule. Testing is performed in partnership with accredited laboratories.</p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-12 md:py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Mile High DNA Testing?</h2>
          <p className="text-gray-700 mb-4">We offer the Peek-A-Boo gender reveal test in Denver, Aurora, Lakewood, and surrounding Colorado areas. Same-day appointments may be available. All testing is handled with confidentiality and care.</p>
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
          <h2 className="text-3xl font-bold mb-4 text-white">Schedule Your Gender Reveal Test</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">Book an appointment in Denver, Aurora, or Lakewood for early gender testing.</p>
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
            <Link to="/services/prenatal-paternity-testing" className="text-blue-600 hover:underline">Prenatal Paternity Testing</Link>
            {' · '}
            <Link to="/appointments" className="text-blue-600 hover:underline">All Appointments</Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default GenderRevealDNATesting;
