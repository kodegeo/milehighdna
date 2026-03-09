import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "./GuideLayout";

const faqs = [
  {
    question: "Can you do a DNA test after someone has died?",
    answer: "Yes. Postmortem DNA testing can determine biological relationships using DNA from the deceased (if samples are available, e.g., stored tissue or personal effects) or from the deceased's biological relatives (e.g., children, parents, siblings). The lab uses kinship analysis to report the probability of the relationship."
  },
  {
    question: "What samples can be used for postmortem DNA testing?",
    answer: "When available, samples from the deceased (e.g., stored tissue, bone, or items that may contain DNA such as a toothbrush or razor) can be used. When the deceased's sample is not suitable, testing can be done using biological relatives—for example, the child and the deceased's parents or siblings."
  },
  {
    question: "Can postmortem DNA test results be used in court?",
    answer: "Yes, if the test is performed as a legal test with identity verification (of living participants), chain-of-custody, and an AABB-accredited laboratory. Results can be used in probate, inheritance, and other court cases when the court accepts postmortem kinship testing."
  },
  {
    question: "How long does postmortem DNA testing take?",
    answer: "Timeline depends on the type of sample (e.g., cheek swab from relatives vs. extraction from stored tissue or personal effects). Standard cases using relatives are often completed within several business days after the lab receives all samples. Complex samples may take longer."
  }
];

export default function DNATestingAfterDeath() {
  return (
    <GuideLayout
      title="DNA Testing After Death"
      slug="dna-testing-after-death"
      breadcrumbLabel="DNA Testing After Death"
      description="Postmortem DNA testing: when and how DNA testing can be done after someone has died. Probate, inheritance, and legal options. Denver postmortem DNA testing."
      heroSubline="How postmortem DNA testing works for probate, inheritance, and family verification when a loved one has passed away."
      serviceLink="/services/postmortem-paternity-testing"
      serviceLabel="Postmortem Paternity Testing"
      faqs={faqs}
      overview={
        <>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            DNA testing after death (postmortem testing) can establish or support biological relationships when the alleged parent or relative has passed away. Testing may use stored samples from the deceased or DNA from living relatives (e.g., children, grandparents, siblings) through kinship analysis. Results can be used for probate, inheritance, benefits, or personal verification.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Mile High DNA Testing coordinates postmortem DNA testing in Denver. For when the father is unavailable (including deceased), see <Link to="/guides/dna-test-without-the-father" className="text-blue-600 underline">can you do a DNA test without the father</Link> and <Link to="/guides/grandparent-dna-testing-explained" className="text-blue-600 underline">grandparent DNA testing</Link>. To <Link to="/appointments" className="text-blue-600 underline">schedule a test</Link>, visit our appointments page.
          </p>
        </>
      }
      whenUsed={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Postmortem DNA testing is used for probate and inheritance cases, Social Security survivor benefits, birth certificate amendments, and personal family verification when the alleged parent or relative is deceased. Courts and agencies may accept results when the test is performed with proper chain-of-custody and an AABB-accredited laboratory.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For kinship options when the father is missing (not necessarily deceased), read <Link to="/guides/avuncular-dna-testing-explained" className="text-blue-600 underline">avuncular DNA testing</Link> and <Link to="/guides/siblingship-dna-testing-explained" className="text-blue-600 underline">siblingship DNA testing</Link>.
          </p>
        </>
      }
      process={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            The laboratory determines the best approach: testing the deceased's sample (if available and suitable) or testing living relatives (e.g., child and grandparents, or child and siblings). For legal tests, living participants are identified and chain-of-custody is followed. Samples are analyzed by an AABB-accredited lab, which reports the probability of the relationship. Complex samples (e.g., from personal effects) may require additional extraction and validation.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For the general process, see <Link to="/guides/how-dna-testing-works" className="text-blue-600 underline">how DNA testing works</Link>. For legal requirements, read <Link to="/guides/court-admissible-dna-testing" className="text-blue-600 underline">court admissible DNA testing</Link> and <Link to="/guides/chain-of-custody-dna-testing" className="text-blue-600 underline">chain of custody DNA testing</Link>.
          </p>
        </>
      }
      legal={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Postmortem DNA tests can be performed as legal tests (for court, probate, or agency use) or as peace-of-mind tests for personal use only. Legal tests require identity verification of living participants, chain-of-custody, and AABB-accredited laboratory analysis. If you might need results for probate or court, choose a legal test from the start.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For court and chain-of-custody, see <Link to="/guides/dna-test-for-court" className="text-blue-600 underline">DNA testing for court cases</Link>. For preserving DNA for future use, read <Link to="/guides/single-profile-dna-testing" className="text-blue-600 underline">single profile DNA testing guide</Link>.
          </p>
        </>
      }
      relatedGuides={[
        { title: "Can You Do A DNA Test Without The Father?", path: "/guides/dna-test-without-the-father" },
        { title: "Single Profile DNA Testing Guide", path: "/guides/single-profile-dna-testing" }
      ]}
      ctaHeading="Schedule Postmortem DNA Testing"
      ctaSubline="Book postmortem or kinship DNA testing in Denver for probate and inheritance."
    />
  );
}
