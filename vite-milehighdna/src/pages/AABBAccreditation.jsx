import React from 'react';
import ServingColorado from '../components/common/ServingColorado';
import CallToAction from '../components/common/CallToAction';
import { Helmet } from 'react-helmet-async';
import { MH_NOT_AABB_LONG, MH_LEGAL_IMMIGRATION_SHORT } from '../constants/aabbComplianceCopy';

const AABBAccreditation = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-10">
      <Helmet>
          <title>Accredited Partner Laboratory | Legal & Immigration DNA Testing</title>
          <meta 
            name="description" 
            content="Mile High DNA Testing is not AABB accredited. Learn how AABB accreditation applies to partner laboratory for legal and immigration DNA testing Center." 
          />

          {/* Open Graph */}
          <meta property="og:title" content="What is AABB accreditation for DNA testing?" />
          <meta property="og:description" content="AABB accreditation applies to relationship-testing laboratories used for court and USCIS cases—not to specimen collection companies. We partner with an AABB-accredited laboratory to perform analysis for testing." />
          <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
          <meta property="og:url" content="https://milehighdnatesting.com/aabb-accreditation" />
          <meta property="og:type" content="article" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        </Helmet>

        <h1 className="text-3xl font-bold mb-6">AABB Accreditation</h1>

        <p className="mb-4 p-4 bg-amber-50 border border-amber-200 rounded-lg text-gray-800">
          {MH_NOT_AABB_LONG}
        </p>

        <p className="mb-4">
          {MH_LEGAL_IMMIGRATION_SHORT}
        </p>

        <p className="mb-4">
          The <a href="https://www.aabb.org/standards-accreditation/accreditation" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">AABB (Association for the Advancement of Blood & Biotherapies)</a> is the industry standard for DNA test laboratory accreditation. Required by USCIS, U.S. embassies, and family courts for applicable relationship testing, AABB helps ensure a laboratory’s results are scientifically valid and legally defensible.
        </p>

        <p className="mb-4">
        Working with AABB-accredited partner laboratory for qualifying legal and immigration testing helps ensure:
        </p>

        <ul className="list-disc list-inside mb-6">
          <li>Compliance with strict quality standards at the laboratory</li>
          <li>Legally admissible results for paternity, siblingship, grandparentage, and immigration testing when processed by an accredited partner laboratory</li>
          <li>Proper chain-of-custody procedures for sample collection and handling</li>
        </ul>

        <p className="mb-4">
          Whether you need a DNA test for legal or personal reasons, understanding who holds accreditation—the laboratory, not the collection site—helps you choose the right test path.
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
