import React from 'react';

const faqs = [
  {
    question: "Where can I get a prenatal DNA test in Denver?",
    answer:
      "You can schedule your appointment at our Denver office (975 N Lincoln St, Suite 205C) or request mobile testing in the Denver metro area.",
  },
  {
    question: "Do I need to be in Denver to take this test?",
    answer:
      "No. We can coordinate testing nationwide (except New York), making it convenient for families outside of Colorado.",
  },
  {
    question: "What if the mother and alleged father live in different states?",
    answer:
      "We arrange separate-location testing, so both parties can collect samples locally. All samples are securely tracked and analyzed by our AABB-accredited lab.",
  },
  {
    question: "Do you offer mobile testing?",
    answer:
      "Yes. Mobile testing is available in the Denver metro area for your convenience.",
  },
  {
    question: "Can more than one alleged father be tested?",
    answer:
      "Yes. Multiple alleged fathers can be tested. Ask us about this option when scheduling your appointment.",
  },
  {
    question: "How much does the test cost?",
    answer:
      "Our Peace of Mind test is $1,599, while the Legal (court-admissible) test is $1,799. Additional service options may include a fee. Pricing is always transparent with no hidden charges.",
  },
  {
    question: "Is the test safe for my baby?",
    answer:
      "Yes. The test only requires a blood draw from the mother and a cheek swab from the alleged father. There is no risk to the pregnancy.",
  },
  {
    question: "How early can the test be done?",
    answer:
      "Our non-invasive prenatal DNA test can be performed as early as 7 weeks into pregnancy.",
  },
  {
    question: "How long does it take to get results?",
    answer:
      "Results are typically available in 7–10 business days. Expedited options may be available upon request.",
  },
  {
    question: "Can results be used in court?",
    answer:
      "Yes. If you select the Legal Prenatal Test ($1,799), your results include notarized documentation and a verified chain of custody, making them admissible in court.",
  },
  {
    question: "Where are you located?",
    answer:
      "📍 975 N Lincoln St, Suite 205C, Denver, CO 80203. We proudly serve families across Denver, Aurora, Lakewood, and the surrounding Colorado communities.",
  },
];

const PrenatalFAQ = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Prenatal DNA Testing FAQs
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600 whitespace-pre-line">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrenatalFAQ;
