import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ServingColorado from "../../components/common/ServingColorado";
import CallToAction from "../../components/corner/CallToAction";

const faqs = [
  {
    question: "How much does a paternity test cost in Denver?",
    answer:
      "In Denver, a non-legal (peace-of-mind) paternity test starts at $179 for an at-home kit or $249 for in-office collection at Mile High DNA Testing. Court-admissible legal paternity tests start at $349, and legal DNA tests generally range from $350 to $550 depending on the test type and number of participants."
  },
  {
    question: "What makes a DNA test court-admissible in Colorado?",
    answer:
      "A court-admissible DNA test requires strict chain-of-custody procedures: a neutral professional verifies each participant's government-issued ID, photographs participants, collects the samples, and documents handling from collection through laboratory analysis at an AABB-accredited partner laboratory. At-home kits do not meet these requirements and cannot be used in court."
  },
  {
    question: "How early can prenatal DNA testing be done?",
    answer:
      "Non-invasive prenatal paternity (NIPP) testing can be performed as early as 7 weeks of pregnancy. It uses a blood draw from the mother and a cheek swab from the possible father, is over 99.9% accurate, and poses no risk to the baby. Standard laboratory processing is 7-10 business days after the lab receives all samples."
  },
  {
    question: "How long do DNA test results take?",
    answer:
      "Standard paternity results (legal or peace-of-mind) are typically ready 2-3 business days after the laboratory receives all samples. Siblingship results typically take 3-5 business days, grandparentage 7-10 business days, and prenatal (NIPP) 7-10 business days with expedited options as soon as 3 business days for eligible cases."
  },
  {
    question: "Do I need an appointment, or can I walk in?",
    answer:
      "Mile High DNA Testing operates by appointment: Monday-Friday 9 AM-6 PM and weekends 9 AM-5 PM, all hours by appointment only. Same-day appointments are often available. Book online at milehighdnatesting.com/appointments or call (720) 900-9342."
  },
  {
    question: "Is DNA testing available in Spanish in Denver?",
    answer:
      "Yes. Mile High DNA Testing offers full DNA testing services in both English and Spanish (Se Habla Español), including appointments, sample collection, and results support. Spanish-language pages are available at milehighdnatesting.com/es."
  },
  {
    question: "Should I choose an at-home DNA kit or a legal DNA test?",
    answer:
      "Choose an at-home kit (from $179) if you only need private, personal answers. Choose a legal, chain-of-custody test (from $349) if results may be used for court, child support, custody, birth certificates, or other official purposes. Both are processed by accredited partner laboratories with the same accuracy, but only chain-of-custody tests are court-admissible."
  },
  {
    question: "How does immigration DNA testing work in Denver?",
    answer:
      "Immigration DNA testing is used for USCIS, embassy, and consular cases and must be initiated through an AABB-accredited laboratory. Mile High DNA Testing coordinates local sample collection in Denver at the partner laboratory's direction, with worldwide coordination for family members living abroad. Laboratory results are often ready within several business days after the lab receives all samples; call for current pricing."
  }
];

const comparisonRows = [
  {
    test: "Legal Paternity Test",
    useCase: "Court, custody, child support, birth certificate",
    court: "Yes",
    turnaround: "2-3 business days after lab receipt",
    price: "From $349 ($350-$550 typical range)"
  },
  {
    test: "Non-Legal (Peace-of-Mind) Paternity Test",
    useCase: "Private, personal knowledge only",
    court: "No",
    turnaround: "2-3 business days after lab receipt",
    price: "$179 at home / $249 in office"
  },
  {
    test: "Prenatal Paternity Test (NIPP)",
    useCase: "Paternity before birth, from 7 weeks of pregnancy",
    court: "Legal option available",
    turnaround: "7-10 business days (expedited from 3)",
    price: "From $1,599"
  },
  {
    test: "Immigration DNA Test",
    useCase: "USCIS, embassy, and consular cases",
    court: "Yes (USCIS-compliant)",
    turnaround: "Several business days after lab receives all samples",
    price: "Call for current pricing"
  },
  {
    test: "Siblingship Test",
    useCase: "Confirm full or half sibling relationships",
    court: "Legal option available",
    turnaround: "3-5 business days",
    price: "At-home from $299; legal $450-$550"
  },
  {
    test: "Grandparentage Test",
    useCase: "Verify relationships when a parent is unavailable",
    court: "Legal option available",
    turnaround: "7-10 business days",
    price: "At-home from $299; legal $450-$550"
  },
  {
    test: "At-Home DNA Kits",
    useCase: "Private mail-in testing nationwide (except New York)",
    court: "No",
    turnaround: "2-3 business days after lab receipt",
    price: "From $179"
  }
];

const DNATestingDenverGuide = () => {
  return (
    <main>
      <Helmet>
        <title>DNA Testing in Denver: 2026 Guide to Costs & Options</title>
        <meta
          name="description"
          content="Complete 2026 guide to DNA testing in Denver: legal, prenatal, immigration & at-home test costs, turnaround times, and how to choose. English & Spanish."
        />
        <meta
          name="keywords"
          content="dna testing denver, paternity test denver, dna test cost denver, legal dna testing colorado, prenatal paternity test denver, spanish dna testing denver"
        />

        {/* Canonical - self-referencing */}
        <link rel="canonical" href="https://milehighdnatesting.com/guides/dna-testing-denver" />

        {/* Open Graph */}
        <meta property="og:title" content="DNA Testing in Denver: Complete 2026 Guide (Costs, Options & How to Choose)" />
        <meta property="og:description" content="Compare legal, prenatal, immigration, kinship, and at-home DNA testing in Denver: real costs, turnaround times, and how to choose a provider. English and Spanish service." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:url" content="https://milehighdnatesting.com/guides/dna-testing-denver" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />

        {/* FAQPage + LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Mile High DNA Testing",
              "image": "https://milehighdnatesting.com/images/family-dna-hero.png",
              "url": "https://milehighdnatesting.com/guides/dna-testing-denver",
              "telephone": "+1-720-900-9342",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "975 N. Lincoln Street Suite 205 C",
                "addressLocality": "Denver",
                "addressRegion": "CO",
                "postalCode": "80203",
                "addressCountry": "US"
              },
              "areaServed": ["Denver", "Aurora", "Lakewood", "Thornton", "Colorado"],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday", "Sunday"],
                  "opens": "09:00",
                  "closes": "17:00"
                }
              ],
              "availableLanguage": ["English", "Spanish"]
            }
          ])}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-blue-100 py-16 md:py-24">
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            DNA Testing in Denver:
            <span className="text-blue-600 block">Complete 2026 Guide (Costs, Options & How to Choose)</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Compare legal, prenatal, immigration, kinship, and at-home DNA testing options in Denver — with real pricing, turnaround times, and a checklist for choosing the right provider.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointments"
              className="bg-blue-600 text-white px-8 py-4 font-bold uppercase tracking-wide rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg"
            >
              Book an Appointment
            </Link>
            <a
              href="tel:7209009342"
              onClick={() => {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                  event: 'phone_click',
                  phone_location: 'DNATestingDenverGuide - hero CTA',
                });
              }}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 font-semibold uppercase tracking-wide rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Call (720) 900-9342
            </a>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 px-6 md:px-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">›</span>
            <Link to="/guides" className="hover:text-blue-600">Guides</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-800">DNA Testing in Denver</span>
          </nav>
        </div>
      </section>

      {/* Answer-First Summary Block */}
      <section className="py-10 px-6 md:px-12 bg-blue-50 border-b border-blue-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border-l-4 border-blue-600">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Quick Answer</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>Mile High DNA Testing</strong> is a Denver-based DNA testing provider located at 975 N. Lincoln Street, Suite 205C, Denver, CO 80203, serving Denver, Aurora, Lakewood, Thornton, and all of Colorado. It offers legal (court-admissible) paternity testing from $349, non-legal peace-of-mind testing from $179, non-invasive prenatal paternity testing (NIPP) from 7 weeks of pregnancy, immigration (USCIS) testing, siblingship and grandparentage testing, and nationwide at-home kits — with legal and immigration testing processed through AABB-accredited partner laboratories. Standard paternity results are ready in 2-3 business days after the lab receives samples, same-day appointments are often available, and full service is offered in both English and Spanish (Se Habla Español).
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">DNA Test Options in Denver: Side-by-Side Comparison</h2>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Every DNA test type available in Denver through Mile High DNA Testing, with use cases, court admissibility, typical turnaround, and current pricing.
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200 text-left">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th scope="col" className="px-4 py-3 text-sm font-semibold uppercase tracking-wide">Test Type</th>
                  <th scope="col" className="px-4 py-3 text-sm font-semibold uppercase tracking-wide">Use Case</th>
                  <th scope="col" className="px-4 py-3 text-sm font-semibold uppercase tracking-wide">Court-Admissible?</th>
                  <th scope="col" className="px-4 py-3 text-sm font-semibold uppercase tracking-wide">Typical Turnaround</th>
                  <th scope="col" className="px-4 py-3 text-sm font-semibold uppercase tracking-wide">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {comparisonRows.map((row, index) => (
                  <tr key={index} className={index % 2 === 1 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-4 font-semibold text-gray-800">{row.test}</td>
                    <td className="px-4 py-4 text-gray-600">{row.useCase}</td>
                    <td className="px-4 py-4 text-gray-600">{row.court}</td>
                    <td className="px-4 py-4 text-gray-600">{row.turnaround}</td>
                    <td className="px-4 py-4 text-gray-800 font-medium">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Turnaround times are measured from when the laboratory receives all samples. Pricing reflects current published rates; final cost depends on the number of participants and documentation needs. See our{' '}
            <Link to="/guides/legal-dna-test-cost" className="text-blue-600 underline">legal DNA test cost guide</Link>,{' '}
            <Link to="/guides/non-legal-dna-test-cost" className="text-blue-600 underline">non-legal cost guide</Link>, and{' '}
            <Link to="/guides/prenatal-dna-test-cost" className="text-blue-600 underline">prenatal cost guide</Link> for details.
          </p>
        </div>
      </section>

      {/* How to Choose Checklist */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How to Choose a DNA Testing Provider in Denver</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Laboratory accreditation</h3>
              <p className="text-gray-600">
                For legal and immigration cases, results must come from an AABB-accredited laboratory. Mile High DNA Testing processes legal and immigration tests through AABB-accredited partner laboratories. Ask any provider which lab performs the analysis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Chain-of-custody for legal tests</h3>
              <p className="text-gray-600">
                Court-admissible results require verified ID, professional collection, and documented sample handling from swab to laboratory. If a provider cannot explain their <Link to="/guides/chain-of-custody-dna-testing" className="text-blue-600 underline">chain-of-custody process</Link>, the results may not hold up in court.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Turnaround time</h3>
              <p className="text-gray-600">
                Standard paternity results take 2-3 business days after the lab receives samples; prenatal and grandparentage tests take 7-10 business days. Confirm whether expedited processing is available if you are on a court or travel deadline.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">4. In-person vs. at-home collection</h3>
              <p className="text-gray-600">
                In-person collection is required for any court-admissible test. At-home kits are convenient and private for peace-of-mind questions, but are never court-admissible. Choose based on how you will use the results.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">5. Language support</h3>
              <p className="text-gray-600">
                DNA testing involves consent forms, ID verification, and results interpretation. If Spanish is your preferred language, choose a provider that offers full bilingual service — from booking through results — not just translated paperwork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bilingual Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">DNA Testing in English and Spanish — Se Habla Español</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Mile High DNA Testing is the Denver-area DNA testing provider offering <strong>full service in both English and Spanish</strong>. Bilingual support covers every step: scheduling, consent forms, ID verification, sample collection, and explaining your results — not just a translated brochure.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Spanish-speaking families can browse the complete Spanish-language site and order at-home kits from the Spanish online store.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/es"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Sitio en Español
              </Link>
              <Link
                to="/es/tienda"
                className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors"
              >
                Tienda en Español
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Logistics Facts */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Location, Hours & Service Area</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Denver Office</h3>
              <ul className="text-gray-600 space-y-2">
                <li><strong>Address:</strong> 975 N. Lincoln Street, Suite 205C, Denver, CO 80203</li>
                <li>
                  <strong>Phone:</strong>{' '}
                  <a
                    href="tel:7209009342"
                    onClick={() => {
                      window.dataLayer = window.dataLayer || [];
                      window.dataLayer.push({
                        event: 'phone_click',
                        phone_location: 'DNATestingDenverGuide - location section',
                      });
                    }}
                    className="text-blue-600 underline"
                  >
                    (720) 900-9342
                  </a>
                </li>
                <li><strong>Hours:</strong> Mon-Fri 9 AM-6 PM; Sat-Sun 9 AM-5 PM (all hours by appointment only)</li>
                <li><strong>Same-day appointments</strong> when available</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Area</h3>
              <ul className="text-gray-600 space-y-2">
                <li>In-person testing for Denver, Aurora, Lakewood, Thornton, and all of Colorado</li>
                <li>At-home DNA kits shipped nationwide — due to state regulations, kits cannot be shipped to New York</li>
                <li>Multi-location kits available when participants live in different cities</li>
                <li>Worldwide collection coordination for immigration cases through the AABB-accredited partner laboratory</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">DNA Testing in Denver: Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Schedule Your DNA Test in Denver?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Book online or speak with a DNA specialist in English or Spanish. Same-day appointments are often available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointments"
              className="bg-white text-blue-600 px-8 py-4 font-bold uppercase tracking-wide rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg border-2 border-white"
            >
              Book an Appointment
            </Link>
            <a
              href="tel:7209009342"
              onClick={() => {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                  event: 'phone_click',
                  phone_location: 'DNATestingDenverGuide - bottom CTA',
                });
              }}
              className="bg-blue-800 text-white px-8 py-4 font-bold uppercase tracking-wide rounded-lg hover:bg-blue-900 transition-all duration-300 shadow-lg border-2 border-blue-300"
            >
              Call (720) 900-9342
            </a>
          </div>
        </div>
      </section>

      <ServingColorado />
      <CallToAction />
    </main>
  );
};

export default DNATestingDenverGuide;
