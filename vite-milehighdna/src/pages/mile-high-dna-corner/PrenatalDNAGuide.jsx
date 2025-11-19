import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ServingColorado from "../../components/common/ServingColorado";
import CallToAction from "../../components/corner/CallToAction";

const PrenatalDNACost = () => {
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
        <title>Prenatal DNA Test Cost | Non-Invasive Prenatal Paternity (NIPP) Pricing & Guide</title>
        <meta 
          name="description" 
          content="Discover the true cost of prenatal DNA testing. Learn about non-invasive prenatal paternity (NIPP) tests, how they work, what affects cost, and what expecting mothers in Denver can expect to pay." 
        />
        <meta name="keywords" content="prenatal dna test cost, non-invasive prenatal paternity test, NIPP DNA test, prenatal paternity test cost, dna testing while pregnant, prenatal dna test near me" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Prenatal DNA Test Cost | Complete Pricing Guide" />
        <meta property="og:description" content="Get accurate pricing information for prenatal DNA tests. Compare costs, understand what drives pricing, and find the best option for your needs." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:url" content="https://milehighdnatesting.com/mile-high-dna-corner/prenatal-dna-cost" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does a prenatal DNA test cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Prenatal DNA test costs typically range from $1,500 to $2,000 depending on the test type. Non-invasive prenatal paternity tests (NIPP) cost $1,500-$1,800, while invasive tests like CVS or amniocentesis cost $1,200-$2,000."
                }
              },
              {
                "@type": "Question",
                "name": "What's the difference between invasive and non-invasive prenatal DNA tests?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Non-invasive prenatal DNA tests use a simple blood draw from the mother and cheek swab from the father, posing no risk to the baby. Invasive tests like CVS or amniocentesis involve sampling tissue or fluid directly from the womb, carrying small risks but providing earlier results."
                }
              },
              {
                "@type": "Question",
                "name": "Does insurance cover prenatal DNA testing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most insurance plans do not cover prenatal DNA testing for paternity purposes, as it's considered elective. However, some plans may cover invasive tests if there are medical concerns. Check with your insurance provider for specific coverage details."
                }
              },
              {
                "@type": "Question",
                "name": "When can I get a prenatal DNA test?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Non-invasive prenatal DNA tests can be performed as early as 7-8 weeks into pregnancy. Invasive tests like CVS can be done at 10-13 weeks, while amniocentesis is typically performed at 15-20 weeks."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" 
             style={{ backgroundImage: `url('/images/prenatal-hero.jpg')` }}>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Prenatal DNA Test Cost: 
              <span className="text-blue-600 block">Everything Expecting Parents Should Know</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Learn how much prenatal DNA testing costs, what makes the price vary, and how Non-Invasive Prenatal Paternity (NIPP) testing offers accuracy, safety, and peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('learn-about-prenatal-tests')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-8 py-4 font-bold uppercase tracking-wide rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg"
              >
                Learn About Prenatal Tests
              </button>
              <button 
                onClick={() => document.getElementById('cost-details')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 font-semibold uppercase tracking-wide rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Ask About Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Hook */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Understanding Prenatal DNA Test Cost for Expecting Parents</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              If you're expecting and want answers early, understanding prenatal DNA test cost is an important first step. The good news? Modern non-invasive prenatal paternity testing (NIPP) offers a safe, accurate way to get answers without any risk to your baby.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Whether you're looking for peace of mind or need legal documentation, knowing what to expect with prenatal DNA test cost helps you make the best decision for your growing family. We're here to guide you through everything you need to know about NIPP DNA test pricing and options.
            </p>
          </div>
        </div>
      </section>

      {/* What Is Non-Invasive Prenatal Paternity Testing (NIPP)? */}
      <section id="learn-about-prenatal-tests" className="py-16 px-6 md:px-12 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What Is Non-Invasive Prenatal Paternity Testing (NIPP)?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Non-invasive prenatal paternity testing (NIPP) is a revolutionary approach that uses cell-free fetal DNA found in the mother's bloodstream. During pregnancy, small amounts of your baby's DNA naturally circulate in your blood. Our advanced laboratory technology can isolate and analyze this DNA, comparing it to the potential father's sample to determine paternity.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                This NIPP DNA test is incredibly accurate (99.9%+) and completely safe for both you and your baby. Unlike older invasive methods, there's no risk of miscarriage or complications. It's simply a blood draw from you and a cheek swab from the potential father - that's it!
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-400">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-green-800">Safety First</h3>
              </div>
              <p className="text-gray-600">
                NIPP testing poses zero risk to your baby. It's completely non-invasive, requiring only a simple blood draw from you. No needles near your baby, no procedures that could cause harm. You can have peace of mind knowing you're choosing the safest option available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cost Varies */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Prenatal DNA Test Cost Varies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Test Type & Technology</h3>
              <p className="text-gray-600 mb-4">
                Non-invasive prenatal paternity tests use advanced cell-free DNA technology, which is more expensive than traditional methods. Invasive tests like CVS or amniocentesis require specialized medical procedures and equipment.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Cell-free DNA analysis technology</li>
                <li>• Medical procedure complexity</li>
                <li>• Laboratory equipment requirements</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Laboratory Accreditation</h3>
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
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Turnaround Time</h3>
              <p className="text-gray-600 mb-4">
                Faster results typically cost more due to priority processing, overtime laboratory work, and expedited shipping requirements.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Priority processing fees</li>
                <li>• Overtime laboratory costs</li>
                <li>• Express shipping charges</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Geographic Location</h3>
              <p className="text-gray-600 mb-4">
                Local market competition, cost of living, and regional laboratory availability all influence prenatal DNA test cost in different areas.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Regional cost variations</li>
                <li>• Local competition levels</li>
                <li>• Shipping and handling costs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Price Ranges */}
      <section id="cost-details" className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Prenatal DNA Test Cost: What Expecting Parents Can Expect</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200 relative">
              <div className="absolute -top-3 left-6 bg-blue-600 text-white px-3 py-1 text-sm font-semibold rounded-full">
                RECOMMENDED
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-4 mt-2">Non-Invasive Prenatal Paternity (NIPP)</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">$1,500 - $1,800</div>
              <p className="text-gray-600 mb-4">Denver average: Safest option for expecting mothers</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Available from 7 weeks pregnancy</li>
                <li>• Blood draw from mother</li>
                <li>• Cheek swab from father</li>
                <li>• No risk to baby</li>
                <li>• Results in 7-10 business days</li>
                <li>• 99.9% accuracy</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-4">Chorionic Villus Sampling (CVS)</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">$1,200 - $1,800</div>
              <p className="text-gray-600 mb-4">Earlier results, small risk</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Performed 10-13 weeks</li>
                <li>• Tissue sample from placenta</li>
                <li>• Medical procedure required</li>
                <li>• Results in 1-2 weeks</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Amniocentesis <br />  </h3>
              <div className="text-3xl font-bold text-purple-600 mb-2"><br />$1,500 - $2,000</div>
              <p className="text-gray-600 mb-4">Most accurate, later timing</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Performed 15-20 weeks</li>
                <li>• Amniotic fluid sample</li>
                <li>• Medical procedure required</li>
                <li>• Results in 1-2 weeks</li>
              </ul>
            </div>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <p className="text-gray-700">
              Note: These are general price ranges. Actual prenatal DNA test cost may vary based on location, laboratory, additional services, and current promotions. Always request a detailed quote before booking.
            </p>
          </div>
          
          {/* What's Included in NIPP Testing */}
          <div className="mt-8 bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
            <h3 className="text-xl font-semibold text-green-800 mb-4">What's Included in Your NIPP Test:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Blood draw & cheek swab collection kits
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Professional lab processing
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Results within 3-5 business days
                </li>
              </ul>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Confidential reporting
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Customer support throughout
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AABB-accredited laboratory
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How Prenatal DNA Testing Works */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How Prenatal DNA Testing Works</h2>
          <div className="grid md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold text-gray-800 mb-2">Schedule or Order</h3>
              <p className="text-sm text-gray-600">Book your appointment or order your collection kit online</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold text-gray-800 mb-2">Sample Collection</h3>
              <p className="text-sm text-gray-600">Simple blood draw from mother and cheek swab from father</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold text-gray-800 mb-2">Lab Processing</h3>
              <p className="text-sm text-gray-600">Advanced cell-free fetal DNA analysis in our AABB lab</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-semibold text-gray-800 mb-2">Results Delivered</h3>
              <p className="text-sm text-gray-600">Secure, confidential results delivered within 3-5 days</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">5</div>
              <h3 className="font-semibold text-gray-800 mb-2">Legal Documentation</h3>
              <p className="text-sm text-gray-600">Optional court-admissible documentation if needed</p>
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
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Non-Invasive Prenatal Paternity Test (NIPP)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">What's Included:</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Blood collection kit</li>
                    <li>• Cheek swab collection kit</li>
                    <li>• Laboratory analysis</li>
                    <li>• Results report</li>
                    <li>• Customer support</li>
                    <li>• Total cost: $1,500 - $2,000</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">Additional Costs:</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Blood draw fee: $50-100</li>
                    <li>• Express shipping: $25-50</li>
                    <li>• Rush processing: $100-200</li>
                    <li>• Legal documentation: $50-100</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Invasive Prenatal DNA Tests</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">CVS Procedure:</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Medical consultation: $200-400</li>
                    <li>• Ultrasound guidance: $300-500</li>
                    <li>• Tissue sampling: $400-600</li>
                    <li>• Laboratory analysis: $500-700</li>
                    <li>• Total cost: $1,400 - $2,200</li>

                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">Amniocentesis:</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Medical consultation: $200-400</li>
                    <li>• Ultrasound guidance: $300-500</li>
                    <li>• Fluid sampling: $500-700</li>
                    <li>• Laboratory analysis: $500-700</li>
                    <li>• Total cost: $1,500 - $2,300</li>
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
                  <li>• What's the total prenatal DNA test cost including all fees?</li>
                  <li>• Are there any hidden charges or additional costs?</li>
                  <li>• What payment methods do you accept?</li>
                  <li>• Do you offer payment plans or financing?</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Timing & Results</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• When can the test be performed?</li>
                  <li>• How long until I receive results?</li>
                  <li>• What's the cost for rush processing?</li>
                  <li>• Can results be expedited if needed?</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Legal & Medical</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Is the laboratory AABB-accredited?</li>
                  <li>• Are results legally admissible?</li>
                  <li>• What medical supervision is provided?</li>
                  <li>• What are the risks and safety measures?</li>
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
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Ways to Reduce or Budget for Prenatal DNA Test Cost</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Cost-Saving Strategies</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Choose non-invasive tests when possible - they're typically 50% less expensive than invasive procedures</span>
                </li>
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
                  <span>Check insurance coverage - some plans may cover portions of medical procedures</span>
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
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Prenatal DNA Testing in Denver: Local Options & Pricing</h2>
          <div className="bg-blue-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Finding Prenatal DNA Test Near Me in Denver</h3>
            <p className="text-gray-600 mb-6">
              Denver's competitive healthcare market offers several advantages for prenatal DNA test cost. With multiple AABB-accredited laboratories and medical facilities, expecting mothers have more options and competitive pricing than the national average.
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
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Denver NIPP Pricing:</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• NIPP: $1,500-2,000</li>
                  <li>• CVS: $1,400-2,200 (includes medical fees)</li>
                  <li>• Amniocentesis: $1,500-2,300 (full service)</li>
                  <li>• Rush processing: +$150-250</li>
                  <li>• Same-day collection: Often available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions About Prenatal DNA Test Cost</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">How much does a prenatal DNA test cost?</h3>
              <p className="text-gray-600">
                Prenatal DNA test cost typically ranges from $1,500 to $2,000 depending on the test type. Non-invasive prenatal paternity tests (NIPP) cost $450-$800 in Denver (vs. $500-$800 nationally), while invasive tests like CVS or amniocentesis cost $1,200-$2,000. NIPP testing offers the best value with no risk to your baby.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">What's the difference between invasive and non-invasive prenatal DNA tests?</h3>
              <p className="text-gray-600">
                Non-invasive prenatal paternity testing (NIPP) uses a simple blood draw from the mother and cheek swab from the father, posing no risk to the baby. Invasive tests like CVS or amniocentesis involve sampling tissue or fluid directly from the womb, carrying small risks but providing earlier results. NIPP is the safest option for expecting mothers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Does insurance cover prenatal DNA testing?</h3>
              <p className="text-gray-600">
                Most insurance plans do not cover prenatal DNA testing for paternity purposes, as it's considered elective. However, some plans may cover invasive tests if there are medical concerns. Check with your insurance provider for specific coverage details and consider budgeting for out-of-pocket costs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">When can I get a prenatal DNA test?</h3>
              <p className="text-gray-600">
                Non-invasive prenatal DNA tests can be performed as early as 7-8 weeks into pregnancy, making them perfect for early answers. Invasive tests like CVS can be done at 10-13 weeks, while amniocentesis is typically performed at 15-20 weeks. Earlier testing with NIPP gives you more time to prepare.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Are there ways to reduce prenatal DNA test cost?</h3>
              <p className="text-gray-600">
                Yes, several strategies can help reduce costs: choose non-invasive prenatal paternity testing (NIPP) when possible, compare prices from multiple providers, ask about package deals or discounts, opt for standard processing instead of rush services, and consider payment plans if available. Denver's competitive market often offers better pricing than other areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion + CTA */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Answers Before Your Baby Arrives?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Understanding prenatal DNA test cost helps you make informed decisions about your family's future. Whether you need peace of mind or legal documentation, Non-Invasive Prenatal Paternity Testing offers the safest, most accurate way to get answers early in your pregnancy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="https://calendly.com/milehighdnatesting/noninvasive-prenatal-paternity" 
              className="bg-white text-blue-600 px-8 py-4 font-bold uppercase tracking-wide rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg border-2 border-white"
            >
              Schedule Your <br />Prenatal Test
            </Link>
            <a
              href="tel:7209009342"
              onClick={() => {
                window.dataLayer?.push({
                  event: "phone_click",
                  phone_location: "PrenatalDNAGuide - Corner Article CTA"
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
              <p className="text-gray-600 mb-6">Help other families understand prenatal DNA testing costs and options</p>
              
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://milehighdnatesting.com/mile-high-dna-corner/prenatal-dna-cost-guide" 
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
                  href="https://twitter.com/intent/tweet?url=https://milehighdnatesting.com/mile-high-dna-corner/prenatal-dna-cost-guide&text=Prenatal%20DNA%20Test%20Cost%3A%20Everything%20Expecting%20Parents%20Should%20Know" 
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
                  href="mailto:?subject=Prenatal%20DNA%20Test%20Cost%3A%20Everything%20Expecting%20Parents%20Should%20Know%20-%20Mile%20High%20DNA%20Testing&body=Check%20out%20this%20comprehensive%20guide%20about%20prenatal%20DNA%20testing%20costs:%0A%0Ahttps://milehighdnatesting.com/mile-high-dna-corner/prenatal-dna-cost-guide%0A%0AThis%20detailed%20guide%20explains%20prenatal%20DNA%20test%20pricing%2C%20compares%20different%20test%20types%2C%20and%20provides%20tips%20for%20budgeting%20and%20cost%20reduction." 
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
                      placeholder="What would you like to know about prenatal DNA testing costs?"
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

export default PrenatalDNACost;
