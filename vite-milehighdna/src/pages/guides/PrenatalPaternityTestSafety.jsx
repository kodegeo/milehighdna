import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "./GuideLayout";

const faqs = [
  {
    question: "Is prenatal DNA testing safe for the baby?",
    answer: "Non-invasive prenatal paternity testing (NIPP) is safe for the baby. It uses only a blood draw from the mother and a cheek swab from the father—no procedure is performed on the fetus or inside the womb, so there is no risk of miscarriage or harm to the baby."
  },
  {
    question: "What is the difference between invasive and non-invasive prenatal testing?",
    answer: "Non-invasive tests use the mother's blood and father's swab only. Invasive tests (CVS, amniocentesis) involve inserting a needle or catheter into the womb to collect tissue or fluid; they carry a small risk of complications including miscarriage."
  },
  {
    question: "Does NIPP hurt or pose risks to the mother?",
    answer: "NIPP requires a standard blood draw from the mother, which may cause brief discomfort. There are no known risks to the pregnancy. The father's sample is a simple cheek swab with no medical risk."
  },
  {
    question: "When is invasive prenatal testing used for paternity?",
    answer: "Invasive prenatal paternity testing (CVS or amniocentesis) is rarely used today because NIPP is available, accurate, and risk-free. Invasive testing may be considered in special circumstances; discuss with your provider."
  }
];

export default function PrenatalPaternityTestSafety() {
  return (
    <GuideLayout
      title="Is Prenatal DNA Testing Safe?"
      slug="prenatal-paternity-test-safety"
      breadcrumbLabel="Prenatal DNA Testing Safety"
      description="Safety of prenatal DNA testing: why NIPP is safe for mother and baby, and the difference between non-invasive and invasive tests."
      heroSubline="Why non-invasive prenatal paternity testing is safe for you and your baby—and what to know about invasive options."
      serviceLink="/services/prenatal-paternity-testing"
      serviceLabel="Prenatal Paternity Testing"
      faqs={faqs}
      overview={
        <>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Non-invasive prenatal paternity testing (NIPP) is safe for both the mother and the baby. It uses a blood draw from the mother and a cheek swab from the father. No instrument enters the womb, so there is no risk of miscarriage or injury to the fetus.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Mile High DNA Testing coordinates safe prenatal paternity testing in Denver. For more on how it works and accuracy, see <Link to="/guides/dna-test-while-pregnant" className="text-blue-600 underline">DNA testing while pregnant</Link> and <Link to="/guides/prenatal-paternity-test-accuracy" className="text-blue-600 underline">how accurate prenatal DNA tests are</Link>. To <Link to="/appointments" className="text-blue-600 underline">schedule a test</Link>, visit our appointments page.
          </p>
        </>
      }
      whenUsed={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Safety is a priority for any test during pregnancy. NIPP is the preferred method for prenatal paternity because it provides high accuracy without any procedure near the baby. Invasive tests (CVS, amniocentesis) are used less often for paternity now that NIPP is available.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For when you can test, read <Link to="/guides/prenatal-dna-test-timeline" className="text-blue-600 underline">prenatal DNA testing timeline</Link>. For cost, see <Link to="/guides/prenatal-dna-test-cost-breakdown" className="text-blue-600 underline">what affects prenatal DNA test cost</Link>.
          </p>
        </>
      }
      process={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            The mother has a routine blood draw at a lab or clinic. The alleged father provides a buccal (cheek) swab. No surgery or invasive procedure is involved. The laboratory analyzes cell-free fetal DNA from the mother's blood—this DNA naturally circulates in her bloodstream during pregnancy.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For the full process and turnaround, see <Link to="/guides/prenatal-dna-test-timeline" className="text-blue-600 underline">prenatal DNA testing timeline</Link> and <Link to="/guides/how-dna-testing-works" className="text-blue-600 underline">how DNA testing works</Link>.
          </p>
        </>
      }
      legal={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Legal and peace-of-mind prenatal tests use the same safe NIPP procedure. Legal tests add identity verification and chain-of-custody so results can be used in court or for immigration. Safety is the same for both.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            If you might need results for court or USCIS, choose a legal prenatal test from the start. For more, read <Link to="/guides/court-admissible-dna-testing" className="text-blue-600 underline">court admissible DNA testing</Link> and <Link to="/guides/chain-of-custody-dna-testing" className="text-blue-600 underline">chain of custody DNA testing</Link>.
          </p>
        </>
      }
      relatedGuides={[
        { title: "DNA Testing While Pregnant", path: "/guides/dna-test-while-pregnant" },
        { title: "How Accurate Are Prenatal DNA Tests?", path: "/guides/prenatal-paternity-test-accuracy" }
      ]}
      ctaHeading="Schedule a Safe Prenatal Test"
      ctaSubline="Book your non-invasive prenatal paternity test in Denver—no risk to you or your baby."
    />
  );
}
