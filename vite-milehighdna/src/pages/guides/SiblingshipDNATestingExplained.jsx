import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "./GuideLayout";

const faqs = [
  {
    question: "What is siblingship DNA testing?",
    answer: "Siblingship DNA testing determines whether two or more people share one or both biological parents (full or half siblings). The laboratory compares genetic markers between the participants and reports the probability that they are full siblings, half siblings, or unrelated."
  },
  {
    question: "When is siblingship DNA testing used?",
    answer: "Siblingship testing is used when people need to confirm whether they share a parent—for example, for immigration (sibling petitions), inheritance, custody, or personal knowledge. It can also support other kinship cases when the direct parent is not available for testing."
  },
  {
    question: "Can siblingship DNA test results be used in court or for immigration?",
    answer: "Yes, if the test is performed as a legal test with identity verification, chain-of-custody, and an AABB-accredited laboratory. USCIS and some embassies accept sibling DNA results when the test meets their requirements. Courts may accept them when relevant to the case."
  },
  {
    question: "How accurate is siblingship DNA testing?",
    answer: "Accuracy depends on whether full or half siblingship is being tested and how many people are tested. The laboratory reports a probability (e.g., 90% or higher full siblings, or 0% unrelated). Legal tests with accredited labs provide results that meet court and agency standards."
  }
];

export default function SiblingshipDNATestingExplained() {
  return (
    <GuideLayout
      title="Siblingship DNA Testing Explained"
      slug="siblingship-dna-testing-explained"
      breadcrumbLabel="Siblingship DNA Testing"
      description="Siblingship DNA testing: full vs half siblings, when it is used, and legal options for court and immigration. Denver kinship DNA testing."
      heroSubline="How siblingship DNA testing works and when it is used for court, immigration, or personal knowledge."
      serviceLink="/appointments"
      serviceLabel="Schedule a Test"
      faqs={faqs}
      overview={
        <>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Siblingship DNA testing determines whether two or more individuals share one or both biological parents (half or full siblings). The laboratory compares their genetic markers and reports the probability of the relationship. It is used for immigration, inheritance, custody, or personal verification when sibling relationship is in question.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Mile High DNA Testing coordinates siblingship and other kinship tests in Denver. For other kinship options, see <Link to="/guides/grandparent-dna-testing-explained" className="text-blue-600 underline">grandparent DNA testing</Link> and <Link to="/guides/avuncular-dna-testing-explained" className="text-blue-600 underline">avuncular DNA testing</Link>. To <Link to="/appointments" className="text-blue-600 underline">schedule a test</Link>, visit our appointments page.
          </p>
        </>
      }
      whenUsed={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Siblingship testing is used when immigration (e.g., sibling petitions), courts, or families need to verify that two or more people are full or half siblings. It can also support inheritance or custody cases. When the parent is unavailable, sibling testing may be an alternative or supplement to parent-child testing.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For when the father is not available, read <Link to="/guides/dna-test-without-the-father" className="text-blue-600 underline">can you do a DNA test without the father</Link>. For immigration, see <Link to="/guides/immigration-dna-testing-process" className="text-blue-600 underline">immigration DNA testing process</Link>.
          </p>
        </>
      }
      process={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            All participants provide samples (typically cheek swabs). For legal tests, identity is verified and chain-of-custody is followed. The laboratory analyzes genetic markers and uses statistical models to report the probability of full siblingship, half siblingship, or no biological relationship. Results are usually ready within several business days after the lab receives all samples.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For the general process, see <Link to="/guides/how-dna-testing-works" className="text-blue-600 underline">how DNA testing works</Link>. For legal and chain-of-custody, read <Link to="/guides/chain-of-custody-dna-testing" className="text-blue-600 underline">chain of custody DNA testing</Link>.
          </p>
        </>
      }
      legal={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Siblingship tests can be legal (for court or immigration) or peace-of-mind (for personal use only). Legal tests require identity verification, chain-of-custody, and AABB-accredited laboratory analysis. If you might need results for USCIS, an embassy, or court, choose a legal test from the start.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For court and immigration requirements, see <Link to="/guides/court-admissible-dna-testing" className="text-blue-600 underline">court admissible DNA testing</Link> and <Link to="/guides/uscis-dna-testing" className="text-blue-600 underline">USCIS DNA testing requirements</Link>.
          </p>
        </>
      }
      relatedGuides={[
        { title: "Grandparent DNA Testing Explained", path: "/guides/grandparent-dna-testing-explained" },
        { title: "Avuncular DNA Testing (Aunt/Uncle Test)", path: "/guides/avuncular-dna-testing-explained" }
      ]}
      ctaHeading="Schedule Siblingship DNA Testing"
      ctaSubline="Book a siblingship or kinship DNA test in Denver with legal options available."
    />
  );
}
