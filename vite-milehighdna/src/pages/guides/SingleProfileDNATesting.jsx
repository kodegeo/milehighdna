import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "./GuideLayout";

const faqs = [
  {
    question: "What is single profile DNA testing?",
    answer: "Single profile DNA testing creates a laboratory-issued DNA profile for one person without comparing them to another individual. The profile can be stored and used later for a comparison test (e.g., paternity or relationship testing) when the second party becomes available."
  },
  {
    question: "When would I need a single profile DNA test?",
    answer: "Single profile testing is useful when the other participant is temporarily unavailable (e.g., overseas, unwilling, or in the military), when you want to preserve DNA for future legal or personal use, or when you may need to compare that person's DNA to someone else later."
  },
  {
    question: "Can a single profile DNA test be used in court later?",
    answer: "Yes, if the single profile was created under legal chain-of-custody procedures (identity verification, certified collection, AABB-accredited laboratory). When the second party is tested later, the lab can perform a comparison using the stored profile and issue a legal report."
  },
  {
    question: "How long is a single profile DNA result valid?",
    answer: "The DNA profile itself does not expire. As long as the profile was created and stored according to the laboratory's legal and quality standards, it can be used for a future comparison test when the other participant is tested. Confirm with the lab how long they retain profiles."
  }
];

export default function SingleProfileDNATesting() {
  return (
    <GuideLayout
      title="Single Profile DNA Testing Guide"
      slug="single-profile-dna-testing"
      breadcrumbLabel="Single Profile DNA Testing"
      description="Single profile DNA testing: document one person's DNA now for future comparison. Legal and peace-of-mind options. Denver single profile DNA testing."
      heroSubline="Secure one person's DNA profile now—compare later when the other party is available."
      serviceLink="/services/single-dna-profile"
      serviceLabel="Single Profile DNA Testing"
      faqs={faqs}
      overview={
        <>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Single profile DNA testing creates a laboratory-issued DNA profile for one individual. No comparison is done at the time of testing; the profile is stored so that when another person is tested later, the laboratory can perform a relationship test (e.g., paternity) using the preserved profile. It is useful when the second participant is unavailable now but may be available later.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Mile High DNA Testing offers single profile DNA testing in Denver. For when the other party is missing or deceased, see <Link to="/guides/dna-test-without-the-father" className="text-blue-600 underline">can you do a DNA test without the father</Link> and <Link to="/guides/dna-testing-after-death" className="text-blue-600 underline">DNA testing after death</Link>. To <Link to="/appointments" className="text-blue-600 underline">schedule a test</Link>, visit our appointments page.
          </p>
        </>
      }
      whenUsed={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Single profile testing is used when one person wants to document their DNA now for a future paternity or relationship test—for example, when the other party is overseas, in the military, or temporarily unwilling. It can also be used to preserve DNA before circumstances change (e.g., health or availability).
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For kinship testing when the parent is unavailable, read <Link to="/guides/grandparent-dna-testing-explained" className="text-blue-600 underline">grandparent DNA testing</Link> and <Link to="/guides/siblingship-dna-testing-explained" className="text-blue-600 underline">siblingship DNA testing</Link>.
          </p>
        </>
      }
      process={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            The participant provides a sample (usually a cheek swab). For legal single profile testing, identity is verified and chain-of-custody is followed; the laboratory creates and stores the profile. When the second party is ready, they are tested and the lab performs the comparison, issuing a full relationship report (e.g., paternity). Peace-of-mind single profiles do not include legal documentation and cannot be used for court or immigration later.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For the general process, see <Link to="/guides/how-dna-testing-works" className="text-blue-600 underline">how DNA testing works</Link>. For legal and chain-of-custody, read <Link to="/guides/chain-of-custody-dna-testing" className="text-blue-600 underline">chain of custody DNA testing</Link>.
          </p>
        </>
      }
      legal={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Single profile tests can be legal (with identity verification, chain-of-custody, and AABB-accredited laboratory) or peace-of-mind (for personal use only). If you might need a future comparison for court or immigration, the single profile must be created as a legal test from the start—peace-of-mind profiles cannot be converted to legal later.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For court and immigration requirements, see <Link to="/guides/court-admissible-dna-testing" className="text-blue-600 underline">court admissible DNA testing</Link> and <Link to="/guides/uscis-dna-testing" className="text-blue-600 underline">USCIS DNA testing requirements</Link>.
          </p>
        </>
      }
      relatedGuides={[
        { title: "Can You Do A DNA Test Without The Father?", path: "/guides/dna-test-without-the-father" },
        { title: "DNA Testing After Death", path: "/guides/dna-testing-after-death" }
      ]}
      ctaHeading="Schedule Single Profile DNA Testing"
      ctaSubline="Preserve a DNA profile now for future comparison—book in Denver."
    />
  );
}
