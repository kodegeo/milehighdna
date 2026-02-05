import React from "react";
import { Link } from "react-router-dom";
import CornerLayout from "../../components/corner/CornerLayout";
import ServingColorado from "../../components/common/ServingColorado";
import CallToAction from "../../components/corner/CallToAction";
import { Helmet } from "react-helmet-async";

import dnaNearMeHeroImg from "../../assets/images/dna-test-near-me-denver.png";

const DNATestNearMeDenver = () => {
  return (
    <>
      <Helmet>
        <title>
          DNA Test Near Me | Trusted DNA Testing Locations Across Denver & Colorado
        </title>

        <meta
          name="description"
          content="Searching for a DNA test near you? Mile High DNA Testing offers trusted, AABB-accredited DNA testing across Denver, Aurora, Lakewood, Greeley, and throughout Colorado."
        />

        <link
          rel="canonical"
          href="https://milehighdnatesting.com/mile-high-dna-corner/dna-test-near-me-denver"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="DNA Test Near Me | Trusted DNA Testing Across Colorado"
        />
        <meta
          property="og:description"
          content="When you search for a DNA test near you, you’re looking for clarity, trust, and local care. Learn how Mile High DNA Testing serves families across Colorado."
        />
        <meta
          property="og:image"
          content="https://milehighdnatesting.com/images/dna-test-near-me-denver.png"
        />
        <meta
          property="og:url"
          content="https://milehighdnatesting.com/mile-high-dna-corner/dna-test-near-me-denver"
        />
        <meta property="og:type" content="article" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="DNA Test Near Me | Mile High DNA Testing"
        />
        <meta
          name="twitter:description"
          content="Local, trusted DNA testing with AABB-accredited labs across Denver and Colorado."
        />
        <meta
          name="twitter:image"
          content="https://milehighdnatesting.com/images/dna-test-near-me-denver.png"
        />

        {/* Article Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "DNA Test Near Me: Finding Clarity, Truth, and Trusted Local Care",
            "description": "A comprehensive guide for anyone searching for DNA testing near them in Denver and across Colorado.",
            "image": "https://milehighdnatesting.com/images/dna-test-near-me-denver.png",
            "author": {
              "@type": "Organization",
              "name": "Mile High DNA Testing"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Mile High DNA Testing",
              "logo": {
                "@type": "ImageObject",
                "url": "https://milehighdnatesting.com/logo.png"
              }
            },
            "url": "https://milehighdnatesting.com/mile-high-dna-corner/dna-test-near-me-denver",
            "mainEntityOfPage": "https://milehighdnatesting.com/mile-high-dna-corner/dna-test-near-me-denver"
          }
        `}
        </script>
      </Helmet>

      <CornerLayout>
        {/* Hero */}
        <div className="relative w-full h-[350px] md:h-[450px] mb-12">
          <img
            src={dnaNearMeHeroImg}
            alt="DNA Test Near Me in Denver"
            className="w-full h-full object-cover object-center rounded-b-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl" />
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
              DNA Test Near Me
            </h1>
            <p className="text-lg mt-2 max-w-3xl">
              Finding trusted, local DNA testing when clarity matters most
            </p>
          </div>
        </div>

        {/* Article Content */}
        <div className="w-full px-4 md:px-0 py-8 bg-white/90 rounded-xl shadow-lg">
          <p className="text-base mb-6 text-justify">
            When someone types <strong>“DNA test near me”</strong> into Google,
            they’re usually searching for more than a laboratory. They’re
            searching for clarity, truth, and peace of mind — often during one
            of life’s most important moments.
          </p>

          <p className="text-base mb-6 text-justify">
            Whether you’re a new parent in Aurora, an expecting mother in Lone Tree,
            or a family in Greeley or Thornton navigating immigration requirements,
            Mile High DNA Testing provides trusted, local DNA testing across Colorado.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">
            Local DNA Testing You Can Trust
          </h3>

          <p className="text-base mb-6 text-justify">
            Choosing a DNA testing provider should feel reassuring — not overwhelming.
            At <span className="font-semibold text-[#2C6FA6]">Mile High DNA Testing</span>,
            all DNA tests are processed by an AABB-accredited laboratory to ensure
            accuracy, confidentiality, and reliability.
          </p>

          <p className="text-base mb-6 text-justify">
            We proudly serve clients throughout Denver, Aurora, Lakewood, Westminster,
            Parker, Castle Rock, Thornton, and Greeley, with flexible scheduling,
            mobile collection options, and bilingual support.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">
            Paternity DNA Testing
          </h3>

          <p className="text-base mb-6 text-justify">
            Our <Link to="/services/legal-paternity-testing" className="text-blue-600 underline">paternity DNA tests</Link> provide clear, science-backed answers when they
            matter most. We offer both <Link to="/services/legal-paternity-testing" className="text-blue-600 underline">legal paternity testing</Link> accepted in court and
            <Link to="/services/non-legal-paternity-testing" className="text-blue-600 underline">peace of mind paternity testing</Link> for personal reassurance.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">
            Prenatal Paternity Testing (NIPP)
          </h3>

          <p className="text-base mb-6 text-justify">
            Expecting a child and searching for a safe <Link to="/services/prenatal-paternity-testing" className="text-blue-600 underline">prenatal paternity test</Link> near you?
            Non-invasive prenatal paternity testing can determine paternity as early
            as 7 weeks of pregnancy using only a blood draw from the mother and cheek
            swabs from the alleged father.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">
            Immigration DNA Testing
          </h3>

          <p className="text-base mb-6 text-justify">
            Our AABB-accredited immigration DNA tests are accepted by U.S. embassies,
            consulates, USCIS, and the Department of State. Having a local, bilingual
            team makes navigating immigration requirements easier and less stressful.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">
            Family & Lifestyle DNA Testing
          </h3>

          <p className="text-base mb-6 text-justify">
            We also offer sibling, grandparent, and extended family DNA testing,
            as well as lifestyle DNA tests for ancestry, health, and wellness insights.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">
            Find a DNA Testing Location Near You
          </h3>

          <p className="text-base mb-6">
            View all available testing locations across Colorado:
            <br />
            <a
              href="/locations"
              className="text-blue-600 underline font-semibold"
            >
              Find a Mile High DNA Testing Location Near You
            </a>
          </p>

          <a href="https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment" className="text-blue-600 underline">
              Book an Appointment Today!
            </a>

          <p className="text-base italic">
            This is{" "}
            <a href="/mile-high-dna-corner" className="underline">
              Mile High DNA Corner
            </a>{" "}
            — trusted answers, local care, and clarity when it matters most.
          </p>
        </div>
      </CornerLayout>

      <section className="w-full">
        <ServingColorado />
        <CallToAction />
      </section>
    </>
  );
};

export default DNATestNearMeDenver;
