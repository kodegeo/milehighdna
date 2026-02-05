import React from "react";
import { Link } from "react-router-dom";
import CornerLayout from "../../components/corner/CornerLayout";
import ServingColorado from "../../components/common/ServingColorado";
import CallToAction from "../../components/corner/CallToAction";
import { Helmet } from "react-helmet-async";

import immigrationHeroImg from "../../assets/images/immigration-hero.png";

const ImmigrationDNATestingDenver = () => {
  return (
    <>
      <Helmet>
        <title>Immigration DNA Testing in Denver, CO | Mile High DNA Testing</title>

        <meta
          name="description"
          content="Need an immigration DNA test in Denver or the Denver metro area? Mile High DNA Testing provides AABB-accredited lab coordination, bilingual support, and transparent guidance for USCIS and embassy cases."
        />

        <link
          rel="canonical"
          href="https://milehighdnatesting.com/mile-high-dna-corner/immigration-dna-testing-denver"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Immigration DNA Testing in Denver, Colorado" />
        <meta
          property="og:description"
          content="Learn where to get an AABB-accredited immigration DNA test in Denver with bilingual support and step-by-step guidance for USCIS and embassy cases."
        />
        <meta
          property="og:image"
          content="https://milehighdnatesting.com/images/immigration-dna-denver.png"
        />
        <meta
          property="og:url"
          content="https://milehighdnatesting.com/mile-high-dna-corner/immigration-dna-testing-denver"
        />
        <meta property="og:type" content="article" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Immigration DNA Testing in Denver, CO" />
        <meta
          name="twitter:description"
          content="A clear, trusted guide to immigration DNA testing in Denver with bilingual support and AABB-accredited lab coordination."
        />
        <meta
          name="twitter:image"
          content="https://milehighdnatesting.com/images/immigration-dna-denver.png"
        />

        {/* Article Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Where to Get an Immigration DNA Test in Denver, Colorado",
            "description": "A detailed guide to immigration DNA testing in Denver, including USCIS requirements, AABB-accredited labs, bilingual support, and step-by-step case coordination.",
            "image": "https://milehighdnatesting.com/images/immigration-dna-denver.png",
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
            "url": "https://milehighdnatesting.com/mile-high-dna-corner/immigration-dna-testing-denver",
            "mainEntityOfPage": "https://milehighdnatesting.com/mile-high-dna-corner/immigration-dna-testing-denver"
          }
        `}
        </script>
      </Helmet>

      <CornerLayout>
        {/* Hero */}
        <div className="relative w-full h-[350px] md:h-[450px] mb-12">
          <img
            src={immigrationHeroImg}
            alt="Immigration DNA Testing in Denver"
            className="w-full h-full object-cover object-center rounded-b-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl" />
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
              Where to Get an Immigration DNA Test in Denver, Colorado
            </h1>
          </div>
        </div>

        {/* English Content */}
        <div className="w-full px-4 md:px-0 py-8 bg-white/90 rounded-xl shadow-lg">
          <p className="text-base mb-6 text-justify">
            If you are completing an immigration process that requires proof of a biological relationship,
            choosing the right DNA testing provider is critical. <Link to="/services/immigration-dna-testing" className="text-blue-600 underline">Immigration DNA testing</Link> must meet strict
            U.S. Department of State and USCIS requirements.
          </p>

          <p className="text-base mb-6 text-justify">
            At <span className="font-semibold text-[#2C6FA6]">Mile High DNA Testing</span>, we believe in full transparency.
            Our Denver-based team guides you through every step — no surprises, just clarity and confidence.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Trusted Immigration DNA Testing Center in Denver</h3>

          <p className="text-base mb-6 text-justify">
            We are a Denver-based collection center specializing in AABB-accredited immigration DNA testing.
            We work directly with laboratories recognized by the U.S. Department of State to ensure results
            are accepted by USCIS, NVC, and U.S. embassies worldwide.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Step-by-Step Immigration DNA Testing Process</h3>

          <ul className="list-disc ml-6 space-y-3 mb-6">
            <li>Complete the immigration DNA questionnaire</li>
            <li>Submit required immigration documents securely</li>
            <li>Receive a quote directly from the AABB-accredited laboratory</li>
            <li>Schedule U.S. and international DNA collections</li>
            <li>Secure lab processing with full chain of custody</li>
            <li>Results sent directly to USCIS, NVC, or embassy</li>
          </ul>

          <h3 className="text-2xl font-bold mt-10 mb-4">Bilingual Support & Personalized Guidance</h3>

          <p className="text-base mb-6 text-justify">
            Immigration cases can be stressful, especially when language barriers exist.
            Our bilingual English–Spanish team provides hands-on assistance from start to finish,
            including document support and real-time communication.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Frequently Asked Questions</h3>

          <p className="text-base mb-4"><strong>How long does immigration DNA testing take?</strong><br />
            Most cases are completed within 2–5 weeks once all samples reach the lab, though embassy scheduling
            and international coordination can affect timelines.
          </p>

          <p className="text-base mb-4"><strong>Are you approved by USCIS?</strong><br />
            We coordinate exclusively with AABB-accredited laboratories recognized by the U.S. Department of State.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Book Your Immigration DNA Test</h3>

          <p className="text-base mb-6 text-justify">
            If you are searching for a trusted immigration DNA testing center in Denver,
            we are here to guide your case with professionalism, transparency, and care.
          </p>

          <p className="text-base mb-6">
            <a href="https://calendly.com/milehighdnatesting/dna-test-immigration" className="text-blue-600 underline">
              Book Immigration DNA Test (English)
            </a><br />
            <a href="https://calendly.com/milehighdnatesting/inmigracion-solicitud" className="text-blue-600 underline">
              Agendar en Español – Prueba de ADN para Inmigración
            </a>
          </p>

          <p className="text-base italic">
            This is <a href="/mile-high-dna-corner" className="underline">Mile High DNA Corner</a> —
            trusted guidance when your family’s future depends on accuracy.
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

export default ImmigrationDNATestingDenver;
