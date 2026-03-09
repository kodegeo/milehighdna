import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "./GuideLayout";

const faqs = [
  {
    question: "Is a DNA test required for child custody?",
    answer: "Courts may order or accept paternity DNA testing when paternity is in dispute and relevant to custody, support, or visitation. Requirements vary by state and case. Your attorney can advise whether testing is needed in your situation."
  },
  {
    question: "Can DNA test results affect custody decisions?",
    answer: "Establishing paternity can affect parental rights, custody, and support. Courts use many factors in custody decisions; DNA test results that establish or exclude paternity are one piece of evidence when parentage is at issue."
  },
  {
    question: "Do I need a legal DNA test for custody?",
    answer: "Yes. Any DNA test used in a custody or family court case must be a legal test with chain-of-custody and AABB-accredited laboratory analysis. Peace-of-mind or at-home test results are not admissible."
  },
  {
    question: "How do I schedule a custody-related paternity test in Denver?",
    answer: "Schedule a legal paternity test at a facility that verifies ID and uses chain-of-custody with an AABB-accredited lab. Mile High DNA Testing in Denver offers legal paternity testing that meets court requirements."
  }
];

export default function DNATestForChildCustody() {
  return (
    <GuideLayout
      title="DNA Testing For Child Custody Cases"
      slug="dna-test-for-child-custody"
      breadcrumbLabel="DNA Testing For Child Custody"
      description="DNA testing for child custody: when courts use paternity tests, legal requirements, and how to get court-admissible results in Denver."
      heroSubline="When and how DNA testing is used in custody cases—and how to get results the court will accept."
      serviceLink="/services/legal-paternity-testing"
      serviceLabel="Legal Paternity Testing"
      faqs={faqs}
      overview={
        <>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            In child custody and family law cases, courts may require or accept paternity DNA testing when biological parentage is in question. The test must be a legal test with identity verification, chain-of-custody, and AABB-accredited laboratory analysis so results are admissible.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Mile High DNA Testing coordinates legal paternity testing in Denver for custody and other family law matters. For general court requirements, see <Link to="/guides/court-admissible-dna-testing" className="text-blue-600 underline">court admissible DNA testing</Link> and <Link to="/guides/dna-test-for-court" className="text-blue-600 underline">DNA testing for court cases</Link>. To <Link to="/appointments" className="text-blue-600 underline">schedule a test</Link>, visit our appointments page.
          </p>
        </>
      }
      whenUsed={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            DNA testing in custody cases is used when paternity is disputed or needs to be established for the court to determine rights and responsibilities. A judge may order testing, or a party may arrange it to support their case.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Results help the court establish legal parentage, which can affect custody, visitation, and child support. For when the alleged father is not available for testing, see <Link to="/guides/dna-test-without-the-father" className="text-blue-600 underline">can you do a DNA test without the father</Link>. For chain-of-custody, read <Link to="/guides/chain-of-custody-dna-testing" className="text-blue-600 underline">chain of custody DNA testing</Link>.
          </p>
        </>
      }
      process={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Participants schedule a legal paternity test and bring government-issued ID to collection. The collector verifies identity, takes cheek swabs, and follows chain-of-custody. Samples are sent to an AABB-accredited lab; the lab issues a certified report that can be sent to the court or attorneys.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            If the test is court-ordered, bring the order or any instructions from the court. Results are typically available within 2–3 business days after the lab receives samples. See <Link to="/guides/how-long-does-dna-testing-take" className="text-blue-600 underline">how long DNA test results take</Link>.
          </p>
        </>
      }
      legal={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Only legal DNA tests are admissible in custody proceedings. They require verified ID, chain-of-custody, and an AABB-accredited laboratory. Non-legal or at-home tests cannot be used in court.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            If you are in a custody case and need paternity established, start with a legal test. For more on legal standards, see <Link to="/guides/court-admissible-dna-testing" className="text-blue-600 underline">court admissible DNA testing</Link> and <Link to="/guides/dna-test-for-court" className="text-blue-600 underline">DNA testing for court cases</Link>.
          </p>
        </>
      }
      relatedGuides={[
        { title: "Court Admissible DNA Testing Explained", path: "/guides/court-admissible-dna-testing" },
        { title: "DNA Testing For Court Cases", path: "/guides/dna-test-for-court" }
      ]}
      ctaHeading="Schedule a Custody-Ready Paternity Test"
      ctaSubline="Book a legal paternity test in Denver for custody and family court."
    />
  );
}
