import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "./GuideLayout";

const faqs = [
  {
    question: "How much does a prenatal DNA test cost?",
    answer: "Non-invasive prenatal paternity tests (NIPP) typically cost between $1,500 and $1,800 or more, depending on the laboratory, location, and whether the test is legal or peace-of-mind. Invasive tests (CVS, amniocentesis) can range from about $1,200 to $2,000."
  },
  {
    question: "Why do prenatal DNA tests cost more than regular paternity tests?",
    answer: "Prenatal tests use more complex technology (cell-free DNA analysis from blood) and require specialized laboratory processing. The mother's blood draw and handling of fetal DNA add to the cost compared to simple cheek swab paternity tests."
  },
  {
    question: "Does insurance cover prenatal paternity testing?",
    answer: "Most insurance plans do not cover prenatal paternity testing because it is considered elective. Coverage may exist for medically indicated genetic testing (e.g., chromosomal conditions). Check with your insurer for your specific plan."
  },
  {
    question: "Is there a difference in cost between legal and non-legal prenatal tests?",
    answer: "Legal prenatal tests (with chain-of-custody and identity verification) may cost more than peace-of-mind tests because of the additional documentation and procedures. Ask for a clear quote when scheduling."
  }
];

export default function PrenatalDNATestCostBreakdown() {
  return (
    <GuideLayout
      title="What Affects Prenatal DNA Test Cost?"
      slug="prenatal-dna-test-cost-breakdown"
      breadcrumbLabel="Prenatal DNA Test Cost"
      description="What affects prenatal DNA test cost: NIPP pricing, legal vs peace-of-mind, and how to budget. Denver prenatal paternity testing."
      heroSubline="What drives the cost of prenatal paternity testing and how to plan for it."
      serviceLink="/services/prenatal-paternity-testing"
      serviceLabel="Prenatal Paternity Testing"
      faqs={faqs}
      overview={
        <>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Prenatal DNA test cost is influenced by the type of test (non-invasive vs invasive), whether it is legal or peace-of-mind, the laboratory used, and any expedited or add-on services. NIPP tests typically range from about $1,500 to $1,800 or more.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Mile High DNA Testing can provide current pricing for prenatal paternity testing in Denver. For timing and process, see <Link to="/guides/prenatal-dna-test-timeline" className="text-blue-600 underline">prenatal DNA testing timeline</Link> and <Link to="/guides/dna-test-while-pregnant" className="text-blue-600 underline">DNA testing while pregnant</Link>. To <Link to="/appointments" className="text-blue-600 underline">schedule a test</Link>, visit our appointments page.
          </p>
        </>
      }
      whenUsed={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Cost is a factor when choosing between prenatal testing options. NIPP is often preferred over invasive tests because it is safe and accurate; the higher cost reflects the technology. Legal tests add documentation for court or immigration and may have a higher price than peace-of-mind tests.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For accuracy and safety, read <Link to="/guides/prenatal-paternity-test-accuracy" className="text-blue-600 underline">how accurate prenatal DNA tests are</Link> and <Link to="/guides/prenatal-paternity-test-safety" className="text-blue-600 underline">is prenatal DNA testing safe</Link>.
          </p>
        </>
      }
      process={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Pricing usually includes the mother's blood draw, the father's swab, laboratory analysis, and the report. Legal tests also include identity verification, chain-of-custody paperwork, and certified reporting. Expedited results or multiple participants can add to the cost. Always request a detailed quote before booking.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For how long results take, see <Link to="/guides/prenatal-dna-test-timeline" className="text-blue-600 underline">prenatal DNA testing timeline</Link>. For general cost context, read our <Link to="/guides/how-dna-testing-works" className="text-blue-600 underline">how DNA testing works</Link> guide.
          </p>
        </>
      }
      legal={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Legal prenatal tests cost more than peace-of-mind tests because they include identity verification, chain-of-custody, and certified reporting for court or immigration. If you might need results for legal purposes, the extra cost of a legal test from the start is usually worth it—peace-of-mind results cannot be converted to legal later.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For court and agency requirements, see <Link to="/guides/court-admissible-dna-testing" className="text-blue-600 underline">court admissible DNA testing</Link> and <Link to="/guides/chain-of-custody-dna-testing" className="text-blue-600 underline">chain of custody DNA testing</Link>.
          </p>
        </>
      }
      relatedGuides={[
        { title: "DNA Testing While Pregnant", path: "/guides/dna-test-while-pregnant" },
        { title: "Prenatal DNA Testing Timeline", path: "/guides/prenatal-dna-test-timeline" }
      ]}
      ctaHeading="Get a Clear Quote for Prenatal Testing"
      ctaSubline="Schedule or inquire about prenatal paternity testing in Denver with transparent pricing."
    />
  );
}
