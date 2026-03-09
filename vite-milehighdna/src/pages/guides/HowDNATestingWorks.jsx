import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "./GuideLayout";

const faqs = [
  {
    question: "What is DNA testing and how does it work?",
    answer: "DNA testing analyzes genetic material (usually from a cheek swab or blood sample) to compare specific genetic markers between individuals. Laboratories extract DNA, amplify key regions, and use statistical analysis to determine biological relationships such as paternity, with results typically showing 99% or higher probability when a match is found."
  },
  {
    question: "How long does a DNA test take?",
    answer: "Most relationship DNA tests produce results within 2–3 business days after the laboratory receives samples. Legal tests with chain-of-custody may take slightly longer. For more detail, see our guide on how long DNA testing takes."
  },
  {
    question: "Is DNA testing accurate?",
    answer: "Yes. Postnatal paternity tests routinely achieve 99.9% or higher probability of paternity when the alleged father is included. Non-invasive prenatal tests offer 99.9% accuracy. Results are produced by accredited laboratories using validated methods."
  },
  {
    question: "Do I need to go to a lab for DNA testing?",
    answer: "Legal and court-admissible tests require in-person collection with identity verification and chain-of-custody. Peace-of-mind or at-home tests can use kits with mailed-in samples, but those results are not admissible in court. For legal testing in Denver, appointments are available at our office."
  }
];

export default function HowDNATestingWorks() {
  return (
    <GuideLayout
      title="How DNA Testing Works | Complete Guide"
      slug="how-dna-testing-works"
      breadcrumbLabel="How DNA Testing Works"
      description="A complete guide to how DNA testing works: sample collection, laboratory analysis, and how results are used for paternity, legal, and relationship testing in Denver and nationwide."
      heroSubline="Learn how DNA samples are collected, analyzed in the laboratory, and how results are used for paternity, legal, and relationship testing."
      serviceLink="/appointments"
      serviceLabel="Schedule a Test"
      faqs={faqs}
      overview={
        <>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            DNA testing identifies biological relationships by comparing genetic markers between individuals. Whether for paternity, legal, or peace-of-mind purposes, the process follows a consistent path: collection, laboratory analysis, and reporting.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            At Mile High DNA Testing, we coordinate DNA testing in Denver and beyond. Samples are typically collected via a simple cheek (buccal) swab. The laboratory then extracts DNA, analyzes specific markers, and applies statistical methods to report probabilities—for example, &quot;99.99% probability of paternity&quot; when the tested man is the biological father. For more on accuracy, read our guide on <Link to="/guides/how-accurate-is-dna-testing" className="text-blue-600 underline">how accurate DNA testing is</Link>. To <Link to="/appointments" className="text-blue-600 underline">schedule a DNA test</Link>, visit our appointments page.
          </p>
        </>
      }
      whenUsed={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            DNA testing is used when people need to confirm biological relationships. Common situations include establishing paternity for child support or custody, confirming family ties for immigration, peace-of-mind testing during or after pregnancy, and inheritance or probate cases.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Courts and government agencies often require tests performed under strict chain-of-custody and by AABB-accredited laboratories. For personal knowledge only, non-legal (peace-of-mind) tests are also available. Understanding the difference helps you choose the right test; see <Link to="/guides/dna-testing-results-explained" className="text-blue-600 underline">understanding DNA test results</Link> for how to read reports.
          </p>
        </>
      }
      process={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            The process usually starts with scheduling a collection appointment or ordering a kit. At the appointment, identity is verified (for legal tests) and samples are collected—typically buccal swabs from the inside of the cheek. Samples are sealed, labeled, and sent to the laboratory under chain-of-custody when required.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            The lab extracts DNA, runs genetic analysis, and produces a report. For legal tests, the report is notarized or certified and can be sent to courts, attorneys, or agencies. Turnaround is often 2–3 business days for standard relationship tests. For timelines, see <Link to="/guides/how-long-does-dna-testing-take" className="text-blue-600 underline">how long DNA test results take</Link>.
          </p>
        </>
      }
      legal={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Legal DNA testing follows documented chain-of-custody: verified ID, certified collection, and analysis by an AABB-accredited laboratory. Results are admissible in court and for USCIS. Non-legal (peace-of-mind) testing does not include these steps and is for personal information only.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            If you might need results for court or immigration, start with legal testing from the beginning. Converting a non-legal test to legal usually is not possible. For more, read our guides on <Link to="/guides/court-admissible-dna-testing" className="text-blue-600 underline">court admissible DNA testing</Link> and <Link to="/guides/chain-of-custody-dna-testing" className="text-blue-600 underline">chain of custody DNA testing</Link>.
          </p>
        </>
      }
      relatedGuides={[
        { title: "How Accurate Is DNA Testing?", path: "/guides/how-accurate-is-dna-testing" },
        { title: "How Long Do DNA Test Results Take?", path: "/guides/how-long-does-dna-testing-take" }
      ]}
      ctaHeading="Ready to Schedule a DNA Test?"
      ctaSubline="Book an appointment for professional DNA collection in Denver or learn more about our services."
    />
  );
}
