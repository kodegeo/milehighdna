import React from "react";
import { Helmet } from "react-helmet-async";
import landingBanner from "../assets/images/landing-1.2.jpg";

const DNATestingDenverPage = () => {
  return (
    <div className="bg-white text-gray-800">
        <Helmet>
        <title>DNA Testing Denver | Prenatal, Legal, & Peace of Mind</title>
        <meta
          name="description"
          content="Fast, confidential, AABB-accredited DNA testing in Denver, Aurora, Thorton, and Englewood. Legal paternity, prenatal, immigration, and peace-of-mind testing with results in 3–5 business days."
        />
        <link
          rel="canonical"
          href="https://milehighdnatesting.com/dna-testing-denver"
        />
        <meta property="og:title" content="DNA Testing Denver | Mile High DNA Testing" />
        <meta
          property="og:description"
          content="Court-admissible, confidential DNA testing for legal, prenatal, immigration, and peace-of-mind needs. Serving Denver, Aurora, and Englewood."
        />
        <meta
          property="og:url"
          content="https://milehighdnatesting.com/dna-testing-denver"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://milehighdnatesting.com/images/banner-1200.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DNA Testing Denver | Mile High DNA Testing" />
        <meta name="twitter:description" content="Court-admissible, confidential DNA testing for legal, prenatal, immigration, and peace-of-mind needs." />
        <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        
        {/* LocalBusiness + WebPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://milehighdnatesting.com/dna-testing-denver#dna-testing-denver",
              "name": "Mile High DNA Testing",
              "image": "https://milehighdnatesting.com/logo.png",
              "url": "https://milehighdnatesting.com/dna-testing-denver",
              "telephone": "+1-720-900-9342",
              "priceRange": "$$",
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
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://milehighdnatesting.com/dna-testing-denver#webpage",
              "url": "https://milehighdnatesting.com/dna-testing-denver",
              "name": "DNA Testing Denver | Prenatal, Legal, & Peace of Mind",
              "description": "Fast, confidential, AABB-accredited DNA testing in Denver, Aurora, Thorton, and Englewood. Legal paternity, prenatal, immigration, and peace-of-mind testing with results in 3–5 business days.",
              "isPartOf": {
                "@type": "WebSite",
                "name": "Mile High DNA Testing",
                "url": "https://milehighdnatesting.com"
              }
            }
          ])}
        </script>
      </Helmet>
      {/* HERO SECTION */}
      <section className="relative text-center py-0 px-0 bg-blue-50">
        {/* Banner Image */}
        <div className="relative h-[340px] md:h-[420px] lg:h-[500px] w-full overflow-hidden flex items-center justify-center">
          <img
            src={landingBanner}
            alt="DNA Testing Denver Banner"
            className="object-cover w-full h-full"
            style={{ filter: "brightness(0.85)" }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
              Fast, Confidential, Court-Admissible <br />DNA Testing in Denver
            </h1>
            <p className="mt-2 text-lg md:text-2xl text-white drop-shadow-md max-w-2xl">
              Serving Denver, Aurora, & Englewood with trusted legal, immigration, and peace-of-mind testing.
            </p>
            {/* Quick Trust Points */}
            <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
              <div className="bg-white/90 shadow-md rounded-lg p-3 w-full md:w-56 text-blue-900 font-semibold text-base md:text-lg">
                ✅ AABB-Accredited & Court-Admissible
              </div>
              <div className="bg-white/90 shadow-md rounded-lg p-3 w-full md:w-56 text-blue-900 font-semibold text-base md:text-lg">
                ✅ Fast Results in 2–4 Business Days
              </div>
              <div className="bg-white/90 shadow-md rounded-lg p-3 w-full md:w-56 text-blue-900 font-semibold text-base md:text-lg">
                ✅ Secure & Confidential Process
              </div>
            </div>
            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
              <a
                href="#booking"
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md text-lg font-semibold shadow"
              >
                Book Online Now
              </a>
              <a
                href="tel:+17204516047"
                onClick={() => {
                  window.dataLayer?.push({
                    event: "phone_click",
                    phone_location: "DNATestingDenverPage - Hero CTA"
                  });
                }}
                className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md text-lg font-semibold shadow"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-12 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Why Families in Denver Trust Mile High DNA Testing</h2>
        <p className="text-gray-700">
          We offer fast, confidential, and AABB-accredited testing for legal, immigration, and peace-of-mind needs. Our team is discreet, compassionate, and dedicated to accurate results you can rely on.
        </p>
        <ul className="mt-6 text-left mx-auto max-w-md space-y-3">
          <li>✅ Court-admissible results for custody, child support & legal cases</li>
          <li>✅ Trusted by Colorado families for paternity, custody, and peace-of-mind testing</li>
          <li>✅ Private, professional sample collection in a secure setting</li>
        </ul>
      </section>

      {/* SERVICES & PRICING */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Our Services & Pricing</h2>
          <p className="text-center text-gray-700 mb-8">
            Transparent pricing, no hidden fees. Choose the service that fits your needs.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold">Legal DNA Testing</h3>
              <p className="text-gray-700 mt-2">Court-admissible results for custody & child support cases.</p>
              <p className="text-blue-700 font-bold mt-4">Starting at $349</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold">Peace of Mind Testing</h3>
              <p className="text-gray-700 mt-2">For personal reassurance, not for legal purposes.</p>
              <p className="text-blue-700 font-bold mt-4">Starting at $199</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold">Prenatal DNA Testing</h3>
              <p className="text-gray-700 mt-2">Non-invasive prenatal paternity testing, safe for mother & baby.</p>
              <p className="text-blue-700 font-bold mt-4">Starting at $1,500</p>
            </div>
          </div>
        </div>
      </section>

      {/* MID-PAGE BOOKING CTA (for skimmers) */}
      <section className="py-12 px-6 bg-blue-50 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Ready to Book Your DNA Test?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
        Book a free consultation in just minutes using the scheduler below.
        </p>
        <div className="max-w-3xl mx-auto">
          <iframe
            src="https://calendly.com/milehighdnatesting/freeconsultation"
            width="100%"
            height="500"
            frameBorder="0"
            title="Schedule DNA Test Appointment"
            style={{ minHeight: '500px', borderRadius: '12px', border: '1px solid #e5e7eb' }}
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-12 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4">
            <h3 className="text-xl font-semibold">1. Schedule</h3>
            <p className="text-gray-700 mt-2">Book online or call us to set up your appointment.</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold">2. Visit Our Office</h3>
            <p className="text-gray-700 mt-2">Come to our Denver office for a quick, private sample collection.</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold">3. Get Results</h3>
            <p className="text-gray-700 mt-2">Receive secure results in just 2–5 business days.</p>
          </div>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section id="booking" className="py-12 px-6 bg-blue-50 text-center">
        <h2 className="text-2xl font-bold mb-4">Schedule a DNA Test Today</h2>
        <p className="text-gray-700 mb-4">
          Select a convenient time below. Prefer to call?{" "}
          <a 
            href="tel:+17209009342" 
            onClick={() => {
              window.dataLayer?.push({
                event: "phone_click",
                phone_location: "DNATestingDenverPage - Booking Section Inline"
              });
            }}
            className="text-blue-600 font-semibold"
          >
            Call us now
          </a>.
        </p>
        <div className="max-w-3xl mx-auto">
          <iframe
            src="https://calendly.com/milehighdnatesting/freeconsultation"
            width="100%"
            height="600"
            frameBorder="0"
            title="Schedule Appointment"
          ></iframe>
        </div>
        <div className="mt-6">
          <a
            href="tel:+17209009342"
            onClick={() => {
              window.dataLayer?.push({
                event: "phone_click",
                phone_location: "DNATestingDenverPage - Booking Section CTA"
              });
            }}
            className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md text-lg font-semibold"
          >
            Call Us Now
          </a>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4 text-left">
          <div>
            <h3 className="font-semibold">Is this test court-admissible?</h3>
            <p className="text-gray-700">Yes, our legal DNA tests are fully court-admissible with a documented chain of custody.</p>
          </div>
          <div>
            <h3 className="font-semibold">How long does it take to get results?</h3>
            <p className="text-gray-700">Most results are ready within 2–5 business days, with expedited options available.</p>
          </div>
          <div>
            <h3 className="font-semibold">What do I need to bring?</h3>
            <p className="text-gray-700">A valid photo ID for each participant and any required legal paperwork.</p>
          </div>
        </div>
      </section>

      {/* OPTIONAL TESTIMONIAL */}
      <section className="py-8 px-6 bg-gray-50 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="italic text-gray-800 text-lg">
            "They made a stressful situation simple and fast. Highly recommend Mile High DNA Testing!"
          </p>
          <p className="mt-2 font-semibold text-blue-700">– Maria G., Denver</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-center py-12 bg-blue-600 text-white">
        <h2 className="text-2xl font-bold">Ready for Fast, Confidential DNA Testing?</h2>
        <p className="mt-2">Book online now or call us today to get started.</p>
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
          <a
            href="#booking"
            className="bg-white text-blue-700 py-3 px-6 rounded-md text-lg font-semibold"
          >
            Book Online Now
          </a>
          <a
            href="tel:+17209009342"
            onClick={() => {
              window.dataLayer?.push({
                event: "phone_click",
                phone_location: "DNATestingDenverPage - Final CTA"
              });
            }}
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md text-lg font-semibold"
          >
            Call Us Now
          </a>
        </div>
      </section>
      
      {/* Social Share Block */}
      <div className="mt-12 bg-gray-50 p-6 rounded-xl border border-gray-200 max-w-4xl mx-auto px-4">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">Share This Page</h3>
        <p className="text-center text-gray-600 mb-6">Help others find reliable DNA testing services in Denver.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a 
            href="https://www.facebook.com/sharer/sharer.php?u=https://milehighdnatesting.com/dna-testing-denver" 
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
            href="https://twitter.com/intent/tweet?url=https://milehighdnatesting.com/dna-testing-denver&text=DNA%20Testing%20Denver" 
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
            href="mailto:?subject=DNA%20Testing%20Denver&body=Check%20out%20this%20page:%20https://milehighdnatesting.com/dna-testing-denver" 
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
  );
};

export default DNATestingDenverPage;
