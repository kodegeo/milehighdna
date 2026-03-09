import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "./GuideLayout";

const faqs = [
  {
    question: "Can you do a DNA test while pregnant?",
    answer: "Yes. Non-invasive prenatal paternity testing (NIPP) can be done as early as 7–8 weeks into pregnancy. It uses a blood draw from the mother and a cheek swab from the father. No procedure is done inside the womb, so there is no risk to the baby."
  },
  {
    question: "How early can I get a prenatal paternity test?",
    answer: "Non-invasive prenatal paternity tests are typically available from 7–8 weeks of pregnancy. Invasive tests (CVS, amniocentesis) can be done at 10–13 weeks and 15–20 weeks respectively, but carry small procedural risks."
  },
  {
    question: "Is prenatal DNA testing safe for the baby?",
    answer: "Non-invasive prenatal paternity testing (NIPP) is safe for the baby. It uses only the mother's blood and the father's cheek swab. Invasive tests (CVS, amniocentesis) involve a small risk of complications; see our prenatal safety guide for more."
  },
  {
    question: "How accurate is DNA testing while pregnant?",
    answer: "Non-invasive prenatal paternity tests typically report 99.9% or higher accuracy. They analyze cell-free fetal DNA in the mother's bloodstream. For more on accuracy, see our guide on prenatal paternity test accuracy."
  }
];

export default function DNATestWhilePregnant() {
  return (
    <GuideLayout
      title="DNA Testing While Pregnant"
      slug="dna-test-while-pregnant"
      breadcrumbLabel="DNA Testing While Pregnant"
      description="DNA testing while pregnant: non-invasive prenatal paternity (NIPP), when you can test, safety, and accuracy. Denver prenatal DNA testing."
      heroSubline="Get answers early with non-invasive prenatal paternity testing—safe for you and your baby."
      serviceLink="/services/prenatal-paternity-testing"
      serviceLabel="Prenatal Paternity Testing"
      faqs={faqs}
      overview={
        <>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            DNA testing while pregnant is possible through non-invasive prenatal paternity testing (NIPP). A blood draw from the mother and a cheek swab from the father provide enough material for the laboratory to determine paternity as early as 7–8 weeks, with no risk to the pregnancy.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Mile High DNA Testing coordinates prenatal paternity testing in Denver. For more on accuracy and safety, see <Link to="/guides/prenatal-paternity-test-accuracy" className="text-blue-600 underline">how accurate prenatal DNA tests are</Link> and <Link to="/guides/prenatal-paternity-test-safety" className="text-blue-600 underline">is prenatal DNA testing safe</Link>. To <Link to="/appointments" className="text-blue-600 underline">schedule a test</Link>, visit our appointments page.
          </p>
        </>
      }
      whenUsed={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Prenatal paternity testing is used when parents want to know paternity before the baby is born—for peace of mind, legal planning, or other personal reasons. It can be performed as a legal test (with chain-of-custody for court or immigration) or as a peace-of-mind test.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For timing and cost, read <Link to="/guides/prenatal-dna-test-timeline" className="text-blue-600 underline">prenatal DNA testing timeline</Link> and <Link to="/guides/prenatal-dna-test-cost-breakdown" className="text-blue-600 underline">what affects prenatal DNA test cost</Link>.
          </p>
        </>
      }
      process={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            The mother has a blood draw (same as a routine lab draw). The alleged father provides a cheek swab. For legal tests, identity is verified and chain-of-custody is followed. The laboratory isolates cell-free fetal DNA from the mother's blood and compares it to the father's profile. Results are typically ready in 7–10 business days.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            No procedure is performed on the fetus. For a step-by-step timeline, see <Link to="/guides/prenatal-dna-test-timeline" className="text-blue-600 underline">prenatal DNA testing timeline</Link>. For how the process works in general, read <Link to="/guides/how-dna-testing-works" className="text-blue-600 underline">how DNA testing works</Link>.
          </p>
        </>
      }
      legal={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Prenatal paternity tests can be performed as legal tests (with identity verification and chain-of-custody for court or immigration) or as peace-of-mind tests for personal use only. If you might need results for court or USCIS, choose a legal prenatal test from the start.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Legal prenatal tests use the same NIPP technology but with documented procedures. For more on legal testing, see <Link to="/guides/court-admissible-dna-testing" className="text-blue-600 underline">court admissible DNA testing</Link> and <Link to="/guides/chain-of-custody-dna-testing" className="text-blue-600 underline">chain of custody DNA testing</Link>.
          </p>
        </>
      }
      relatedGuides={[
        { title: "How Accurate Are Prenatal DNA Tests?", path: "/guides/prenatal-paternity-test-accuracy" },
        { title: "Is Prenatal DNA Testing Safe?", path: "/guides/prenatal-paternity-test-safety" }
      ]}
      ctaHeading="Schedule a Prenatal Paternity Test"
      ctaSubline="Book your non-invasive prenatal paternity test in Denver—safe and accurate."
    />
  );
}
