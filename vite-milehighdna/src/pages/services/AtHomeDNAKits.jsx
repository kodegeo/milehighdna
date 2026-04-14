import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import ServingColorado from "../../components/common/ServingColorado";
import CallToAction from "../../components/common/CallToAction";
import FAQSection from "../../components/FAQSection";

const PHONE = "720-900-9342";
const PHONE_TEL = "tel:+17209009342";

const AT_HOME_FAQS = [
  {
    question: "1. Is at-home DNA testing accurate?",
    answerSchema:
      "When processed by an AABB-accredited laboratory, at-home paternity testing provides a 99.999% probability of paternity when the alleged father is included. Accuracy is determined by laboratory analysis, not collection location.",
    answer: (
      <>
        <p>
          When processed by an AABB-accredited laboratory, at-home paternity testing provides a{" "}
          <strong>99.999% probability of paternity</strong> when the alleged father is included.
        </p>
        <p>Accuracy is determined by laboratory analysis, not collection location.</p>
      </>
    ),
  },
  {
    question: "2. How long does an at-home test take?",
    answerSchema:
      "Standard laboratory processing time: 2–3 business days after laboratory receipt. Eligible postnatal cases may qualify for next-business-day laboratory processing. Total turnaround depends on shipping time and when samples are received.",
    answer: (
      <>
        <p>
          <strong>Standard laboratory processing time:</strong> 2–3 business days after laboratory receipt.
        </p>
        <p>Eligible postnatal cases may qualify for next-business-day laboratory processing.</p>
        <p>Total turnaround depends on shipping time and when samples are received.</p>
      </>
    ),
  },
  {
    question: "3. Is at-home packaging discreet?",
    answerSchema:
      "Yes. Kits are shipped in discreet packaging without test details displayed externally.",
    answer: (
      <p>Yes. Kits are shipped in discreet packaging without test details displayed externally.</p>
    ),
  },
  {
    question: "4. Can you ship kits nationwide?",
    answerSchema:
      "Multi-location coordination is available throughout the United States. Due to state regulatory requirements, at-home DNA kits cannot be shipped to New York. Clients located in New York should contact our office to discuss available options.",
    answer: (
      <>
        <p>Multi-location coordination is available throughout the United States.</p>
        <p>
          Due to state regulatory requirements, at-home DNA kits <strong>cannot be shipped to New York</strong>.
          Clients located in New York should contact our office to discuss available options.
        </p>
      </>
    ),
  },
  {
    question: "5. What if a sample is collected incorrectly?",
    answerSchema:
      "Improper collection may require recollection, which may delay results. Detailed collection instructions are provided.",
    answer: (
      <>
        <p>Improper collection may require recollection, which may delay results.</p>
        <p>Detailed collection instructions are provided.</p>
      </>
    ),
  },
  {
    question: "6. Are at-home results court-admissible?",
    answerSchema: "No. At-home DNA testing is for informational purposes only.",
    answer: <p>No. At-home DNA testing is for informational purposes only.</p>,
  },
  {
    question: "7. Do food, alcohol, or medications affect DNA results?",
    answerSchema:
      "No. DNA profiles are not altered by food, alcohol, tobacco, or most medications.",
    answer: (
      <p>No. DNA profiles are not altered by food, alcohol, tobacco, or most medications.</p>
    ),
  },
  {
    question: "8. How should swabs be stored before mailing?",
    answerSchema:
      "Swabs should be kept dry at room temperature and returned promptly. All testing is performed by an AABB-accredited laboratory in accordance with established DNA testing standards.",
    answer: (
      <>
        <p>Swabs should be kept dry at room temperature and returned promptly.</p>
        <p>
          All testing is performed by an AABB-accredited laboratory in accordance with established DNA testing
          standards.
        </p>
      </>
    ),
  },
];

const AtHomeDNAKits = () => {
  return (
    <main className="pb-20 md:pb-0">
      <Helmet>
        <html lang="en" />
        <title>At-Home DNA Kits in Denver | Postnatal Peace of Mind Testing | Mile High DNA</title>
        <meta
          name="description"
          content="At-home DNA test kits in Denver: convenient, non-legal postnatal testing with AABB-accredited lab accuracy. Order your kit, collect at home, ship securely. Discreet packaging; nationwide shipping (NY restrictions apply)."
        />
        <link rel="canonical" href="https://milehighdnatesting.com/services/at-home-dna-kits" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://milehighdnatesting.com" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://milehighdnatesting.com/services" },
              {
                "@type": "ListItem",
                position: 3,
                name: "At-Home DNA Kits",
                item: "https://milehighdnatesting.com/services/at-home-dna-kits",
              },
            ],
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: AT_HOME_FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answerSchema },
            })),
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            At-Home DNA Kits in Denver
          </h1>
          <p className="text-xl text-gray-200 mb-4 max-w-2xl">
            Convenient, non-legal postnatal DNA testing with the same AABB-accredited laboratory accuracy as
            in-office testing.
          </p>
          <p className="text-gray-200 mb-8 max-w-2xl">
            Collect cheek swabs at home, ship securely, and receive confidential results for personal knowledge
            only—not for court.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <a
              href="/shop/at-home-paternity-test"
              className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Order Home Kit
            </a>
            <Link
              to="/appointments"
              className="inline-flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition border border-blue-300"
            >
              Book Consultation
            </Link>
            <a
              href={PHONE_TEL}
              onClick={() => {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({ event: "phone_click", phone_number: PHONE, phone_location: "At-Home Hero" });
              }}
              className="inline-flex items-center justify-center text-white underline font-semibold py-3"
            >
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-gray-700 text-sm md:text-base">
            <span>✓ AABB Accredited Laboratory</span>
            <span>✓ Peace of Mind (Non-Legal) Only</span>
            <span>✓ 2–3 Business Day Lab Processing</span>
            <span>✓ Discreet Packaging</span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing-info" className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Choose Your Testing Option</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">At-Home DNA Kit</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">$179</p>
              <p className="text-sm text-gray-500 mb-4">Peace of mind—collect at home and ship to the lab.</p>
              <p className="text-gray-600 mb-4">
                Order online. Kits ship in discreet packaging. Not court-admissible.
              </p>
              <a
                href="/shop/at-home-paternity-test"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition font-semibold text-lg inline-block w-full"
              >
                Order Online
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">In-Person Peace of Mind</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$249</p>
              <p className="text-sm text-gray-500 mb-4">Professionally collected at our Denver location.</p>
              <p className="text-gray-600 mb-4">Faster coordination when you prefer an on-site collection.</p>
              <a
                href="https://calendly.com/milehighdnatesting/non-legal-paternity-test"
                className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 transition font-semibold text-lg inline-block w-full"
              >
                Schedule Appointment
              </a>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-6">
            Need court documentation?{" "}
            <Link to="/services/legal-paternity-testing" className="text-blue-600 underline font-semibold">
              See Legal Paternity Testing
            </Link>
            . Legal postnatal testing typically starts at <strong>$349</strong>.
          </p>

          <p className="text-gray-700 text-lg">
            Related:{" "}
            <Link to="/services/non-legal-paternity-testing" className="text-blue-600 underline">
              Non-Legal Paternity Testing
            </Link>
            {" · "}
            <Link to="/appointments" className="text-blue-600 underline">
              All Appointments
            </Link>
          </p>
        </div>
      </section>

      {/* Body content */}
      <section className="py-12 md:py-16 px-6 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A3C59] mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-10">
            <li>Schedule an appointment or order a kit; we guide you through the process.</li>
            <li>Receive your at-home DNA collection kit with clear instructions.</li>
            <li>Collect cheek swab samples at home and ship them to the lab in the provided packaging.</li>
            <li>Receive accurate, confidential results once the lab completes analysis.</li>
          </ol>

          <h2 className="text-2xl font-bold text-[#1A3C59] mb-4">When At-Home Kits Are Used</h2>
          <p className="text-gray-700 mb-4">
            At-home DNA kits are for <strong>peace of mind (non-legal) testing only</strong>. Results are not
            court-admissible. They are ideal for personal knowledge and family clarity when you prefer to collect
            samples at home. For legal paternity, custody, child support, or immigration cases, in-office legal
            testing with chain-of-custody is required.
          </p>
          <p className="text-gray-700">
            All testing is performed through AABB-accredited laboratories. Your privacy and the security of samples
            are prioritized.
          </p>
        </div>
      </section>

      {/* Full-width CTA */}
      <section className="w-full bg-blue-50 border-y border-blue-100 py-14 md:py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A3C59] mb-3">
            Order an At-Home DNA Kit or Book a Consultation
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Schedule an appointment to order your kit or learn more about at-home testing options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/appointments"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition w-full sm:w-auto text-center"
            >
              Book Appointment
            </Link>
            <Link
              to="/shop/at-home-paternity-test"
              className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition w-full sm:w-auto text-center"
            >
              Peace of Mind DNA Kit
            </Link>
          </div>
        </div>
      </section>

      <FAQSection
        title={
          <>
            At-Home DNA Testing for Personal Knowledge
            <br />
            Frequently Asked Questions
          </>
        }
        faqs={AT_HOME_FAQS}
        className="bg-gray-50"
      />

      <ServingColorado />
      <CallToAction />
    </main>
  );
};

export default AtHomeDNAKits;
