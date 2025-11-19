import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ServingColorado from "../../components/common/ServingColorado";
import CallToAction from "../../components/corner/CallToAction";

const LegalDNACostGuide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          question: formData.question,
          subject: "Mile High DNA Corner Question"
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsModalOpen(false);
          setIsSubmitted(false);
          setFormData({ name: '', email: '', question: '' });
        }, 3000);
      } else {
        throw new Error('Failed to send question');
      }
    } catch (error) {
      console.error('Error sending question:', error);
      alert('Sorry, there was an error sending your question. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
    setFormData({ name: '', email: '', question: '' });
  };

  return (
    <main>
      <Helmet>
        <title>Legal DNA Test Cost in Denver | Court-Admissible & AABB-Accredited Testing</title>
        <meta 
          name="description" 
          content="Discover the true cost of legal DNA testing. Learn about court-admissible DNA tests, chain of custody requirements, and what families in Denver can expect to pay for legal paternity, maternity, and relationship testing." 
        />
        <meta name="keywords" content="legal dna test cost, court admissible dna test, legal paternity test cost, chain of custody dna test, legal dna testing denver, aabb accredited dna test" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Legal DNA Test Cost | Complete Pricing Guide" />
        <meta property="og:description" content="Get accurate pricing information for legal DNA tests. Compare costs, understand requirements, and find the best option for court-admissible testing." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:url" content="https://milehighdnatesting.com/mile-high-dna-corner/legal-dna-cost-guide" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
  {JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Legal DNA Test Cost in Denver | Court-Admissible & AABB-Accredited Testing",
      "author": { "@type": "Organization", "name": "Mile High DNA Testing" },
      "publisher": { "@type": "Organization", "name": "Mile High DNA Testing" },
      "inLanguage": "en-US",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://milehighdnatesting.com/mile-high-dna-corner/legal-dna-cost-guide"
      },
      "description": "Complete guide to legal DNA test costs in Denver, including paternity, maternity, and relationship testing with AABB-accredited chain of custody procedures."
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a legal DNA test cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Legal DNA test costs typically range from $350 to $550 depending on the test type and number of participants. Paternity tests start at $350, maternity tests at $400, and relationship tests (siblingship, grandparentage) range from $450-$550."
          }
        },
        {
          "@type": "Question",
          "name": "What's included in the cost of a legal DNA test?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Legal DNA test costs include identity verification, professional sample collection, chain of custody documentation, AABB-accredited laboratory analysis, and court-admissible results report. All fees are included upfront with no hidden charges."
          }
        },
        {
          "@type": "Question",
          "name": "Why do legal DNA tests cost more than at-home tests?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Legal DNA tests cost more due to additional requirements: professional sample collection, identity verification, chain of custody documentation, AABB accreditation standards, and court-admissible reporting. These ensure legal validity and admissibility."
          }
        },
        {
          "@type": "Question",
          "name": "Does insurance cover legal DNA testing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most insurance plans do not cover legal DNA testing for paternity or relationship purposes, as it's considered elective. However, some court-ordered tests may be covered. Check with your insurance provider and consider payment plans if available."
          }
        }
      ]
    }
  ])}
</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" 
             style={{ backgroundImage: `url('/images/legal-dna-hero.jpg')` }}>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Legal DNA Test Cost: 
              <span className="text-blue-600 block">Complete Pricing Guide for Court-Admissible Testing</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Learn how much legal DNA testing costs, what makes it different from at-home tests, and how to budget for court-admissible paternity, maternity, and relationship testing.
            </p>

            <div className="flex justify-center">
              <Link 
                to="https://calendly.com/milehighdnatesting/legal-paternity-test"
                className="bg-blue-600 text-white px-8 py-4 font-bold uppercase tracking-wide rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg"
              >
                Book Your Legal DNA Test
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Intro / Hook */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Understanding Legal DNA Test Cost for Court-Admissible Results</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              When you need DNA test results that can be used in court, for child support, immigration, or legal documentation, understanding legal DNA test cost is crucial. Legal DNA testing follows strict chain-of-custody procedures and AABB accreditation standards to ensure court admissibility.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Whether you're dealing with paternity disputes, immigration cases, or inheritance matters, knowing what to expect with legal DNA test cost helps you make informed decisions and budget appropriately for your legal needs.
            </p>
          </div>
          <p className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded text-gray-800 text-lg font-medium mb-8">
  The average cost of a legal DNA test in Denver ranges from <strong>$350 to $550</strong>, depending on the type of test and number of participants. 
  Legal paternity tests start at $350, and all testing includes professional collection, identity verification, 
  and chain-of-custody documentation for court-admissible results.
</p>
        </div>


      </section>

      {/* What Is Legal DNA Testing? */}
      <section id="learn-about-legal-tests" className="py-16 px-6 md:px-12 bg-blue-50">

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What Is Legal DNA Testing?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Legal DNA testing is performed under strict chain-of-custody procedures to ensure results are admissible in court and government proceedings. Unlike at-home tests, legal DNA testing requires professional sample collection, identity verification, and AABB-accredited laboratory analysis.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                This process ensures that DNA samples are properly collected, documented, and analyzed according to legal standards. Results from legal DNA tests can be used for child custody, child support, immigration, inheritance disputes, and other court proceedings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-400">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-green-800">Court Admissible</h3>
              </div>
              <p className="text-gray-600">
                Legal DNA tests meet strict chain-of-custody requirements and AABB accreditation standards, making results admissible in courts and government agencies throughout the United States.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Legal DNA Tests Cost More */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Legal DNA Test Cost Is Higher Than At-Home Tests</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Professional Collection</h3>
              <p className="text-gray-600 mb-4">
                Legal DNA tests require certified collectors to perform sample collection, ensuring proper chain of custody and identity verification.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Certified DNA collector fees</li>
                <li>• Identity verification process</li>
                <li>• Professional documentation</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">AABB Accreditation</h3>
              <p className="text-gray-600 mb-4">
                AABB-accredited laboratories charge more due to higher quality standards, additional testing protocols, and legal admissibility requirements.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• AABB accreditation costs</li>
                <li>• Quality control measures</li>
                <li>• Legal documentation standards</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Chain of Custody</h3>
              <p className="text-gray-600 mb-4">
                Strict chain-of-custody procedures require additional documentation, tracking, and verification steps that add to the overall cost.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Documentation and tracking</li>
                <li>• Secure sample handling</li>
                <li>• Legal verification processes</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Court Documentation</h3>
              <p className="text-gray-600 mb-4">
                Legal DNA tests include comprehensive documentation and reporting designed specifically for court and government use.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Court-admissible reports</li>
                <li>• Legal documentation</li>
                <li>• Expert witness support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Price Ranges */}
      <section id="cost-details" className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Legal DNA Test Cost: What Families Can Expect</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200 relative">
              <div className="absolute -top-3 left-6 bg-blue-600 text-white px-3 py-1 text-sm font-semibold rounded-full">
                MOST COMMON
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-4 mt-2">Legal Paternity Test</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">$350 - $450</div>
              <p className="text-gray-600 mb-4">Denver average: Father and child testing</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Professional sample collection</li>
                <li>• Identity verification</li>
                <li>• Chain of custody documentation</li>
                <li>• AABB-accredited laboratory</li>
                <li>• Results in 3-5 business days</li>
                <li>• Court-admissible report</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-4">Legal Maternity Test</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">$400 - $500</div>
              <p className="text-gray-600 mb-4">Mother and child testing</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Professional sample collection</li>
                <li>• Identity verification</li>
                <li>• Chain of custody documentation</li>
                <li>• Results in 3-5 business days</li>
                <li>• Court-admissible report</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Relationship Tests</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">$450 - $550</div>
              <p className="text-gray-600 mb-4">Siblingship, grandparentage</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Multiple participants</li>
                <li>• Professional collection</li>
                <li>• Identity verification</li>
                <li>• Results in 3-5 business days</li>
                <li>• Court-admissible report</li>
              </ul>
            </div>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <p className="text-gray-700">
              Note: These are general price ranges for Denver area. Actual legal DNA test cost may vary based on location, number of participants, additional services, and current promotions. Always request a detailed quote before booking.
            </p>
          </div>
          
          {/* What's Included in Legal Testing */}
          <div className="mt-8 bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
            <h3 className="text-xl font-semibold text-green-800 mb-4">What's Included in Your Legal DNA Test:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Professional sample collection
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Identity verification with photo ID
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Chain of custody documentation
                </li>
              </ul>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AABB-accredited laboratory analysis
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Court-admissible results report
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Customer support throughout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How Legal DNA Testing Works */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How Legal DNA Testing Works</h2>
          <div className="grid md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold text-gray-800 mb-2">Schedule Appointment</h3>
              <p className="text-sm text-gray-600">Book your legal DNA test appointment with certified collector</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold text-gray-800 mb-2">Identity Verification</h3>
              <p className="text-sm text-gray-600">Present photo ID and complete identity verification process</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold text-gray-800 mb-2">Sample Collection</h3>
              <p className="text-sm text-gray-600">Professional collection with chain of custody documentation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-semibold text-gray-800 mb-2">Lab Analysis</h3>
              <p className="text-sm text-gray-600">AABB-accredited laboratory analysis with quality controls</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">5</div>
              <h3 className="font-semibold text-gray-800 mb-2">Court Report</h3>
              <p className="text-sm text-gray-600">Court-admissible results report delivered securely</p>
            </div>
          </div>
        </div>
      </section>

      {/* Breakdown by Test Type */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Detailed Cost Breakdown by Test Type</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Legal Paternity Test</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">What's Included:</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Professional sample collection</li>
                    <li>• Identity verification</li>
                    <li>• Chain of custody documentation</li>
                    <li>• AABB laboratory analysis</li>
                    <li>• Court-admissible report</li>
                    <li>• Total cost: $350 - $450</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">Additional Costs:</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Additional participants: +$100-150 each</li>
                    <li>• Rush processing: +$100-200</li>
                    <li>• Mobile collection: +$50-100</li>
                    <li>• Expert witness testimony: +$500-1000</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Legal Maternity Test</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">What's Included:</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Professional sample collection</li>
                    <li>• Identity verification</li>
                    <li>• Chain of custody documentation</li>
                    <li>• AABB laboratory analysis</li>
                    <li>• Court-admissible report</li>
                    <li>• Total cost: $400 - $500</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">Additional Costs:</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Additional participants: +$100-150 each</li>
                    <li>• Rush processing: +$100-200</li>
                    <li>• Mobile collection: +$50-100</li>
                    <li>• Expert witness testimony: +$500-1000</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Legal Relationship Tests</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">Siblingship Test:</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Professional sample collection</li>
                    <li>• Identity verification</li>
                    <li>• Chain of custody documentation</li>
                    <li>• AABB laboratory analysis</li>
                    <li>• Court-admissible report</li>
                    <li>• Total cost: $450 - $550</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">Grandparentage Test:</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Professional sample collection</li>
                    <li>• Identity verification</li>
                    <li>• Chain of custody documentation</li>
                    <li>• AABB laboratory analysis</li>
                    <li>• Court-admissible report</li>
                    <li>• Total cost: $450 - $550</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions to Ask Before Booking */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Questions to Ask Before Booking</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Cost & Payment</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• What's the total legal DNA test cost including all fees?</li>
                  <li>• Are there any hidden charges or additional costs?</li>
                  <li>• What payment methods do you accept?</li>
                  <li>• Do you offer payment plans or financing?</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Legal Requirements</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Is the laboratory AABB-accredited?</li>
                  <li>• Are results legally admissible in court?</li>
                  <li>• What documentation is provided?</li>
                  <li>• Do you provide expert witness testimony?</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Collection & Timing</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Where can collection be performed?</li>
                  <li>• How long until I receive results?</li>
                  <li>• What's the cost for rush processing?</li>
                  <li>• Can collection be done at different locations?</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Support & Service</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• What customer support is included?</li>
                  <li>• Is there a satisfaction guarantee?</li>
                  <li>• What if I need to reschedule?</li>
                  <li>• Are follow-up consultations available?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Reduce or Budget Cost */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Ways to Reduce or Budget for Legal DNA Test Cost</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Cost-Saving Strategies</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Compare multiple providers - prices can vary significantly between laboratories</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Ask about package deals - some providers offer discounts for multiple tests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Consider standard processing - rush fees can add 25-50% to total cost</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Choose in-office collection when possible - mobile collection adds fees</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Budgeting Tips</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>Set aside funds early - start saving as soon as you know you need testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>Check if court-ordered tests are covered by insurance or state programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>Consider payment plans - many providers offer flexible payment options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>Factor in all costs - include travel, time off work, and follow-up appointments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local Denver Context */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Legal DNA Testing in Denver: Local Options & Pricing</h2>
          <div className="bg-blue-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Finding Legal DNA Test Near Me in Denver</h3>
            <p className="text-gray-600 mb-6">
              Denver's competitive legal market offers several advantages for legal DNA test cost. With multiple AABB-accredited laboratories and certified collectors, families have access to professional legal DNA testing at competitive prices.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Denver Advantages:</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Multiple AABB-accredited laboratories</li>
                  <li>• Competitive pricing (5-10% below national average)</li>
                  <li>• Convenient local collection sites</li>
                  <li>• Same-day appointment availability</li>
                  <li>• Local customer support</li>
                  <li>• Certified collectors throughout metro area</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Denver Legal DNA Pricing:</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Legal Paternity: $350-450</li>
                  <li>• Legal Maternity: $400-500</li>
                  <li>• Siblingship: $450-550</li>
                  <li>• Grandparentage: $450-550</li>
                  <li>• Rush processing: +$100-200</li>
                  <li>• Mobile collection: +$50-100</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions About Legal DNA Test Cost</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">How much does a legal DNA test cost?</h3>
              <p className="text-gray-600">
                Legal DNA test costs typically range from $350 to $550 depending on the test type and number of participants. Legal paternity tests start at $350, maternity tests at $400, and relationship tests (siblingship, grandparentage) range from $450-$550. These costs include all professional collection, identity verification, and court-admissible reporting.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">What's included in the cost of a legal DNA test?</h3>
              <p className="text-gray-600">
                Legal DNA test costs include professional sample collection by certified collectors, identity verification with photo ID, chain of custody documentation, AABB-accredited laboratory analysis, and court-admissible results report. All fees are included upfront with no hidden charges or additional costs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Why do legal DNA tests cost more than at-home tests?</h3>
              <p className="text-gray-600">
                Legal DNA tests cost more due to additional requirements: professional sample collection by certified collectors, identity verification with photo ID, chain of custody documentation, AABB accreditation standards, and court-admissible reporting. These ensure legal validity and admissibility in court proceedings.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Does insurance cover legal DNA testing?</h3>
              <p className="text-gray-600">
                Most insurance plans do not cover legal DNA testing for paternity or relationship purposes, as it's considered elective. However, some court-ordered tests may be covered by insurance or state programs. Check with your insurance provider and consider payment plans if available.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Are there ways to reduce legal DNA test cost?</h3>
              <p className="text-gray-600">
                Yes, several strategies can help reduce costs: compare prices from multiple providers, ask about package deals or discounts, opt for standard processing instead of rush services, choose in-office collection when possible, and consider payment plans. Denver's competitive market often offers better pricing than other areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion + CTA */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Court-Admissible DNA Results?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Understanding legal DNA test cost helps you make informed decisions about your legal needs. Whether you need results for court, child support, or immigration, legal DNA testing provides the accuracy and admissibility you need for your case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/legal-paternity-tests" 
              className="bg-white text-blue-600 px-8 py-4 font-bold uppercase tracking-wide rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg border-2 border-white"
            >
              Learn More About <br />Legal DNA Testing
            </Link>
            <a
              href="tel:7209009342"
              onClick={() => {
                window.dataLayer?.push({
                  event: "phone_click",
                  phone_location: "LegalDNACostGuide - Corner Article CTA"
                });
              }}
              className="bg-blue-800 text-white px-8 py-4 font-bold uppercase tracking-wide rounded-lg hover:bg-blue-900 transition-all duration-300 shadow-lg border-2 border-blue-300"
            >
              Call Today <br /> (720) 900-9342
            </a>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Share This Article</h3>
              <p className="text-gray-600 mb-6">Help other families understand legal DNA testing costs and requirements</p>
              
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://milehighdnatesting.com/mile-high-dna-corner/legal-dna-cost-guide" 
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="font-medium">Facebook</span>
                </a>
                
                <a 
                  href="https://twitter.com/intent/tweet?url=https://milehighdnatesting.com/mile-high-dna-corner/legal-dna-cost-guide&text=Legal%20DNA%20Test%20Cost%3A%20Complete%20Pricing%20Guide%20for%20Court-Admissible%20Testing" 
                  className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className="font-medium">X / Twitter</span>
                </a>

                <a 
                  href="mailto:?subject=Legal%20DNA%20Test%20Cost%3A%20Complete%20Pricing%20Guide%20-%20Mile%20High%20DNA%20Testing&body=Check%20out%20this%20comprehensive%20guide%20about%20legal%20DNA%20testing%20costs:%0A%0Ahttps://milehighdnatesting.com/mile-high-dna-corner/legal-dna-cost-guide%0A%0AThis%20detailed%20guide%20explains%20legal%20DNA%20test%20pricing%2C%20requirements%2C%20and%20what%20to%20expect%20for%20court-admissible%20testing." 
                  className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span className="font-medium">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Sections */}
      <ServingColorado />
      <section className="py-8 px-6 bg-white border-t border-gray-100">
  <div className="max-w-4xl mx-auto text-center">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
      Affordable Legal DNA Testing in Denver and Across Colorado
    </h3>
    <p className="text-gray-700">
      <span className="font-semibold text-[#2C6FA6]">Mile High DNA Testing</span> proudly provides AABB-accredited <strong>legal DNA testing in Denver</strong>, Aurora, Lakewood, and surrounding Colorado cities. 
      Whether you need a <strong>court-admissible DNA test</strong> for paternity, immigration, or child support, 
      our certified collectors and bilingual staff ensure professional, confidential service every time.
    </p>
  </div>
</section>
      <CallToAction />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={closeModal}
          ></div>
          
          <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 p-6">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Ask the DNA Corner</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
                      Question
                    </label>
                    <textarea
                      id="question"
                      name="question"
                      value={formData.question}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="What would you like to know about legal DNA testing costs?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Question"}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank you!</h3>
                <p className="text-gray-600">
                  Thank you for reaching out! We'll get back to you soon.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default LegalDNACostGuide;
