// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import bannerBg from '../assets/images/banner_bg_Res.jpg';
import servicePat from '../assets/images/service_pat.png';
import servicePre from '../assets/images/grandparantage_1.png';
import serviceImma from '../assets/images/service_imma.png';
import ServingColorado from '../components/common/ServingColorado';
import CallToAction from '../components/common/CallToAction';
import { Helmet } from 'react-helmet-async';


const Home = () => {
  return (
    <div className="min-h-screen">
    <Helmet>
      <title>DNA Testing Denver | Paternity & Immigration Tests – Mile High DNA</title>
      <meta 
        name="description" 
        content="Need fast, legal DNA testing in Denver? Mile High DNA offers AABB-accredited paternity and immigration DNA tests with same-day appointments. Serving Denver, Aurora, and all of Colorado." 
      />

      {/* Open Graph for social previews */}
      <meta property="og:title" content="DNA Testing in Denver – Legal Paternity & Immigration Tests" />
      <meta property="og:description" content="Get AABB-accredited DNA tests in Denver. Book paternity, immigration, or relationship testing with results you can trust." />
      <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
      <meta property="og:url" content="https://milehighdnatesting.com" />
      <meta property="og:type" content="website" />

      {/* Twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
    </Helmet>
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bannerBg})`,
            filter: 'brightness(0.9)'
          }}
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Professional DNA Testing Services in Colorado</h1>
            <p className="text-xl mb-8">
              Accurate, confidential, and reliable DNA testing services for families. 
              Get the answers you need with our AABB-accredited laboratory.
            </p>
            <Link
              to="https://calendly.com/cynthia-milehighdnatesting/30-minute-dna-test-appointment"
              className="btn-primary"
            >
              Book Your Test Today
            </Link>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <img 
                src={servicePat} 
                alt="Paternity Testing"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Paternity Testing</h3>
                <p className="text-gray-600 mb-4">Accurate and confidential paternity testing with 99.9% accuracy.</p>
                <Link
                  to="/legal-paternity-tests"
                  className="text-[#2C6FA6] hover:text-[#7DB9E8] font-semibold transition duration-300"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="card">
              <img 
                src={servicePre} 
                alt="Grandparentage Testing"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Grandparentage Testing</h3>
                <p className="text-gray-600 mb-4">Legal and non-legal testing to confirm biological grandparent relationships.</p>
                <Link
                  to="/grandparentage-dna-tests"
                  className="text-[#2C6FA6] hover:text-[#7DB9E8] font-semibold transition duration-300"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="card">
              <img 
                src={serviceImma} 
                alt="Siblingship Testing"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Siblingship Testing</h3>
                <p className="text-gray-600 mb-4">Determine biological relationships between siblings.</p>
                <Link
                  to="/siblingship-dna-tests"
                  className="text-[#2C6FA6] hover:text-[#7DB9E8] font-semibold transition duration-300"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="section-padding section-bg-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Mother',
                image: 'https://picsum.photos/200/200?random=5',
                text: 'The process was smooth and professional. The results were delivered quickly and the staff was very supportive throughout.'
              },
              {
                name: 'Michael Brown',
                role: 'Father',
                image: 'https://picsum.photos/200/200?random=6',
                text: 'I was nervous about the process, but the team made it easy and comfortable. The results were clear and professionally presented.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ServingColorado />
      <CallToAction />
    </div>
  );
};

export default Home;
