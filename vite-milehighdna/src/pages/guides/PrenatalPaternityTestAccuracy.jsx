import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "./GuideLayout";

const faqs = [
  {
    question: "How accurate are prenatal DNA tests?",
    answer: "Non-invasive prenatal paternity tests (NIPP) typically report 99.9% or higher accuracy. They analyze cell-free fetal DNA from the mother's blood and compare it to the alleged father's DNA. False positives and false negatives are rare when the test is performed by an accredited laboratory."
  },
  {
    question: "Is NIPP more accurate than invasive prenatal testing?",
    answer: "Both NIPP and invasive prenatal paternity tests (CVS, amniocentesis) can provide high accuracy. NIPP is preferred by many because it poses no risk to the pregnancy. Invasive tests are sometimes used when NIPP is not available or when other genetic information is needed."
  },
  {
    question: "Can prenatal DNA test results be wrong?",
    answer: "Laboratory errors are rare when tests are performed by accredited labs. Accuracy can be affected by very early testing (before sufficient fetal DNA is present), sample mix-up, or contamination—which is why legal tests use chain-of-custody and identity verification."
  },
  {
    question: "When is the best time for a prenatal paternity test?",
    answer: "Non-invasive prenatal paternity tests can be performed from 7–8 weeks of pregnancy. Waiting until at least 8 weeks can help ensure enough cell-free fetal DNA is present for a clear result. Your provider can confirm timing."
  }
];

export default function PrenatalPaternityTestAccuracy() {
  return (
    <GuideLayout
      title="How Accurate Are Prenatal DNA Tests?"
      slug="prenatal-paternity-test-accuracy"
      breadcrumbLabel="Prenatal Paternity Test Accuracy"
      description="Accuracy of prenatal DNA tests and NIPP: how reliable they are, what affects results, and when to test. Denver prenatal paternity testing."
      heroSubline="Understanding the accuracy of non-invasive prenatal paternity testing and what to expect from results."
      serviceLink="/services/prenatal-paternity-testing"
      serviceLabel="Prenatal Paternity Testing"
      faqs={faqs}
      overview={
        <>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Prenatal DNA tests—especially non-invasive prenatal paternity (NIPP) tests—are highly accurate when performed by accredited laboratories. Results typically show 99.9% or higher probability of paternity when the tested man is the biological father, and exclusion when he is not.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Mile High DNA Testing works with laboratories that meet accreditation standards. For more on prenatal testing in general, see <Link to="/guides/dna-test-while-pregnant" className="text-blue-600 underline">DNA testing while pregnant</Link> and <Link to="/guides/prenatal-paternity-test-safety" className="text-blue-600 underline">is prenatal DNA testing safe</Link>. To <Link to="/appointments" className="text-blue-600 underline">schedule a test</Link>, visit our appointments page.
          </p>
        </>
      }
      whenUsed={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Accuracy is important whether you are seeking peace of mind or legal documentation. Legal prenatal tests use the same technology but add identity verification and chain-of-custody so results can be used in court or for immigration.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For timing and process, read <Link to="/guides/prenatal-dna-test-timeline" className="text-blue-600 underline">prenatal DNA testing timeline</Link>. For cost factors, see <Link to="/guides/prenatal-dna-test-cost-breakdown" className="text-blue-600 underline">what affects prenatal DNA test cost</Link>.
          </p>
        </>
      }
      process={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            The lab isolates cell-free fetal DNA from the mother's blood and compares genetic markers to the alleged father's sample. Multiple markers are analyzed and statistical methods produce a probability of paternity. Quality control and accreditation help ensure reported accuracy.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For how long results take, see <Link to="/guides/how-long-does-dna-testing-take" className="text-blue-600 underline">how long DNA test results take</Link>. For understanding the report, read <Link to="/guides/dna-testing-results-explained" className="text-blue-600 underline">understanding DNA test results</Link>.
          </p>
        </>
      }
      legal={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Legal prenatal tests offer the same accuracy as peace-of-mind tests but are documented for court or immigration. If you might need results for legal purposes, choose a legal prenatal test from the start—peace-of-mind results cannot be converted to legal later.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For court and agency requirements, see <Link to="/guides/court-admissible-dna-testing" className="text-blue-600 underline">court admissible DNA testing</Link> and <Link to="/guides/chain-of-custody-dna-testing" className="text-blue-600 underline">chain of custody DNA testing</Link>.
          </p>
        </>
      }
      relatedGuides={[
        { title: "DNA Testing While Pregnant", path: "/guides/dna-test-while-pregnant" },
        { title: "Is Prenatal DNA Testing Safe?", path: "/guides/prenatal-paternity-test-safety" }
      ]}
      ctaHeading="Schedule an Accurate Prenatal Test"
      ctaSubline="Book a prenatal paternity test in Denver with results you can trust."
    />
  );
}
