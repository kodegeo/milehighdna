import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "./GuideLayout";

const faqs = [
  {
    question: "What is chain of custody in DNA testing?",
    answer: "Chain of custody is the documented record of who handled the DNA samples, when, and under what conditions from collection through laboratory analysis. It ensures samples are not tampered with or mixed up, which is required for legal admissibility."
  },
  {
    question: "Why is chain of custody required for legal DNA tests?",
    answer: "Courts and agencies need to know that the samples tested actually came from the named individuals and were not substituted or contaminated. Chain-of-custody documentation provides that assurance and is a standard requirement for admissible results."
  },
  {
    question: "Who can collect samples for a chain-of-custody DNA test?",
    answer: "Samples must be collected by a qualified collector who verifies identity and follows the laboratory's chain-of-custody protocol. Collection is often done at an approved facility such as a DNA testing office, clinic, or lab draw site."
  },
  {
    question: "Can I do a chain-of-custody DNA test at home?",
    answer: "No. True chain-of-custody requires in-person identity verification and controlled collection. At-home kits do not meet this standard, so their results are not admissible in court or for immigration."
  }
];

export default function ChainOfCustodyDNATesting() {
  return (
    <GuideLayout
      title="What Is Chain of Custody DNA Testing?"
      slug="chain-of-custody-dna-testing"
      breadcrumbLabel="Chain of Custody DNA Testing"
      description="Chain of custody in DNA testing: what it is, why courts and USCIS require it, and how it keeps results legally admissible."
      heroSubline="How chain-of-custody protects the integrity of DNA samples and why it is required for court and immigration."
      serviceLink="/services/legal-paternity-testing"
      serviceLabel="Legal Paternity Testing"
      faqs={faqs}
      overview={
        <>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Chain of custody in DNA testing is the documented trail showing that samples were collected from the correct people, handled securely, and analyzed without mix-up or tampering. Courts and immigration agencies require it for results to be admissible.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            At Mile High DNA Testing, we follow chain-of-custody procedures for all legal and immigration tests. For how this fits with court admissibility, see <Link to="/guides/court-admissible-dna-testing" className="text-blue-600 underline">court admissible DNA testing</Link> and <Link to="/guides/dna-test-for-court" className="text-blue-600 underline">DNA testing for court cases</Link>. To <Link to="/appointments" className="text-blue-600 underline">schedule a legal test</Link>, visit our appointments page.
          </p>
        </>
      }
      whenUsed={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Chain-of-custody is used whenever results may be submitted to a court (paternity, custody, support) or to USCIS for immigration. It is not used for peace-of-mind or at-home tests, which are for personal knowledge only.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            If you might need results for legal or immigration purposes, the test must be set up as a legal test with chain-of-custody from the start. See <Link to="/guides/uscis-dna-testing" className="text-blue-600 underline">USCIS DNA testing requirements</Link> and <Link to="/guides/immigration-dna-testing-process" className="text-blue-600 underline">immigration DNA testing process</Link>.
          </p>
        </>
      }
      process={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            At collection, each participant shows government-issued ID. The collector records identities, collects samples (e.g., cheek swabs), seals them in tamper-evident packaging, and completes chain-of-custody paperwork. Samples are shipped to the laboratory with that documentation; the lab logs receipt and maintains custody through analysis and reporting.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Any break in the chain or failure to verify identity can compromise admissibility. For accreditation standards that support this process, read <Link to="/guides/aabb-labs-for-immigration" className="text-blue-600 underline">AABB accredited labs for immigration DNA tests</Link>.
          </p>
        </>
      }
      legal={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Legal DNA testing requires chain-of-custody; non-legal testing does not. Non-legal tests may use the same lab technology but without identity verification or documented handling, so results cannot be used in court or for immigration.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Converting a non-legal test to legal after the fact is not possible—you would need a new legal test. For more on when to choose legal testing, see <Link to="/guides/dna-test-for-child-custody" className="text-blue-600 underline">DNA testing for child custody</Link> and <Link to="/guides/dna-test-without-the-father" className="text-blue-600 underline">DNA test without the father</Link>.
          </p>
        </>
      }
      relatedGuides={[
        { title: "Court Admissible DNA Testing Explained", path: "/guides/court-admissible-dna-testing" },
        { title: "DNA Testing For Court Cases", path: "/guides/dna-test-for-court" }
      ]}
      ctaHeading="Schedule a Chain-of-Custody DNA Test"
      ctaSubline="Book a legal DNA test in Denver with full chain-of-custody documentation."
    />
  );
}
