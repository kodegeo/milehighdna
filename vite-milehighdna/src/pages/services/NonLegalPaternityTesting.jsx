import React from "react";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// Assets
import HeroImage from "../../assets/images/father-baby-3.png";

// Common components
import ServingColorado from '../../components/common/ServingColorado';
import CallToAction from '../../components/common/CallToAction';

const NonLegalPaternityTesting = () => {
  return (
    <main>
      <Helmet>
        <html lang="en" />

        {/* Primary SEO */}
        <title>
          Non-Legal Paternity DNA Test in Denver, CO | Peace of Mind Testing | Mile High DNA
        </title>

        <meta
          name="description"
          content="Get a private, non-legal paternity DNA test in Denver, CO for personal knowledge and peace of mind. Confidential testing, fast results in 2–3 days, in-person or at-home options available."
        />

        <meta
          name="keywords"
          content="non-legal paternity DNA test Denver, peace of mind paternity test Colorado, private paternity test Denver, confidential DNA testing Colorado"
        />

        <link
          rel="canonical"
          href="https://milehighdnatesting.com/services/non-legal-paternity-testing"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Non-Legal Paternity DNA Testing in Denver | Peace of Mind DNA Test"
        />
        <meta
          property="og:description"
          content="Private, confidential non-legal paternity DNA testing for peace of mind. Fast results, in-person or at-home testing options in Denver."
        />
        <meta
          property="og:image"
          content="https://milehighdnatesting.com/images/banner-1200.png"
        />
        <meta
          property="og:url"
          content="https://milehighdnatesting.com/services/non-legal-paternity-testing"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Peace of Mind Paternity DNA Test in Denver"
        />
        <meta
          name="twitter:description"
          content="Confidential non-legal paternity testing for personal knowledge. Fast, accurate results in Denver, CO."
        />
        <meta
          name="twitter:image"
          content="https://milehighdnatesting.com/images/banner-1200.png"
        />

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://milehighdnatesting.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://milehighdnatesting.com/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Non-Legal Paternity DNA Testing",
                "item": "https://milehighdnatesting.com/services/non-legal-paternity-testing"
              }
            ]
          })}
        </script>

        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://milehighdnatesting.com/services/non-legal-paternity-testing#business",
            "name": "Mile High DNA Testing",
            "url": "https://milehighdnatesting.com/services/non-legal-paternity-testing",
            "telephone": "+1-720-900-9342",
            "priceRange": "$$",
            "image": "https://milehighdnatesting.com/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "975 N Lincoln St Suite 205C",
              "addressLocality": "Denver",
              "addressRegion": "CO",
              "postalCode": "80203",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 39.7323,
              "longitude": -104.9862
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
{/* Hero Section */}
<section className="relative bg-white">
  <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
    <div className="flex-1 text-center lg:text-left">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Non-Legal Peace of Mind Paternity Testing in Denver
      </h1>
      <p className="text-xl text-gray-600 mb-6">
        Fast. Confidential. Reliable Results You Can Trust.
      </p>
      <p className="text-gray-700 mb-8 text-lg leading-relaxed">
        Our Peace of Mind Paternity Test provides private, 
        non-legal DNA results performed by AABB-accredited laboratories. 
        This service is ideal for personal knowledge, family reassurance, or resolving 
        sensitive questions without the need for court involvement.
      </p>
      <p className="text-gray-700 mb-8 text-lg leading-relaxed">
        Same-day in-person testing at our <Link to="/locations/denver" className="text-blue-600 underline">Denver</Link> location is available, or 
        request an at-home kit if preferred. All tests are handled with care, discretion, 
        and professional support from start to finish. To <Link to="/appointments" className="text-blue-600 underline">schedule a DNA test</Link> or book a DNA test appointment, use the options below or call us.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="https://calendly.com/milehighdnatesting/non-legal-paternity-test"
          className="bg-green-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-green-700 transition font-semibold text-lg inline-block text-center"
        >
          Schedule In-Person Test
        </a>
        <a
          href="/shop/at-home-paternity-test"
          className="bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition font-semibold text-lg inline-block text-center"
        >
          Order Home Kit
        </a>
      </div>
    </div>
    <div className="flex-1 flex justify-center">
      <img
        src={HeroImage}
        alt="Peace of Mind Paternity Test in Denver"
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
                href="/shop/at-home-paternity-test"
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
            This non-legal DNA test uses the same laboratory technology as{" "}
            <Link to="/services/legal-paternity-testing" className="text-blue-600 underline">court-admissible DNA tests</Link>, 
            but results are not admissible in court. Perfect for personal confirmation and family reassurance. 
            Need testing during pregnancy? See our <Link to="/services/prenatal-paternity-testing" className="text-blue-600 underline">prenatal paternity test</Link>. 
            For visa and USCIS cases, we offer <Link to="/services/immigration-dna-testing" className="text-blue-600 underline">immigration DNA testing</Link>. 
            Learn more in our <Link to="/mile-high-dna-corner/legal-vs-non-legal-dna-test" className="text-blue-600 underline">legal vs non-legal guide</Link> and <Link to="/guides/non-legal-dna-test-cost" className="text-blue-600 underline">non-legal DNA test cost guide</Link>.
          </p>
          
        </div>

      </section>
      {/* TESTIMONIALS */}
      <section className="section-padding section-bg-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="max-w-2xl mx-auto">
            {[
              {
                name: 'Misha Herbert',
                role: 'Mother in Denver, CO',
                text: 'Mile High DNA was great! She was very helpful honest and efficient. I truly appreciate her and will definitely be working with her again in the future.',
                source: 'Google Review',
                sourceUrl: 'https://www.google.com/maps?q=Mile+High+DNA+Testing+Denver',
              }
            ].map((testimonial, index) => (
              <a 
                key={index}
                href={testimonial.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="card h-full flex flex-col p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <img 
                      src="/images/5-star-rating.svg" 
                      alt="5 star rating"
                      className="w-24 h-auto mb-3"
                    />
                  </div>
                  <div className="mb-4">
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                  <p className="text-gray-700 flex-grow">{testimonial.text}</p>
                  <p className="text-sm text-gray-500 mt-4">{testimonial.source}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <ServingColorado />
      <CallToAction />
      
      {/* Social Share Block */}
      <div className="mt-12 bg-gray-50 p-6 rounded-xl border border-gray-200 max-w-4xl mx-auto px-4">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">Share This Page</h3>
        <p className="text-center text-gray-600 mb-6">Help others find reliable DNA testing services in Denver.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a 
            href="https://www.facebook.com/sharer/sharer.php?u=https://milehighdnatesting.com/services/non-legal-paternity-testing" 
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
            href="https://twitter.com/intent/tweet?url=https://milehighdnatesting.com/services/non-legal-paternity-testing&text=Peace%20of%20Mind%20Paternity%20Test%20in%20Denver" 
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
            href="mailto:?subject=Peace%20of%20Mind%20Paternity%20Test%20in%20Denver&body=Check%20out%20this%20page:%20https://milehighdnatesting.com/services/non-legal-paternity-testing" 
            className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span className="font-medium">Email</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default NonLegalPaternityTesting;
