import React from 'react';
import ServingColorado from '../components/common/ServingColorado';
import CallToAction from '../components/common/CallToAction';
import { Helmet } from 'react-helmet-async';


const AABBAccreditation = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-10">
      <Helmet>
          <title>AABB Accredited DNA Testing | Legal & Immigration Compliance</title>
          <meta 
            name="description" 
            content="Learn about AABB accreditation and why it's required for legal and immigration DNA testing. Mile High DNA partners with AABB-accredited labs for court-admissible results." 
          />

          {/* Open Graph */}
          <meta property="og:title" content="What is AABB Accreditation for DNA Testing?" />
          <meta property="og:description" content="AABB accreditation ensures your DNA test is legally valid for immigration, court cases, and USCIS requirements. Trusted by legal professionals and families across Colorado." />
          <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
          <meta property="og:url" content="https://milehighdnatesting.com/aabb-accreditation" />
          <meta property="og:type" content="article" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        </Helmet>

        <h1 className="text-3xl font-bold mb-6">AABB Accreditation</h1>

        <p className="mb-4">
          Mile High DNA Testing is proud to partner with <a href="https://www.ufclab.com/lab-services" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Universal Forensics Corporation</a> — a nationally recognized AABB-accredited laboratory trusted for court-admissible and USCIS-compliant DNA tests.
        </p>

        <p className="mb-4">
          The <a href="https://www.aabb.org/standards-accreditation/accreditation" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">AABB (Association for the Advancement of Blood & Biotherapies)</a> is the industry standard for DNA test accreditation. Required by USCIS, U.S. embassies, and family courts, AABB ensures the lab’s results are scientifically valid and legally defensible.
        </p>

        <p className="mb-4">
        Working only with AABB-accredited labs allows us to guarantee:
        </p>

        <ul className="list-disc list-inside mb-6">
          <li>Compliance with strict quality standards</li>
          <li>Legally admissible results for paternity, siblingship, grandparentage, and immigration testing</li>
          <li>Proper chain-of-custody procedures for sample collection and handling</li>
        </ul>

        <p className="mb-4">
          This accreditation provides peace of mind and guarantees that your results meet the highest industry standards. Whether you are taking a DNA test for legal or personal reasons, you can trust the quality and integrity of your results.
        </p>

        <p className="italic text-sm text-gray-600">
          For more information, visit the official AABB site or book an appointment below.
        </p>
      </div>

      <ServingColorado />
      <CallToAction />

    </div>
  );
};

export default AABBAccreditation; 