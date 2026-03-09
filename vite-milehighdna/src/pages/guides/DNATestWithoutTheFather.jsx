import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "./GuideLayout";

const faqs = [
  {
    question: "Can you do a paternity test without the father?",
    answer: "Yes. When the alleged father is unavailable, testing can sometimes be done using his biological relatives (e.g., parents or siblings) through grandparent or avuncular testing. If the father is deceased, postmortem testing using stored samples or relatives may be an option."
  },
  {
    question: "What if the father is deceased?",
    answer: "Postmortem paternity testing can determine biological relationships using DNA from the father's relatives (e.g., children, parents, siblings) or from stored samples or personal effects. See our guide on DNA testing after death for more."
  },
  {
    question: "Can the father do a DNA test in another state or country?",
    answer: "Yes. Legal paternity tests can be coordinated with collection at different locations—for example, the mother and child in Denver and the father at an approved site elsewhere. The laboratory coordinates so all samples are analyzed together with proper chain-of-custody."
  },
  {
    question: "Is a grandparent DNA test as accurate as a paternity test?",
    answer: "Grandparent and other kinship tests use different statistical models but can provide strong evidence of relationship when the alleged father is not tested. Accuracy depends on which relatives are available and the laboratory's methods."
  }
];

export default function DNATestWithoutTheFather() {
  return (
    <GuideLayout
      title="Can You Do A DNA Test Without The Father?"
      slug="dna-test-without-the-father"
      breadcrumbLabel="DNA Test Without The Father"
      description="Options when the father is unavailable: grandparent testing, avuncular testing, and postmortem DNA testing. Legal options in Denver."
      heroSubline="When the alleged father cannot be tested—grandparent, sibling, and postmortem options explained."
      serviceLink="/services/legal-paternity-testing"
      serviceLabel="Legal Paternity Testing"
      faqs={faqs}
      overview={
        <>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            When the alleged father is not available for testing, other options may still establish or support a biological relationship. These include testing the father's parents (grandparent test), his siblings (avuncular), or—if he is deceased—postmortem testing using relatives or stored samples.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Mile High DNA Testing can help determine the right test for your situation. For more on grandparent and sibling tests, see <Link to="/guides/grandparent-dna-testing-explained" className="text-blue-600 underline">grandparent DNA testing</Link> and <Link to="/guides/avuncular-dna-testing-explained" className="text-blue-600 underline">avuncular DNA testing</Link>. To <Link to="/appointments" className="text-blue-600 underline">schedule a test</Link>, visit our appointments page.
          </p>
        </>
      }
      whenUsed={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            These options are used when the alleged father is unwilling, unavailable, in another country, or deceased. Courts and immigration may accept kinship results when a direct paternity test is not possible, depending on the case and the type of test.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For inheritance or probate when the father has passed away, see <Link to="/guides/dna-testing-after-death" className="text-blue-600 underline">DNA testing after death</Link>. For legal requirements, read <Link to="/guides/court-admissible-dna-testing" className="text-blue-600 underline">court admissible DNA testing</Link> and <Link to="/guides/chain-of-custody-dna-testing" className="text-blue-600 underline">chain of custody DNA testing</Link>.
          </p>
        </>
      }
      process={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            The laboratory determines which relatives are needed (e.g., both grandparents, or one grandparent and the child). All participants are collected with the same identity verification and chain-of-custody as a standard legal paternity test. The lab then uses kinship analysis to report the probability of the relationship.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For postmortem cases, the lab may use samples from the deceased (if available) or from relatives. See <Link to="/guides/dna-testing-after-death" className="text-blue-600 underline">DNA testing after death</Link> and <Link to="/guides/siblingship-dna-testing-explained" className="text-blue-600 underline">siblingship DNA testing</Link> for more.
          </p>
        </>
      }
      legal={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Kinship and postmortem tests for court or immigration must still be performed as legal tests with chain-of-custody and AABB-accredited analysis. Peace-of-mind kinship tests are for personal use only and are not admissible.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            If you need results for court or USCIS, the test must be set up as a legal test from the start. For more, see <Link to="/guides/dna-test-for-court" className="text-blue-600 underline">DNA testing for court cases</Link> and <Link to="/guides/immigration-dna-testing-process" className="text-blue-600 underline">immigration DNA testing process</Link>.
          </p>
        </>
      }
      relatedGuides={[
        { title: "Grandparent DNA Testing Explained", path: "/guides/grandparent-dna-testing-explained" },
        { title: "DNA Testing After Death", path: "/guides/dna-testing-after-death" }
      ]}
      ctaHeading="Explore Testing Options Without the Father"
      ctaSubline="Schedule a consultation or legal kinship test in Denver."
    />
  );
}
