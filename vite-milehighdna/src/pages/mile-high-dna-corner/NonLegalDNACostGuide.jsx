import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ServingColorado from "../../components/common/ServingColorado";
import CallToAction from "../../components/corner/CallToAction";

const NonLegalDNACostGuide = () => {
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
        <title>Non-Legal DNA Test Cost in Denver | Peace of Mind & At-Home Testing Prices</title>
        <meta 
          name="description" 
          content="Compare non-legal DNA test costs in Denver. Learn about peace of mind and at-home DNA test pricing, what’s included, and how Mile High DNA Testing provides affordable, accurate results." 
        />
        <meta name="keywords" content="non legal dna test cost, peace of mind dna test, at home dna test cost, personal dna testing denver, non legal paternity test" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Non-Legal DNA Test Cost | Complete Pricing Guide" />
        <meta property="og:description" content="Get accurate pricing information for non-legal DNA tests. Compare costs, understand options, and find the best peace of mind testing solution." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:url" content="https://milehighdnatesting.com/mile-high-dna-corner/non-legal-dna-cost-guide" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(
                {
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "Non-Legal DNA Test Cost in Denver | Peace of Mind & At-Home Testing Prices",
                    "author": { "@type": "Organization", "name": "Mile High DNA Testing" },
                    "publisher": { "@type": "Organization", "name": "Mile High DNA Testing" },
                    "inLanguage": "en-US",
                    "mainEntityOfPage": {
                      "@type": "WebPage",
                      "@id": "https://milehighdnatesting.com/mile-high-dna-corner/non-legal-dna-cost-guide"
                    },
                    "description": "Compare non-legal DNA test costs in Denver, including peace of mind, at-home, and relationship DNA testing options. Affordable pricing from Mile High DNA Testing."
                  },
            {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does a non-legal DNA test cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Non-legal DNA test costs typically range from $199 to $299 depending on the test type and collection method. At-home peace of mind tests start at $199, while in-office collection costs $249-$299."
                }
              },
              {
                "@type": "Question",
                "name": "What's the difference between legal and non-legal DNA tests?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Non-legal DNA tests are for personal peace of mind and cannot be used in court. They don't require professional collection or chain of custody documentation. Legal tests require professional collection and are court-admissible."
                }
              },
              {
                "@type": "Question",
                "name": "Are non-legal DNA tests accurate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, non-legal DNA tests provide the same scientific accuracy as legal tests when processed by AABB-accredited laboratories. The difference is in collection method and documentation, not accuracy."
                }
              },
              {
                "@type": "Question",
                "name": "Can I upgrade a non-legal test to legal later?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, non-legal tests cannot be upgraded to legal tests because they don't meet chain of custody requirements. If you need legal results, you'll need to take a separate legal DNA test."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" 
             style={{ backgroundImage: `url('/images/peace-of-mind-hero.jpg')` }}>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Non-Legal DNA Test Cost: 
              <span className="text-blue-600 block">Complete Pricing Guide for Peace of Mind Testing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Learn how much non-legal DNA testing costs, what makes it different from legal tests, and how to budget for personal peace of mind paternity, maternity, and relationship testing.
            </p>
            <div className="flex justify-center">
              <Link 
                to="https://calendly.com/milehighdnatesting/non-legal-paternity-test"
                className="bg-blue-600 text-white px-8 py-4 font-bold uppercase tracking-wide rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg"
              >
                Book Your Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Hook */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Understanding Non-Legal DNA Test Cost for <br />Personal Peace of Mind</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              When you need answers for personal peace of mind rather than legal purposes, non-legal DNA testing offers an affordable and convenient option. These tests provide the same scientific accuracy as legal tests but without the additional costs of professional collection and court documentation.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Whether you're seeking clarity about family relationships, want to confirm paternity privately, or need answers for personal reasons, understanding non-legal DNA test cost helps you make informed decisions about your testing options.
            </p>
          </div>
        </div>
      </section>

      {/* What Is Non-Legal DNA Testing? */}
      <section id="learn-about-non-legal-tests" className="py-16 px-6 md:px-12 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What Is Non-Legal DNA Testing?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Non-legal DNA testing, also called peace of mind testing, is designed for personal knowledge and cannot be used in court or legal proceedings. These tests use the same scientific methods as legal tests but don't require professional collection or chain of custody documentation.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Non-legal tests are perfect for families who want accurate answers for personal reasons, such as confirming relationships, satisfying curiosity, or making informed family decisions without legal implications.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-400">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-green-800">Peace of Mind</h3>
              </div>
              <p className="text-gray-600">
                Non-legal DNA tests provide accurate answers for personal peace of mind without the additional costs and requirements of legal testing. Perfect for private family decisions.
              </p>
            </div>
          </div>
          <Link to="/mile-high-dna-corner/legal-dna-cost-guide" className="text-green-700 underline">
  Learn how legal DNA test costs compare.
</Link>

        </div>
      </section>

      {/* Why Non-Legal DNA Tests Cost Less */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Non-Legal DNA Test Cost Is Lower Than Legal Tests</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">No Professional Collection</h3>
              <p className="text-gray-600 mb-4">
                Non-legal tests allow self-collection or simple collection methods, eliminating the need for certified collectors and professional oversight.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Self-collection options</li>
                <li>• At-home convenience</li>
                <li>• No collector fees</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">No Identity Verification</h3>
              <p className="text-gray-600 mb-4">
                Non-legal tests don't require photo ID verification or formal identity documentation, reducing administrative costs.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• No ID verification process</li>
                <li>• Simplified documentation</li>
                <li>• Reduced administrative costs</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">No Chain of Custody</h3>
              <p className="text-gray-600 mb-4">
                Without chain of custody requirements, non-legal tests don't need the extensive documentation and tracking that legal tests require.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Simplified documentation</li>
                <li>• No custody tracking</li>
                <li>• Reduced processing costs</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Reporting</h3>
              <p className="text-gray-600 mb-4">
                Non-legal tests provide personal reports rather than court-admissible documentation, reducing reporting and verification costs.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Personal results format</li>
                <li>• No court documentation</li>
                <li>• Simplified reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Price Ranges */}
      <section id="cost-details" className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Non-Legal DNA Test Cost: What Families Can Expect</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200 relative">
              <div className="absolute -top-3 left-6 bg-green-600 text-white px-3 py-1 text-sm font-semibold rounded-full">
                MOST AFFORDABLE
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4 mt-2">At-Home Peace of Mind Test</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">$199 - $249</div>
              <p className="text-gray-600 mb-4">Denver average: Self-collection kit</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• At-home collection kit</li>
                <li>• Self-collection instructions</li>
                <li>• Prepaid return shipping</li>
                <li>• AABB-accredited laboratory</li>
                <li>• Results in 3-5 business days</li>
                <li>• Personal results report</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
              <h3 className="text-xl font-bold text-blue-800 mb-4">In-Office Collection</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">$249 - $299</div>
              <p className="text-gray-600 mb-4">Professional collection, personal use</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Professional sample collection</li>
                <li>• Convenient office location</li>
                <li>• AABB-accredited laboratory</li>
                <li>• Results in 3-5 business days</li>
                <li>• Personal results report</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Relationship Tests</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">$299 - $399</div>
              <p className="text-gray-600 mb-4">Siblingship, grandparentage</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Multiple participants</li>
                <li>• At-home or in-office</li>
                <li>• AABB-accredited laboratory</li>
                <li>• Results in 3-5 business days</li>
                <li>• Personal results report</li>
              </ul>
            </div>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <p className="text-gray-700">
              Note: These are general price ranges for Denver area. Actual non-legal DNA test cost may vary based on collection method, number of participants, additional services, and current promotions. Always request a detailed quote before booking.
            </p>
          </div>
          
          {/* What's Included in Non-Legal Testing */}
          <div className="mt-8 bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
            <h3 className="text-xl font-semibold text-green-800 mb-4">What's Included in Your Non-Legal DNA Test:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Collection kit or in-office collection
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Clear collection instructions
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Prepaid return shipping (at-home)
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
                  Personal results report
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

      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions About Non-Legal DNA Test Cost</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">How much does a non-legal DNA test cost?</h3>
              <p className="text-gray-600">
                Non-legal DNA test costs typically range from $199 to $399 depending on the test type and collection method. At-home peace of mind tests start at $199, in-office collection costs $249-$299, and relationship tests range from $299-$399. These costs include all collection materials and laboratory analysis.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">What's the difference between legal and non-legal DNA tests?</h3>
              <p className="text-gray-600">
                Non-legal DNA tests are for personal peace of mind and cannot be used in court or legal proceedings. They don't require professional collection, identity verification, or chain of custody documentation. Legal tests require professional collection and are court-admissible but cost significantly more.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Are non-legal DNA tests accurate?</h3>
              <p className="text-gray-600">
                Yes, non-legal DNA tests provide the same scientific accuracy as legal tests when processed by AABB-accredited laboratories. The difference is in collection method and documentation, not accuracy. Both types use identical laboratory analysis methods.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Can I upgrade a non-legal test to legal later?</h3>
              <p className="text-gray-600">
                No, non-legal tests cannot be upgraded to legal tests because they don't meet chain of custody requirements. If you need legal results later, you'll need to take a separate legal DNA test with professional collection and identity verification.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Are there ways to reduce non-legal DNA test cost?</h3>
              <p className="text-gray-600">
                Yes, several strategies can help reduce costs: choose at-home collection when possible, compare prices from multiple providers, ask about package deals or discounts, opt for standard processing instead of rush services, and consider payment plans. Denver's competitive market often offers better pricing than other areas.
              </p>
            </div>
          </div>
        </div>
      </section>



      <section className="py-8 px-6 bg-white border-t border-gray-100">
  <div className="max-w-4xl mx-auto text-center">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
      Peace of Mind DNA Testing for Denver Families
    </h3>
    <p className="text-gray-700">
      At <span className="font-semibold text-[#2C6FA6]">Mile High DNA Testing</span>, we proudly serve families across Denver, Aurora, and Lakewood with accurate, affordable, and confidential non-legal DNA testing. 
      Whether you choose our at-home DNA test kits or in-office collection, you’ll receive bilingual support, fast results, and professional guidance every step of the way.
    </p>
    <div className="mt-6">
      <Link 
        to="/products/peace-of-mind-dna-kit" 
        className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <span>Order Your At-Home Peace of Mind DNA Kit</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </div>

</section>


      {/* Conclusion + CTA */}
      <section className="py-16 px-6 md:px-12 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready for Personal Peace of Mind?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Understanding non-legal DNA test cost helps you make informed decisions about your personal testing needs. Whether you need answers for family clarity or personal peace of mind, non-legal DNA testing provides accurate results at an affordable price.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/peace-of-mind-paternity-tests" 
              className="bg-blue-600 text-white px-8 py-4 font-bold uppercase tracking-wide rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg"
            >
              Learn More About <br />Peace of Mind Testing
            </Link>
            <a
              href="tel:7209009342"
              onClick={() => {
                window.dataLayer?.push({
                  event: "phone_click",
                  phone_location: "NonLegalDNACostGuide - Corner Article CTA"
                });
              }}
              className="bg-gray-800 text-white px-8 py-4 font-bold uppercase tracking-wide rounded-lg hover:bg-gray-900 transition-all duration-300 shadow-lg"
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
              <p className="text-gray-600 mb-6">Help other families understand non-legal DNA testing costs and options</p>
              
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://milehighdnatesting.com/mile-high-dna-corner/non-legal-dna-cost-guide" 
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
                  href="https://twitter.com/intent/tweet?url=https://milehighdnatesting.com/mile-high-dna-corner/non-legal-dna-cost-guide&text=Non-Legal%20DNA%20Test%20Cost%3A%20Complete%20Pricing%20Guide%20for%20Peace%20of%20Mind%20Testing" 
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
                  href="mailto:?subject=Non-Legal%20DNA%20Test%20Cost%3A%20Complete%20Pricing%20Guide%20-%20Mile%20High%20DNA%20Testing&body=Check%20out%20this%20comprehensive%20guide%20about%20non-legal%20DNA%20testing%20costs:%0A%0Ahttps://milehighdnatesting.com/mile-high-dna-corner/non-legal-dna-cost-guide%0A%0AThis%20detailed%20guide%20explains%20non-legal%20DNA%20test%20pricing%2C%20options%2C%20and%20what%20to%20expect%20for%20peace%20of%20mind%20testing." 
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                      placeholder="What would you like to know about non-legal DNA testing costs?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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

export default NonLegalDNACostGuide;
