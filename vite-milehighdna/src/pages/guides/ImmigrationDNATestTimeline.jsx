import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "./GuideLayout";

const faqs = [
  {
    question: "How long does immigration DNA testing take?",
    answer: "Laboratory analysis typically takes several business days after the lab receives all samples. The total time from request to results can be longer when participants are in different countries—scheduling collections, shipping, and embassy or USCIS processing all add to the timeline."
  },
  {
    question: "What affects how long immigration DNA testing takes?",
    answer: "Factors include: how quickly participants can schedule collection, whether they are in the same city or different countries, shipping time to the lab, lab processing time, and how results are submitted to USCIS or the embassy. Follow your request letter for deadlines."
  },
  {
    question: "Can I speed up immigration DNA testing?",
    answer: "Scheduling collection as soon as possible after receiving the request helps. Some labs offer expedited processing for an additional fee. When one party is overseas, coordinating collection dates and shipping in parallel can reduce total time. Ask your testing facility about options."
  },
  {
    question: "When does the clock start for immigration DNA test turnaround?",
    answer: "Lab turnaround is usually counted from when the laboratory receives all required samples and paperwork. The time before that—scheduling, collection, shipping—varies by location and logistics. Plan for the full process when meeting embassy or USCIS deadlines."
  }
];

export default function ImmigrationDNATestTimeline() {
  return (
    <GuideLayout
      title="How Long Immigration DNA Testing Takes"
      slug="immigration-dna-test-timeline"
      breadcrumbLabel="Immigration DNA Test Timeline"
      description="How long immigration DNA testing takes: lab turnaround, international collection, and what affects the timeline. Denver immigration DNA testing."
      heroSubline="What to expect from request to results—and how to plan for USCIS and embassy deadlines."
      serviceLink="/services/immigration-dna-testing"
      serviceLabel="Immigration DNA Testing"
      faqs={faqs}
      overview={
        <>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            How long immigration DNA testing takes depends on scheduling collection (especially when participants are in different countries), shipping samples to the laboratory, lab processing time, and any embassy or USCIS processing. Laboratory results are often ready within several business days after the lab receives all samples.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Mile High DNA Testing can give you a realistic timeline when you schedule. For the full process, see <Link to="/guides/immigration-dna-testing-process" className="text-blue-600 underline">immigration DNA testing process</Link> and <Link to="/guides/uscis-dna-testing" className="text-blue-600 underline">USCIS DNA testing requirements</Link>. To <Link to="/appointments" className="text-blue-600 underline">schedule a test</Link>, visit our appointments page.
          </p>
        </>
      }
      whenUsed={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Timeline matters when USCIS or the embassy has given you a deadline to submit DNA results. Planning ahead for collection here and abroad, shipping, and lab processing helps you meet that deadline. Do not wait until the last minute to schedule.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For embassy-specific procedures, read <Link to="/guides/embassy-dna-testing" className="text-blue-600 underline">embassy DNA testing explained</Link>. For lab requirements, see <Link to="/guides/aabb-labs-for-immigration" className="text-blue-600 underline">AABB accredited labs for immigration DNA tests</Link>.
          </p>
        </>
      }
      process={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            After you receive the request, schedule collection for all participants as soon as possible. Each person is collected at an approved site with ID and chain-of-custody. Samples are sent to the AABB-accredited lab (from the U.S. and from overseas if applicable). The lab processes and issues the report; you or your attorney submit it as directed. Lab processing is usually a matter of business days; the rest depends on logistics.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For comparison with other test types, see <Link to="/guides/how-long-does-dna-testing-take" className="text-blue-600 underline">how long DNA test results take</Link>. For the full immigration process, read <Link to="/guides/immigration-dna-testing-process" className="text-blue-600 underline">immigration DNA testing process</Link>.
          </p>
        </>
      }
      legal={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Immigration DNA testing is always performed as legal testing with AABB-accredited labs and chain-of-custody. The same standards that ensure admissibility also affect how the process is coordinated—using approved collectors and labs keeps the timeline predictable and results acceptable.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For court-admissible testing in general, see <Link to="/guides/court-admissible-dna-testing" className="text-blue-600 underline">court admissible DNA testing</Link> and <Link to="/guides/chain-of-custody-dna-testing" className="text-blue-600 underline">chain of custody DNA testing</Link>.
          </p>
        </>
      }
      relatedGuides={[
        { title: "Immigration DNA Testing Process", path: "/guides/immigration-dna-testing-process" },
        { title: "How Long Do DNA Test Results Take?", path: "/guides/how-long-does-dna-testing-take" }
      ]}
      ctaHeading="Start Your Immigration DNA Test"
      ctaSubline="Schedule immigration DNA testing in Denver and get a clear timeline for your case."
    />
  );
}
