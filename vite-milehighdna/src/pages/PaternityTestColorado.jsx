import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ServingColorado from "../components/common/ServingColorado";
import ColoradoMountains from "../assets/images/colorado-mountains.png";
import PrenatalImage from "../assets/images/prenatal-3.png";
import LegalDNAImage from "../assets/images/dna-legal-document.png";
import NonLegalDNAImage from "../assets/images/non-legal-dna-test.png";
import LegalCompareImage from "../assets/images/legal-compare.png";
import StateImage from "../assets/images/state.png";

const PaternityTestColorado = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const paternityTestTypes = [
    {
      title: "Legal Paternity Testing",
      description: "Court-admissible paternity testing with chain of custody for child support, custody, and legal matters in Colorado.",
      link: "/services/legal-paternity-testing",
      icon: (
        <img src={LegalDNAImage} alt="Legal paternity testing in Colorado" className="w-full h-full object-contain" />
      ),
      color: "indigo",
      courtAdmissible: true
    },
    {
      title: "Non-Legal (Peace of Mind) Paternity Testing",
      description: "Private, non-legal paternity testing for personal knowledge without court documentation requirements.",
      link: "/services/non-legal-paternity-testing",
      icon: (
        <img src={NonLegalDNAImage} alt="Non-legal paternity testing for personal knowledge in Colorado" className="w-full h-full object-contain" />
      ),
      color: "green",
      courtAdmissible: false
    },
    {
      title: "Prenatal Paternity Testing",
      description: "Safe, non-invasive paternity testing during pregnancy using a simple blood draw from the mother.",
      link: "/services/prenatal-paternity-testing",
      icon: (
        <img src={PrenatalImage} alt="Prenatal paternity testing in Colorado" className="w-full h-full object-contain" />
      ),
      color: "blue",
      courtAdmissible: "Can be legal or non-legal"
    }
  ];

  const legalVsNonLegal = [
    {
      title: "Legal Paternity Testing (Court-Admissible)",
      content: (
        <div className="space-y-3">
          <p className="text-gray-600">
            Legal paternity testing is required when results must be submitted to Colorado family courts, child support enforcement agencies, or USCIS for immigration cases. Choosing the wrong test type can delay or invalidate your case.
          </p>
          <ul className="text-gray-600 space-y-1 ml-4">
            <li>• Mandatory for Colorado child support and custody cases</li>
            <li>• Required for USCIS immigration visa applications</li>
            <li>• Chain of custody documentation from collection through analysis</li>
            <li>• Identity verification with government-issued photo ID</li>
            <li>• AABB-accredited laboratory compliance required</li>
            <li>• Results are legally binding and court-admissible</li>
          </ul>
          <Link to="/services/legal-paternity-testing" className="text-blue-600 font-medium hover:underline inline-block mt-2">
            Learn about legal paternity testing →
          </Link>
        </div>
      )
    },
    {
      title: "Non-Legal Paternity Testing (Peace of Mind)",
      content: (
        <div className="space-y-3">
          <p className="text-gray-600">
            Non-legal paternity testing provides faster, simpler results for personal knowledge. However, these results cannot be used in Colorado courts, child support cases, or immigration applications. Choosing this option when legal testing is required will result in rejection.
          </p>
          <ul className="text-gray-600 space-y-1 ml-4">
            <li>• Cannot be submitted to Colorado courts or agencies</li>
            <li>• Not accepted by USCIS for immigration cases</li>
            <li>• Faster turnaround with simplified collection process</li>
            <li>• Same scientific accuracy, but without legal documentation</li>
            <li>• Suitable only when no legal proceedings are involved</li>
            <li>• More convenient and cost-effective for personal use</li>
          </ul>
          <Link to="/services/non-legal-paternity-testing" className="text-green-600 font-medium hover:underline inline-block mt-2">
            Learn about peace of mind testing →
          </Link>
        </div>
      )
    }
  ];

  const legalRequirements = [
    {
      title: "Identity Verification",
      description: "All parties must provide government-issued photo identification at the time of sample collection."
    },
    {
      title: "Professional Sample Collection",
      description: "Samples must be collected by a certified professional at an authorized collection site."
    },
    {
      title: "Chain of Custody",
      description: "Strict documentation of sample handling from collection through laboratory analysis is required."
    },
    {
      title: "Lab Accreditation",
      description: "Samples must be processed at an AABB-accredited laboratory to meet Colorado court standards."
    },
    {
      title: "Court and Agency Acceptance",
      description: "Results from properly conducted legal tests are accepted by Colorado family courts and state agencies."
    }
  ];

  const chooseTestScenarios = [
    {
      title: "Choose Legal Paternity Testing If…",
      scenarios: [
        "You need results for a child support case",
        "Custody or visitation rights are being determined",
        "You're establishing paternity for inheritance purposes",
        "A court order requires paternity testing",
        "You need results for immigration purposes"
      ],
      link: "/services/legal-paternity-testing",
      linkText: "Learn about legal testing",
      color: "indigo"
    },
    {
      title: "Choose Non-Legal Paternity Testing If…",
      scenarios: [
        "You want personal knowledge only",
        "No court proceedings are involved",
        "You prefer at-home sample collection",
        "You want faster, more convenient testing",
        "Cost is a primary consideration"
      ],
      link: "/services/non-legal-paternity-testing",
      linkText: "Learn about peace of mind testing",
      color: "green"
    },
    {
      title: "Choose Prenatal Paternity Testing If…",
      scenarios: [
        "You need to establish paternity before birth",
        "You want to avoid waiting until after delivery",
        "You're comfortable with a blood draw from the mother",
        "You need early certainty for planning purposes"
      ],
      link: "/services/prenatal-paternity-testing",
      linkText: "Learn about prenatal testing",
      color: "blue"
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
      question: "Are paternity tests legally valid in Colorado courts?",
      answer: "Yes. Legal paternity tests conducted with proper chain of custody procedures are legally valid and admissible in Colorado family courts. The tests must be performed at an AABB-accredited laboratory with professional sample collection and identity verification."
    },
    {
      question: "Can non-legal tests be used in custody cases?",
      answer: "No. Non-legal (peace of mind) paternity tests cannot be used in custody cases or any court proceedings in Colorado. Only legal paternity tests with proper chain of custody documentation are accepted by courts."
    },
    {
      question: "Is prenatal paternity testing legal in Colorado?",
      answer: "Yes. Prenatal paternity testing is legal in Colorado. Non-invasive prenatal paternity testing (NIPP) is available and can be performed as either a legal or non-legal test, depending on your needs. It's completely safe for both mother and baby."
    },
    {
      question: "How long do paternity test results take in Colorado?",
      answer: "Most paternity test results are available within 3-5 business days after samples reach the laboratory. Legal tests may take slightly longer due to additional documentation requirements. Rush processing options are available for faster turnaround."
    },
    {
      question: "Do both parents need to be present for a paternity test?",
      answer: "For legal paternity tests, all parties (alleged father, child, and sometimes the mother) must be present at the collection site for identity verification. For non-legal tests, samples can be collected at different times and locations, though the child and alleged father must both provide samples."
    },
    {
      question: "What agencies accept DNA test results in Colorado?",
      answer: "Colorado family courts, child support enforcement agencies, and immigration authorities (USCIS) accept legal paternity test results from AABB-accredited laboratories when proper chain of custody procedures are followed. Non-legal test results are not accepted by any government agency."
    }
  ];

  return (
    <main>
      <Helmet>
        <title>Paternity Testing in Colorado | Legal & Non-Legal DNA Tests Explained</title>

        <meta
          name="description"
          content="Understand paternity testing in Colorado: legal vs non-legal tests, court requirements, chain of custody rules, and how to choose the right test for your situation. Learn about Colorado-specific regulations and where testing is available."
        />

        <link
          rel="canonical"
          href="https://milehighdnatesting.com/paternity-test-colorado"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Paternity Testing in Colorado | Legal & Non-Legal DNA Tests Explained" />
        <meta
          property="og:description"
          content="A comprehensive guide to paternity testing in Colorado, covering legal requirements, court acceptance, and test selection for residents."
        />
        <meta
          property="og:image"
          content="https://milehighdnatesting.com/images/paternity-test-colorado-guide.png"
        />
        <meta
          property="og:url"
          content="https://milehighdnatesting.com/paternity-test-colorado"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://milehighdnatesting.com/images/paternity-test-colorado-guide.png"
        />

        {/* Schema: WebPage + FAQPage ONLY */}
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://milehighdnatesting.com/paternity-test-colorado#webpage",
              "url": "https://milehighdnatesting.com/paternity-test-colorado",
              "name": "Paternity Testing in Colorado | Legal & Non-Legal DNA Tests Explained",
              "description": "An educational guide to paternity testing in Colorado, covering legal requirements, court acceptance, and test selection.",
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
                Paternity Testing in Colorado
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Understand legal and non-legal paternity testing options in Colorado, court requirements, and how to choose the correct test for your situation.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => document.getElementById('legal-requirements')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Understand Legal Requirements
                </button>
                <button 
                  onClick={() => document.getElementById('test-types')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Compare Test Types
                </button>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 w-80 h-80 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-24 h-24 mx-auto mb-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="text-white/60 text-sm">Colorado Paternity Testing Guide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Paternity Tests Card Grid */}
      <section id="test-types" className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Types of Paternity Tests in Colorado
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Different situations require different types of paternity tests. Understand when each test is used and whether results are court-admissible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {paternityTestTypes.map((type, index) => (
              <Link 
                key={index}
                to={type.link}
                className="group bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${
                  type.color === 'indigo' ? 'bg-indigo-50' :
                  type.color === 'green' ? 'bg-green-50' :
                  'bg-blue-50'
                }`}>
                  {type.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {type.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {type.description}
                </p>
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    type.courtAdmissible === true 
                      ? 'bg-green-100 text-green-800' 
                      : type.courtAdmissible === false 
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {type.courtAdmissible === true 
                      ? 'Court-Admissible' 
                      : type.courtAdmissible === false 
                      ? 'Personal Use Only'
                      : 'Legal or Non-Legal Available'}
                  </span>
                </div>
                <span className="inline-flex items-center text-blue-600 text-sm font-medium group-hover:underline">
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

      {/* Legal vs Non-Legal Paternity Testing Accordion */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Legal vs. Non-Legal Paternity Testing in Colorado
            </h2>
            <p className="text-lg text-gray-600">
              Understanding the difference helps you choose the right test for your situation.
            </p>
            <div className="mt-8 flex justify-center">
              <img src={LegalCompareImage} alt="Comparison of legal vs non-legal paternity testing in Colorado" className="max-w-md w-full h-auto rounded-lg" />
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
          
          {/* Immigration-Related Paternity Testing Subsection */}
          <div className="mt-12 bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Immigration-Related Paternity Testing
            </h3>
            <p className="text-gray-600 mb-3">
              Some immigration and visa applications require DNA testing to verify a biological parent-child relationship. These tests must follow strict chain-of-custody procedures and be performed at AABB-accredited laboratories to meet USCIS and embassy requirements.
            </p>
            <p className="text-gray-600 mb-4">
              Immigration-related paternity testing follows the same legal standards as court-admissible tests, with professional sample collection, identity verification, and complete documentation throughout the process.
            </p>
            <Link 
              to="/services/immigration-dna-testing"
              className="text-blue-600 font-medium hover:underline inline-block"
            >
              Learn about immigration DNA testing →
            </Link>
          </div>
          
          <div className="mt-8 text-center space-y-2">
            <Link 
              to="/guides/legal-dna-test-cost"
              className="text-blue-600 font-medium hover:underline block"
            >
              Compare costs in our pricing guides →
            </Link>
            <Link 
              to="/guides/non-legal-dna-test-cost"
              className="text-green-600 font-medium hover:underline block"
            >
              View non-legal testing costs →
            </Link>
          </div>
        </div>
      </section>

      {/* Colorado Legal Requirements */}
      <section id="legal-requirements" className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Colorado Legal Requirements for Paternity Testing
            </h2>
            <p className="text-lg text-gray-600">
              Legal paternity tests in Colorado must meet specific requirements for court acceptance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {legalRequirements.map((requirement, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {requirement.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {requirement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Choose the Right Paternity Test */}
      <section className="py-16 px-6 md:px-12 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How to Choose the Right Paternity Test
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the appropriate test based on your specific situation and needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {chooseTestScenarios.map((scenario, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
              >
                <h3 className={`text-lg font-semibold mb-4 ${
                  scenario.color === 'indigo' ? 'text-indigo-700' :
                  scenario.color === 'green' ? 'text-green-700' :
                  'text-blue-700'
                }`}>
                  {scenario.title}
                </h3>
                <ul className="space-y-2 mb-6">
                  {scenario.scenarios.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-gray-600 text-sm">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to={scenario.link}
                  className={`inline-flex items-center font-medium hover:underline text-sm ${
                    scenario.color === 'indigo' ? 'text-indigo-600' :
                    scenario.color === 'green' ? 'text-green-600' :
                    'text-blue-600'
                  }`}
                >
                  {scenario.linkText}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where Paternity Testing Is Available */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Where Paternity Testing Is Available in Colorado
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional paternity testing services are available at collection sites throughout Colorado.
            </p>
            <div className="mt-8 flex justify-center">
              <img src={StateImage} alt="Paternity testing availability across Colorado" className="max-w-md w-full h-auto rounded-lg" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {coloradoCities.map((city, index) => (
              <Link
                key={index}
                to={city.link}
                className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
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
      <section id="faqs" className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Colorado Paternity Testing FAQs
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about paternity testing in Colorado.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
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
      <section className="py-12 px-6 md:px-12 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10 shadow-sm border border-gray-200 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Learn More?
            </h3>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Explore our service pages for detailed information about each paternity testing option, or visit our guides for pricing and cost comparisons.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services/legal-paternity-testing"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Legal Paternity Testing
              </Link>
              <Link 
                to="/services/non-legal-paternity-testing"
                className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Non-Legal Testing
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

export default PaternityTestColorado;
