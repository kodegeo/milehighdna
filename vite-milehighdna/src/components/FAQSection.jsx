import React from "react";

/**
 * Reusable FAQ section for service pages.
 * @param {Object} props
 * @param {{ question: string, answer: string | import('react').ReactNode, answerSchema?: string }[]} props.faqs - FAQ items; use answerSchema for plain text when answer is JSX (e.g. JSON-LD)
 * @param {string | import('react').ReactNode} [props.title] - Section heading (default: "Frequently Asked Questions")
 * @param {string} [props.className] - Optional extra classes for the section
 */
const FAQSection = ({ faqs, title = "Frequently Asked Questions", className = "" }) => {
  if (!faqs?.length) return null;
  return (
    <section className={`faq-section py-12 md:py-16 px-4 md:px-8 ${className}`.trim()}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          {title}
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                {faq.question}
              </h3>
              {typeof faq.answer === "string" ? (
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              ) : (
                <div className="text-gray-700 leading-relaxed space-y-3">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
