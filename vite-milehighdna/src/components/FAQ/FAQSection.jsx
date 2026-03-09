import React from 'react';
import { Helmet } from 'react-helmet-async';
import FAQItem from './FAQItem';

const FAQ_CATEGORIES = [
  {
    id: 'dna-basics',
    title: 'DNA Testing Basics',
    faqs: [
      {
        id: 'what-is-dna-test',
        question: 'What is a DNA test and how does it work?',
        answer: 'A DNA test analyzes genetic material—usually from a cheek swab or blood sample—to compare specific markers between individuals. Laboratories extract DNA, amplify key regions, and use statistical analysis to determine biological relationships such as paternity. Results typically show a probability (e.g., 99.99% probability of paternity) when there is a match.',
        guideLink: '/guides/how-dna-testing-works',
        guideLabel: 'Learn more →',
      },
      {
        id: 'how-long-results',
        question: 'How long do DNA test results take?',
        answer: 'Most DNA test results are available within 2–5 business days depending on the type of test and laboratory processing times. Postnatal paternity testing is often 2–3 business days; prenatal and relationship tests may take 7–10 business days once the lab receives samples.',
        guideLink: '/guides/how-long-does-dna-testing-take',
        guideLabel: 'Learn more →',
      },
      {
        id: 'dna-test-without-father',
        question: 'Can a DNA test be done without the father?',
        answer: 'Yes. When the alleged father is unavailable, testing can be done using his biological relatives—such as grandparents or siblings—through grandparent or avuncular testing. If the father is deceased, postmortem DNA testing using relatives or stored samples may be an option.',
        guideLink: '/guides/dna-test-without-the-father',
        guideLabel: 'Learn more →',
      },
      {
        id: 'child-age-dna-test',
        question: 'How old does a child need to be for a DNA test?',
        answer: 'A child can be tested at any age. Paternity testing using a cheek (buccal) swab can be performed on newborns, infants, and children. The collection is quick and painless. For very young infants, the collector may take the swab before a feeding so the mouth is clear.',
      },
      {
        id: 'dna-during-pregnancy',
        question: 'Can DNA testing be done during pregnancy?',
        answer: 'Yes. Non-invasive prenatal paternity testing (NIPP) can be performed as early as 7–8 weeks into pregnancy. It uses a blood draw from the mother and a cheek swab from the father. No procedure is performed on the fetus, so it is safe for the baby.',
        guideLink: '/guides/dna-test-while-pregnant',
        guideLabel: 'Learn more →',
      },
      {
        id: 'types-dna-tests',
        question: 'What types of DNA tests are available?',
        answer: 'Common types include paternity testing (legal and peace-of-mind), prenatal paternity testing, immigration DNA testing, siblingship testing, grandparent testing, avuncular (aunt/uncle) testing, and postmortem testing. Legal tests follow chain-of-custody for court or agency use; peace-of-mind tests are for personal knowledge only.',
      },
      {
        id: 'paternity-vs-relationship',
        question: 'What is the difference between paternity testing and other relationship tests?',
        answer: 'Paternity testing establishes whether a man is the biological father of a child. Other relationship tests—such as siblingship, grandparent, or avuncular—establish different family relationships. Each uses a different set of participants and statistical model. All can be performed as legal or peace-of-mind tests.',
      },
      {
        id: 'where-dna-test-denver',
        question: 'Where can I get a DNA test in Denver?',
        answer: 'Mile High DNA Testing is located in Denver, Colorado at 975 N Lincoln St STE 205C. We provide in-person paternity testing, prenatal DNA testing, immigration DNA testing, and other relationship tests. Appointments can be scheduled online or by phone. We also coordinate testing nationwide.',
      },
    ],
  },
  {
    id: 'legal-dna-testing',
    title: 'Legal DNA Testing',
    faqs: [
      {
        id: 'what-is-legal-dna-test',
        question: 'What is a legal DNA test?',
        answer: 'A legal DNA test is performed with identity verification, chain-of-custody procedures, and analysis by an AABB-accredited laboratory. The results are documented and certified so they can be submitted to courts, attorneys, or government agencies. Peace-of-mind tests do not include these steps and are not court-admissible.',
        guideLink: '/guides/court-admissible-dna-testing',
        guideLabel: 'Learn more →',
      },
      {
        id: 'dna-test-used-in-court',
        question: 'Can a DNA test be used in court?',
        answer: 'Yes, when the test is performed as a legal test with chain-of-custody and AABB-accredited laboratory analysis. Results can be submitted to family court for paternity, custody, support, or other cases. At-home or peace-of-mind test results are not admissible in court.',
        guideLink: '/guides/dna-test-for-court',
        guideLabel: 'Learn more →',
      },
      {
        id: 'court-admissible-dna',
        question: 'What makes a DNA test court admissible?',
        answer: 'Court-admissible DNA tests require verified identification of all participants, documented chain-of-custody from collection through the laboratory, and analysis by an AABB-accredited laboratory. The report must be in a certified format that the court accepts.',
        guideLink: '/guides/chain-of-custody-dna-testing',
        guideLabel: 'Learn more →',
      },
      {
        id: 'chain-of-custody',
        question: 'What is chain of custody in DNA testing?',
        answer: 'Chain of custody is the documented record of who handled the DNA samples, when, and under what conditions from collection through laboratory analysis. It ensures samples are not tampered with or mixed up. Courts and immigration agencies require it for results to be accepted.',
        guideLink: '/guides/chain-of-custody-dna-testing',
        guideLabel: 'Learn more →',
      },
      {
        id: 'why-courts-require-aabb',
        question: 'Why do courts require AABB accredited DNA testing?',
        answer: 'Courts require AABB-accredited laboratory results to ensure consistent scientific standards, validation, and documentation. AABB accreditation confirms that the laboratory meets strict requirements for relationship DNA testing. Results from non-AABB labs are typically not accepted as evidence.',
        guideLink: '/guides/aabb-labs-for-immigration',
        guideLabel: 'Learn more →',
      },
      {
        id: 'at-home-dna-court',
        question: 'Can an at-home DNA test be used for court?',
        answer: 'No. At-home or peace-of-mind DNA tests do not include identity verification or chain-of-custody, so their results are not admissible in court. If you might need results for a legal matter, you must have a legal DNA test performed with proper procedures from the start.',
      },
      {
        id: 'dna-child-support',
        question: 'Can DNA tests be used for child support cases?',
        answer: 'Yes. When paternity is in dispute, courts may require or accept DNA testing to establish the biological father. Legal paternity test results—performed with chain-of-custody and an AABB-accredited lab—can be submitted as evidence in child support proceedings.',
        guideLink: '/guides/dna-test-for-court',
        guideLabel: 'Learn more →',
      },
      {
        id: 'dna-custody-cases',
        question: 'Can DNA tests be used for custody cases?',
        answer: 'Yes. When parentage is relevant to custody or visitation, courts may accept legal DNA test results. The test must be performed with identity verification, chain-of-custody, and AABB-accredited laboratory analysis so the results meet court admissibility standards.',
        guideLink: '/guides/dna-test-for-child-custody',
        guideLabel: 'Learn more →',
      },
    ],
  },
  {
    id: 'immigration-dna-testing',
    title: 'Immigration DNA Testing',
    faqs: [
      {
        id: 'what-is-immigration-dna',
        question: 'What is immigration DNA testing?',
        answer: 'Immigration DNA testing is relationship DNA testing requested by USCIS or a U.S. embassy/consulate to verify a claimed family relationship (e.g., parent-child, siblings) when other evidence is insufficient. It must be performed with identity verification, chain-of-custody, and an AABB-accredited laboratory.',
        guideLink: '/guides/immigration-dna-testing-process',
        guideLabel: 'Learn more →',
      },
      {
        id: 'uscis-accept-dna',
        question: 'Does USCIS accept DNA tests?',
        answer: 'Yes. USCIS may request DNA testing to verify a biological relationship when additional evidence is needed. The test must be performed by an AABB-accredited laboratory with proper chain-of-custody and identity verification. Results are submitted in the format specified in your request letter.',
        guideLink: '/guides/uscis-dna-testing',
        guideLabel: 'Learn more →',
      },
      {
        id: 'dna-immigration-how',
        question: 'How does DNA testing work for immigration cases?',
        answer: 'After USCIS or the embassy requests testing, each participant goes to an approved collection site with ID. The collector verifies identity, takes samples (usually cheek swabs), and follows chain-of-custody. Samples are sent to an AABB-accredited lab; the lab issues a report that you or your attorney submit as directed.',
        guideLink: '/guides/immigration-dna-testing-process',
        guideLabel: 'Learn more →',
      },
      {
        id: 'immigration-dna-timeline',
        question: 'How long does immigration DNA testing take?',
        answer: 'Laboratory results are often ready within several business days after the lab receives all samples. Total time can be longer when participants are in different countries—scheduling, shipping, and embassy or USCIS processing all affect the timeline.',
        guideLink: '/guides/immigration-dna-test-timeline',
        guideLabel: 'Learn more →',
      },
      {
        id: 'immigration-relationships',
        question: 'What relationships qualify for immigration DNA testing?',
        answer: 'USCIS and embassies commonly request DNA testing to verify parent-child, full or half siblings, and other claimed family relationships. The request letter will specify who must be tested. The laboratory and collection process must meet AABB and agency requirements.',
      },
      {
        id: 'immigration-aabb-required',
        question: 'Do immigration DNA tests have to be AABB accredited?',
        answer: 'Yes. USCIS and U.S. embassies require relationship DNA testing to be performed by an AABB-accredited laboratory. Results from non-accredited labs are typically not accepted. Always confirm that the laboratory is AABB-accredited for relationship testing before scheduling.',
        guideLink: '/guides/aabb-labs-for-immigration',
        guideLabel: 'Learn more →',
      },
    ],
  },
  {
    id: 'dna-costs',
    title: 'DNA Testing Costs',
    faqs: [
      {
        id: 'how-much-dna-test',
        question: 'How much does a DNA test cost?',
        answer: 'Costs vary by test type and whether the test is legal or peace-of-mind. Standard paternity tests often range from a few hundred to over a thousand dollars. Legal tests cost more due to chain-of-custody and certification. Prenatal and immigration tests have different price ranges. Request a quote when scheduling.',
      },
      {
        id: 'legal-dna-test-cost',
        question: 'How much does a legal DNA test cost?',
        answer: 'Legal DNA tests typically cost more than peace-of-mind tests because they include identity verification, chain-of-custody documentation, and certified reporting. Exact pricing depends on the laboratory, test type, and location. Contact the testing facility for current legal paternity test pricing.',
        guideLink: '/guides/legal-dna-test-cost',
        guideLabel: 'Learn more →',
      },
      {
        id: 'prenatal-paternity-cost',
        question: 'How much does a prenatal paternity test cost?',
        answer: 'Non-invasive prenatal paternity tests (NIPP) typically range from about $1,500 to $1,800 or more, depending on the lab and whether the test is legal or peace-of-mind. Invasive options (CVS, amniocentesis) have different cost ranges. Ask for a detailed quote before booking.',
        guideLink: '/guides/prenatal-dna-test-cost-breakdown',
        guideLabel: 'Learn more →',
      },
      {
        id: 'why-legal-more-expensive',
        question: 'Why are legal DNA tests more expensive than at-home tests?',
        answer: 'Legal tests require in-person collection with government-issued ID verification, chain-of-custody paperwork, and analysis by an AABB-accredited laboratory. Certified reporting and documentation add to the cost. At-home tests skip these steps and are for personal use only, so they are not court-admissible.',
      },
      {
        id: 'insurance-cover-dna',
        question: 'Does insurance cover DNA testing?',
        answer: 'Most insurance plans do not cover paternity or relationship DNA testing for personal or legal use, as it is often considered elective. Some plans may cover medically indicated genetic testing. Check with your insurer for your specific plan. Payment is typically due at the time of service.',
      },
    ],
  },
  {
    id: 'appointments',
    title: 'Appointments and Process',
    faqs: [
      {
        id: 'appointment-required',
        question: 'Do I need an appointment for a DNA test?',
        answer: 'Yes. Legal and in-person DNA testing requires an appointment so that identity can be verified and chain-of-custody can be followed. Walk-ins may be available at some locations; contact the facility to confirm. At-home kit orders may not require an in-person appointment for collection.',
      },
      {
        id: 'appointment-length',
        question: 'How long does a DNA testing appointment take?',
        answer: 'A typical in-person collection appointment takes about 15–30 minutes per participant. This includes paperwork, ID verification (for legal tests), and the cheek swab collection. Multiple participants may be seen in the same visit depending on the facility.',
      },
      {
        id: 'what-happens-appointment',
        question: 'What happens during a DNA testing appointment?',
        answer: 'You will complete any required forms and present ID (for legal tests). A trained collector will rub a swab on the inside of your cheek to collect cells. The process is quick and painless. Samples are sealed and sent to the laboratory. The collector will explain next steps and when to expect results.',
        guideLink: '/guides/how-to-prepare-for-a-dna-test',
        guideLabel: 'Learn more →',
      },
      {
        id: 'id-required-legal',
        question: 'What identification is required for legal DNA testing?',
        answer: 'Each participant must present a government-issued photo ID (e.g., driver’s license or passport) so the collector can verify identity. Minors are typically identified through a parent or guardian and birth certificate or other documentation as required by the laboratory.',
      },
      {
        id: 'what-to-bring',
        question: 'What should I bring to a DNA testing appointment?',
        answer: 'Bring a government-issued photo ID for legal tests. For court-ordered or immigration tests, bring any paperwork provided by the court or agency. Avoid eating, drinking, or smoking for about 30 minutes before a cheek swab if the collector advises it. Infants can often be swabbed before a feeding.',
        guideLink: '/guides/how-to-prepare-for-a-dna-test',
        guideLabel: 'Learn more →',
      },
    ],
  },
  {
    id: 'dna-accuracy',
    title: 'Accuracy and Science',
    faqs: [
      {
        id: 'how-accurate-dna-tests',
        question: 'How accurate are DNA tests?',
        answer: 'Postnatal paternity tests routinely report 99.9% or higher probability of paternity when the alleged father is included, and exclusion when he is not. Non-invasive prenatal paternity tests offer 99.9% or higher accuracy. Results are produced by accredited laboratories using validated methods.',
        guideLink: '/guides/how-accurate-is-dna-testing',
        guideLabel: 'Learn more →',
      },
      {
        id: 'can-dna-test-wrong',
        question: 'Can a DNA test ever be wrong?',
        answer: 'Laboratory errors are rare when tests are performed by accredited labs with proper procedures. Errors are more likely from sample mix-up or contamination, which is why legal tests use strict chain-of-custody and identity verification. Following the correct process greatly reduces the risk of error.',
      },
      {
        id: 'dna-siblings-share',
        question: 'How much DNA do siblings share?',
        answer: 'Full siblings typically share about 50% of their DNA on average, though the exact amount varies. Half siblings share about 25%. Siblingship DNA testing compares genetic markers between two or more people to calculate the probability that they are full siblings, half siblings, or unrelated.',
      },
      {
        id: 'how-dna-collected',
        question: 'How is DNA collected for testing?',
        answer: 'Most relationship DNA tests use a buccal (cheek) swab. The collector rubs a swab on the inside of the cheek for a few seconds to collect cells. The process is painless. For prenatal paternity testing, the mother provides a blood sample and the father a cheek swab. Samples are sealed and sent to the laboratory.',
      },
    ],
  },
];

// Flatten all FAQs for schema (first 12 for JSON-LD)
const ALL_FAQS = FAQ_CATEGORIES.flatMap((cat) =>
  cat.faqs.map((f) => ({ question: f.question, answer: f.answer }))
);
const SCHEMA_FAQS = ALL_FAQS.slice(0, 12);

const FAQSection = () => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: SCHEMA_FAQS.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          })}
        </script>
      </Helmet>
      <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {FAQ_CATEGORIES.map((category) => (
              <div key={category.id}>
                <h2 id={category.id} className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 scroll-mt-32">
                  {category.title}
                </h2>
                <div className="space-y-6">
                  {category.faqs.map((faq) => (
                    <FAQItem
                      key={faq.id}
                      id={faq.id}
                      question={faq.question}
                      answer={faq.answer}
                      guideLink={faq.guideLink}
                      guideLabel={faq.guideLabel}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
