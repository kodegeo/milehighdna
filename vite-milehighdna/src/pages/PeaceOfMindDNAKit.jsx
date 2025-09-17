import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import peaceOfMindKitImage from '../assets/images/peace-of-mind-kit.jpg';

const PeaceOfMindDNAKit = () => {
  const navigate = useNavigate();
  const [showUSModal, setShowUSModal] = useState(false);

  const benefits = [
    "Fast results in 3-5 business days",
    "99.9% accuracy guarantee",
    "Completely confidential and private",
    "Easy-to-use home collection kit",
    "Professional laboratory testing",
    "Detailed results report included",
    "No court appearance required",
    "Affordable pricing with no hidden fees"
  ];

  const handleUSOrder = () => {
    setShowUSModal(true);
  };

  const handleScheduleAppointment = () => {
    // Open Calendly link in new tab
    window.open('https://calendly.com/milehighdnatesting/non-legal-paternity-test', '_blank');
    setShowUSModal(false);
  };

  const handleShipToAddress = () => {
    navigate('/checkout-domestic');
    setShowUSModal(false);
  };

  const handleInternationalOrder = () => {
    navigate('/checkout-international');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src={peaceOfMindKitImage}
                  alt="Peace of Mind Paternity Test Kit"
                  className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  $99
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Peace of Mind
                    <span className="block text-blue-600">Paternity Test Kit</span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Get the answers you need with our fast, accurate, and completely confidential 
                    paternity test. Perfect for personal peace of mind without the legal requirements.
                  </p>
                </div>

                {/* Benefits List */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900">What's Included:</h3>
                  <ul className="space-y-2">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4 pt-6">
                  <button
                    onClick={handleUSOrder}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    Order Within the U.S.
                  </button>
                  
                  <button
                    onClick={handleInternationalOrder}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300"
                  >
                    Order Internationally
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Results</h3>
              <p className="text-gray-600">Get your results in just 3-5 business days after we receive your samples.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">99.9% Accurate</h3>
              <p className="text-gray-600">Our state-of-the-art laboratory ensures the highest accuracy in DNA testing.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Completely Private</h3>
              <p className="text-gray-600">Your test results are confidential and will never be shared without your consent.</p>
            </div>
          </div>
        </div>
      </div>

      {/* US Order Modal */}
      {showUSModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Choose Your Order Method</h2>
              <button
                onClick={() => setShowUSModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={handleScheduleAppointment}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Schedule In-Office Appointment
              </button>
              
              <button
                onClick={handleShipToAddress}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
              >
                Ship to My Address
              </button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4 text-center">
              Both options include the same comprehensive test kit and results.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PeaceOfMindDNAKit;
