import React from "react";

/** Renders outline-aligned FAQ answers: paragraphs and bullet lists */
function AnswerBody({ answer }) {
  if (typeof answer === "string") {
    return <p className="text-gray-700 leading-relaxed">{answer}</p>;
  }

  return (
    <div className="text-gray-700 leading-relaxed space-y-4">
      {answer.map((block, i) => {
        if (block.type === "p") {
          return <p key={i}>{block.text}</p>;
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="list-disc list-outside ml-5 space-y-2">
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }
        return null;
      })}
    </div>
  );
}

const faqData = [
  {
    category: "DNA Testing Basics",
    id: "dna-basics",
    questions: [
      {
        q: "What accreditations does your DNA laboratory hold?",
        a: [
          {
            type: "p",
            text: "All DNA testing is performed by a laboratory accredited by:",
          },
          {
            type: "ul",
            items: [
              "AABB (American Association of Blood Banks)",
              "CLIA (Clinical Laboratory Improvement Amendments)",
              "CAP (College of American Pathologists)",
            ],
          },
          {
            type: "p",
            text: "AABB accreditation is the required standard for court-admissible relationship DNA testing in the United States. This accreditation confirms that the laboratory meets strict standards for validation, documentation, and scientific reliability.",
          },
        ],
      },
      {
        q: "How accurate is DNA testing?",
        a: [
          {
            type: "p",
            text: "Postnatal paternity testing provides a 99.999% probability of paternity when the alleged father is included.",
          },
          {
            type: "p",
            text: "Non-invasive prenatal paternity testing is 99.9% accurate.",
          },
          {
            type: "p",
            text: "All results are based on validated laboratory analysis conducted under established scientific standards.",
          },
        ],
      },
      {
        q: "What is the difference between legal and non-legal DNA testing?",
        a: [
          {
            type: "p",
            text: "Legal DNA testing follows documented chain-of-custody procedures and is admissible in court.",
          },
          {
            type: "p",
            text: "Non-legal DNA testing is for personal knowledge only and does not include court documentation.",
          },
          {
            type: "p",
            text: "The laboratory analysis and scientific accuracy are the same for both.",
          },
        ],
      },
      {
        q: "Do I need a doctor’s order or court order to begin DNA testing?",
        a: [
          {
            type: "p",
            text: "No. Most DNA testing can be initiated voluntarily without a doctor’s order or court order.",
          },
          {
            type: "p",
            text: "A court order is only required when specifically mandated by a judge.",
          },
        ],
      },
      {
        q: "How long does DNA testing take?",
        a: [
          { type: "p", text: "Standard laboratory processing times:" },
          {
            type: "ul",
            items: [
              "Postnatal paternity, maternity, or Twin Zygosity: 2–3 business days after laboratory receipt",
              "Prenatal paternity: 7–10 business days after laboratory receipt",
              "Other relationship testing: 7–10 business days",
              "Alternative or Discreet DNA Samples (such as a toothbrush, fingernails, hair): Results in 5–7 business days after laboratory receipt",
            ],
          },
          {
            type: "p",
            text: "Need results faster? Rush Processing is available for an additional fee. Please contact us or call 720-900-9342 to request expedited testing options.",
          },
        ],
      },
      {
        q: "Is DNA testing painful?",
        a: [
          { type: "p", text: "No. Most DNA tests require a simple cheek swab." },
          { type: "p", text: "Prenatal testing requires a standard maternal blood draw." },
        ],
      },
      {
        q: "Do food, alcohol, or medications affect DNA results?",
        a: "No. DNA profiles are not altered by food, alcohol, tobacco, or most medications.",
      },
    ],
  },

  {
    category: "Legal DNA Testing",
    id: "legal-dna-testing",
    questions: [
      {
        q: "Can DNA testing be performed without the mother?",
        a: [
          {
            type: "p",
            text: "In most paternity cases, the mother is not required.",
          },
          {
            type: "p",
            text: "However, her participation may strengthen the statistical analysis and overall results.",
          },
        ],
      },
      {
        q: "Can DNA results be sent directly to an attorney or government agency?",
        a: "Yes. With proper written authorization, certified results can be forwarded directly to attorneys, courts, or requesting agencies.",
      },
      {
        q: "Why does AABB accreditation matter for DNA testing?",
        a: [
          {
            type: "p",
            text: "AABB accreditation confirms that a laboratory meets the highest standards for relationship DNA testing validation, documentation, and statistical analysis.",
          },
          {
            type: "p",
            text: "It is the accreditation required for court-admissible paternity testing in the United States.",
          },
          {
            type: "p",
            text: "In immigration cases, U.S. Citizenship and Immigration Services (USCIS) and U.S. Embassies require DNA testing to be performed by an AABB-accredited laboratory.",
          },
          {
            type: "p",
            text: "Selecting an AABB-accredited laboratory ensures that results meet recognized legal and federal standards.",
          },
        ],
      },
    ],
  },

  {
    category: "Confidentiality & Alternative Samples",
    id: "privacy-samples",
    questions: [
      {
        q: "Is DNA testing confidential?",
        a: [
          { type: "p", text: "Yes. Your DNA results are kept 100% confidential at all times." },
          {
            type: "p",
            text: "We only release results to authorized recipients, ensuring your privacy is fully protected.",
          },
          {
            type: "p",
            text: "Unlike many other DNA testing companies, Mile High DNA Testing does not share, sell, or distribute your personal information or DNA data under any circumstances. Your information is used solely for the specific test you order and is processed securely.",
          },
        ],
      },
      {
        q: "Can I submit an alternative sample for DNA testing?",
        a: [
          {
            type: "p",
            text: "In certain non-legal cases, alternative samples may be submitted when a direct cheek swab is not available.",
          },
          { type: "p", text: "Common situations include:" },
          {
            type: "ul",
            items: [
              "An adult who is unavailable for in-person collection",
              "A participant who declines direct testing",
              "Historical or personal clarity cases",
              "Situations involving stored personal items",
            ],
          },
          {
            type: "p",
            text: "Clients may contact our office for general guidance before submitting an alternative sample. Final viability is determined only after laboratory analysis.",
          },
        ],
      },
      {
        q: "What happens if a sample cannot be analyzed?",
        a: [
          {
            type: "p",
            text: "If sufficient DNA cannot be recovered, additional samples would require a new test.",
          },
          {
            type: "p",
            text: "All in-office buccal (mouth swab) DNA collections are performed by certified DNA collectors. Professional collection reduces the risk of contamination, improper handling, and insufficient sample submission, which helps protect the integrity of laboratory analysis.",
          },
        ],
      },
    ],
  },

  {
    category: "Mobile Collection & Scheduling",
    id: "appointments",
    questions: [
      {
        q: "Do you offer mobile DNA collection services?",
        a: [
          { type: "p", text: "Yes. Mobile DNA collection services are available for an additional fee." },
          { type: "p", text: "Mobile collections are commonly used for:" },
          {
            type: "ul",
            items: [
              "Newborn hospital collections",
              "Private home collections",
              "Individuals with mobility limitations",
              "Discreet scheduling needs",
            ],
          },
          {
            type: "p",
            text: "Availability is based on location and scheduling requirements.",
          },
        ],
      },
      {
        q: "Can multiple people be included in the same DNA test?",
        a: [
          {
            type: "p",
            text: "Yes. Additional alleged fathers, children, or family members may be included when appropriate.",
          },
          {
            type: "p",
            text: "Including all relevant participants can strengthen statistical analysis and clarify results within a single case.",
          },
        ],
      },
    ],
  },

  {
    category: "Services, Coverage & Office",
    id: "services",
    questions: [
      {
        q: "Do you provide DNA testing nationwide?",
        a: [
          {
            type: "p",
            text: "Yes. Mile High DNA Testing provides DNA testing services nationwide.",
          },
          {
            type: "p",
            text: "Legal DNA testing is performed through approved collection sites that maintain proper chain-of-custody procedures. Non-legal testing may be conducted through secure kit shipment when appropriate.",
          },
          {
            type: "p",
            text: "Access to accredited laboratory testing is available throughout the United States.",
          },
        ],
      },
      {
        q: "Do you offer international DNA testing?",
        a: [
          {
            type: "p",
            text: "Yes. International DNA collections may be arranged depending on the country and type of test required.",
          },
          {
            type: "p",
            text: "All international testing must comply with local regulations and laboratory standards.",
          },
          {
            type: "p",
            text: "Our international clients can contact us via WhatsApp or phone at +1 720-900-9342, email at info@milehighdnatesting.com, or their preferred method of communication.",
          },
        ],
      },
      {
        q: "What types of DNA relationship testing do you offer?",
        a: [
          { type: "p", text: "We provide:" },
          {
            type: "ul",
            items: [
              "Paternity (legal and non-legal paternity testing and postmortem paternity)",
              "Non-invasive prenatal paternity testing (legal, non-legal, twins, and discreet/alternative sample)",
              "Grandparentage testing",
              "Siblingship testing",
              "Avuncular testing",
              "Twin zygosity",
              "Single profile",
              "Postmortem (DNA testing with a deceased person)",
              "Immigration (AABB-accredited DNA tests)",
              "mtDNA and Y-STR",
              "Discreet/private testing (alternative DNA samples)",
              "Infidelity",
              "Lifestyle DNA (Healthy Weight DNA and GPS Origins ancestry DNA)",
            ],
          },
        ],
      },
      {
        q: "Where is your office located?",
        a: [
          {
            type: "p",
            text: "Our office is located in Denver, Colorado, at 975 N Lincoln St STE 205C, Denver, CO 80203—just:",
          },
          {
            type: "ul",
            items: [
              "5 minutes from the Denver courts",
              "5 minutes from Denver Health",
              "5 minutes from the Denver County Vital Records office",
            ],
          },
          {
            type: "p",
            text: "This proximity allows for efficient coordination of legal and birth-related matters.",
          },
          {
            type: "p",
            text: "We offer free garage parking. The day of your appointment you receive detailed directions, a Google Maps link, as well as a picture of our building.",
          },
        ],
      },
    ],
  },

  {
    category: "Why Mile High DNA Testing",
    id: "why-mile-high",
    questions: [
      {
        q: "What makes Mile High DNA Testing different from other DNA testing companies and online DNA kits?",
        a: [
          {
            type: "p",
            text: "When the results of a DNA test matter, accuracy, compliance, and professional oversight matter just as much.",
          },
          {
            type: "p",
            text: "At Mile High DNA Testing, every case is structured, monitored, and processed through an AABB-accredited laboratory to ensure reliable, defensible results. Whether you test in our Denver office or order one of our at-home kits, your case is managed with precision from start to finish.",
          },
          {
            type: "p",
            text: "AABB-accredited laboratory processing with 99.9% accuracy: All of our DNA tests, including at-home kits, are processed by an AABB-accredited laboratory. Results typically show a 99.9% or greater probability of paternity when included and 0% when excluded. The scientific standard remains consistent across all test types.",
          },
          {
            type: "p",
            text: "Court and immigration compliant when required: If legal or immigration results are needed, we conduct certified collection with verified identification and full chain-of-custody documentation so your results meet court and government requirements.",
          },
          {
            type: "p",
            text: "Structured online DNA kits with professional oversight: Unlike mass-market online kits that operate as anonymous order-and-ship products, our at-home kits are case managed. Each test is assigned, tracked, and supported by our office. Clients have direct access to a certified DNA collector for guidance when needed.",
          },
          {
            type: "p",
            text: "Local office with nationwide coordination: We provide in-person certified DNA collection in Denver and coordinate compliant testing nationwide when necessary.",
          },
          {
            type: "p",
            text: "Many companies sell DNA kits. We provide professionally managed DNA testing designed to protect the integrity, accuracy, and usability of your results.",
          },
        ],
      },
    ],
  },
];

const FAQSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto space-y-12">
        {faqData.map((section) => (
          <div key={section.id} id={section.id}>
            <h2 className="text-2xl font-bold text-blue-700 mb-6">{section.category}</h2>

            <div className="space-y-8">
              {section.questions.map((faq, index) => (
                <div key={index} className="border-b border-gray-100 pb-8 last:border-0">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">{faq.q}</h3>
                  <AnswerBody answer={faq.a} />
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
