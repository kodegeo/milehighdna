import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import HeroSection from "../components/common/HeroSection";
import aboutHero from "../assets/images/about_hero.png";
import aboutMid from "../assets/images/about_mid-1.png";

const AboutUsPage = () => {
  return (
    <main>
      <Helmet>
        <title>Paternity DNA Testing in Denver, Aurora, and Lakewood | About Us</title>
        <meta
          name="description"
          content="Mile High DNA Testing provides AABB-accredited paternity and immigration DNA tests in Denver, Aurora, Lakewood, and throughout Colorado. Fast, legal, and confidential testing."
        />
        <link rel="canonical" href="https://milehighdnatesting.com/about" />
        <meta property="og:title" content="Trusted Paternity DNA Testing in Denver, Aurora, Lakewood" />
        <meta property="og:description" content="Learn more about Mile High DNA Testing — your partner for AABB-accredited paternity and immigration DNA tests in Colorado. Fast, legal, and confidential." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:url" content="https://milehighdnatesting.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
      </Helmet>

      <HeroSection
        title="Court Admissible and High Precision DNA Testing With Direct Professional Support"
        subtitle="Serving Denver and surrounding communities with AABB accredited laboratory standards and multi level PhD review prior to report release."
        imageUrl={aboutHero}
        imageAlt="AABB-accredited DNA testing consultation in Denver"
        buttonText="Schedule Your DNA Test Appointment"
        buttonLink="/appointments"
        secondaryButtonText="Call or Text 720 900 9342"
        secondaryButtonLink="tel:7209009342"
      />

      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          
          Is This Office Appropriate for Your Situation
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li>• Court-admissible DNA testing</li>
          <li>• Immigration and USCIS DNA cases</li>
          <li>• Legal paternity disputes</li>
          <li>• Government related documentation requirements</li>
          <li>• Situations requiring chain-of-custody verification</li>
        </ul>
        <p className="mt-6 text-sm text-gray-700">
          Still unsure? Call or text <a href="tel:7209009342" className="text-blue-600 underline">720 900 9342</a> before scheduling so we can confirm the correct test designation.
        </p>
      </section>

      <section className="py-12 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Structured Scientific Oversight With Direct Support
          </h2>
          <img
            src={aboutMid}
            alt="Legal DNA testing with chain of custody documentation review"
            className="w-full mb-6 rounded-lg object-cover max-h-[400px]"
          />
          <p className="text-gray-700 mb-4">
            Every legal and immigration case follows documented identity verification procedures and controlled sample collection protocols.
          </p>
          <p className="text-gray-700">
            Chain-of-custody documentation is reviewed prior to laboratory submission to ensure accuracy, compliance, and admissibility.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Laboratory Accuracy and Multi Level PhD Review
        </h2>
        <p className="text-gray-700 mb-4">
          All relationship DNA testing is performed by AABB-accredited laboratory partners meeting nationally recognized standards.
        </p>
        <p className="text-gray-700">
          Multi level PhD review is conducted prior to report release to ensure analytical accuracy and compliance with court and USCIS standards.
        </p>
      </section>

      <section className="py-12 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Experience With Legal and Government Related Testing
          </h2>
          <p className="text-gray-700 mb-4">
            We work with families, attorneys, and government agencies requiring court-admissible documentation and USCIS compliant DNA testing.
          </p>
          <p className="text-gray-700">
            Proper documentation, verified identity, and procedural compliance prevent delays and ensure results are accepted when submitted.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Transparent Expectations
        </h2>
        <p className="text-gray-700 mb-6">
          Confirming the correct test structure before scheduling prevents preventable delays and ensures your case proceeds efficiently.
        </p>
        <div className="bg-blue-50 p-6 rounded-lg text-center">
          <p className="mb-4 text-gray-700">
            Confirm your test structure before scheduling to prevent preventable delays.
          </p>
          <a
            href="tel:7209009342"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-block font-semibold hover:bg-blue-700 transition"
          >
            Confirm My Test Type Before Scheduling
          </a>
        </div>
      </section>

      <section className="py-12 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Our Denver Office
          </h2>
          <p className="mb-6 text-gray-700">
            Mile High DNA Testing<br />
            975 N Lincoln Street, Suite 205C<br />
            Denver, CO 80203<br />
            Phone: <a href="tel:7209009342" className="text-blue-600 underline">720 900 9342</a>
          </p>
          <iframe
            title="Denver DNA Testing Office Map"
            src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      <section className="py-16 px-6 text-center bg-white border-t">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Still unsure which DNA test applies to your situation?
        </h2>
        <p className="mb-6 text-gray-700">
          Call or text <a href="tel:7209009342" className="text-blue-600 underline">720 900 9342</a>. We will review your case and confirm the appropriate test designation before you schedule.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/appointments"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
          >
            Schedule My DNA Appointment
          </Link>
          <a
            href="tel:7209009342"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition inline-block"
          >
            Call or Text Now
          </a>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;
