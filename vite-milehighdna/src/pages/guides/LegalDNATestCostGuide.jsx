import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ServingColorado from "../../components/common/ServingColorado";
import CallToAction from "../../components/corner/CallToAction";

const LegalDNATestCostGuide = () => {
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
        <title>Legal DNA Test Cost Guide | Court-Admissible Testing Pricing</title>
        <meta 
          name="description" 
          content="Comprehensive guide to legal DNA test costs and pricing. Learn about court-admissible DNA test costs, chain of custody requirements, and how to budget for legal paternity testing. Informational resource only." 
        />
        <meta name="keywords" content="legal dna test cost, court admissible dna test cost, legal paternity test pricing, chain of custody dna test price, legal dna testing price guide" />
        
        {/* Canonical - self-referencing */}
        <link rel="canonical" href="https://milehighdnatesting.com/guides/legal-dna-test-cost" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Legal DNA Test Cost Guide | Complete Pricing Information" />
        <meta property="og:description" content="Understand legal DNA test costs and pricing. Educational guide covering court-admissible testing costs, what affects pricing, and budgeting tips." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:url" content="https://milehighdnatesting.com/guides/legal-dna-test-cost" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        
        {/* Article Schema + FAQ Schema ONLY (no LocalBusiness, WebPage, Service, Product) */}
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Legal DNA Test Cost Guide | Court-Admissible Testing Pricing",
              "description": "Comprehensive guide to legal DNA test costs and pricing. Learn about court-admissible DNA test costs, chain of custody requirements, and how to budget for legal paternity testing.",
              "image": "https://milehighdnatesting.com/images/banner-1200.png",
              "author": { "@type": "Organization", "name": "Mile High DNA Testing" },
              "publisher": {
                "@type": "Organization",
                "name": "Mile High DNA Testing",
                "logo": { "@type": "ImageObject", "url": "https://milehighdnatesting.com/logo.png" }
              },
              "url": "https://milehighdnatesting.com/guides/legal-dna-test-cost",
              "mainEntityOfPage": "https://milehighdnatesting.com/guides/legal-dna-test-cost",
              "datePublished": "2025-01-01",
              "dateModified": "2026-01-24"
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('cost-details')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-8 py-4 font-bold uppercase tracking-wide rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg"
              >
                View Pricing Details
              </button>
              <Link 
                to="/services/legal-paternity-testing"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 font-semibold uppercase tracking-wide rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Schedule a Test
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 px-6 md:px-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">›</span>
            <Link to="/guides" className="hover:text-blue-600">Guides</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-800">Legal DNA Test Cost</span>
          </nav>
        </div>
      </section>

      {/* Informational Notice */}
      <section className="py-8 px-6 md:px-12 bg-blue-50 border-b border-blue-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
            <p className="text-gray-700 text-lg">
              <strong>About This Guide:</strong> This page is an <em>informational pricing guide only</em>, designed to help you understand the costs associated with legal DNA testing. For booking or service-specific information, please visit our{' '}
              <Link to="/services/legal-paternity-testing" className="text-blue-600 underline font-medium">
                Legal Paternity Testing Service Page
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Understanding Legal DNA Test Cost for Court-Admissible Results</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              When you need DNA test results that can be used in court, for child support, <Link to="/services/immigration-dna-testing" className="text-blue-600 underline">immigration</Link>, or legal documentation, understanding <Link to="/services/legal-paternity-testing" className="text-blue-600 underline">court-admissible DNA test</Link> cost is crucial. Legal DNA testing follows strict chain-of-custody procedures and AABB accreditation standards to ensure court admissibility.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Whether you're dealing with paternity disputes, immigration cases, or inheritance matters, knowing what to expect with legal DNA test cost helps you make informed decisions. To <Link to="/appointments" className="text-blue-600 underline">book a DNA test appointment</Link>, visit our appointments page.
            </p>
          </div>
          <p className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded text-gray-800 text-lg font-medium mb-8">
            The average cost of a legal DNA test ranges from <strong>$350 to $550</strong>, depending on the type of test and number of participants.
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
                This process ensures that DNA samples are properly collected, documented, and analyzed according to legal standards.
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
                Legal DNA tests meet strict chain-of-custody requirements and AABB accreditation standards, making results admissible in courts and government agencies.
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
                AABB-accredited laboratories charge more due to higher quality standards and legal admissibility requirements.
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
                Strict chain-of-custody procedures require additional documentation, tracking, and verification steps.
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
                Legal DNA tests include comprehensive documentation designed specifically for court and government use.
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
              <p className="text-gray-600 mb-4">Father and child testing</p>
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
              Note: These are general price ranges. Actual legal DNA test cost may vary based on location, number of participants, additional services, and current promotions. Always request a detailed quote before booking.
            </p>
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
                Legal DNA test costs typically range from $350 to $550 depending on the test type and number of participants. Legal paternity tests start at $350, maternity tests at $400, and relationship tests range from $450-$550.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">What's included in the cost of a legal DNA test?</h3>
              <p className="text-gray-600">
                Legal DNA test costs include professional sample collection, identity verification, chain of custody documentation, AABB-accredited laboratory analysis, and court-admissible results report. All fees are included upfront.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Why do legal DNA tests cost more than at-home tests?</h3>
              <p className="text-gray-600">
                Legal DNA tests cost more due to professional sample collection, identity verification, chain of custody documentation, AABB accreditation standards, and court-admissible reporting. These ensure legal validity and admissibility.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Does insurance cover legal DNA testing?</h3>
              <p className="text-gray-600">
                Most insurance plans do not cover legal DNA testing for paternity purposes, as it's considered elective. However, some court-ordered tests may be covered. Check with your insurance provider.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Court-Admissible DNA Results?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Understanding legal DNA test cost helps you make informed decisions. Visit our service page for current pricing and to schedule your test.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/services/legal-paternity-testing" 
              className="bg-white text-blue-600 px-8 py-4 font-bold uppercase tracking-wide rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg border-2 border-white"
            >
              View Legal Testing Services
            </Link>
            <a
              href="tel:7209009342"
              className="bg-blue-800 text-white px-8 py-4 font-bold uppercase tracking-wide rounded-lg hover:bg-blue-900 transition-all duration-300 shadow-lg border-2 border-blue-300"
            >
              Call (720) 900-9342
            </a>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Share This Guide</h3>
              <p className="text-gray-600 mb-6">Help other families understand legal DNA testing costs</p>
              
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://milehighdnatesting.com/guides/legal-dna-test-cost" 
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
                  href="https://twitter.com/intent/tweet?url=https://milehighdnatesting.com/guides/legal-dna-test-cost&text=Legal%20DNA%20Test%20Cost%20Guide" 
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
                  href="mailto:?subject=Legal%20DNA%20Test%20Cost%20Guide&body=Check%20out%20this%20guide%20about%20legal%20DNA%20testing%20costs:%0A%0Ahttps://milehighdnatesting.com/guides/legal-dna-test-cost" 
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

      <ServingColorado />
      <CallToAction />
    </main>
  );
};

export default LegalDNATestCostGuide;
