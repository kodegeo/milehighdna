import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://milehighdnatesting.com/why-choose-us#business",
  "name": "Mile High DNA Testing",
  "url": "https://milehighdnatesting.com",
  "telephone": "+1-720-900-9342",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "975 N Lincoln St Suite 205C",
    "addressLocality": "Denver",
    "addressRegion": "CO",
    "postalCode": "80203",
    "addressCountry": "US"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ]
};

const WhyChooseUsPage = () => {
  return (
    <main>
      <Helmet>
        <title>Why Choose Us | Mile High DNA Testing | Denver, Colorado</title>
        <meta
          name="description"
          content="Mile High DNA Testing provides court-admissible and immigration DNA testing with AABB-accredited laboratory partners, chain-of-custody procedures, and direct professional support in Denver and Colorado."
        />
        <link rel="canonical" href="https://milehighdnatesting.com/why-choose-us" />
        <meta property="og:title" content="Why Choose Us | Mile High DNA Testing" />
        <meta property="og:description" content="Court-admissible and immigration DNA testing with AABB-accredited labs and direct professional support in Denver, Colorado." />
        <meta property="og:url" content="https://milehighdnatesting.com/why-choose-us" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(LOCAL_BUSINESS_SCHEMA)}</script>
      </Helmet>

      <section className="bg-white py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Why Choose Us
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Mile High DNA Testing provides court-admissible and immigration DNA testing with AABB-accredited laboratory partners, documented chain-of-custody procedures, and direct professional support. We serve Denver and surrounding Colorado communities with structured, compliant testing for legal and government-related matters.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-14 px-4 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            AABB-Accredited Laboratory Standards
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            All relationship DNA testing is performed by AABB-accredited laboratory partners that meet nationally recognized standards required by courts and USCIS. Multi-level PhD review is conducted prior to report release to ensure analytical accuracy and compliance.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We do not use unaccredited laboratories for legal or immigration cases. Accreditation and documented procedures are central to result acceptance and admissibility.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-14 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Chain-of-Custody and Identity Verification
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every legal and immigration case follows documented identity verification procedures and controlled sample collection protocols. Chain-of-custody documentation is reviewed prior to laboratory submission to ensure accuracy, compliance, and admissibility.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Proper documentation and procedural compliance prevent delays and ensure results are accepted when submitted to courts, USCIS, or other agencies.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-14 px-4 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Direct Professional Support
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We work with families, attorneys, and government agencies requiring court-admissible documentation and USCIS-compliant DNA testing. Our team provides clear guidance on test designation and requirements so that the correct test structure is confirmed before scheduling.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Confirming the correct test structure before scheduling prevents preventable delays and ensures your case proceeds efficiently.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-14 px-4 md:px-8 bg-white border-t">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Confirm Your Test Type Before Scheduling
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            If you are unsure which test applies to your situation, call or text our office. We will review your case and confirm the appropriate test designation before you schedule.
          </p>
          <a
            href="tel:7209009342"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Call or Text 720 900 9342
          </a>
          <p className="mt-6">
            <Link to="/appointments" className="text-blue-600 hover:underline font-medium">
              Schedule an appointment
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default WhyChooseUsPage;
