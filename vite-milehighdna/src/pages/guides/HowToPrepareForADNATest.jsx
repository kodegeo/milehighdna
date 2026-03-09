import React from "react";
import { Link } from "react-router-dom";
import GuideLayout from "./GuideLayout";

const faqs = [
  {
    question: "Can I eat or drink before a DNA test?",
    answer: "For cheek swab collection, you can eat and drink normally. Some collectors ask that you avoid eating, drinking, or smoking for about 30 minutes before the swab to reduce food particles in the mouth. Follow the instructions given when you schedule."
  },
  {
    question: "Do I need to bring ID to a DNA test?",
    answer: "For legal or court-admissible DNA tests, you must bring a government-issued photo ID so your identity can be verified. For peace-of-mind tests, ID may not be required; check with the collection site."
  },
  {
    question: "Should the child avoid eating before a paternity test?",
    answer: "For infant paternity tests, it can help to swab before a feeding so the mouth is relatively clear. For older children, avoiding food or drink for a short time before the swab (as advised by the collector) is often recommended."
  },
  {
    question: "What documents do I need for a legal DNA test?",
    answer: "You typically need a government-issued photo ID (e.g., driver's license or passport). If the test is court-ordered or for immigration, bring any paperwork provided by the court or agency. The collection site will confirm what is required."
  }
];

export default function HowToPrepareForADNATest() {
  return (
    <GuideLayout
      title="How To Prepare For A DNA Test"
      slug="how-to-prepare-for-a-dna-test"
      breadcrumbLabel="How To Prepare For A DNA Test"
      description="Practical steps to prepare for a DNA test: what to bring, eating and drinking guidelines, and what to expect at your appointment in Denver."
      heroSubline="What to bring, what to avoid, and what to expect so your DNA collection goes smoothly."
      serviceLink="/appointments"
      serviceLabel="Schedule a Test"
      faqs={faqs}
      overview={
        <>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Preparing for a DNA test is straightforward. For cheek swab tests, you may be asked to avoid eating, drinking, or smoking for a short time before the appointment. For legal tests, bring a government-issued photo ID so your identity can be verified.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            At Mile High DNA Testing in Denver, we will confirm preparation instructions when you book. For more on the process, see <Link to="/guides/how-dna-testing-works" className="text-blue-600 underline">how DNA testing works</Link> and <Link to="/guides/how-long-does-dna-testing-take" className="text-blue-600 underline">how long DNA test results take</Link>. To <Link to="/appointments" className="text-blue-600 underline">schedule an appointment</Link>, visit our appointments page.
          </p>
        </>
      }
      whenUsed={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Preparation is especially important for legal and immigration tests, where identity verification and chain-of-custody are required. Having the right ID and any court or agency paperwork helps the appointment run smoothly and keeps results admissible.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For prenatal testing, the mother will have a blood draw and the father a cheek swab; see <Link to="/guides/dna-test-while-pregnant" className="text-blue-600 underline">DNA testing while pregnant</Link> for more. For immigration, see <Link to="/guides/immigration-dna-testing-process" className="text-blue-600 underline">immigration DNA testing process</Link>.
          </p>
        </>
      }
      process={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            When you arrive, you will complete any required paperwork and present ID if it is a legal test. The collector will rub a swab on the inside of your cheek (and the child's, for paternity) to collect cells. The process is quick and painless. Samples are sealed and sent to the laboratory.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            For at-home kits, follow the kit instructions for swabbing and mailing. At-home results are not legal; for court or immigration you need an in-person legal test. See <Link to="/guides/court-admissible-dna-testing" className="text-blue-600 underline">court admissible DNA testing</Link> for requirements.
          </p>
        </>
      }
      legal={
        <>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Legal DNA tests require verified identification and chain-of-custody. Each participant must be identified with a government-issued ID. Minors are typically identified through a parent or guardian and birth certificate or other documentation as required.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Non-legal tests do not require ID verification and are for personal knowledge only. If you might need results for court or immigration later, choose a legal test from the start. For more, read <Link to="/guides/chain-of-custody-dna-testing" className="text-blue-600 underline">chain of custody DNA testing</Link>.
          </p>
        </>
      }
      relatedGuides={[
        { title: "How DNA Testing Works", path: "/guides/how-dna-testing-works" },
        { title: "Court Admissible DNA Testing Explained", path: "/guides/court-admissible-dna-testing" }
      ]}
      ctaHeading="Schedule Your DNA Test"
      ctaSubline="Book an appointment in Denver and we'll confirm everything you need to bring."
    />
  );
}
