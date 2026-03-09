import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "./GuideLayout";

const faqs = [
  {
    question: "What DNA test do I need for court?",
    answer: "You need a legal (court-admissible) DNA test that includes identity verification, chain-of-custody procedures, and analysis by an AABB-accredited laboratory. Results are then certified and can be submitted to the court."
  },
  {
    question: "Can the court order a DNA test?",
    answer: "Yes. A judge can order paternity or other relationship testing. The order typically specifies that testing must be performed by an accredited laboratory with chain-of-custody. You may need to coordinate with the court or your attorney on where to test."
  },
  {
    question: "How long does a court-ordered DNA test take?",
    answer: "Legal paternity tests typically return results within 2–3 business days after the laboratory receives the samples. Court deadlines may require planning for collection, shipping, and reporting. See our guide on how long DNA testing takes for more."
  },
  {
    question: "Where can I get a DNA test for court in Denver?",
    answer: "Mile High DNA Testing in Denver coordinates legal paternity and relationship testing that meets court requirements. Schedule an appointment for in-person collection with identity verification and chain-of-custody."
  }
];

export default function DNATestForCourt() {
  return (
    <GuideLayout
      title="DNA Testing For Court Cases"
      slug="dna-test-for-court"
      breadcrumbLabel="DNA Testing For Court Cases"
      description="How to get DNA testing for court cases: legal paternity tests, court orders, and AABB-accredited results in Denver."
      heroSubline="What you need for a court case: legal DNA testing with identity verification, chain-of-custody, and accredited results."
      serviceLink="/services/legal-paternity-testing"
      serviceLabel="Legal Paternity Testing"
      faqs={faqs}
      overview={
        <>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            DNA testing for court cases must be performed as a legal test: identity verification at collection, chain-of-custody from collection through the lab, and analysis by an AABB-accredited laboratory. Results are then in a form that courts accept as evidence.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Mile High DNA Testing helps clients in Denver and surrounding areas arrange court-ready legal paternity tests. For the requirements in detail, see <Link to="/guides/court-admissible-dna-testing" className="text-blue-600 underline">court admissible DNA testing</Link> and <Link to="/guides/chain-of-custody-dna-testing" className="text-blue-600 underline">chain of custody DNA testing</Link>. To <Link to="/appointments" className="text-blue-600 underline">schedule a test</Link>, visit our appointments page.
          </p>
        </>
      }
      whenUsed={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Court DNA tests are used in paternity establishment, child support, custody, and visitation cases. Sometimes the court orders the test; other times a party arranges it voluntarily to resolve the case. In either situation, the test must meet legal and accreditation standards.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For custody-specific issues, read <Link to="/guides/dna-test-for-child-custody" className="text-blue-600 underline">DNA testing for child custody cases</Link>. For when the alleged father is not available, see <Link to="/guides/dna-test-without-the-father" className="text-blue-600 underline">can you do a DNA test without the father</Link>.
          </p>
        </>
      }
      process={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            You (or your attorney) schedule a legal test. All participants bring ID to the collection appointment. The collector verifies identity, takes samples, and follows chain-of-custody. Samples go to an AABB-accredited lab; the lab issues a certified report that can be sent to the court or your attorney.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            If the court has ordered the test, bring any court paperwork so the collector can note it. Results can often be sent directly to the court or attorney with your authorization. For timelines, see <Link to="/guides/how-long-does-dna-testing-take" className="text-blue-600 underline">how long DNA test results take</Link>.
          </p>
        </>
      }
      legal={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Only legal DNA tests produce court-admissible results. Peace-of-mind or at-home tests do not include identity verification or chain-of-custody and cannot be used in court. If you might need results for a case, choose a legal test from the beginning.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Immigration cases also require legal, AABB-accredited testing; see <Link to="/guides/immigration-dna-testing-process" className="text-blue-600 underline">immigration DNA testing process</Link> and <Link to="/guides/embassy-dna-testing" className="text-blue-600 underline">embassy DNA testing</Link> for agency requirements.
          </p>
        </>
      }
      relatedGuides={[
        { title: "Court Admissible DNA Testing Explained", path: "/guides/court-admissible-dna-testing" },
        { title: "DNA Testing For Child Custody Cases", path: "/guides/dna-test-for-child-custody" }
      ]}
      ctaHeading="Get a Court-Ready DNA Test"
      ctaSubline="Schedule a legal paternity test in Denver that meets court requirements."
    />
  );
}
