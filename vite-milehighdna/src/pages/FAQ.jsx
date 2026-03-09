import React from 'react';
import FAQSection from '../components/FAQ/FAQSection';
import HowToUse from '../components/FAQ/HowToUse';
import ServingColorado from '../components/common/ServingColorado';
import CallToAction from '../components/common/CallToAction';
import { Helmet } from 'react-helmet-async';


const FAQ = () => {
  return (
    <>
      <section className="bg-blue-50 py-16 px-6 md:px-12 lg:px-24 text-center">
        <div className="max-w-3xl mx-auto">
        <Helmet>
          <title>DNA Testing FAQs | Mile High DNA – Paternity, Immigration & Legal Tests</title>
          <meta 
            name="description" 
            content="Answers to the most common DNA testing questions. Learn about paternity testing, immigration cases, legal DNA requirements, and AABB accreditation." 
          />

          {/* Open Graph */}
          <meta property="og:title" content="Frequently Asked Questions About DNA Testing" />
          <meta property="og:description" content="Got questions about DNA tests? We cover paternity, immigration, legal testing, costs, timelines, and more. Trusted answers for families across Colorado." />
          <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
          <meta property="og:url" content="https://milehighdnatesting.com/faq" />
          <meta property="og:type" content="article" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        </Helmet>

          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-700">
          Have questions about paternity, immigration, or legal DNA testing? From how long tests take to what makes a DNA test court-admissible, we’ve answered the most common questions families in Denver, Aurora, and Lakewood ask.
          We've got answers.
          </p>
          <HowToUse />
        </div>
      </section>

      {/* Browse Questions By Topic */}
      <section className="bg-white py-10 px-6 md:px-12 lg:px-24 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">Browse Questions By Topic</h2>
          <nav className="flex flex-wrap justify-center gap-3 md:gap-4" aria-label="FAQ topics">
            <a href="#dna-basics" className="text-blue-600 font-medium hover:text-blue-700 hover:underline">
              DNA Testing Basics
            </a>
            <a href="#legal-dna-testing" className="text-blue-600 font-medium hover:text-blue-700 hover:underline">
              Legal DNA Testing
            </a>
            <a href="#immigration-dna-testing" className="text-blue-600 font-medium hover:text-blue-700 hover:underline">
              Immigration DNA Testing
            </a>
            <a href="#dna-costs" className="text-blue-600 font-medium hover:text-blue-700 hover:underline">
              DNA Testing Costs
            </a>
            <a href="#appointments" className="text-blue-600 font-medium hover:text-blue-700 hover:underline">
              Appointments and Process
            </a>
            <a href="#dna-accuracy" className="text-blue-600 font-medium hover:text-blue-700 hover:underline">
              Accuracy and Science
            </a>
          </nav>
        </div>
      </section>

      <FAQSection />
      <ServingColorado />
      <CallToAction />
    </>
  );
};

export default FAQ;
