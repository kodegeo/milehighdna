import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "./GuideLayout";

const faqs = [
  {
    question: "Does USCIS require DNA testing?",
    answer: "USCIS may request DNA testing when additional evidence is needed to verify a claimed biological relationship (e.g., parent-child, siblings). The request will specify who must be tested and often which laboratories or collection procedures are acceptable."
  },
  {
    question: "What are USCIS DNA testing requirements?",
    answer: "USCIS typically requires that relationship DNA testing be performed by an AABB-accredited laboratory with proper chain-of-custody and identity verification. Results must be in a format that USCIS accepts. Follow the exact instructions in your request letter."
  },
  {
    question: "Can I use any lab for USCIS DNA testing?",
    answer: "No. USCIS requires testing by an AABB-accredited laboratory. The collection process must include identity verification and chain-of-custody. Using a non-accredited lab or skipping these steps can result in results not being accepted."
  },
  {
    question: "How do I schedule USCIS DNA testing in Denver?",
    answer: "Contact a facility that coordinates immigration DNA testing with AABB-accredited laboratories, such as Mile High DNA Testing in Denver. They can help you complete the process according to your USCIS or embassy instructions."
  }
];

export default function USCISDNATesting() {
  return (
    <GuideLayout
      title="USCIS DNA Testing Requirements"
      slug="uscis-dna-testing"
      breadcrumbLabel="USCIS DNA Testing"
      description="USCIS DNA testing requirements: AABB accreditation, chain-of-custody, and how to complete immigration DNA testing for USCIS. Denver immigration DNA testing."
      heroSubline="What USCIS requires for DNA testing when verifying family relationships for immigration."
      serviceLink="/services/immigration-dna-testing"
      serviceLabel="Immigration DNA Testing"
      faqs={faqs}
      overview={
        <>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            When U.S. Citizenship and Immigration Services (USCIS) requests DNA testing to verify a family relationship, the test must be performed by an AABB-accredited laboratory with identity verification and chain-of-custody procedures. Results are then submitted in the format specified in your request.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Mile High DNA Testing coordinates USCIS DNA testing in Denver. For the full process, see <Link to="/guides/immigration-dna-testing-process" className="text-blue-600 underline">immigration DNA testing process</Link> and <Link to="/guides/aabb-labs-for-immigration" className="text-blue-600 underline">AABB accredited labs for immigration DNA tests</Link>. To <Link to="/appointments" className="text-blue-600 underline">schedule a test</Link>, visit our appointments page.
          </p>
        </>
      }
      whenUsed={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            USCIS may request DNA testing when other evidence of a biological relationship is insufficient—for example, when birth certificates or other documents are missing, inconsistent, or questioned. The request letter will explain who must be tested (e.g., petitioner and beneficiary).
          </p>
          <p className="text-lg text-gray-600 mb-6">
            U.S. embassies and consulates may also require DNA testing for visa or immigration cases. See <Link to="/guides/embassy-dna-testing" className="text-blue-600 underline">embassy DNA testing explained</Link> and <Link to="/guides/immigration-dna-test-timeline" className="text-blue-600 underline">how long immigration DNA testing takes</Link>.
          </p>
        </>
      }
      process={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Follow the instructions in your USCIS or embassy request. Each participant goes to an approved collection site with government-issued ID. The collector verifies identity, collects samples (typically cheek swabs), and maintains chain-of-custody. Samples are sent to an AABB-accredited lab; the lab issues a report that you or your attorney submits as directed.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Do not use an at-home kit or a non-accredited lab—results may not be accepted. For chain-of-custody details, read <Link to="/guides/chain-of-custody-dna-testing" className="text-blue-600 underline">chain of custody DNA testing</Link>.
          </p>
        </>
      }
      legal={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            All USCIS and embassy DNA testing is legal testing: it requires verified ID, chain-of-custody, and AABB-accredited laboratory analysis. There is no non-legal option for immigration—only tests that meet these requirements will be accepted.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For general court-admissible testing, see <Link to="/guides/court-admissible-dna-testing" className="text-blue-600 underline">court admissible DNA testing</Link>. For why AABB matters, read <Link to="/guides/aabb-labs-for-immigration" className="text-blue-600 underline">AABB accredited labs for immigration DNA tests</Link>.
          </p>
        </>
      }
      relatedGuides={[
        { title: "Immigration DNA Testing Process", path: "/guides/immigration-dna-testing-process" },
        { title: "AABB Accredited Labs For Immigration DNA Tests", path: "/guides/aabb-labs-for-immigration" }
      ]}
      ctaHeading="Complete Your USCIS DNA Test"
      ctaSubline="Schedule immigration DNA testing in Denver that meets USCIS requirements."
    />
  );
}
