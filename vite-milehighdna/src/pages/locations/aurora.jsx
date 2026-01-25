import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { canonicalUrl } from "../../lib/canonical";
import Footer from "../../components/Footer";

const Aurora = () => {
  const citySlug = "aurora";
  const cityName = "Aurora";
  const cityImage = `/images/aurora-acton-crawford.jpg`;
  const photographer = "Acton Crawford"; // Set photographer name if applicable
  const [imageError, setImageError] = useState(false);
  const metaDescription = "Professional, AABB-certified DNA testing in Aurora, Colorado. Court-admissible paternity tests, immigration DNA, and peace-of-mind screenings with fast turnaround times.";
  const canonical = canonicalUrl(citySlug);

  return (
    <>
      <Helmet>
        <title>DNA Testing in {cityName}, Colorado | Mile High DNA Testing</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonical} />
        
        {/* OG Tags */}
        <meta property="og:title" content={`DNA Testing in ${cityName}, Colorado | Mile High DNA Testing`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={`https://milehighdnatesting.com${cityImage}`} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "ProfessionalService"],
            "name": "Mile High DNA Testing",
            "url": canonical,
            "image": `https://milehighdnatesting.com${cityImage}`,
            "serviceArea": {
              "@type": "City",
              "name": cityName,
              "addressRegion": "CO",
              "addressCountry": "US"
            },
            "areaServed": {
              "@type": "City",
              "name": cityName
            },
            "description": metaDescription,
            "breadcrumb": {
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
                  "name": "Locations",
                  "item": "https://milehighdnatesting.com/locations"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": `${cityName} DNA Testing`,
                  "item": canonical
                }
              ]
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section with City Image */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        {cityImage && !imageError ? (
          <>
            <img
              src={cityImage}
              alt={`DNA Testing in ${cityName}, Colorado`}
              className="object-cover w-full h-full"
              style={{ filter: "brightness(0.7)" }}
              onError={() => setImageError(true)}
            />
            {photographer && (
              <div className="absolute bottom-4 right-4 z-10">
                <p className="text-white text-xs drop-shadow-md opacity-80">
                  Photo by {photographer}
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800"></div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-blue-700/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-4">
            DNA Testing in {cityName}, Colorado
          </h1>
          <p className="text-lg md:text-xl text-white drop-shadow-md max-w-3xl">
            Professional, confidential, and AABB-certified DNA testing solutions for families, legal professionals, and immigration services
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto py-12 px-4">
        {/* Introduction Section */}
        <div className="text-center mb-12">
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Mile High DNA Testing offers professional, confidential, and AABB-certified DNA testing solutions for families, legal professionals, and immigration services across <strong className="text-blue-600">{cityName}, Colorado</strong>. From court-admissible paternity tests to personal peace-of-mind screenings and USCIS immigration verification, we ensure precise, timely, and reliable outcomes for every client.
          </p>
        </div>

        {/* Services Available in {City} */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">Services Available in {cityName}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Link
              to={`/services/legal-paternity-testing-${citySlug}`}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
            >
              <h3 className="font-semibold text-lg mb-3 text-blue-600 group-hover:text-blue-700">Legal Paternity Testing</h3>
              <p className="text-sm text-gray-600 mb-4">Court-admissible paternity testing for legal proceedings in {cityName}.</p>
              <span className="text-blue-600 text-sm font-medium group-hover:underline inline-flex items-center">
                View Service
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            
            <Link
              to={`/services/non-legal-paternity-testing-${citySlug}`}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
            >
              <h3 className="font-semibold text-lg mb-3 text-blue-600 group-hover:text-blue-700">Non-Legal Paternity Testing</h3>
              <p className="text-sm text-gray-600 mb-4">Private, confidential paternity testing for personal knowledge in {cityName}.</p>
              <span className="text-blue-600 text-sm font-medium group-hover:underline inline-flex items-center">
                View Service
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            
            <Link
              to={`/services/prenatal-paternity-testing-${citySlug}`}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
            >
              <h3 className="font-semibold text-lg mb-3 text-blue-600 group-hover:text-blue-700">Prenatal Paternity Testing</h3>
              <p className="text-sm text-gray-600 mb-4">Safe, non-invasive prenatal paternity testing available in {cityName}.</p>
              <span className="text-blue-600 text-sm font-medium group-hover:underline inline-flex items-center">
                View Service
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link
              to="/services/immigration-dna-testing"
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
            >
              <h3 className="font-semibold text-lg mb-3 text-blue-600 group-hover:text-blue-700">Immigration DNA Testing</h3>
              <p className="text-sm text-gray-600 mb-4">USCIS-approved DNA testing for immigration cases in {cityName}.</p>
              <span className="text-blue-600 text-sm font-medium group-hover:underline inline-flex items-center">
                View Service
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link
              to="/services/siblingship-testing"
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
            >
              <h3 className="font-semibold text-lg mb-3 text-blue-600 group-hover:text-blue-700">Siblingship Testing</h3>
              <p className="text-sm text-gray-600 mb-4">Relationship verification through siblingship DNA testing in {cityName}.</p>
              <span className="text-blue-600 text-sm font-medium group-hover:underline inline-flex items-center">
                View Service
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link
              to="/services/grandparentage-testing"
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
            >
              <h3 className="font-semibold text-lg mb-3 text-blue-600 group-hover:text-blue-700">Grandparentage Testing</h3>
              <p className="text-sm text-gray-600 mb-4">Family relationship DNA testing through grandparentage analysis in {cityName}.</p>
              <span className="text-blue-600 text-sm font-medium group-hover:underline inline-flex items-center">
                View Service
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link
              to="/services/avuncular-dna-testing"
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
            >
              <h3 className="font-semibold text-lg mb-3 text-blue-600 group-hover:text-blue-700">Avuncular Testing</h3>
              <p className="text-sm text-gray-600 mb-4">Aunt/uncle DNA relationship testing available in {cityName}.</p>
              <span className="text-blue-600 text-sm font-medium group-hover:underline inline-flex items-center">
                View Service
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link
              to="/services/forensic-dna-analysis"
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
            >
              <h3 className="font-semibold text-lg mb-3 text-blue-600 group-hover:text-blue-700">Forensic Analysis</h3>
              <p className="text-sm text-gray-600 mb-4">Specialty forensic DNA analysis services in {cityName}.</p>
              <span className="text-blue-600 text-sm font-medium group-hover:underline inline-flex items-center">
                View Service
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

          <p className="text-center text-gray-600 italic">All tests follow strict chain-of-custody procedures when required.</p>
        </section>

        {/* Areas We Serve - Full Width Background */}
      </div>
      
      <section className="bg-blue-50 py-16 mb-16 w-full">
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">Areas We Serve in {cityName}</h2>
            
            <p className="text-center text-gray-700 mb-6 text-lg">
              We proudly support residents across <strong className="text-blue-600">{cityName}</strong> and nearby neighborhoods, including:
            </p>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="text-gray-700 font-medium text-center leading-relaxed">
                Aurora Hills, Saddle Rock, Tallyn's Reach, Mission Viejo, Heather Ridge, Southlands, Murphy Creek, Tollgate Crossing, Seven Hills, Conservatory, and Buckley Air Force Base area
              </p>
            </div>

            <p className="text-center text-gray-600 mt-6">
              If you need a reliable DNA test "near me," our team provides convenient scheduling and flexible appointment options.
            </p>
          </div>
        </section>

      <div className="max-w-6xl mx-auto px-4">
        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">Why Choose Mile High DNA Testing in {cityName}?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">AABB-Accredited Laboratory</h3>
              <p className="text-gray-600 text-sm">Certified and trusted</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Court-Admissible Results</h3>
              <p className="text-gray-600 text-sm">Legal documentation ready</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">USCIS-Approved</h3>
              <p className="text-gray-600 text-sm">Immigration testing certified</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Fast Turnaround</h3>
              <p className="text-gray-600 text-sm">Results in 3-5 business days</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Local Colorado Team</h3>
              <p className="text-gray-600 text-sm">Experienced professionals</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Flexible Scheduling</h3>
              <p className="text-gray-600 text-sm">Convenient appointment times</p>
            </div>
          </div>

          <p className="text-center text-gray-700 mt-8 text-lg font-medium">Your privacy and accuracy come first.</p>
        </section>

        {/* How It Works - Full Width Background */}
      </div>
      
      <section className="bg-gray-50 py-16 mb-16 w-full">
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">How DNA Testing Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Schedule</h3>
                <p className="text-gray-600 text-sm">Book your appointment online or by phone</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Sample Collection</h3>
                <p className="text-gray-600 text-sm">Simple cheek swab in our office</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Processing</h3>
                <p className="text-gray-600 text-sm">Laboratory analysis begins immediately</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Results</h3>
                <p className="text-gray-600 text-sm">Receive secure results via email</p>
              </div>
            </div>

            <p className="text-center text-gray-700 mt-8 text-lg">We guide you through every step.</p>
          </div>
        </section>

      <div className="max-w-6xl mx-auto px-4">
        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">FAQ for {cityName} DNA Testing</h2>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">How fast can I get DNA results in {cityName}?</h3>
              <p className="text-gray-600">Results typically return within 2–3 business days. Expedited options may be available.</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Are your paternity tests legal in Colorado courts?</h3>
              <p className="text-gray-600">Yes — when you choose a legal test with chain-of-custody documentation.</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Do you offer mobile DNA testing in {cityName}?</h3>
              <p className="text-gray-600">Yes, mobile appointments are available in most areas.</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Is immigration DNA testing approved for USCIS cases?</h3>
              <p className="text-gray-600">Yes, all immigration tests follow USCIS, AABB, and embassy requirements.</p>
            </div>
          </div>
        </section>

        {/* CTA Section - Full Width Background */}
      </div>
      
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 mb-16 w-full">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule Your Appointment in {cityName}</h2>
            <p className="text-lg mb-8 text-blue-50">Click below to schedule your DNA test:</p>
            <a href="/appointments" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-block shadow-lg">
              Schedule an Appointment
            </a>
          </div>
        </section>

      <div className="max-w-6xl mx-auto px-4">
        {/* Related Services */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Related Services</h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/services/legal-paternity-testing" className="bg-white border border-gray-300 rounded-lg px-6 py-3 text-blue-600 hover:bg-blue-50 hover:border-blue-500 transition-colors font-medium shadow-sm">
              Paternity Testing
            </Link>
            <Link to="/services/immigration-dna-testing" className="bg-white border border-gray-300 rounded-lg px-6 py-3 text-blue-600 hover:bg-blue-50 hover:border-blue-500 transition-colors font-medium shadow-sm">
              Immigration DNA Testing
            </Link>
            <Link to="/locations" className="bg-white border border-gray-300 rounded-lg px-6 py-3 text-blue-600 hover:bg-blue-50 hover:border-blue-500 transition-colors font-medium shadow-sm">
              All Locations
            </Link>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Aurora;

