import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "./GuideLayout";

const faqs = [
  {
    question: "What makes a DNA test court admissible?",
    answer: "Court-admissible DNA tests require verified identification of all participants, chain-of-custody documentation from collection through laboratory analysis, and testing by an AABB-accredited laboratory. Results must be reported in a certified format acceptable to the court."
  },
  {
    question: "Can I use an at-home DNA test in court?",
    answer: "No. At-home or peace-of-mind DNA tests do not include identity verification or chain-of-custody, so their results are not admissible in court. You need a legal DNA test performed with proper procedures from the start."
  },
  {
    question: "Do all courts accept AABB-accredited DNA results?",
    answer: "Most family courts in the United States accept DNA test results from AABB-accredited laboratories when chain-of-custody and identity verification are documented. Requirements can vary by jurisdiction; your attorney or the court can confirm."
  },
  {
    question: "How do I get a court-admissible paternity test in Denver?",
    answer: "Schedule a legal paternity test at a facility that verifies ID, follows chain-of-custody, and uses an AABB-accredited laboratory. Mile High DNA Testing in Denver coordinates legal paternity testing that meets these requirements."
  }
];

export default function CourtAdmissibleDNATesting() {
  return (
    <GuideLayout
      title="Court Admissible DNA Testing Explained"
      slug="court-admissible-dna-testing"
      breadcrumbLabel="Court Admissible DNA Testing"
      description="What makes DNA testing court admissible: chain-of-custody, AABB accreditation, and identity verification. Legal paternity testing in Denver."
      heroSubline="What courts require for DNA test results to be accepted as evidence—and how to get a legal test done right."
      serviceLink="/services/legal-paternity-testing"
      serviceLabel="Legal Paternity Testing"
      faqs={faqs}
      overview={
        <>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Court-admissible DNA testing follows strict procedures so that results can be used as evidence in family court, custody cases, and other legal matters. Key requirements include verified identification, chain-of-custody, and analysis by an AABB-accredited laboratory.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Mile High DNA Testing coordinates court-admissible legal paternity testing in Denver. For the full procedure, see <Link to="/guides/chain-of-custody-dna-testing" className="text-blue-600 underline">chain of custody DNA testing</Link> and <Link to="/guides/dna-test-for-court" className="text-blue-600 underline">DNA testing for court cases</Link>. To <Link to="/appointments" className="text-blue-600 underline">schedule a legal test</Link>, visit our appointments page.
          </p>
        </>
      }
      whenUsed={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Court-admissible testing is used when results may be submitted to a court—for example, paternity establishment, child support, custody, or visitation. It is also required when results are needed for immigration (USCIS) or other government agencies.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            If you are unsure whether you will need results for court, starting with a legal test avoids having to retest later. Peace-of-mind tests cannot be converted to legal results. See <Link to="/guides/dna-test-for-child-custody" className="text-blue-600 underline">DNA testing for child custody</Link> for custody-specific information.
          </p>
        </>
      }
      process={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Participants present government-issued ID at collection. A trained collector takes samples (usually cheek swabs) and documents the chain-of-custody. Samples are sealed and sent to an AABB-accredited lab. The lab analyzes the DNA and issues a certified report that can be sent to the court, attorney, or agency.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            The entire process—from collection to reporting—must be documented. For more on chain-of-custody, read <Link to="/guides/chain-of-custody-dna-testing" className="text-blue-600 underline">what is chain of custody DNA testing</Link>. For accreditation, see <Link to="/guides/aabb-labs-for-immigration" className="text-blue-600 underline">AABB accredited labs for immigration DNA tests</Link>.
          </p>
        </>
      }
      legal={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Legal (court-admissible) testing is the only type that produces results accepted by courts and agencies. Non-legal or at-home tests use the same laboratory technology but lack identity verification and chain-of-custody, so they are for personal use only.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            If you need results for court or immigration, choose legal testing from the beginning. For situations where the alleged father is unavailable, see <Link to="/guides/dna-test-without-the-father" className="text-blue-600 underline">can you do a DNA test without the father</Link>.
          </p>
        </>
      }
      relatedGuides={[
        { title: "Chain of Custody DNA Testing", path: "/guides/chain-of-custody-dna-testing" },
        { title: "DNA Testing For Court Cases", path: "/guides/dna-test-for-court" }
      ]}
      ctaHeading="Schedule a Court-Admissible DNA Test"
      ctaSubline="Book a legal paternity test in Denver with results that meet court and agency requirements."
    />
  );
}
