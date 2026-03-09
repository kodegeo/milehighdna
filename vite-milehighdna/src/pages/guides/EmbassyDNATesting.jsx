import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "./GuideLayout";

const faqs = [
  {
    question: "What is embassy DNA testing?",
    answer: "Embassy DNA testing is relationship DNA testing requested by a U.S. embassy or consulate to verify a claimed family relationship for visa or immigration purposes. It must be performed with identity verification, chain-of-custody, and an AABB-accredited laboratory—similar to USCIS requirements."
  },
  {
    question: "Who needs to be tested for embassy DNA testing?",
    answer: "The embassy or consulate will specify who must be tested—typically the petitioner and beneficiary (e.g., parent and child, or siblings). Follow the instructions in your request letter exactly. Participants may be in different countries; collection can be coordinated at approved sites in each location."
  },
  {
    question: "How long does embassy DNA testing take?",
    answer: "Lab results are often ready within several business days after the lab receives all samples. Total time can be longer due to scheduling collections in different countries, shipping, and embassy processing. See our guide on immigration DNA test timeline for more."
  },
  {
    question: "Can I get embassy DNA testing in Denver?",
    answer: "Yes. If you or a family member are in the Denver area, you can complete your part of the test at a facility like Mile High DNA Testing that coordinates with AABB-accredited labs and follows procedures acceptable to U.S. embassies and consulates."
  }
];

export default function EmbassyDNATesting() {
  return (
    <GuideLayout
      title="Embassy DNA Testing Explained"
      slug="embassy-dna-testing"
      breadcrumbLabel="Embassy DNA Testing"
      description="Embassy DNA testing: what U.S. embassies and consulates require for relationship verification. AABB accreditation and chain-of-custody. Denver immigration DNA testing."
      heroSubline="What U.S. embassies and consulates require when they request DNA testing to verify family relationships."
      serviceLink="/services/immigration-dna-testing"
      serviceLabel="Immigration DNA Testing"
      faqs={faqs}
      overview={
        <>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Embassy DNA testing is relationship DNA testing requested by a U.S. embassy or consulate to verify a biological relationship (e.g., parent-child) when other evidence is insufficient. The test must be performed with identity verification, chain-of-custody, and an AABB-accredited laboratory so results are accepted by the embassy.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Mile High DNA Testing helps families complete embassy DNA testing when the U.S. side is in Denver or the region. For USCIS requirements (which are similar), see <Link to="/guides/uscis-dna-testing" className="text-blue-600 underline">USCIS DNA testing requirements</Link> and <Link to="/guides/immigration-dna-testing-process" className="text-blue-600 underline">immigration DNA testing process</Link>. To <Link to="/appointments" className="text-blue-600 underline">schedule a test</Link>, visit our appointments page.
          </p>
        </>
      }
      whenUsed={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Embassies and consulates request DNA testing when they need to verify a claimed family relationship for a visa or immigration case and documents alone are not sufficient. The request will specify who must be tested and often which laboratory or collection procedures to use.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For the full immigration process, read <Link to="/guides/immigration-dna-testing-process" className="text-blue-600 underline">immigration DNA testing process</Link>. For lab requirements, see <Link to="/guides/aabb-labs-for-immigration" className="text-blue-600 underline">AABB accredited labs for immigration DNA tests</Link>.
          </p>
        </>
      }
      process={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Follow the instructions in your embassy or consulate letter. Each participant goes to an approved collection site with ID. The collector verifies identity, takes samples (usually cheek swabs), and maintains chain-of-custody. When participants are in different countries, each is collected at an approved site; samples are sent to the same AABB-accredited lab. The lab issues a report in the format the embassy requires.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For timelines, see <Link to="/guides/immigration-dna-test-timeline" className="text-blue-600 underline">how long immigration DNA testing takes</Link>. For chain-of-custody, read <Link to="/guides/chain-of-custody-dna-testing" className="text-blue-600 underline">chain of custody DNA testing</Link>.
          </p>
        </>
      }
      legal={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            All embassy DNA testing is legal testing: identity verification, chain-of-custody, and AABB-accredited laboratory analysis are required. Results from at-home kits or non-accredited labs are not accepted. Use only a facility and laboratory that meet embassy and AABB standards.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For court-admissible testing in the U.S., see <Link to="/guides/court-admissible-dna-testing" className="text-blue-600 underline">court admissible DNA testing</Link>. For USCIS-specific steps, read <Link to="/guides/uscis-dna-testing" className="text-blue-600 underline">USCIS DNA testing requirements</Link>.
          </p>
        </>
      }
      relatedGuides={[
        { title: "USCIS DNA Testing Requirements", path: "/guides/uscis-dna-testing" },
        { title: "Immigration DNA Testing Process", path: "/guides/immigration-dna-testing-process" }
      ]}
      ctaHeading="Complete Your Embassy DNA Test"
      ctaSubline="Schedule immigration DNA testing in Denver that meets embassy requirements."
    />
  );
}
