import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ServingColorado from "../components/common/ServingColorado";
import ColoradoMountains from "../assets/images/colorado-mountains.png";
import PrenatalImage from "../assets/images/prenatal-3.png";
import LegalDNAImage from "../assets/images/dna-legal-document.png";
import NonLegalDNAImage from "../assets/images/non-legal-dna-test.png";
import ImmigrationDNAImage from "../assets/images/immigration-dna.png";
import DNACompareImage from "../assets/images/dna-compare.png";
import TimelineImage from "../assets/images/timeline.png";
import StateImage from "../assets/images/state.png";

const DNATestingColorado = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const testingTypes = [
    {
      title: "Prenatal DNA Testing",
      description: "Safe, non-invasive paternity testing during pregnancy using a simple blood draw from the mother.",
      link: "/services/prenatal-paternity-testing",
      icon: (
        <img src={PrenatalImage} alt="Prenatal DNA testing in Colorado" className="w-full h-full object-contain" />
      ),
      color: "blue"
    },
    {
      title: "Legal DNA Testing",
      description: "Court-admissible DNA testing with chain of custody for child support, custody, and legal matters.",
      link: "/services/legal-paternity-testing",
      icon: (
        <img src={LegalDNAImage} alt="Legal DNA testing and court documentation in Colorado" className="w-full h-full object-contain" />
      ),
      color: "indigo"
    },
    {
      title: "Peace of Mind Testing",
      description: "Private, non-legal DNA testing for personal knowledge without court documentation requirements.",
      link: "/services/non-legal-paternity-testing",
      icon: (
        <img src={NonLegalDNAImage} alt="Non-legal DNA testing for personal knowledge in Colorado" className="w-full h-full object-contain" />
      ),
      color: "green"
    },
    {
      title: "Immigration DNA Testing",
      description: "USCIS and embassy-approved DNA testing for visa applications and immigration cases.",
      link: "/services/immigration-dna-testing",
      icon: (
        <img src={ImmigrationDNAImage} alt="Immigration DNA testing and documentation in Colorado" className="w-full h-full object-contain" />
      ),
      color: "purple"
    }
  ];

  const legalVsNonLegal = [
    {
      title: "Legal DNA Testing (Court-Admissible)",
      content: (
        <div className="space-y-3">
          <p className="text-gray-600">
            Legal DNA testing is used when results must be formally recognized by courts, government agencies, or other official institutions. This category ensures that test results meet the standards required for legal and administrative purposes.
          </p>
          <ul className="text-gray-600 space-y-1 ml-4">
            <li>• Results are recognized by courts and government agencies</li>
            <li>• Used for legal matters requiring official documentation</li>
            <li>• Follows standardized procedures for formal recognition</li>
            <li>• One of several DNA testing categories available in Colorado</li>
          </ul>
          <Link to="/services/legal-paternity-testing" className="text-blue-600 font-medium hover:underline inline-block mt-2">
            Learn about legal testing →
          </Link>
        </div>
      )
    },
    {
      title: "Non-Legal DNA Testing (Peace of Mind)",
      content: (
        <div className="space-y-3">
          <p className="text-gray-600">
            Informational DNA testing provides accurate results for personal knowledge, curiosity, and family clarity. This category focuses on privacy and convenience while delivering the same scientific accuracy.
          </p>
          <ul className="text-gray-600 space-y-1 ml-4">
            <li>• Designed for personal knowledge and family understanding</li>
            <li>• Offers privacy and convenience in the testing process</li>
            <li>• Same scientific accuracy as other testing categories</li>
            <li>• Ideal for answering questions and gaining clarity</li>
          </ul>
          <Link to="/services/non-legal-paternity-testing" className="text-green-600 font-medium hover:underline inline-block mt-2">
            Learn about peace of mind testing →
          </Link>
        </div>
      )
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Schedule Your Appointment",
      description: "Book online or call to schedule at a convenient Colorado location."
    },
    {
      step: 2,
      title: "Sample Collection",
      description: "Quick, painless cheek swab collected by a certified professional."
    },
    {
      step: 3,
      title: "Chain of Custody (If Legal)",
      description: "Identity verification and documentation for court-admissible results."
    },
    {
      step: 4,
      title: "Laboratory Analysis",
      description: "Samples processed at an AABB-accredited laboratory."
    },
    {
      step: 5,
      title: "Results Delivery",
      description: "Secure results typically delivered within 3-5 business days."
    }
  ];

  const coloradoCities = [
    { name: "Denver", link: "/locations/denver" },
    { name: "Aurora", link: "/locations/aurora" },
    { name: "Colorado Springs", link: "/locations/colorado-springs" },
    { name: "Lakewood", link: "/locations/lakewood" },
    { name: "Fort Collins", link: "/locations/fort-collins" },
    { name: "Thornton", link: "/locations/thornton" }
  ];

  const faqs = [
    {
      question: "Is DNA testing legal in Colorado?",
      answer: "Yes. DNA testing is completely legal in Colorado for paternity, relationship verification, and other purposes. Both legal (court-admissible) and non-legal (peace of mind) testing options are available throughout the state."
    },
    {
      question: "Do Colorado courts accept DNA test results?",
      answer: "Yes. Colorado family courts accept DNA test results from AABB-accredited laboratories when proper chain-of-custody procedures are followed. Legal DNA tests meet state requirements for child support, custody, and paternity cases."
    },
    {
      question: "Can prenatal DNA testing be done safely in Colorado?",
      answer: "Absolutely. Non-invasive prenatal paternity testing (NIPP) is available in Colorado and is completely safe. It requires only a blood draw from the mother and a cheek swab from the potential father—no risk to the baby."
    },
    {
      question: "How long do DNA test results take in Colorado?",
      answer: "Most DNA test results are available within 3-5 business days after samples reach the laboratory. Rush processing options are available for faster turnaround when needed."
    },
    {
      question: "Where can I get a DNA test in Colorado?",
      answer: "DNA testing is available at collection sites throughout Colorado, including Denver, Aurora, Colorado Springs, Lakewood, Fort Collins, and many other cities. Mobile collection can also be arranged for convenience."
    },
    {
      question: "What's the difference between legal and non-legal DNA tests?",
      answer: "Legal DNA tests require professional collection with identity verification and chain of custody—results are court-admissible. Non-legal tests offer the same accuracy but without formal documentation, suitable for personal knowledge only."
    }
  ];

  return (
    <main>
      <Helmet>
        <title>DNA Testing in Colorado | Paternity, Legal & Prenatal Testing Guide</title>

        <meta
          name="description"
          content="An educational guide to DNA testing in Colorado. Learn about legal and non-legal paternity tests, prenatal DNA testing, court requirements, timelines, and where testing is available statewide."
        />

        <link
          rel="canonical"
          href="https://milehighdnatesting.com/dna-testing-colorado"
        />

        {/* Open Graph */}
        <meta property="og:title" content="DNA Testing in Colorado | Paternity, Legal & Prenatal Testing Guide" />
        <meta
          property="og:description"
          content="An educational guide to DNA testing in Colorado, including paternity, prenatal, and legal testing options available statewide."
        />
        <meta
          property="og:image"
          content="https://milehighdnatesting.com/images/colorado-dna-testing-guide.png"
        />
        <meta
          property="og:url"
          content="https://milehighdnatesting.com/dna-testing-colorado"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://milehighdnatesting.com/images/colorado-dna-testing-guide.png"
        />

        {/* Schema: WebPage + FAQPage ONLY */}
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://milehighdnatesting.com/dna-testing-colorado#webpage",
              "url": "https://milehighdnatesting.com/dna-testing-colorado",
              "name": "DNA Testing in Colorado | Paternity, Legal & Prenatal Testing Guide",
              "description": "An educational guide to DNA testing in Colorado, covering legal, non-legal, and prenatal testing options.",
              "isPartOf": {
                "@type": "WebSite",
                "name": "Mile High DNA Testing",
                "url": "https://milehighdnatesting.com"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            }
          ])}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        {/* Placeholder for Colorado + DNA themed image */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          {ColoradoMountains && (
            <img
              src={ColoradoMountains}
              alt="Colorado Mountains"
              className="object-cover w-full h-full"
            />
          )}
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                DNA Testing in Colorado
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Your complete guide to understanding DNA testing options, legal requirements, and the testing process across Colorado.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => document.getElementById('testing-types')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Explore Testing Options
                </button>
                <button 
                  onClick={() => document.getElementById('faqs')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View FAQs
                </button>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              {/* IMAGE PLACEHOLDER: Colorado state outline with DNA helix */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 w-80 h-80 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-24 h-24 mx-auto mb-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="text-white/60 text-sm">Colorado DNA Testing Guide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Types Card Grid */}
      <section id="testing-types" className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              DNA Testing Types in Colorado
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Different situations require different types of DNA tests. Find the right option for your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testingTypes.map((type, index) => (
              <Link 
                key={index}
                to={type.link}
                className="group bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className={`bg-${type.color}-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {type.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {type.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {type.description}
                </p>
                <span className="inline-flex items-center text-blue-600 text-sm font-medium mt-4 group-hover:underline">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Legal vs Non-Legal Accordion */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Legal vs. Non-Legal DNA Testing in Colorado
            </h2>
            <p className="text-lg text-gray-600">
              Understanding the difference helps you choose the right test for your situation.
            </p>
            <div className="mt-8 flex justify-center">
              <img src={DNACompareImage} alt="Comparison of legal vs non-legal DNA testing in Colorado" className="max-w-md w-full h-auto rounded-lg" />
            </div>
          </div>
          
          <div className="space-y-4">
            {legalVsNonLegal.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-800">{item.title}</span>
                  <svg 
                    className={`w-6 h-6 text-gray-500 transition-transform ${openAccordion === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openAccordion === index && (
                  <div className="px-6 pb-5 border-t border-gray-100">
                    <div className="pt-4">
                      {item.content}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              to="/guides/legal-dna-test-cost"
              className="text-blue-600 font-medium hover:underline"
            >
              Compare costs in our pricing guides →
            </Link>
          </div>
        </div>
      </section>

      {/* How DNA Testing Works - Step Timeline */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How DNA Testing Works in Colorado
            </h2>
            <p className="text-lg text-gray-600">
              The process is simple, quick, and professional.
            </p>
            <div className="mt-8 flex justify-center">
              <img src={TimelineImage} alt="DNA testing process steps in Colorado" className="max-w-md w-full h-auto rounded-lg" />
            </div>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>
            
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Step number */}
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold z-10">
                    {step.step}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Where DNA Testing Is Available */}
      <section className="py-16 px-6 md:px-12 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Where DNA Testing Is Available in Colorado
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional DNA testing services are available at collection sites throughout Colorado.
            </p>
            <div className="mt-8 flex justify-center">
              <img src={StateImage} alt="DNA testing availability across Colorado" className="max-w-md w-full h-auto rounded-lg" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {coloradoCities.map((city, index) => (
              <Link
                key={index}
                to={city.link}
                className="bg-white rounded-lg p-4 text-center border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <span className="text-gray-800 font-medium">{city.name}</span>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/locations"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View All Colorado Locations
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Colorado-Specific FAQs */}
      <section id="faqs" className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Colorado DNA Testing FAQs
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about DNA testing in Colorado.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="text-lg font-medium text-gray-800 pr-4">{faq.question}</span>
                  <svg 
                    className={`w-6 h-6 text-gray-500 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 border-t border-gray-100">
                    <p className="pt-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft CTA Section */}
      <section className="py-12 px-6 md:px-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-200 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Learn More?
            </h3>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Explore our service pages for detailed information about each testing option, or visit our guides for pricing and cost comparisons.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                View Our Services
              </Link>
              <Link 
                to="/guides"
                className="inline-flex items-center justify-center bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Explore Pricing Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServingColorado />
    </main>
  );
};

export default DNATestingColorado;
