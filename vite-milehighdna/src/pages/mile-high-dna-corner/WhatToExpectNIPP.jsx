import React from "react";
import { Helmet } from "react-helmet";
import CornerLayout from "../../components/corner/CornerLayout";
import ServingColorado from "../../components/common/ServingColorado";
import CallToAction from "../../components/corner/CallToAction";

import cornerNIPP1 from "../../assets/images/corner-nipp-1.png";

const WhatToExpectNIPP = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>
          What to Expect During a Non-Invasive Prenatal DNA Test | Mile High DNA Testing Denver
        </title>
        <meta
          name="description"
          content="Learn how a non-invasive prenatal DNA test works, what it costs, and what to expect before and during your appointment. Safe, accurate, and confidential DNA testing for Denver, Aurora, Thornton, and Lakewood families."
        />
        <meta
          name="keywords"
          content="non invasive prenatal dna test, prenatal paternity test, dna test while pregnant, prenatal dna test cost, prenatal dna test near me, accurate prenatal dna test, dna testing denver, dna testing aurora, dna testing thornton, dna testing lakewood"
        />
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How accurate is a Non-Invasive Prenatal Paternity Test?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non-invasive prenatal DNA testing is over 99.9% accurate when conducted through an AABB-accredited laboratory. The analysis compares fetal DNA fragments found in the mother’s blood with the potential father’s DNA to confirm paternity with extremely high precision."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I get a Non-Invasive Prenatal DNA Test near me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mile High DNA Testing provides both in-person prenatal testing at our Denver office and at-home collection kits for clients throughout the Front Range, including Aurora, Thornton, and Lakewood."
      }
    },
    {
      "@type": "Question",
      "name": "Is a Non-Invasive Prenatal DNA Test safe for my baby?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. This test is completely safe and non-invasive. It uses only a small blood sample from the mother and a cheek swab from the potential father — no needles or procedures that affect the baby."
      }
    }
  ]
}
`}</script>

      </Helmet>

      <CornerLayout>
        {/* Hero Section */}
        <div className="relative w-full h-[350px] md:h-[450px] mb-12">
          <img
            src={cornerNIPP1}
            alt="What to Expect During a Non-Invasive Prenatal DNA Test - Mile High DNA Testing Denver"
            className="w-full h-full object-cover object-center rounded-b-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl" />
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white drop-shadow-lg">
              Mile High DNA Corner
            </h1>
            <h2 className="text-xl md:text-2xl text-white drop-shadow-lg">
              What to Expect During a Non-Invasive Prenatal DNA Test
            </h2>
          </div>
        </div>

        {/* Article Content */}
        <div className="w-full px-4 md:px-0 py-8 bg-white/90 rounded-xl shadow-lg">
          <p className="text-base mb-6 text-justify">
            Preparing for a Non-Invasive Prenatal Paternity (NIPP) Test can feel like a big step — but it's
            also one of the safest, most accurate, and least stressful ways to confirm paternity before your baby is born.
            At <span className="font-semibold text-[#2C6FA6]">Mile High DNA Testing</span>, we help families across Denver, Aurora,
            and the Front Range navigate this process with confidence and care.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-800">
            What Is a Non-Invasive Prenatal DNA Test?
          </h3>
          <p className="text-base mb-6 text-justify">
            A Non-Invasive Prenatal DNA Test analyzes small fragments of fetal DNA that naturally circulate
            in the mother's bloodstream. Unlike older invasive procedures such as amniocentesis or CVS, this test does not
            involve any risk to the baby. Instead, a simple maternal blood draw and a cheek swab from the potential father
            provide the genetic material needed to determine paternity with over 99.9% accuracy.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-800">
            What to Expect Before Your Appointment
          </h3>
          <p className="text-base mb-6 text-justify">
            The process begins with a short consultation — either online or in person — to confirm eligibility and review
            the testing procedure. We’ll discuss your estimated due date, gather contact information, and answer any
            questions about how the sample collection works.
          </p>
          <p className="text-base mb-6 text-justify">
            You’ll also have the choice to complete your NIPP test in one of two ways:
          </p>

          <ul className="list-disc list-outside ml-6 mb-4 space-y-3">
            <li>
              <strong>In-person collection:</strong> A quick visit to our Denver DNA Testing Center for
              a professional blood draw and cheek swab.
            </li>
            <li>
              <strong>At-home convenience:</strong> We ship a test kit to your location with clear instructions and a prepaid
              return label for the samples.
            </li>
          </ul>

          <p className="text-base mb-6 text-justify">
            Either option provides the same level of laboratory accuracy. We use AABB-accredited labs to
            ensure precision, privacy, and legal reliability of every test.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-800">
            During the Test: What Happens Step-by-Step
          </h3>
          <ol className="list-decimal list-outside ml-6 mb-6 space-y-3">
            <li>
              <strong>Blood sample collection:</strong> A small blood draw is taken from the mother’s arm — just like a
              standard prenatal checkup.
            </li>
            <li>
              <strong>Cheek swab from the potential father:</strong> Collected using a sterile cotton swab for DNA comparison.
            </li>
            <li>
              <strong>Secure transport:</strong> All samples are sealed, labeled, and sent to the AABB-accredited laboratory
              under strict handling protocols.
            </li>
            <li>
              <strong>Analysis and reporting:</strong> The lab compares the fetal DNA fragments in the maternal blood sample
              to the father’s genetic markers to determine paternity with 99.9% accuracy.
            </li>
          </ol>

          <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-800">
            How Long Do Results Take?
          </h3>
          <p className="text-base mb-6 text-justify">
            Most non-invasive prenatal DNA test results are available within 5 to 7 business days after
            the lab receives the samples. Express options are also available for families who need faster turnaround.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-800">Cost and Payment Options</h3>
          <p className="text-base mb-6 text-justify">
            The average cost for a NIPP test in Denver ranges between $1,599 and $1,799,
            depending on collection type and turnaround time. While insurance does not typically cover non-medical testing,
            we offer flexible payment options and online ordering for your convenience.
          </p>

          <div className="bg-sky-50 border-l-4 border-sky-700 px-4 py-4 my-8 rounded-md">
            <p className="italic text-sky-800">
              “Access to accurate prenatal genetic information increases decision-making confidence and reduces anxiety
              among expectant parents.”<br /><br />
              <span className="text-sky-700 text-sm">
                — American College of Obstetricians and Gynecologists (ACOG), Practice Bulletin No. 226
              </span>
            </p>
          </div>

          <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-800">
            Frequently Asked Questions About Prenatal DNA Testing
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg text-gray-800">
                How accurate is a Non-Invasive Prenatal Paternity Test?
              </h4>
              <p className="text-base text-justify">
                Non-invasive prenatal DNA testing is over 99.9% accurate when conducted through an
                AABB-accredited laboratory. The analysis compares fetal DNA fragments found in the
                mother's blood with the potential father's DNA to confirm paternity with extremely high precision.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800">
                Where can I get a Non-Invasive Prenatal DNA Test near me?
              </h4>
              <p className="text-base text-justify">
                <span className="font-semibold text-[#2C6FA6]">Mile High DNA Testing</span> provides both in-person prenatal testing at our
                Denver office and at-home collection kits for clients throughout the Front Range,
                including Aurora, Thornton, and Lakewood.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800">
                Is a Non-Invasive Prenatal DNA Test safe for my baby?
              </h4>
              <p className="text-base text-justify">
                Yes. This test is completely safe and non-invasive. It uses only a small blood sample
                from the mother and a cheek swab from the potential father, no needles or procedures that affect the baby.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-800">
            Why Choose Mile High DNA Testing?
          </h3>
          <p className="text-base mb-6 text-justify">
            At <span className="font-semibold text-[#2C6FA6]">Mile High DNA Testing</span>, we combine accuracy with compassion. Whether you visit our clinic
            or test from home, you can trust that your results are handled discreetly, securely, and with the highest
            professional standards.
          </p>

          <p className="text-base mb-6 text-justify">
            Our AABB-accredited laboratory partners ensure every test meets the same standards used in
            legal DNA testing, even for private, peace-of-mind cases. From first contact to results delivery, we're here
            to provide clarity and confidence during one of life's most important moments.
          </p>

          <div className="mt-8">
            <a
              href="/prenatal-dna-test"
              className="inline-block bg-sky-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-sky-800 transition"
            >
              Learn More About Prenatal DNA Testing
            </a>
          </div>

          <div className="mt-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Share This Article</h3>
              <p className="text-gray-600 mb-6">Help other families understand what to expect during prenatal DNA testing</p>
              
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://milehighdnatesting.com/mile-high-dna-corner/what-to-expect-non-invasive-prenatal-dna-test-denver" 
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
                  href="https://twitter.com/intent/tweet?url=https://milehighdnatesting.com/mile-high-dna-corner/what-to-expect-non-invasive-prenatal-dna-test-denver&text=What%20to%20Expect%20During%20a%20Non-Invasive%20Prenatal%20DNA%20Test" 
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
                  href="mailto:?subject=What%20to%20Expect%20During%20a%20Non-Invasive%20Prenatal%20DNA%20Test%20-%20Mile%20High%20DNA%20Testing&body=Check%20out%20this%20article%20about%20what%20to%20expect%20during%20prenatal%20DNA%20testing:%0A%0Ahttps://milehighdnatesting.com/mile-high-dna-corner/what-to-expect-non-invasive-prenatal-dna-test-denver%0A%0AThis%20article%20explains%20the%20step-by-step%20process%20of%20non-invasive%20prenatal%20DNA%20testing%2C%20including%20what%20happens%20before%2C%20during%2C%20and%20after%20the%20test." 
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
      </CornerLayout>

      <section className="w-full">
        <ServingColorado />
        <CallToAction />
      </section>
    </>
  );
};

export default WhatToExpectNIPP;
