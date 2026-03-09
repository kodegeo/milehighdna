import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "./GuideLayout";

const faqs = [
  {
    question: "What is grandparent DNA testing?",
    answer: "Grandparent DNA testing determines whether a child is biologically related to the alleged father's parents (the grandparents). It is used when the alleged father is not available for a direct paternity test. The lab compares the child's DNA to the grandparents' DNA to calculate the probability of relationship."
  },
  {
    question: "How accurate is grandparent DNA testing?",
    answer: "Grandparent DNA testing can provide strong evidence of relationship when both grandparents are tested. When only one grandparent is available, the result may be less conclusive. The laboratory uses kinship analysis and reports a probability; accuracy depends on which relatives are tested and the lab's methods."
  },
  {
    question: "Can grandparent DNA test results be used in court?",
    answer: "Yes, if the test is performed as a legal test with identity verification, chain-of-custody, and an AABB-accredited laboratory. Results can then be submitted to the court. Peace-of-mind grandparent tests are not admissible."
  },
  {
    question: "When is grandparent DNA testing used?",
    answer: "Grandparent testing is used when the alleged father is unavailable (unwilling, deceased, or in another country) and the family wants to establish or support a biological relationship. It can be used for personal knowledge, court, or immigration when the agency accepts kinship results."
  }
];

export default function GrandparentDNATestingExplained() {
  return (
    <GuideLayout
      title="Grandparent DNA Testing Explained"
      slug="grandparent-dna-testing-explained"
      breadcrumbLabel="Grandparent DNA Testing"
      description="Grandparent DNA testing: when it is used, how it works, and legal options when the father is unavailable. Denver kinship DNA testing."
      heroSubline="When the father is not available—how grandparent DNA testing can establish or support a biological relationship."
      serviceLink="/appointments"
      serviceLabel="Schedule a Test"
      faqs={faqs}
      overview={
        <>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Grandparent DNA testing establishes whether a child is biologically related to the alleged father's parents. It is an option when the alleged father cannot be tested—for example, when he is unwilling, unavailable, or deceased. The laboratory compares the child's DNA to the grandparents' DNA using kinship analysis.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Mile High DNA Testing coordinates grandparent and other kinship tests in Denver. For when the father is missing, see <Link to="/guides/dna-test-without-the-father" className="text-blue-600 underline">can you do a DNA test without the father</Link> and <Link to="/guides/avuncular-dna-testing-explained" className="text-blue-600 underline">avuncular DNA testing</Link>. To <Link to="/appointments" className="text-blue-600 underline">schedule a test</Link>, visit our appointments page.
          </p>
        </>
      }
      whenUsed={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Grandparent testing is used when a direct paternity test is not possible. It can support custody, inheritance, Social Security benefits, or immigration cases when the agency or court accepts kinship results. Testing both grandparents generally gives a stronger result than testing one.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For other kinship options, read <Link to="/guides/siblingship-dna-testing-explained" className="text-blue-600 underline">siblingship DNA testing</Link> and <Link to="/guides/dna-testing-after-death" className="text-blue-600 underline">DNA testing after death</Link>.
          </p>
        </>
      }
      process={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            The child and the alleged father's parent(s) provide samples (usually cheek swabs). For legal tests, identity is verified and chain-of-custody is followed. The laboratory analyzes genetic markers and uses kinship statistics to report the probability that the child is related to the grandparents as their grandchild. Results are typically available within several business days after the lab receives all samples.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For how DNA testing works in general, see <Link to="/guides/how-dna-testing-works" className="text-blue-600 underline">how DNA testing works</Link>. For legal requirements, read <Link to="/guides/court-admissible-dna-testing" className="text-blue-600 underline">court admissible DNA testing</Link>.
          </p>
        </>
      }
      legal={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Grandparent DNA tests can be performed as legal tests (with identity verification, chain-of-custody, and AABB-accredited analysis) for court or immigration, or as peace-of-mind tests for personal use only. If you might need results for legal purposes, choose a legal test from the start.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For court and chain-of-custody requirements, see <Link to="/guides/chain-of-custody-dna-testing" className="text-blue-600 underline">chain of custody DNA testing</Link> and <Link to="/guides/dna-test-for-court" className="text-blue-600 underline">DNA testing for court cases</Link>.
          </p>
        </>
      }
      relatedGuides={[
        { title: "Can You Do A DNA Test Without The Father?", path: "/guides/dna-test-without-the-father" },
        { title: "Avuncular DNA Testing (Aunt/Uncle Test)", path: "/guides/avuncular-dna-testing-explained" }
      ]}
      ctaHeading="Schedule Grandparent DNA Testing"
      ctaSubline="Book a grandparent or kinship DNA test in Denver with legal options available."
    />
  );
}
