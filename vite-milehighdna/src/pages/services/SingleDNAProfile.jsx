import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const PHONE = "720-900-9342";
const PHONE_TEL = "tel:+17209009342";
const ADDRESS = "975 N Lincoln Street, Suite 205C, Denver, CO 80203";
const CALENDLY_EN = "https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment";
const CALENDLY_ES = "https://calendly.com/milehighdnatesting/cita-prueba-adn";

const SingleDNAProfile = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const faqs = [
    { question: "What is a single profile DNA test?", answer: "A single profile DNA test creates a laboratory DNA profile for one individual without comparing it to another person." },
    { question: "Can a single profile DNA test determine paternity?", answer: "No. A single profile DNA test does not compare two individuals and therefore cannot determine paternity or biological relationships." },
    { question: "Can the DNA profile be used later for comparison?", answer: "Yes. The preserved DNA profile can be used in a future DNA comparison test if another participant becomes available." },
    { question: "Is a single profile DNA test legal?", answer: "A single profile test can be performed under legal chain-of-custody procedures if court documentation may be required later." }
  ];

  const processSteps = [
    { step: 1, title: "Schedule your appointment", description: "Book online or call our Denver office." },
    { step: 2, title: "Present government-issued ID", description: "Required for legal single profile tests." },
    { step: 3, title: "Quick cheek swab collection", description: "Certified in-office collection." },
    { step: 4, title: "Samples shipped to AABB-accredited lab", description: "Professional laboratory analysis." },
    { step: 5, title: "Results in 3–5 business days", description: "Secure PDF report delivered to you." }
  ];

  const schemaWebPage = { "@context": "https://schema.org", "@type": "WebPage", "@id": "https://milehighdnatesting.com/services/single-dna-profile#webpage", "url": "https://milehighdnatesting.com/services/single-dna-profile", "name": "Single Profile DNA Testing in Denver | Mile High DNA Testing", "description": "Secure one person's DNA profile for future comparison. Legal and non-legal options in Denver, Colorado." };
  const schemaService = { "@context": "https://schema.org", "@type": "Service", "name": "Single Profile DNA Testing in Denver", "description": "Laboratory-issued DNA profile for one individual. Legal and non-legal options. Does not determine paternity.", "provider": { "@type": "Organization", "name": "Mile High DNA Testing", "url": "https://milehighdnatesting.com" }, "areaServed": { "@type": "City", "name": "Denver", "addressRegion": "CO" } };
  const schemaBreadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://milehighdnatesting.com" }, { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://milehighdnatesting.com/services" }, { "@type": "ListItem", "position": 3, "name": "Single Profile DNA Testing", "item": "https://milehighdnatesting.com/services/single-dna-profile" }] };
  const schemaFAQ = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };

  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>Single Profile DNA Testing in Denver | Secure DNA Now, Compare Later | Mile High DNA</title>
        <meta name="description" content="Single profile DNA testing in Denver. Secure one person's DNA profile for future comparison. Legal and non-legal options. $250–$349. Book online or call 720-900-9342." />
        <link rel="canonical" href="https://milehighdnatesting.com/services/single-dna-profile" />
        <meta property="og:title" content="Single Profile DNA Testing in Denver | Mile High DNA" />
        <meta property="og:description" content="Secure the DNA now. Compare later. Legal and non-legal single profile DNA testing in Denver, Colorado." />
        <meta property="og:url" content="https://milehighdnatesting.com/services/single-dna-profile" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white">Single Profile DNA Testing in Denver</h1>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl">Secure the DNA Now. Compare Later.</p>
          <p className="text-blue-100 mb-8 max-w-2xl">When the other participant is unavailable, you do not have to wait. A Single Profile DNA Test allows you to professionally document and preserve one person's DNA profile today. A comparison test can be ordered later when the second party becomes available.</p>
          <ul className="space-y-2 text-blue-100 mb-8">
            <li>✔ Certified in-office DNA collection</li>
            <li>✔ AABB-accredited laboratory analysis</li>
            <li>✔ 3–5 business day turnaround</li>
            <li>✔ Legal and non-legal options available</li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <a href={CALENDLY_EN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Book Your Appointment</a>
            <a href={CALENDLY_ES} target="_blank" rel="noopener noreferrer" className="inline-flex items-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">Cita en español</a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-gray-700 text-sm md:text-base">
            <span>✓ AABB Accredited Laboratory</span>
            <span>✓ Court-Admissible Options Available</span>
            <span>✓ 3–5 Business Day Results</span>
            <span>✓ Confidential & Secure Process</span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing-info" className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Choose Your Testing Option</h3>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Non-Legal Single Profile</h4>
              <p className="text-3xl font-bold text-blue-600 mb-2">$250</p>
              <p className="text-sm text-gray-500 mb-4">Personal documentation only.</p>
              <p className="text-gray-600 mb-4">Certified in-office collection and AABB-accredited lab analysis. Not court-admissible.</p>
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
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Legal Single Profile</h4>
              <p className="text-3xl font-bold text-green-600 mb-2">$349</p>
              <p className="text-sm text-gray-500 mb-4">Court-admissible documentation.</p>
              <p className="text-gray-600 mb-4">Chain of custody, ID verification, and formal report suitable for legal submission.</p>
              <a
                href={CALENDLY_EN}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 transition font-semibold text-lg inline-block w-full"
              >
                Book Appointment
              </a>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-6">
            A single profile preserves one person&apos;s DNA for future comparison—it does not determine paternity or relationships until a comparison test is ordered.
          </p>

          <p className="text-gray-700 mb-6 text-lg">
            Need two-party testing instead? See{" "}
            <Link to="/services/non-legal-paternity-testing" className="text-blue-600 underline">non-legal paternity</Link>{" "}
            or{" "}
            <Link to="/services/legal-paternity-testing" className="text-blue-600 underline">legal paternity testing</Link>.
          </p>
        </div>
      </section>

      {/* What Is a Single Profile DNA Test? */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What Is a Single Profile DNA Test?</h2>
          <p className="text-gray-700 mb-4">A Single Profile DNA Test creates a laboratory-issued DNA profile for one individual.</p>
          <p className="text-gray-700 mb-4">Unlike paternity or relationship testing, this test does not compare two people. Instead, it establishes a verified DNA profile that can be used later if a comparison test becomes necessary.</p>
          <p className="text-gray-700">This option is useful when another participant is unavailable, out of the country, or unwilling to participate in testing at the current time.</p>
        </div>
      </section>

      {/* When Should Someone Order a Single Profile DNA Test? */}
      <section className="py-12 md:py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">When Should Someone Order a Single Profile DNA Test?</h2>
          <p className="text-gray-700 mb-4">A single profile DNA test may be appropriate when:</p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-4">
            <li>The second participant is unavailable</li>
            <li>The second participant lives in another state or country</li>
            <li>A legal case may arise later</li>
            <li>DNA documentation is needed before a medical procedure</li>
            <li>Someone wants to preserve DNA evidence before circumstances change</li>
          </ul>
          <p className="text-gray-700">This allows individuals to secure documented DNA information without waiting for another participant.</p>
        </div>
      </section>

      {/* Important clarification */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Important Clarification</h2>
          <p className="text-gray-700 mb-4">A single profile DNA test:</p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-4">
            <li>Does not determine paternity</li>
            <li>Does not determine maternity</li>
            <li>Does not confirm a biological relationship</li>
            <li>Does not compare against any database</li>
          </ul>
          <p className="text-gray-700 font-medium">It establishes one individual's DNA profile only. A comparison test can be ordered later if needed.</p>
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
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Mile High DNA Testing?</h2>
          <p className="text-gray-700 mb-4">Not all single profile tests are handled the same way. We provide:</p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 mb-6">
            <li>Certified in-office collection</li>
            <li>Professional identity verification</li>
            <li>Secure documentation</li>
            <li>AABB-accredited laboratory processing</li>
            <li>Proper structure for future comparison testing</li>
          </ul>
          <p className="text-gray-700 font-medium">This ensures your DNA profile is preserved correctly the first time. We also coordinate <Link to="/services/legal-paternity-testing" className="text-blue-600 hover:underline">legal paternity DNA testing</Link> and <Link to="/services/immigration-dna-testing" className="text-blue-600 hover:underline">immigration DNA testing</Link> when comparison testing is needed.</p>
        </div>
      </section>

      {/* Is a Single Profile DNA Test Legally Admissible? */}
      <section className="py-12 md:py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Is a Single Profile DNA Test Legally Admissible?</h2>
          <p className="text-gray-700 mb-6">A single profile test can be performed under two structures:</p>
          <div className="space-y-6 mb-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Non-Legal Testing</h3>
              <p className="text-gray-700">Personal documentation only.</p>
              <p className="text-gray-700">Does not include legal chain-of-custody procedures.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Legal Single Profile Testing</h3>
              <p className="text-gray-700 mb-2">Includes:</p>
              <ul className="list-disc list-outside ml-6 space-y-1 text-gray-700">
                <li>Government ID verification</li>
                <li>Certified DNA collector</li>
                <li>Documented chain-of-custody procedures</li>
                <li>AABB-accredited laboratory analysis</li>
              </ul>
              <p className="text-gray-700 mt-2">Legal testing ensures the profile is documented correctly if it may be used later in court. Learn more about <Link to="/aabb-accredited-dna-testing-denver" className="text-blue-600 hover:underline">AABB-accredited DNA testing</Link> standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How Single Profile Testing Supports Future DNA Comparisons */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">How Single Profile Testing Supports Future DNA Comparisons</h2>
          <p className="text-gray-700 mb-4">If another individual becomes available later, the laboratory can perform a comparison test using the preserved DNA profile.</p>
          <p className="text-gray-700 mb-4">This means the original participant does not need to be re-tested.</p>
          <p className="text-gray-700 mb-2">The preserved DNA profile can be used for:</p>
          <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700">
            <li>future paternity testing</li>
            <li>maternity confirmation</li>
            <li>sibling DNA testing</li>
            <li>legal case documentation</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions About Single Profile DNA Testing</h2>
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

      {/* Internal links */}
      <section className="py-10 px-6 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center text-gray-700">
          <p>
            We also offer <Link to="/services/legal-paternity-testing" className="text-blue-600 hover:underline">legal paternity DNA testing</Link>, <Link to="/services/prenatal-paternity-testing" className="text-blue-600 hover:underline">prenatal paternity testing</Link>, and <Link to="/services/immigration-dna-testing" className="text-blue-600 hover:underline">immigration DNA testing</Link>. Learn about <Link to="/aabb-accredited-dna-testing-denver" className="text-blue-600 hover:underline">AABB-accredited DNA testing</Link> and our <Link to="/locations/denver" className="text-blue-600 hover:underline">Denver location</Link>.
          </p>
        </div>
      </section>
    </main>
  );
};

export default SingleDNAProfile;
