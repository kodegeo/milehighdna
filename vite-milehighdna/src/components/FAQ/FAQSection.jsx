import React from "react";

const faqData = [
  {
    category: "DNA Testing Basics",
    id: "dna-basics",
    questions: [
      {
        q: "What accreditations does your DNA laboratory hold?",
        a: "All DNA testing is performed by a laboratory accredited by AABB, CLIA, and CAP. AABB accreditation is the required standard for court-admissible relationship DNA testing in the United States."
      },
      {
        q: "How accurate is DNA testing?",
        a: "Postnatal paternity testing provides a 99.999% probability of paternity when the alleged father is included. Non-invasive prenatal paternity testing is approximately 99.9% accurate."
      },
      {
        q: "Do I need a doctor’s order or court order to begin DNA testing?",
        a: "No. Most DNA testing can be initiated voluntarily without a doctor's order or court order. A court order is only required when specifically mandated by a judge."
      },
      {
        q: "How long does DNA testing take?",
        a: "Postnatal paternity, maternity, or twin zygosity tests typically take 2–3 business days after lab receipt. Prenatal paternity and other relationship testing usually take 7–10 business days."
      },
      {
        q: "Is DNA testing painful?",
        a: "No. Most DNA tests require a simple cheek swab. Prenatal testing requires a standard maternal blood draw."
      }
    ]
  },

  {
    category: "Legal DNA Testing",
    id: "legal-dna-testing",
    questions: [
      {
        q: "What is the difference between legal and non-legal DNA testing?",
        a: "Legal DNA testing follows strict chain-of-custody procedures and is admissible in court. Non-legal testing is for personal knowledge only and does not include court documentation."
      },
      {
        q: "Can DNA testing be performed without the mother?",
        a: "Yes. In most paternity cases the mother is not required, although her participation can strengthen the statistical analysis."
      },
      {
        q: "Can DNA results be sent directly to an attorney or government agency?",
        a: "Yes. With proper written authorization, certified results can be forwarded directly to attorneys, courts, or requesting agencies."
      },
      {
        q: "Why does AABB accreditation matter for DNA testing?",
        a: "AABB accreditation confirms that a laboratory meets the highest standards for relationship DNA testing validation, documentation, and statistical analysis. It is required for court-admissible DNA testing in the United States."
      }
    ]
  },

  {
    category: "Appointments and Process",
    id: "appointments",
    questions: [
      {
        q: "Do you offer mobile DNA collection services?",
        a: "Yes. Mobile DNA collection is available for an additional fee and can be scheduled for homes, hospitals, or other private locations."
      },
      {
        q: "Can multiple people be included in the same DNA test?",
        a: "Yes. Additional alleged fathers, children, or relatives may be included when appropriate to strengthen statistical analysis."
      },
      {
        q: "Do food, alcohol, or medications affect DNA results?",
        a: "No. DNA profiles are not altered by food, alcohol, tobacco, or most medications."
      },
      {
        q: "What happens if a sample cannot be analyzed?",
        a: "If sufficient DNA cannot be recovered, additional samples may be required. Professional collection helps minimize this risk."
      }
    ]
  },

  {
    category: "Accuracy and Science",
    id: "dna-accuracy",
    questions: [
      {
        q: "Is DNA testing confidential?",
        a: "Yes. DNA test results are kept 100% confidential and are only released to authorized recipients."
      },
      {
        q: "Can I submit an alternative sample for DNA testing?",
        a: "In some non-legal cases, alternative samples such as personal items may be analyzed when cheek swabs are unavailable."
      }
    ]
  },

  {
    category: "Services and Coverage",
    id: "services",
    questions: [
      {
        q: "What types of DNA relationship testing do you offer?",
        a: "We provide paternity testing, prenatal paternity testing, siblingship testing, grandparentage testing, avuncular testing, twin zygosity testing, immigration DNA testing, and more."
      },
      {
        q: "Do you provide DNA testing nationwide?",
        a: "Yes. We coordinate DNA testing nationwide through approved collection sites that follow proper chain-of-custody procedures."
      },
      {
        q: "Do you offer international DNA testing?",
        a: "Yes. International DNA collections may be arranged depending on the country and type of test required."
      },
      {
        q: "Where is your office located?",
        a: "Our office is located at 975 N Lincoln St STE 205C, Denver, CO 80203, near Denver courts, Denver Health, and Denver County Vital Records."
      }
    ]
  }
];

const FAQSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto space-y-12">

        {faqData.map((section) => (
          <div key={section.id} id={section.id}>
            <h2 className="text-2xl font-bold text-blue-700 mb-6">
              {section.category}
            </h2>

            <div className="space-y-6">
              {section.questions.map((faq, index) => (
                <div key={index} className="border-b pb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-gray-700">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default FAQSection;