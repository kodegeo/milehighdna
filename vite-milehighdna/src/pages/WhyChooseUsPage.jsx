import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import aboutMid from "../assets/images/about_mid.png";
import aboutHero from "../assets/images/about_hero.png";

const MEDICAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Mile High DNA Testing",
  "url": "https://milehighdnatesting.com",
  "telephone": "+1-720-900-9342",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "975 N Lincoln St STE 205C",
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
        <script type="application/ld+json">{JSON.stringify(MEDICAL_BUSINESS_SCHEMA)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-white py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Court Admissible Standards. High Precision Science. Direct Professional Support.
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            Professional DNA testing structured for court, custody, immigration, and formal documentation requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/appointments"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-center"
            >
              Schedule Your Appointment
            </Link>
            <p className="text-gray-700 flex items-center justify-center">
              Need confirmation first?{" "}
              <a href="tel:7209009342" className="text-blue-600 hover:text-blue-800 underline font-medium">
                Call or text 720-900-9342
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: We Help You Avoid Preventable Errors */}
      <section className="py-12 md:py-14 px-4 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            We Help You Avoid Preventable Errors
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Many complications in DNA testing cases occur before laboratory analysis begins.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Incorrect test selection, missing documentation, or improper collection procedures can cause delays, rejected results, or additional costs.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            Our office is structured to reduce those risks through:
          </p>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li>• Correct test designation before scheduling</li>
            <li>• Clear explanation of legal vs non-legal testing</li>
            <li>• Verified identification for court-admissible cases</li>
            <li>• Structured documentation procedures</li>
            <li>• Direct communication throughout the process</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            DNA testing often takes place during important life events.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ensuring the process is handled correctly from the beginning protects both the results and the individuals involved.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <p className="text-gray-700 mb-0">
              Avoid delays. Confirm your test type before scheduling.{" "}
              <a href="tel:7209009342" className="text-blue-600 hover:text-blue-800 underline font-semibold">
                Call or text 720-900-9342
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Scientific Standards With Enhanced Review Protocols */}
      <section className="py-12 md:py-14 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Scientific Standards With Enhanced Review Protocols
          </h2>
          <img
            src={aboutMid}
            alt="AABB-accredited laboratory documentation and DNA testing procedures"
            className="w-full mb-6 rounded-lg object-cover max-h-[320px]"
          />
          <p className="text-gray-700 leading-relaxed mb-4">
            All DNA testing is performed through AABB-accredited laboratory partners that meet established scientific and documentation standards.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            These laboratories follow strict validation procedures designed to ensure the reliability of relationship DNA testing results.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            Laboratory protocols include:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>• validated genetic marker analysis</li>
            <li>• controlled sample handling procedures</li>
            <li>• statistical probability calculations</li>
            <li>• documented analytical review prior to report release</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            These standards ensure that results meet requirements for legal documentation, immigration cases, and other formal uses when applicable.
          </p>
        </div>
      </section>

      {/* Section 3: Direct Access and Structured Oversight */}
      <section className="py-12 md:py-14 px-4 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Direct Access and Structured Oversight
          </h2>
          <img
            src={aboutHero}
            alt="Professional DNA testing consultation and document review"
            className="w-full mb-6 rounded-lg object-cover max-h-[320px]"
          />
          <p className="text-gray-700 leading-relaxed mb-4">
            While laboratory science produces the results, structured case management ensures the process proceeds correctly.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our office provides direct guidance throughout the testing process so clients understand:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>• documentation requirements</li>
            <li>• scheduling procedures</li>
            <li>• participant coordination</li>
            <li>• test designation before collection</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            This level of oversight helps prevent procedural mistakes that could affect timelines or documentation acceptance.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Clients have direct access to professional support rather than navigating an automated testing process alone.
          </p>
        </div>
      </section>

      {/* Section 4: Local Accountability in Denver */}
      <section className="py-12 md:py-14 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Local Accountability in Denver
          </h2>
          <img
            src={aboutMid}
            alt="Mile High DNA Testing office in downtown Denver, Colorado"
            className="w-full mb-6 rounded-lg object-cover max-h-[320px]"
          />
          <p className="text-gray-700 leading-relaxed mb-4">
            Mile High DNA Testing operates from a professional office in downtown Denver, Colorado. We provide court-admissible DNA testing, legal paternity testing in Denver, and immigration DNA testing for clients across Colorado and nationwide.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            Our location supports individuals coordinating testing related to:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>• court proceedings</li>
            <li>• immigration documentation</li>
            <li>• hospital collections</li>
            <li>• vital records requirements</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-2">
            The office is located near:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>• Denver County Court</li>
            <li>• Denver Health</li>
            <li>• Denver Vital Records Office</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            This proximity allows efficient coordination when documentation or legal timelines are involved.
          </p>
          <iframe
            title="Mile High DNA Testing office location in Denver"
            src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-14 px-4 md:px-8 bg-gray-50 border-t">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to move forward?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Confirm the correct test structure before scheduling to prevent unnecessary delays.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/appointments"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-center"
            >
              Schedule My DNA Test
            </Link>
            <a
              href="tel:7209009342"
              className="inline-block border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition text-center"
            >
              Call or Text 720-900-9342
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhyChooseUsPage;
