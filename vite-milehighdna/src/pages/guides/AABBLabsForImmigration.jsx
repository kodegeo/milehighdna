import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "./GuideLayout";

const faqs = [
  {
    question: "Why does immigration DNA testing require AABB accreditation?",
    answer: "USCIS and U.S. embassies require relationship DNA testing to be performed by AABB-accredited laboratories to ensure consistent scientific standards, validation, and documentation. Results from non-AABB labs are typically not accepted for immigration purposes."
  },
  {
    question: "What is AABB accreditation?",
    answer: "AABB (American Association of Blood Banks) accredits laboratories that meet strict standards for relationship DNA testing, including validation, quality control, chain-of-custody, and reporting. This accreditation is the standard required for legal and immigration DNA testing in the United States."
  },
  {
    question: "Can I use a non-AABB lab for immigration?",
    answer: "No. USCIS and embassies require AABB-accredited laboratory results. Using a non-accredited lab can result in your results being rejected and delay your case. Always confirm that the laboratory is AABB-accredited for relationship testing."
  },
  {
    question: "How do I find an AABB-accredited lab for immigration DNA testing?",
    answer: "DNA testing facilities like Mile High DNA Testing in Denver work with AABB-accredited laboratories and coordinate the full process—collection, chain-of-custody, and reporting—so your results meet immigration requirements."
  }
];

export default function AABBLabsForImmigration() {
  return (
    <GuideLayout
      title="AABB Accredited Labs For Immigration DNA Tests"
      slug="aabb-labs-for-immigration"
      breadcrumbLabel="AABB Labs For Immigration"
      description="Why immigration DNA tests must use AABB-accredited laboratories. USCIS and embassy requirements. Denver immigration DNA testing."
      heroSubline="Why USCIS and embassies require AABB-accredited laboratories for immigration DNA testing—and how to get it right."
      serviceLink="/services/immigration-dna-testing"
      serviceLabel="Immigration DNA Testing"
      faqs={faqs}
      overview={
        <>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Immigration DNA testing for USCIS and U.S. embassies must be performed by laboratories accredited by the AABB (American Association of Blood Banks). This accreditation confirms that the lab meets strict standards for relationship DNA testing, so results are accepted as evidence of biological relationships.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Mile High DNA Testing uses AABB-accredited laboratories for all immigration DNA testing. For the full process, see <Link to="/guides/immigration-dna-testing-process" className="text-blue-600 underline">immigration DNA testing process</Link> and <Link to="/guides/uscis-dna-testing" className="text-blue-600 underline">USCIS DNA testing requirements</Link>. To <Link to="/appointments" className="text-blue-600 underline">schedule a test</Link>, visit our appointments page.
          </p>
        </>
      }
      whenUsed={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            AABB accreditation is required whenever DNA test results will be submitted to USCIS or an embassy for immigration. The same standard is used by U.S. courts for legal paternity and relationship testing. Using an accredited lab from the start avoids delays and rejected results.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For embassy procedures, read <Link to="/guides/embassy-dna-testing" className="text-blue-600 underline">embassy DNA testing explained</Link>. For timelines, see <Link to="/guides/immigration-dna-test-timeline" className="text-blue-600 underline">how long immigration DNA testing takes</Link>.
          </p>
        </>
      }
      process={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Your collection facility coordinates with an AABB-accredited laboratory. Samples are collected with identity verification and chain-of-custody, then sent to that lab. The lab performs the analysis and issues a report in the format required by USCIS or the embassy. The entire chain—collection through reporting—must meet accreditation and agency standards.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For chain-of-custody details, see <Link to="/guides/chain-of-custody-dna-testing" className="text-blue-600 underline">chain of custody DNA testing</Link>. For court use of AABB results, read <Link to="/guides/court-admissible-dna-testing" className="text-blue-600 underline">court admissible DNA testing</Link>.
          </p>
        </>
      }
      legal={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Immigration DNA testing is always legal testing: AABB accreditation, identity verification, and chain-of-custody are required. There is no &quot;peace-of-mind&quot; immigration test. Only tests that meet these requirements are accepted by USCIS and embassies.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For legal paternity testing in general, see <Link to="/guides/court-admissible-dna-testing" className="text-blue-600 underline">court admissible DNA testing</Link> and <Link to="/guides/dna-test-for-court" className="text-blue-600 underline">DNA testing for court cases</Link>.
          </p>
        </>
      }
      relatedGuides={[
        { title: "USCIS DNA Testing Requirements", path: "/guides/uscis-dna-testing" },
        { title: "Immigration DNA Testing Process", path: "/guides/immigration-dna-testing-process" }
      ]}
      ctaHeading="Schedule Immigration DNA Testing"
      ctaSubline="Book AABB-accredited immigration DNA testing in Denver."
    />
  );
}
