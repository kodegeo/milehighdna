import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "./GuideLayout";

const faqs = [
  {
    question: "How long does a paternity test take to get results?",
    answer: "Standard paternity tests typically return results within 2–3 business days after the laboratory receives the samples. Legal tests with chain-of-custody may take the same or slightly longer depending on documentation and shipping."
  },
  {
    question: "How long does prenatal DNA testing take?",
    answer: "Non-invasive prenatal paternity tests (NIPP) usually take 7–10 business days from when the lab receives the mother's blood sample and the father's swab. For more detail, see our prenatal DNA test timeline guide."
  },
  {
    question: "Can I get faster DNA test results?",
    answer: "Some laboratories offer expedited or rush processing for an additional fee. Availability and cost vary; ask when scheduling your appointment if you need results by a specific date."
  },
  {
    question: "When does the clock start for DNA test turnaround?",
    answer: "Turnaround is typically counted from when the laboratory receives all samples and required paperwork, not from the collection date. Shipping and documentation can add a few days before the lab starts processing."
  }
];

export default function HowLongDoesDNATestingTake() {
  return (
    <GuideLayout
      title="How Long Do DNA Test Results Take?"
      slug="how-long-does-dna-testing-take"
      breadcrumbLabel="How Long Do DNA Test Results Take"
      description="Learn how long DNA test results take for paternity, prenatal, legal, and immigration testing. Typical turnaround times and what affects the timeline."
      heroSubline="Typical turnaround times for paternity, prenatal, legal, and immigration DNA tests—and what affects how long you wait for results."
      serviceLink="/appointments"
      serviceLabel="Schedule a Test"
      faqs={faqs}
      overview={
        <>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            How long DNA test results take depends on the type of test, the laboratory, and whether samples are collected in person or mailed. Most standard relationship tests produce results within 2–3 business days after the lab receives the samples.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            At Mile High DNA Testing in Denver, we coordinate collection and shipping so your samples reach the laboratory without delay. For an overview of the process, see <Link to="/guides/how-dna-testing-works" className="text-blue-600 underline">how DNA testing works</Link>. To <Link to="/appointments" className="text-blue-600 underline">schedule a test</Link>, visit our appointments page.
          </p>
        </>
      }
      whenUsed={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Turnaround matters when you have court deadlines, immigration timelines, or personal decisions that depend on the result. Legal and immigration tests may add a day or two for documentation and chain-of-custody, but the laboratory processing time is similar to non-legal tests.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Prenatal tests take longer because they involve cell-free DNA extraction and more complex analysis. For details, read <Link to="/guides/prenatal-dna-test-timeline" className="text-blue-600 underline">prenatal DNA testing timeline</Link> and <Link to="/guides/immigration-dna-test-timeline" className="text-blue-600 underline">how long immigration DNA testing takes</Link>.
          </p>
        </>
      }
      process={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            After collection, samples are sealed and sent to the laboratory. For legal tests, chain-of-custody paperwork travels with the samples. The lab logs the receipt date and begins extraction and analysis. Most paternity tests are completed within 2–3 business days of receipt.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Results are then reported to the ordering party or designated recipients. Expedited options may be available for an extra fee. For understanding the report when it arrives, see <Link to="/guides/dna-testing-results-explained" className="text-blue-600 underline">understanding DNA test results</Link>.
          </p>
        </>
      }
      legal={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Legal DNA tests follow the same laboratory timeline; the extra time is usually for identity verification, chain-of-custody documentation, and certified reporting. Courts and agencies accept results when the test is performed by an AABB-accredited lab with proper procedures.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Immigration DNA testing often has additional steps (e.g., embassy or consulate requirements) that can extend the overall timeline. Plan ahead if you have a deadline. See <Link to="/guides/court-admissible-dna-testing" className="text-blue-600 underline">court admissible DNA testing</Link> for legal requirements.
          </p>
        </>
      }
      relatedGuides={[
        { title: "How DNA Testing Works", path: "/guides/how-dna-testing-works" },
        { title: "Understanding DNA Test Results", path: "/guides/dna-testing-results-explained" }
      ]}
      ctaHeading="Get Your Results Sooner"
      ctaSubline="Schedule your DNA test in Denver and get clear turnaround expectations from the start."
    />
  );
}
