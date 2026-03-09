import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "./GuideLayout";

const faqs = [
  {
    question: "What is the immigration DNA testing process?",
    answer: "Immigration DNA testing typically starts when USCIS or an embassy requests relationship verification. The petitioner and beneficiary (and sometimes other relatives) are tested at approved collection sites with identity verification and chain-of-custody. Samples are sent to an AABB-accredited lab; results are reported in a format acceptable to the agency or embassy."
  },
  {
    question: "Who orders immigration DNA testing?",
    answer: "USCIS or a U.S. embassy/consulate may request DNA testing to verify a claimed biological relationship. The requesting agency provides instructions; the applicant then coordinates testing through an approved facility and AABB-accredited laboratory."
  },
  {
    question: "How long does immigration DNA testing take?",
    answer: "Laboratory results are often ready within a few business days after the lab receives all samples. The total timeline can be longer due to scheduling collection here and abroad, shipping, and embassy or agency processing. See our guide on immigration DNA test timeline for more."
  },
  {
    question: "Where can I get immigration DNA testing in Denver?",
    answer: "Mile High DNA Testing in Denver coordinates immigration DNA testing that meets USCIS and embassy requirements, including AABB-accredited laboratory analysis and proper chain-of-custody."
  }
];

export default function ImmigrationDNATestingProcess() {
  return (
    <GuideLayout
      title="Immigration DNA Testing Process"
      slug="immigration-dna-testing-process"
      breadcrumbLabel="Immigration DNA Testing Process"
      description="How the immigration DNA testing process works: USCIS and embassy requirements, chain-of-custody, and AABB-accredited testing. Denver immigration DNA testing."
      heroSubline="Step-by-step: how immigration DNA testing is requested, collected, and reported for USCIS and embassies."
      serviceLink="/services/immigration-dna-testing"
      serviceLabel="Immigration DNA Testing"
      faqs={faqs}
      overview={
        <>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Immigration DNA testing is used to verify biological relationships when required by U.S. Citizenship and Immigration Services (USCIS) or a U.S. embassy or consulate. The process involves identity verification, chain-of-custody collection, and analysis by an AABB-accredited laboratory so results meet agency and embassy standards.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Mile High DNA Testing helps families in Denver and beyond complete immigration DNA testing. For agency requirements, see <Link to="/guides/uscis-dna-testing" className="text-blue-600 underline">USCIS DNA testing requirements</Link> and <Link to="/guides/aabb-labs-for-immigration" className="text-blue-600 underline">AABB accredited labs for immigration DNA tests</Link>. To <Link to="/appointments" className="text-blue-600 underline">schedule a test</Link>, visit our appointments page.
          </p>
        </>
      }
      whenUsed={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Immigration DNA testing is used when USCIS or an embassy needs to verify a claimed family relationship—for example, parent-child or sibling—and other evidence is insufficient. The agency or embassy will specify who must be tested and often provide a list of approved collection sites or laboratories.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For embassy-specific procedures, read <Link to="/guides/embassy-dna-testing" className="text-blue-600 underline">embassy DNA testing explained</Link>. For how long the process takes, see <Link to="/guides/immigration-dna-test-timeline" className="text-blue-600 underline">how long immigration DNA testing takes</Link>.
          </p>
        </>
      }
      process={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            After USCIS or the embassy requests DNA testing, the applicant receives instructions. Each participant goes to an approved collection site with government-issued ID. The collector verifies identity, takes samples (usually cheek swabs), and follows chain-of-custody. Samples are sent to an AABB-accredited lab; the lab issues a report in the format required by the agency or embassy.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            When one party is overseas, collection can be coordinated at an embassy or approved facility in that country. For more on requirements, see <Link to="/guides/uscis-dna-testing" className="text-blue-600 underline">USCIS DNA testing requirements</Link> and <Link to="/guides/chain-of-custody-dna-testing" className="text-blue-600 underline">chain of custody DNA testing</Link>.
          </p>
        </>
      }
      legal={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Immigration DNA testing is always performed as legal testing: identity verification, chain-of-custody, and AABB-accredited laboratory analysis are required. Results are not accepted by USCIS or embassies if these standards are not met. There is no &quot;peace-of-mind&quot; immigration test—only tests that meet agency requirements are used.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For court-admissible testing in general, see <Link to="/guides/court-admissible-dna-testing" className="text-blue-600 underline">court admissible DNA testing</Link>. For AABB accreditation details, read <Link to="/guides/aabb-labs-for-immigration" className="text-blue-600 underline">AABB accredited labs for immigration DNA tests</Link>.
          </p>
        </>
      }
      relatedGuides={[
        { title: "USCIS DNA Testing Requirements", path: "/guides/uscis-dna-testing" },
        { title: "How Long Immigration DNA Testing Takes", path: "/guides/immigration-dna-test-timeline" }
      ]}
      ctaHeading="Schedule Immigration DNA Testing"
      ctaSubline="Book immigration DNA testing in Denver that meets USCIS and embassy requirements."
    />
  );
}
