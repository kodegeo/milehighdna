import React from 'react';

const AABBAccreditation = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">AABB Accreditation</h1>

      <p className="mb-4">
        Mile High DNA Testing is proud to partner with <a href="https://www.ufclab.com/lab-services" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Universal Forensics Corporation</a> — a trusted AABB-accredited laboratory.
      </p>

      <p className="mb-4">
        The <a href="https://www.aabb.org/standards-accreditation/accreditation" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">AABB (Association for the Advancement of Blood & Biotherapies)</a> is the recognized accrediting body for relationship DNA testing, especially for immigration, legal, and court-admissible purposes.
      </p>

      <p className="mb-4">
        By working exclusively with AABB-accredited laboratories, we ensure:
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
        For more information, visit the official AABB site or <a href="/contact" className="text-blue-600 underline">contact us</a>.
      </p>
    </div>
  );
};

export default AABBAccreditation; 