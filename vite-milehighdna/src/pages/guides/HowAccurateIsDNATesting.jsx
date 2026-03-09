import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "./GuideLayout";

const faqs = [
  {
    question: "How accurate is a DNA paternity test?",
    answer: "Postnatal paternity tests typically report 99.9% or higher probability of paternity when the tested man is the biological father, and 0% when he is not. Results are produced using validated laboratory methods and accredited standards."
  },
  {
    question: "How accurate is prenatal DNA testing?",
    answer: "Non-invasive prenatal paternity tests (NIPP) offer 99.9% or higher accuracy. They use cell-free fetal DNA from the mother's blood and a cheek swab from the father, with no risk to the pregnancy."
  },
  {
    question: "Can DNA test results be wrong?",
    answer: "Laboratory errors are rare when using accredited labs and proper procedures. Errors are more likely from sample mix-ups or contamination, which is why legal tests use strict chain-of-custody and identity verification."
  },
  {
    question: "What does 99.9% probability of paternity mean?",
    answer: "It means the tested man is 99.9% likely to be the biological father based on the genetic analysis. Courts and agencies accept these statistics when the test is performed by an accredited laboratory with proper documentation."
  }
];

export default function HowAccurateIsDNATesting() {
  return (
    <GuideLayout
      title="How Accurate Is DNA Testing?"
      slug="how-accurate-is-dna-testing"
      breadcrumbLabel="How Accurate Is DNA Testing"
      description="Learn how accurate DNA testing is for paternity and relationship tests. Understand probability statistics, accreditation, and what affects reliability."
      heroSubline="Understand the accuracy of DNA paternity and relationship testing, how results are reported, and what accreditation means for reliability."
      serviceLink="/appointments"
      serviceLabel="Schedule a Test"
      faqs={faqs}
      overview={
        <>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            DNA testing for paternity and other relationships is highly accurate when performed by accredited laboratories using validated methods. Results are expressed as probabilities—for example, 99.99% probability of paternity when the alleged father is included.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            At Mile High DNA Testing, we work with AABB-accredited laboratories so that legal and immigration results meet court and USCIS standards. For more on the process, see <Link to="/guides/how-dna-testing-works" className="text-blue-600 underline">how DNA testing works</Link>. To <Link to="/appointments" className="text-blue-600 underline">schedule a test</Link>, visit our appointments page.
          </p>
        </>
      }
      whenUsed={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Accuracy matters most when results will be used in court, for immigration, or for major personal decisions. Legal tests use chain-of-custody and identity verification to reduce the risk of sample mix-up or fraud, which protects the reliability of the result.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Peace-of-mind tests use the same laboratory technology but without legal documentation, so they are not admissible in court. For understanding the numbers on your report, read <Link to="/guides/dna-testing-results-explained" className="text-blue-600 underline">understanding DNA test results</Link>.
          </p>
        </>
      }
      process={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Laboratories extract DNA from samples (usually cheek swabs), analyze a set of genetic markers, and apply statistical formulas to compute relationship probabilities. Multiple markers are used to maximize accuracy and minimize the chance of false inclusion or exclusion.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Quality control and accreditation (such as AABB) ensure methods are validated and reported correctly. Turnaround is typically 2–3 business days; see <Link to="/guides/how-long-does-dna-testing-take" className="text-blue-600 underline">how long DNA test results take</Link> for timelines.
          </p>
        </>
      }
      legal={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Legal DNA testing is designed for court and agency use. It requires verified identification, chain-of-custody procedures, and analysis by an AABB-accredited laboratory. The same high accuracy applies, with the added assurance that results will be accepted as evidence.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Non-legal tests are for personal knowledge only and are not admissible in court. If you might need results for legal or immigration purposes, choose legal testing from the start. See <Link to="/guides/court-admissible-dna-testing" className="text-blue-600 underline">court admissible DNA testing</Link> for more.
          </p>
        </>
      }
      relatedGuides={[
        { title: "How DNA Testing Works", path: "/guides/how-dna-testing-works" },
        { title: "Understanding DNA Test Results", path: "/guides/dna-testing-results-explained" }
      ]}
      ctaHeading="Schedule an Accurate DNA Test"
      ctaSubline="Book an appointment for accredited DNA testing in Denver with results you can trust."
    />
  );
}
