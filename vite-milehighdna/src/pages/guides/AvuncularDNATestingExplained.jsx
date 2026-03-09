import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "./GuideLayout";

const faqs = [
  {
    question: "What is avuncular DNA testing?",
    answer: "Avuncular DNA testing determines whether a person is the biological aunt or uncle of a child (or whether two people are aunt/uncle and niece/nephew). It is used when the alleged parent is not available for direct testing. The lab compares DNA between the child and the alleged aunt or uncle to report the probability of the relationship."
  },
  {
    question: "When is avuncular DNA testing used?",
    answer: "Avuncular testing is used when the alleged father or mother is unavailable and the family wants to establish or support a biological relationship—for example, for inheritance, immigration, or personal knowledge. Testing an aunt or uncle can provide evidence that the child is related to that side of the family."
  },
  {
    question: "Can avuncular DNA test results be used in court?",
    answer: "Yes, if the test is performed as a legal test with identity verification, chain-of-custody, and an AABB-accredited laboratory. Results can then be submitted to the court or, when accepted, to immigration authorities. Peace-of-mind avuncular tests are not admissible."
  },
  {
    question: "How accurate is avuncular DNA testing?",
    answer: "The laboratory uses kinship analysis to report the probability of an aunt/uncle–niece/nephew relationship. Accuracy depends on who is tested and the lab's methods. Legal tests with accredited labs provide results that meet court and agency standards when avuncular testing is accepted."
  }
];

export default function AvuncularDNATestingExplained() {
  return (
    <GuideLayout
      title="Avuncular DNA Testing (Aunt/Uncle Test)"
      slug="avuncular-dna-testing-explained"
      breadcrumbLabel="Avuncular DNA Testing"
      description="Avuncular DNA testing: aunt/uncle relationship testing when the parent is unavailable. Legal options for court and immigration. Denver kinship DNA testing."
      heroSubline="When the parent cannot be tested—how aunt/uncle (avuncular) DNA testing can establish or support a biological relationship."
      serviceLink="/appointments"
      serviceLabel="Schedule a Test"
      faqs={faqs}
      overview={
        <>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Avuncular DNA testing determines whether someone is the biological aunt or uncle of a child (or whether two people are aunt/uncle and niece/nephew). It is an option when the alleged parent is not available for a direct paternity or maternity test. The laboratory compares DNA and reports the probability of the avuncular relationship.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Mile High DNA Testing coordinates avuncular and other kinship tests in Denver. For other options when the father is missing, see <Link to="/guides/dna-test-without-the-father" className="text-blue-600 underline">can you do a DNA test without the father</Link> and <Link to="/guides/grandparent-dna-testing-explained" className="text-blue-600 underline">grandparent DNA testing</Link>. To <Link to="/appointments" className="text-blue-600 underline">schedule a test</Link>, visit our appointments page.
          </p>
        </>
      }
      whenUsed={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Avuncular testing is used when the alleged parent is unwilling, unavailable, or deceased and the family needs to establish or support a biological link. It can support inheritance, immigration (when the agency accepts it), or custody cases. It is often used together with or as an alternative to grandparent testing.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For siblingship testing, read <Link to="/guides/siblingship-dna-testing-explained" className="text-blue-600 underline">siblingship DNA testing</Link>. For when the father is deceased, see <Link to="/guides/dna-testing-after-death" className="text-blue-600 underline">DNA testing after death</Link>.
          </p>
        </>
      }
      process={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            The child and the alleged aunt or uncle provide samples (usually cheek swabs). For legal tests, identity is verified and chain-of-custody is followed. The laboratory analyzes genetic markers and uses kinship statistics to report the probability of the avuncular relationship. Results are typically available within several business days after the lab receives all samples.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For how DNA testing works in general, see <Link to="/guides/how-dna-testing-works" className="text-blue-600 underline">how DNA testing works</Link>. For legal requirements, read <Link to="/guides/court-admissible-dna-testing" className="text-blue-600 underline">court admissible DNA testing</Link>.
          </p>
        </>
      }
      legal={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Avuncular DNA tests can be performed as legal tests (with identity verification, chain-of-custody, and AABB-accredited analysis) for court or immigration when accepted, or as peace-of-mind tests for personal use only. If you might need results for legal purposes, choose a legal test from the start.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For court and chain-of-custody, see <Link to="/guides/chain-of-custody-dna-testing" className="text-blue-600 underline">chain of custody DNA testing</Link> and <Link to="/guides/dna-test-for-court" className="text-blue-600 underline">DNA testing for court cases</Link>.
          </p>
        </>
      }
      relatedGuides={[
        { title: "Grandparent DNA Testing Explained", path: "/guides/grandparent-dna-testing-explained" },
        { title: "Siblingship DNA Testing Explained", path: "/guides/siblingship-dna-testing-explained" }
      ]}
      ctaHeading="Schedule Avuncular DNA Testing"
      ctaSubline="Book an aunt/uncle or kinship DNA test in Denver with legal options available."
    />
  );
}
