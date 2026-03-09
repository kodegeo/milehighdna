import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import HeroSection from "../components/common/HeroSection";
import aboutHero from "../assets/images/about_hero.png";
import aboutMid from "../assets/images/about_mid.png";

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
          Professional DNA Testing With Purpose and Accountability
        </h2>
        <p className="text-gray-700 mb-4">
          Mile High DNA Testing is a Denver-based DNA testing office serving families across Denver, Aurora, Lakewood, and surrounding Colorado communities.
        </p>
        <p className="text-gray-700 mb-4">
          DNA testing results can influence legal status, financial responsibilities, immigration matters, and deeply personal decisions. These situations deserve steady guidance, disciplined procedures, and clear communication.
        </p>
        <p className="text-gray-700 mb-4">
          Our role is not simply to process DNA tests.
        </p>
        <p className="text-gray-700">
          Our responsibility is to ensure each case is handled correctly from the beginning.
        </p>
      </section>

      <section className="py-12 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            A Message From Our Founder
          </h2>
          <img
            src={aboutMid}
            alt="Legal DNA testing with chain of custody documentation review"
            className="w-full mb-6 rounded-lg object-cover max-h-[400px]"
          />
          <p className="text-gray-700 mb-4">
            Mile High DNA Testing was established after recognizing that many complications in DNA testing cases arise not from laboratory science, but from preventable errors in case setup, unclear communication, and lack of procedural oversight.
          </p>
          <p className="text-gray-700 mb-4">
            This office was designed to reduce those risks.
          </p>
          <p className="text-gray-700 mb-4">
            We prioritize structured intake procedures, documentation integrity, and clear explanation because DNA testing often occurs during important and sometimes stressful life events.
          </p>
          <p className="text-gray-700">
            Whether testing is <Link to="/services/legal-paternity-testing" className="text-blue-600 hover:text-blue-800 underline">court-admissible</Link>, <Link to="/services/prenatal-paternity-testing" className="text-blue-600 hover:text-blue-800 underline">prenatal</Link>, <Link to="/services/immigration-dna-testing" className="text-blue-600 hover:text-blue-800 underline">immigration related</Link>, or private, every case should be handled with professionalism and care.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Our Mission
        </h2>
        <p className="text-gray-700 mb-4">
          Our mission is to elevate the standard of DNA testing by combining accredited laboratory science, certified procedural oversight, and personalized case coordination.
        </p>
        <p className="text-gray-700 mb-4">
          We are committed to:
        </p>
        <ul className="space-y-3 text-gray-700 mb-4">
          <li>• Accuracy</li>
          <li>• Documentation integrity</li>
          <li>• Professional guidance</li>
          <li>• Clear communication</li>
        </ul>
        <p className="text-gray-700">
          DNA testing often carries lasting consequences. Our responsibility is to ensure every case proceeds with precision and reliability. Learn more about <Link to="/why-choose-us" className="text-blue-600 hover:text-blue-800 underline">why families choose us</Link> for paternity testing in Denver and across Colorado.
        </p>
      </section>

      <section className="py-12 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Our Philosophy
          </h2>
          <p className="text-gray-700 mb-4">
            We believe accuracy begins before laboratory analysis.
          </p>
          <p className="text-gray-700 mb-4">
            Proper intake procedures, identity verification, structured documentation, and clear communication form the foundation of reliable DNA testing results.
          </p>
          <p className="text-gray-700 mb-4">
            Oversight is not an add-on. It is part of the process.
          </p>
          <p className="text-gray-700">
            By maintaining consistent professional standards across all testing categories, we protect both the integrity of results and the confidence of the individuals involved.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Professional Standards and Laboratory Partnerships
        </h2>
        <p className="text-gray-700 mb-4">
          Our testing services are performed through nationally recognized laboratory partners that meet established accreditation standards, including AABB accreditation for applicable testing categories.
        </p>
        <p className="text-gray-700 mb-4">
          These standards confirm that testing procedures meet strict requirements for validation, documentation, and scientific reliability.
        </p>
        <p className="text-gray-700 mb-4">
          Our office coordinates testing with attention to documentation integrity, procedural compliance, and confidentiality.
        </p>
        <p className="text-gray-700 mb-6">
          Professional standards guide every aspect of our work.
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

      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Why Families Across Denver Choose Mile High DNA Testing
        </h2>
        <p className="text-gray-700 mb-4">
          Families seeking DNA testing often need results that will be accepted by courts, government agencies, or medical professionals.
        </p>
        <p className="text-gray-700 mb-4">
          Our Denver office was designed to provide structured case management for situations where accuracy, documentation, and procedural compliance matter.
        </p>
        <p className="text-gray-700 mb-2">
          Clients choose Mile High DNA Testing for:
        </p>
        <ul className="space-y-3 text-gray-700 mb-4">
          <li>• AABB-accredited laboratory partnerships</li>
          <li>• Certified DNA collection procedures</li>
          <li>• Clear communication throughout the testing process</li>
          <li>• Support for <Link to="/services/legal-paternity-testing" className="text-blue-600 hover:text-blue-800 underline">legal</Link>, <Link to="/services/immigration-dna-testing" className="text-blue-600 hover:text-blue-800 underline">immigration</Link>, <Link to="/services/prenatal-paternity-testing" className="text-blue-600 hover:text-blue-800 underline">prenatal</Link>, and personal DNA testing cases</li>
          <li>• A private professional office located in downtown Denver</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Many DNA testing companies operate as anonymous online kit providers.
        </p>
        <p className="text-gray-700">
          Our office provides professional oversight and direct support from case intake through final results.
        </p>
      </section>

      <section className="py-12 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Our Denver Office
          </h2>
          <h3 className="text-lg font-semibold mb-3 text-gray-900">
            Serving the Denver Community
          </h3>
          <p className="text-gray-700 mb-4">
            Mile High DNA Testing is located in downtown Denver, Colorado, providing professional DNA testing services to families throughout the Denver metro area and across the United States.
          </p>
          <p className="text-gray-700 mb-2">
            Our office is located near:
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>• Denver County Court</li>
            <li>• Denver Health</li>
            <li>• Denver Vital Records Office</li>
          </ul>
          <p className="text-gray-700 mb-6">
            This central location allows efficient coordination for individuals managing court timelines, hospital-related testing, and official documentation requirements.
          </p>
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
