import React from "react";
import { Helmet } from 'react-helmet-async';
import HeroImage from "../assets/images/family-dna-hero.png"; // Adjust path as needed
import ServingColorado from '../components/common/ServingColorado';
import CallToAction from '../components/family/CallToAction';

const FamilyRelationshipDNA = () => {
  console.log("FamilyRelationshipDNA is rendering"); // Debug log

  return (
    <main className="min-h-screen bg-gray-50">
<Helmet>
  <html lang="en" />
  <title>Family Relationship DNA Testing in Denver, CO | Grandparent & Sibling DNA Tests – Mile High DNA</title>
  <meta 
    name="description" 
    content="Confirm family connections with our accurate, confidential DNA testing in Denver, Aurora, Thornton, & Lakewood Colorado. We offer grandparent and sibling DNA tests with same-day appointments and AABB-accredited results you can trust."
  />
  <meta
    name="keywords"
    content="family DNA testing Denver, grandparent DNA test Colorado, sibling DNA test Denver, brother and sister DNA test, DNA relationship testing Colorado"
  />
  <link rel="canonical" href="https://milehighdnatesting.com/family-relationship-dna-testing" />
  <link rel="alternate" hreflang="es" href="https://milehighdnatesting.com/es/pruebas-de-adn-de-relacion-familiar" />

  <meta property="og:title" content="Family Relationship DNA Testing in Denver, CO | Grandparent & Sibling DNA Tests" />
  <meta property="og:description" content="Accurate and confidential family DNA testing in Denver, CO. Legal, grandparent, and sibling DNA tests with same-day appointments available." />
  <meta property="og:image" content="https://milehighdnatesting.com/images/family-dna-hero.png" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://milehighdnatesting.com/family-relationship-dna-testing" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Family Relationship DNA Testing in Denver, CO" />
  <meta name="twitter:description" content="Confirm family connections with our accurate and confidential DNA testing in Denver, CO." />
  <meta name="twitter:image" content="https://milehighdnatesting.com/images/family-dna-hero.png" />

  {/* Schema for Service */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Family Relationship DNA Testing",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Mile High DNA Testing",
        "url": "https://milehighdnatesting.com/family-relationship-dna-testing",
        "image": "https://milehighdnatesting.com/images/family-dna-hero.png",
        "telephone": "+1-720-900-9342",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "700 N Colorado Blvd Suite 574",
          "addressLocality": "Denver",
          "addressRegion": "CO",
          "postalCode": "80206",
          "addressCountry": "US"
        }
      },
      "areaServed": ["Denver", "Aurora", "Lakewood", "Colorado Springs"],
      "offers": {
        "@type": "Offer",
        "price": "299.00",
        "priceCurrency": "USD",
        "url": "https://milehighdnatesting.com/family-relationship-dna-testing",
        "availability": "https://schema.org/InStock"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Family DNA Tests",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Grandparent DNA Test",
              "url": "https://milehighdnatesting.com/grandparentage-dna-tests"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Siblingship DNA Test",
              "url": "https://milehighdnatesting.com/siblingship-dna-tests"
            }
          }
        ]
      }
    })}
  </script>
</Helmet>

      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Family Relationship DNA Testing
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Because every family connection matters.
            </p>
            <p className="text-gray-700 mb-8">
                Mile High DNA Testing is your trusted DNA lab for family DNA testing — including grandparent DNA tests, siblingship DNA tests — for family relationships in Denver, Aurora, and Lakewood and surrounding Front Range communities.
                </p>
            <p className="text-gray-700 mb-8">
              Our Family Relationship DNA Testing services help you confirm biological relationships when direct parent testing isn't possible. Whether you're seeking a grandparent DNA test, siblingship DNA test, or other family relationship testing, Mile High DNA Testing provides accurate, confidential results handled with care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://milehighdnatesting.com/grandparentage-dna-tests"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition font-semibold text-lg inline-block"
              >
                Learn About Grandparent DNA Testing
              </a>
              <a
                href="https://milehighdnatesting.com/siblingship-dna-tests"
                className="bg-green-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-green-700 transition font-semibold text-lg inline-block"
              >
                Learn About Siblingship DNA Testing
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src={HeroImage}
              alt="Family Relationship DNA Testing"
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Testing That Strengthens Family Bonds
          </h2>
          <div className="text-gray-700 text-lg space-y-6">
            <p>
              Sometimes, confirming a family relationship requires looking beyond parents. Our family relationship DNA tests use advanced technology to establish biological connections between relatives such as grandparents, siblings, aunts, and uncles.
            </p>
            <p>
              Our process is simple, we offer accurate family DNA testing — from grandparentage to siblingship — with same-day appointments available in Denver, Aurora, and Lakewood and surrounding Front Range communities. Our tests are confidential, and guided by professionals who understand that every test tells a deeply personal story.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Tests Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Choose the Right Family DNA Test for You
          </h2>
          <p className="text-center text-gray-600 mb-8">
            We offer both grandparent DNA testing and siblingship DNA testing to help confirm family relationships when direct parent testing isn’t possible.
            </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Grandparent DNA Test</h3>
              <p className="text-gray-700 mb-6">
                Used when a parent is unavailable. One or both grandparents can participate to help establish a biological connection with a grandchild.
              </p>
              <a
                href="https://milehighdnatesting.com/grandparentage-dna-tests"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition font-semibold text-lg inline-block w-full text-center"
              >
                Explore Grandparentage Testing
              </a>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Siblingship DNA Test</h3>
              <p className="text-gray-700 mb-6">
                Determines whether two or more individuals share one or both biological parents. Often referred to as a 'brother and sister DNA test.'
              </p>
              <a
                href="https://milehighdnatesting.com/siblingship-dna-tests"
                className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 transition font-semibold text-lg inline-block w-full text-center"
              >
                Explore Siblingship Testing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Trusted by Families Nationwide
          </h2>
          <ul className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
            <li>✅ 99%+ laboratory accuracy</li>
            <li>✅ Confidential and discreet testing</li>
            <li>✅ Friendly, compassionate staff</li>
            <li>✅ Results in as little as 2–3 business days</li>
            <li>✅ Available for both legal and peace-of-mind purposes</li>
          </ul>
        </div>
      </section>

      {/* Pricing & Options Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Flexible Options That Fit Your Needs</h2>
          <p className="text-gray-700 mb-8 text-lg">
            Our family relationship DNA tests start at <strong>$299–$399</strong>, depending on the number of participants and type of relationship. You can order your kit online and complete the test from home or schedule an in-person appointment at our Denver office.
            </p>
            <p className="text-gray-600 mb-8">
            Whether you need a <strong>grandparent DNA test</strong>, a <strong>brother and sister DNA test</strong>, or other <strong>DNA relationship testing</strong>, we’re here to help.
            </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://calendly.com/milehighdnatesting/family-dna-test"
              className="bg-green-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-green-700 transition font-semibold text-lg inline-block"
            >
              Schedule Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <blockquote className="text-xl text-gray-700 italic mb-4">
            "The process was easy, the staff was kind, and we received our results quickly. It gave our family peace of mind."
          </blockquote>
          <p className="text-gray-600">— Satisfied Family</p>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Get the clarity your family deserves.</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/appointments"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition font-semibold text-lg inline-block"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-8">
  <div className="container mx-auto px-6 max-w-5xl text-center">
    <p className="text-sm text-gray-600 leading-relaxed">
      Mile High DNA Testing provides <strong>family relationship DNA testing</strong> in Denver, 
      including <strong>grandparent DNA tests</strong> and <strong>siblingship DNA tests</strong>. 
      Our <strong>DNA tests for family relationships</strong> help confirm biological connections 
      with fast, confidential results. Whether you’re searching for <strong>grandparent DNA testing near me</strong> or need a <strong>brother and sister DNA test</strong>, our accredited <strong>Denver DNA lab</strong> is here to help you get accurate answers quickly.
    </p>
  </div>
</section>
      <ServingColorado />
      <CallToAction />
    </main>
  );
};

export default FamilyRelationshipDNA;
