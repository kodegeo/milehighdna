import HeroSection from "../components/common/HeroSection";
import { Link } from "react-router-dom";
import { useState } from "react";
import dnaLabHero from "../assets/images/portrait-dna.png";
import prenatalImg from "../assets/images/prenatal-2.jpg";
import ServingColorado from "../components/common/ServingColorado";
import CallToAction from "../components/corner/CallToAction";

export default function MileHighDNACorner() {
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
        // Auto-close modal after 3 seconds
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
    <div className="bg-white text-gray-900">
      {/* Hero Banner - Magazine Style */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${dnaLabHero})` }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-2 md:px-4 lg:px-8 w-full flex justify-between items-center">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Local Answers.<br />
                Real Stories.<br />
                <span className="text-blue-300">Honest Insight.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                Welcome to the Mile High DNA Corner — your friendly local guide for understanding DNA testing, real family experiences, and what to expect before you book your test.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-blue-900 px-8 py-4 font-bold uppercase tracking-wide rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
                >
                  Ask the DNA Corner
                </button>
                <a 
                  href="#featured" 
                  className="border-2 border-white text-white px-8 py-4 font-semibold uppercase tracking-wide rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
                >
                  Read Our Stories
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom right branding */}
          <div className="hidden lg:block absolute bottom-8 right-6 md:right-12 lg:right-24 flex items-center h-12">
            <div className="text-white text-lg font-bold uppercase tracking-wider">
              Mile High DNA Corner
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section id="featured" className="py-20 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Story</h2>
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Prenatal DNA Testing: What You’ll Pay — And Why</h3>
              <p className="text-gray-600 mb-4">As you prepare to welcome your little one, you might be asking a very practical question: How much does a prenatal DNA test cost?</p>
              <div className="text-sm text-gray-500 mb-4">
                <span>By Mile High DNA Corner Team</span>
              </div>
              <Link to="/mile-high-dna-corner/how-much-does-a-prenatal-dna-test-cost" className="text-blue-600 font-semibold hover:text-blue-800">
                Read More →
              </Link>
            </div>
            <div className="md:w-1/2">
              <img src={prenatalImg} alt="Prenatal DNA testing consultation" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Other Articles */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">More from the Nearby DNA Corner</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src="/images/legal-vs-non-legal-scale.png" alt="Legal vs Non-Legal DNA Testing" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Legal vs. Non-Legal DNA Testing: What’s the Difference?</h3>
              <p className="text-gray-600 mb-4">What's the difference, and which one is right for you?</p>
              <div className="text-sm text-gray-500 mb-4">
                <span>By Mile High DNA Corner Team</span> • <span>September 2025</span>
              </div>
              <Link to="/mile-high-dna-corner/legal-vs-non-legal-dna-testing-guide" className="text-blue-600 font-semibold hover:text-blue-800">
                Read More →
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src="/images/at-home-test-kit.png" alt="Lab process" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">How Reliable and Accurate Are Home DNA Tests?</h3>
              <p className="text-gray-600 mb-4">Learn how to compare at-home DNA kits for accuracy and reliability.</p>
              <div className="text-sm text-gray-500 mb-4">
                <span>By Staff Feature</span> • <span>August 2025</span>
              </div>
              <Link to="/mile-high-dna-corner/how-reliable-and-accurate-are-home-dna-tests" className="text-blue-600 font-semibold hover:text-blue-800">
                Read More →
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src="/images/answer-matter-most.png" alt="Family stories" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">When the Answers Matter Most: A Family DNA Story</h3>
              <p className="text-gray-600 mb-4">Discover how families across Denver find answers through DNA testing</p>
              <div className="text-sm text-gray-500 mb-4">
                <span>By Community Voices</span> • <span>August 2025</span>
              </div>
              <Link to="/mile-high-dna-corner/family-relationship-dna-testing-denver" className="text-blue-600 font-semibold hover:text-blue-800">
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-[#2C6FA6] text-white text-center py-12 px-6">
        <h3 className="text-2xl font-semibold mb-4">Have a Question?</h3>
        <p className="mb-6 text-lg text-gray-100">
          The Mile High DNA Corner is here to help you understand the process, cost, and experience of DNA testing in Denver.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-[#2C6FA6] px-6 py-3 font-bold uppercase tracking-wide rounded hover:bg-gray-100 transition"
        >
          Ask the DNA Corner
        </button>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 p-6">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Ask the DNA Corner
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
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
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
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
                    <label
                      htmlFor="question"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
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
                      placeholder="What would you like to know about DNA testing?"
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
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Thank you!
                </h3>
                <p className="text-gray-600">
                  Thank you for reaching out! We'll get back to you soon.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer Sections */}
      <ServingColorado />
      <CallToAction />
    </div>
  );
}
