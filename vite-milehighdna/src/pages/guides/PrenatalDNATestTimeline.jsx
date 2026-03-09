import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "./GuideLayout";

const faqs = [
  {
    question: "How long does a prenatal paternity test take?",
    answer: "Non-invasive prenatal paternity tests (NIPP) typically take 7–10 business days from when the laboratory receives the mother's blood sample and the father's cheek swab. The timeline can vary by lab and shipping."
  },
  {
    question: "When can I take a prenatal paternity test?",
    answer: "NIPP can be performed as early as 7–8 weeks into pregnancy. Some providers recommend waiting until at least 8 weeks to ensure sufficient cell-free fetal DNA is present in the mother's blood for a reliable result."
  },
  {
    question: "How soon after the blood draw do I get results?",
    answer: "Once the lab has both the mother's blood and the father's swab, processing usually takes 7–10 business days. The total time from your appointment to results includes shipping and any paperwork."
  },
  {
    question: "Can I get faster prenatal DNA test results?",
    answer: "Some laboratories offer expedited processing for an additional fee. Ask when scheduling whether rush options are available and what the cost and timeline would be."
  }
];

export default function PrenatalDNATestTimeline() {
  return (
    <GuideLayout
      title="Prenatal DNA Testing Timeline"
      slug="prenatal-dna-test-timeline"
      breadcrumbLabel="Prenatal DNA Testing Timeline"
      description="Prenatal DNA testing timeline: when you can test, how long results take, and what to expect. NIPP testing in Denver."
      heroSubline="When you can test, how long results take, and what to expect from start to finish."
      serviceLink="/services/prenatal-paternity-testing"
      serviceLabel="Prenatal Paternity Testing"
      faqs={faqs}
      overview={
        <>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            The prenatal DNA testing timeline has two main parts: when you can have the test (as early as 7–8 weeks for NIPP) and how long until you get results (typically 7–10 business days after the lab receives both samples).
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Mile High DNA Testing can help you plan your prenatal paternity test in Denver. For safety and accuracy, see <Link to="/guides/dna-test-while-pregnant" className="text-blue-600 underline">DNA testing while pregnant</Link> and <Link to="/guides/prenatal-paternity-test-accuracy" className="text-blue-600 underline">how accurate prenatal DNA tests are</Link>. To <Link to="/appointments" className="text-blue-600 underline">schedule a test</Link>, visit our appointments page.
          </p>
        </>
      }
      whenUsed={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Timeline matters when you have legal deadlines, immigration requirements, or personal decisions that depend on the result. Legal prenatal tests follow the same lab timeline but may add a day or two for chain-of-custody and documentation.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For comparison with other test types, read <Link to="/guides/how-long-does-dna-testing-take" className="text-blue-600 underline">how long DNA test results take</Link>. For cost and what affects it, see <Link to="/guides/prenatal-dna-test-cost-breakdown" className="text-blue-600 underline">what affects prenatal DNA test cost</Link>.
          </p>
        </>
      }
      process={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            You schedule the blood draw and swab collection (same day or separate, depending on the provider). The mother's blood and father's swab are sent to the laboratory. The lab extracts cell-free fetal DNA from the blood and compares it to the father's profile. Results are reported in about 7–10 business days from sample receipt.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For the full process, see <Link to="/guides/how-dna-testing-works" className="text-blue-600 underline">how DNA testing works</Link> and <Link to="/guides/prenatal-paternity-test-safety" className="text-blue-600 underline">is prenatal DNA testing safe</Link>.
          </p>
        </>
      }
      legal={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Legal prenatal tests use the same laboratory processing time. The extra steps are identity verification and chain-of-custody at collection and certified reporting. If you need results for court or immigration, plan for the same 7–10 business days plus any documentation or shipping time.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For court and agency requirements, see <Link to="/guides/court-admissible-dna-testing" className="text-blue-600 underline">court admissible DNA testing</Link> and <Link to="/guides/immigration-dna-test-timeline" className="text-blue-600 underline">how long immigration DNA testing takes</Link>.
          </p>
        </>
      }
      relatedGuides={[
        { title: "DNA Testing While Pregnant", path: "/guides/dna-test-while-pregnant" },
        { title: "How Long Do DNA Test Results Take?", path: "/guides/how-long-does-dna-testing-take" }
      ]}
      ctaHeading="Schedule Your Prenatal Test"
      ctaSubline="Book your prenatal paternity test in Denver and get a clear timeline for results."
    />
  );
}
