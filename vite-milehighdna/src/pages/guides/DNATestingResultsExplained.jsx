import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "./GuideLayout";

const faqs = [
  {
    question: "What does probability of paternity mean?",
    answer: "Probability of paternity is the statistical likelihood that the tested man is the biological father, given the genetic data. Results of 99% or higher typically indicate the man is the father; 0% means he is excluded."
  },
  {
    question: "What is a combined paternity index?",
    answer: "The combined paternity index (CPI) is a number that indicates how much more likely it is that the alleged father is the biological father compared to a random man. Higher values support paternity; the probability of paternity is derived from the CPI."
  },
  {
    question: "Can I use my DNA test results in court?",
    answer: "Only if the test was performed as a legal test with chain-of-custody, identity verification, and analysis by an AABB-accredited laboratory. Peace-of-mind or at-home test results are not admissible in court."
  },
  {
    question: "Who receives the DNA test results?",
    answer: "Results are released according to the authorization form signed at collection. They can go to the tested parties, an attorney, a court, or a government agency. Legal tests often allow results to be sent directly to the requesting party or their representative."
  }
];

export default function DNATestingResultsExplained() {
  return (
    <GuideLayout
      title="Understanding DNA Test Results"
      slug="dna-testing-results-explained"
      breadcrumbLabel="Understanding DNA Test Results"
      description="Learn how to read and understand DNA test results: probability of paternity, combined paternity index, and when results are court-admissible."
      heroSubline="How to read your DNA test report: probability of paternity, combined paternity index, and what makes results legal and admissible."
      serviceLink="/appointments"
      serviceLabel="Schedule a Test"
      faqs={faqs}
      overview={
        <>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            DNA test reports include genetic data and statistical conclusions. For paternity tests, you will see a probability of paternity (e.g., 99.99%) and often a combined paternity index. Understanding these numbers helps you interpret the result correctly.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            At Mile High DNA Testing, we help clients in Denver and beyond understand their results. For background on how the lab produces these numbers, see <Link to="/guides/how-dna-testing-works" className="text-blue-600 underline">how DNA testing works</Link> and <Link to="/guides/how-accurate-is-dna-testing" className="text-blue-600 underline">how accurate DNA testing is</Link>. To <Link to="/appointments" className="text-blue-600 underline">schedule a test</Link>, visit our appointments page.
          </p>
        </>
      }
      whenUsed={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Results are used for personal peace of mind, legal proceedings, immigration, or other official purposes. Legal and immigration tests produce the same type of statistical result but are documented and certified so they can be submitted to courts or agencies.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            If you need results for court or USCIS, the test must be set up as a legal test from the start. See <Link to="/guides/court-admissible-dna-testing" className="text-blue-600 underline">court admissible DNA testing</Link> and <Link to="/guides/uscis-dna-testing" className="text-blue-600 underline">USCIS DNA testing requirements</Link> for more.
          </p>
        </>
      }
      process={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            The laboratory compares genetic markers between the child and the alleged father. When markers match as expected for a father-child relationship, the probability of paternity is calculated and reported. A 0% result means the man is excluded as the biological father.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Reports also list the genetic markers tested and the combined paternity index. For typical turnaround, see <Link to="/guides/how-long-does-dna-testing-take" className="text-blue-600 underline">how long DNA test results take</Link>.
          </p>
        </>
      }
      legal={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Legal DNA test results are accompanied by chain-of-custody documentation and are issued by an AABB-accredited laboratory. They can be sent directly to courts, attorneys, or government agencies when authorized. Non-legal test results are for personal use only and are not admissible.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            If you ordered a peace-of-mind test and later need court-admissible results, you generally must complete a new legal test. For more, read <Link to="/guides/chain-of-custody-dna-testing" className="text-blue-600 underline">chain of custody DNA testing</Link>.
          </p>
        </>
      }
      relatedGuides={[
        { title: "How Accurate Is DNA Testing?", path: "/guides/how-accurate-is-dna-testing" },
        { title: "How Long Do DNA Test Results Take?", path: "/guides/how-long-does-dna-testing-take" }
      ]}
      ctaHeading="Get Clear, Documented Results"
      ctaSubline="Schedule a legal or peace-of-mind DNA test and receive results you can understand and use."
    />
  );
}
