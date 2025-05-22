import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Paternity Testing',
      description: 'Our paternity testing services provide accurate and confidential results to establish biological relationships between fathers and children. We offer both legal and peace-of-mind testing options.',
      features: [
        '99.9% accuracy rate',
        'Results in 1-3 business days',
        'AABB accredited laboratory',
        'Court-admissible results available',
        'Confidential and secure process'
      ],
      price: 'Starting at $299'
    },
    {
      title: 'Maternity Testing',
      description: 'Maternity testing helps establish the biological relationship between a mother and child. This service is often used in adoption cases, immigration, or for personal peace of mind.',
      features: [
        'Non-invasive testing methods',
        'Accurate results in 2-3 business days',
        'AABB accredited laboratory',
        'Legal documentation available',
        'Professional sample collection'
      ],
      price: 'Starting at $299'
    },
    {
      title: 'Sibling Testing',
      description: 'Sibling DNA testing determines the likelihood of a biological relationship between siblings. This test is useful for inheritance cases, immigration, or personal knowledge.',
      features: [
        'Full and half-sibling testing available',
        'Results in 3-5 business days',
        'AABB accredited laboratory',
        'Legal documentation available',
        'Confidential results'
      ],
      price: 'Starting at $399'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Our DNA Testing Services</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Professional, confidential, and accurate DNA testing services for families in Colorado
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-xl font-bold text-blue-600 mb-6">{service.price}</div>
                <Link
                  to="/book-appointment"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-center transition duration-300"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Why Choose Mile High DNA Testing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Professional Service</h3>
              <p className="text-gray-600 mb-4">
                Our team of certified professionals ensures accurate and confidential testing with proper chain of custody documentation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Fast Results</h3>
              <p className="text-gray-600 mb-4">
                We provide quick turnaround times without compromising accuracy, with most results available within 1-3 business days.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">AABB Accredited</h3>
              <p className="text-gray-600 mb-4">
                Our laboratory is AABB accredited, ensuring the highest standards of quality and accuracy in DNA testing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Confidential Process</h3>
              <p className="text-gray-600 mb-4">
                Your privacy is our priority. All testing is conducted with strict confidentiality and secure handling of samples and results.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Contact Us for More Information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services; 