import React from "react";
import { Helmet } from 'react-helmet-async';
import HeroImage from "../assets/images/father_baby.jpg"; // Adjust path as needed
import ServingColorado from '../components/common/ServingColorado';
import CallToAction from '../components/common/CallToAction';


const PeaceOfMindPaternityPage = () => {
  console.log("PeaceOfMindPaternityPage is rendering"); // Debug log

  return (
    <main className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Peace of Mind DNA Testing | Confidential & Non-Legal Paternity Testing</title>
        <meta 
          name="description" 
          content="Order your Peace of Mind Paternity Test online or schedule an appointment for in-person testing. Fast, accurate, and confidential results for personal reassurance." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Peace of Mind Paternity Test Kit
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Clear Answers. Confidential Results.
            </p>
            <p className="text-gray-700 mb-8">
              Get the clarity you deserve with our at-home Peace of Mind Paternity Test Kit.
              This non-legal DNA test provides fast, accurate, and 100% confidential results for personal knowledge only.
              Perfect for personal confirmation and family reassurance.
            </p>
            <a
              href="/products/peace-of-mind-dna-kit"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition font-semibold text-lg inline-block"
            >
              View Paternity Test Kit
            </a>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src={HeroImage}
              alt="Peace of Mind Paternity Test Kit"
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Why Choose Our Peace of Mind Paternity Test?
          </h2>
          <ul className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
            <li>✅ 99%+ Accuracy — Same technology used in court‑admissible labs</li>
            <li>✅ Completely Discreet — Unbranded packaging, personal data protected</li>
            <li>✅ Simple Home Collection — Easy cheek swab, no needles required</li>
            <li>✅ Speedy Results — As few as 2–3 business days after lab receives your kit</li>
            <li>✅ Non-Legal Testing — Results are not admissible in court, perfect for personal peace of mind</li>
            <li>✅ Family Reassurance — Ideal for personal confirmation and family understanding</li>
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How It Works</h2>
          <ol className="grid md:grid-cols-4 gap-6 text-center text-gray-700">
            <li className="p-4 bg-gray-50 rounded-lg shadow">1. Order Your Kit</li>
            <li className="p-4 bg-gray-50 rounded-lg shadow">2. Collect Samples at Home</li>
            <li className="p-4 bg-gray-50 rounded-lg shadow">3. Ship Back to Lab</li>
            <li className="p-4 bg-gray-50 rounded-lg shadow">4. Receive Results Securely</li>
          </ol>
        </div>
      </section>

      {/* Pricing and Ordering Options */}
      <section id="pricing-info" className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Choose Your Testing Option</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Online Kit</h4>
              <p className="text-3xl font-bold text-blue-600 mb-4">$199</p>
              <p className="text-gray-600 mb-4">Order online and complete the test <br/> from the comfort of your home</p>
              <a
                href="/products/peace-of-mind-dna-kit"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition font-semibold text-lg inline-block w-full"
              >
                Order Online
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">In-Person Testing</h4>
              <p className="text-3xl font-bold text-green-600 mb-4">$249</p>
              <p className="text-gray-600 mb-4">Schedule an appointment <br />at our testing location</p>
              <a
                href="https://calendly.com/milehighdnatesting/non-legal-paternity-test"
                className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 transition font-semibold text-lg inline-block w-full"
              >
                Schedule Appointment
              </a>
            </div>
          </div>
          
          <p className="text-gray-700 mb-6 text-lg">
            This non-legal DNA test uses the same laboratory technology as court-admissible tests, 
            but results are not admissible in court. Perfect for personal confirmation and family reassurance.
          </p>
          
        </div>

      </section>
      <ServingColorado />
      <CallToAction />
    </main>
  );
};

export default PeaceOfMindPaternityPage;
