import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FAQSection from '../../components/FAQSection';

const AT_HOME_PATERNITY_FAQS = [
  { question: "Are at-home paternity tests accurate?", answer: "Yes. At-home paternity tests use the same AABB-accredited laboratory technology as in-office DNA testing and typically report 99% or higher probability of paternity when the alleged father is included. The DNA testing process and laboratory analysis are identical; only the collection method differs—you collect cheek swabs at home and ship them to the lab. At-home DNA testing from our Denver-based service maintains the same scientific accuracy as in-person paternity testing." },
  { question: "How long does an at-home paternity test take?", answer: "At-home paternity test results are typically available in 2–3 business days after the AABB-accredited laboratory receives your DNA samples. The total DNA testing results timeline depends on how quickly you collect and return the kit. Many families in Colorado and nationwide receive their paternity test results within a week of ordering." },
  { question: "Is at-home DNA test packaging discreet?", answer: "Yes. When you choose discreet options, at-home DNA test kits are shipped in plain, unbranded packaging. No company name or DNA-related wording appears on the outside, so the DNA testing process remains private from delivery through results." },
  { question: "Can at-home paternity test kits be shipped nationwide?", answer: "Yes. We ship at-home paternity test kits to most U.S. addresses. DNA testing in Denver and across Colorado is available, and we serve clients nationwide. Some state restrictions may apply; we can confirm when you order your at-home DNA test kit." },
  { question: "What if an at-home paternity test sample is collected incorrectly?", answer: "Follow the instructions included with your at-home DNA test kit. If the laboratory cannot obtain sufficient DNA from the sample, we will send a replacement kit or arrange recollection at no extra charge in most cases. The DNA testing process is designed to catch insufficient samples before results are reported." },
  { question: "Are at-home paternity test results court-admissible?", answer: "No. At-home peace-of-mind paternity test results are not court-admissible. For court, custody, or legal purposes, you need in-person legal paternity testing with verified identification and chain of custody. We offer court-admissible DNA testing at our Denver location for when you need a legal paternity test." },
  { question: "Do food or medication affect at-home paternity test results?", answer: "Cheek swab collection for an at-home paternity test is not affected by food or most medications. Avoid eating, drinking, or smoking for about 30 minutes before collecting samples, as directed in your DNA test kit. The laboratory analysis is reliable when samples are collected according to the instructions." },
  { question: "How should at-home paternity test swabs be stored?", answer: "Let the swabs air-dry for the time specified in your at-home DNA test instructions (usually a few minutes), then place them in the provided envelopes or containers. Keep them at room temperature and return them in the prepaid mailer as soon as possible so the DNA testing process can begin without delay." }
];

const AtHomeDNAKits = () => {
  return (
    <main>
      <Helmet>
        <title>At-Home DNA Kits in Denver | Postnatal Peace of Mind Testing | Mile High DNA</title>
        <meta name="description" content="At-home DNA test kits in Denver provide convenient, non-legal postnatal DNA testing with AABB-accredited lab accuracy. Order your kit, collect at home, ship securely. Mile High DNA." />
        <link rel="canonical" href="https://milehighdnatesting.com/services/at-home-dna-kits" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": AT_HOME_PATERNITY_FAQS.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })}
        </script>
      </Helmet>

      <section className="bg-blue-50 py-10 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-[#1A3C59] mb-4">At-Home DNA Kits in Denver</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            At-home DNA test kits provide a convenient, non-legal postnatal DNA testing option with the same laboratory accuracy as in-office testing. All samples are processed by an AABB-accredited laboratory and can be shipped securely nationwide.
          </p>
        </div>
      </section>

      <div className="section-padding">
        <div className="container mx-auto px-4 max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A3C59] mb-4">How It Works</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>Schedule an appointment or order a kit; we guide you through the process.</li>
              <li>Receive your at-home DNA collection kit with clear instructions.</li>
              <li>Collect cheek swab samples at home and ship them to the lab in the provided packaging.</li>
              <li>Receive accurate, confidential results once the lab completes analysis.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A3C59] mb-4">When At-Home Kits Are Used</h2>
            <p className="text-gray-700 mb-4">
              At-home DNA kits are for <strong>peace of mind (non-legal) testing only</strong>. Results are not court-admissible. They are ideal for personal knowledge and family clarity when you prefer to collect samples at home. For legal paternity, custody, child support, or immigration cases, in-office legal testing with chain-of-custody is required.
            </p>
            <p className="text-gray-700">
              All testing is performed through AABB-accredited laboratories. Your privacy and the security of samples are prioritized.
            </p>
          </section>

          <section className="mb-12">
            <p className="text-sm text-gray-600">
              Pricing varies by test type and kit. Contact us for current options. Kits can be shipped to most U.S. addresses.
            </p>
          </section>


          <section className="mb-12 p-6 bg-blue-50 rounded-xl">
            <h2 className="text-xl font-bold text-[#1A3C59] mb-2">Order an At-Home DNA Kit or Book a Consultation</h2>
            <p className="text-gray-700 mb-4">Schedule an appointment to order your kit or learn more about at-home testing options.</p>
            <Link to="/appointments" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mr-3">
              Book Appointment
            </Link>
            <Link to="/shop/at-home-paternity-test" className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Peace of Mind DNA Kit
            </Link>
          </section>

          <p className="text-gray-600 text-sm">
            Related: <Link to="/services/non-legal-paternity-testing" className="text-blue-600 hover:underline">Non-Legal Paternity Testing</Link> · <Link to="/appointments" className="text-blue-600 hover:underline">All Appointments</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default AtHomeDNAKits;
