import React from 'react';
import { Link } from 'react-router-dom';
import bannerBg from '../assets/images/banner_bg_Res_3.png';
import bannerBgMobile from '../assets/images/banner_bg_Res_3_mobi.jpg';
import servicePrenatal from '../assets/images/prenatal-1.png';
import serviceInOffice from '../assets/images/father_baby.jpg';
import serviceAtHome from '../assets/images/at-home-test-kit.png';
import servicePat from '../assets/images/service_pat.png';
import servicePre from '../assets/images/grandparantage_1.png';
import serviceImma from '../assets/images/service_imma.png';
import ServingColorado from '../components/common/ServingColorado';
import CallToAction from '../components/common/CallToAction';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const isOpenNow = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday
    const hour = now.getHours();

    const isWeekday = day >= 1 && day <= 5;
    const isBusinessHours = hour >= 9 && hour < 18;

    return isWeekday && isBusinessHours;
  };

  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <Helmet>
      <title>
      DNA Testing in Denver – Call 720-900-9342 | Legal & Prenatal Paternity
      </title>
      <meta
          name="description"
          content="Need a legal or prenatal paternity test in Denver? Court-admissible DNA testing with AABB-accredited labs. Same-day appointments available. Call 720-900-9342 or book online today."
        />
        <meta name="msvalidate.01" content="5905CEB57CBF0561C0CECACC8EB705D6" />

        {/* Open Graph for social previews */}
        <meta property="og:title" content="Fast & Confidential DNA Testing in Denver – Mile High DNA" />
        <meta property="og:description" content="Book same-day DNA tests in Denver. Trusted by families and attorneys for paternity & legal cases." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:url" content="https://milehighdnatesting.com" />
        <meta property="og:type" content="website" />

        {/* Twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />

        <link rel="canonical" href="https://milehighdnatesting.com" />
        <link rel="alternate" href="https://milehighdnatesting.com" hreflang="en" />
        <link rel="alternate" href="https://milehighdnatesting.com/es" hreflang="es" />
        <link rel="alternate" hreflang="x-default" href="https://milehighdnatesting.com" />


        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "MedicalBusiness"],
              "@id": "https://milehighdnatesting.com/#dna-testing-denver",
              "name": "Mile High DNA Testing",
              "image": "https://milehighdnatesting.com/logo.png",
              "url": "https://milehighdnatesting.com",
              "telephone": "+1-720-900-9342",
              "priceRange": "$$",
              "areaServed": [
                { "@type": "City", "name": "Denver" },
                { "@type": "City", "name": "Aurora" },
                { "@type": "City", "name": "Lakewood" },
                { "@type": "City", "name": "Thornton" },
                { "@type": "City", "name": "Westminster" },
                { "@type": "City", "name": "Littleton" },
                { "@type": "City", "name": "Colorado Springs" },
                { "@type": "City", "name": "Boulder" }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "DNA Testing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalTest",
                      "name": "Legal Paternity Testing"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalTest",
                      "name": "Prenatal Paternity Testing"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalTest",
                      "name": "Non-Legal Paternity Testing"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalTest",
                      "name": "Grandparentage Testing"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalTest",
                      "name": "Siblingship Testing"
                    }
                  }
                ]
              },
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
              ],
              "sameAs": [
                "https://www.facebook.com/milehighdnatesting",
                "https://www.instagram.com/milehighdnatesting",
                "https://www.linkedin.com/company/milehighdnatesting"
              ]
            },

            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://milehighdnatesting.com/#webpage",
              "url": "https://milehighdnatesting.com",
              "name": "Fast & Confidential DNA Testing in Denver, CO | Legal Paternity & Relationship Tests – Mile High DNA",
              "description": "Fast, confidential, AABB-accredited DNA testing in Denver, Aurora, Thornton & Lakewood Colorado. We provide legal paternity, prenatal, immigration, and family relationship testing with same-day appointments available throughout Denver and nearby cities.",
              "isPartOf": {
                "@type": "WebSite",
                "name": "Mile High DNA Testing",
                "url": "https://milehighdnatesting.com"
              }
            },

            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much does a legal paternity test cost in Denver?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Legal paternity testing costs vary depending on the case. Call 720-900-9342 for an exact quote and same-day availability."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is your DNA testing court admissible?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We work with AABB-accredited laboratories and follow strict chain-of-custody procedures required for court and immigration cases."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How fast do I get results?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most results are available within 3–5 business days. Expedited options are available."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer same-day appointments?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Same-day DNA testing appointments are often available in Denver and surrounding areas."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you serve areas outside Denver?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We serve Aurora, Lakewood, Thornton, Westminster, Littleton, Boulder, and Colorado Springs."
                  }
                }
              ]
            }
          ])}
          </script>
      </Helmet>

      {/* Hero Section */}
      <h1 className="sr-only">
      Court-Ordered DNA Testing in Denver – Same Day Appointments Available & Prenatal Paternity Specialists
        </h1>

      <div className="relative h-[600px]">
        {/* Desktop image */}
        <div 
          className="absolute inset-0 bg-cover bg-center hidden sm:block"
          style={{
            backgroundImage: `url(${bannerBg})`,
            filter: 'brightness(0.9999)'
          }}
        />
        {/* Mobile image */}
        <div 
          className="absolute inset-0 bg-cover bg-center sm:hidden"
          style={{
            backgroundImage: `url(${bannerBgMobile})`,
            filter: 'brightness(0.9999)'
          }}
        />
        {/* Overlay for darkness */}
        <div className="absolute inset-0 bg-black/50 z-0" />
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <div className="inline-block bg-green-600 text-white font-semibold px-4 py-2 rounded-full shadow-md mb-4">
              {isOpenNow()
                ? "Open Now – Same Day Appointments Available"
                : "Opens at 9:00 AM – Same Day Appointments Available"}
            </div>
            <h2 className="text-5xl text-white font-bold mb-4">DNA Testing in Denver – Court Approved & Confidential</h2>
            <div className="mt-6 mb-6">
              <a
                href="tel:+17209009342"
                onClick={() => {
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({
                    event: "phone_click",
                    phone_number: "720-900-9342",
                    phone_location: "Hero Headline"
                  });
                }}
                className="block text-3xl md:text-4xl font-extrabold tracking-tight text-yellow-300 hover:text-yellow-200 transition animate-pulse md:animate-none"
              >
                Call Now: 720-900-9342
              </a>

              <div className="text-base md:text-lg text-white/90 font-medium mt-2">
                Same-Day Appointments Available
              </div>
              <div className="mt-4 flex items-center gap-2 text-white text-sm md:text-base">
                <img
                  src="/images/5-star-rating.svg"
                  alt="5 star Google rating"
                  className="w-20 h-auto"
                />
                <span>
                  5.0 Rating on Google • Trusted by Denver Families & Attorneys
                </span>
              </div>
            </div>

            <p className="text-xl mb-6">
              Court-Admissible • AABB Accredited Lab • Same-Day Appointments • Results in 3–5 Days
            </p>
            <p className="text-lg mb-8">
              Get accurate, court-admissible results with full privacy. Serving Denver, Aurora, Lakewood, and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/appointments"
                className="btn-primary"
              >
                Book Now
              </Link>
              <a
                href="tel:+17209009342"
                onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "phone_click", phone_number: "720-900-9342" }); }}
                className="btn-secondary bg-white text-blue-700 font-bold py-3 px-6 rounded shadow hover:bg-gray-100"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges Section */}
      <div className="bg-gray-50 py-6 border-t border-b">
        <div className="container mx-auto px-4 text-center">
          <p className="font-semibold text-gray-800 mb-4">
            Trusted for Legal & Prenatal DNA Testing in Colorado
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
            <span>✔ AABB Accredited Laboratory</span>
            <span>✔ Court-Admissible Results</span>
            <span>✔ Used by Attorneys & Immigration Cases</span>
            <span>✔ Confidential & Secure Process</span>
          </div>
        </div>
      </div>

      {/* Trust Badge Strip */}
      <div className="bg-white py-8 shadow-sm border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#2C6FA6]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">AABB Accredited Lab</h3>
              <p className="text-sm text-gray-600">Industry-leading standards</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#2C6FA6]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Court-Admissible Results</h3>
              <p className="text-sm text-gray-600">Legally recognized testing</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#2C6FA6]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">100% Confidential</h3>
              <p className="text-sm text-gray-600">Privacy guaranteed</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#2C6FA6]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Results in 3–5 Days</h3>
              <p className="text-sm text-gray-600">Fast turnaround time</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Most Requested Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card">
              <img 
                src={servicePrenatal} 
                alt="Prenatal Paternity Testing"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Prenatal Paternity Testing</h3>
                <p className="text-gray-600 mb-4">Non-invasive prenatal paternity testing in Denver with 99.9% accuracy. Get early answers during pregnancy—safe for mother and baby. Trusted DNA testing lab near you for fast, confidential results.</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <Link
                    to="/services/prenatal-paternity-testing"
                    className="text-[#2C6FA6] hover:text-[#7DB9E8] font-semibold transition duration-300"
                  >
                    Learn More →
                  </Link>
                  <a
                    href="tel:+17209009342"
                    onClick={() => {
                      window.dataLayer = window.dataLayer || [];
                      window.dataLayer.push({
                        event: "phone_click",
                        phone_number: "720-900-9342",
                        phone_location: "Home - Prenatal Service Card"
                      });
                    }}
                    className="text-[#2C6FA6] hover:text-[#7DB9E8] font-semibold transition duration-300"
                  >
                    Call Now →
                  </a>
                </div>
              </div>
              </div>

            <div className="card">
              <img 
                src={servicePat} 
                alt="Paternity Testing"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Legal Paternity Testing</h3>
                <p className="text-gray-600 mb-4">Court-admissible legal paternity testing in Denver with 99.99% accuracy. Ideal for child support, custody, or immigration cases. Collected by certified professionals and processed in an accredited DNA lab you can trust.</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <Link
                    to="/services/legal-paternity-testing"
                    className="text-[#2C6FA6] hover:text-[#7DB9E8] font-semibold transition duration-300"
                  >
                    Learn More →
                  </Link>
                  <a
                    href="tel:+17209009342"
                    onClick={() => {
                      window.dataLayer = window.dataLayer || [];
                      window.dataLayer.push({
                        event: "phone_click",
                        phone_number: "720-900-9342",
                        phone_location: "Home - Legal Paternity Service Card"
                      });
                    }}
                    className="text-[#2C6FA6] hover:text-[#7DB9E8] font-semibold transition duration-300"
                  >
                    Call Now →
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <img 
                src={serviceInOffice} 
                alt="In Office NonLegal Paternity Testing"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">In Office Non Legal Paternity Testing</h3>
                <p className="text-gray-600 mb-4">Accurate, affordable paternity testing in Denver done in our certified DNA testing center. Perfect for peace of mind—no court order required. Professional collection and same-day appointments available.</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <Link
                    to="/services/non-legal-paternity-testing"
                    className="text-[#2C6FA6] hover:text-[#7DB9E8] font-semibold transition duration-300"
                  >
                    Learn More →
                  </Link>
                  <a
                    href="tel:+17209009342"
                    onClick={() => {
                      window.dataLayer = window.dataLayer || [];
                      window.dataLayer.push({
                        event: "phone_click",
                        phone_number: "720-900-9342",
                        phone_location: "Home - In Office Non Legal Service Card"
                      });
                    }}
                    className="text-[#2C6FA6] hover:text-[#7DB9E8] font-semibold transition duration-300"
                  >
                    Call Now →
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <img 
                src={serviceAtHome} 
                alt="At Home Paternity Kits"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">At Home Paternity Kits</h3>
                <p className="text-gray-600 mb-4">Order an at-home paternity DNA test kit for private, convenient testing. Collect samples at home, mail them to our Denver DNA lab, and receive secure, accurate results online. Ideal for families seeking peace of mind.</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <Link
                    to="/shop/at-home-paternity-test"
                    className="text-[#2C6FA6] hover:text-[#7DB9E8] font-semibold transition duration-300"
                  >
                    Learn More →
                  </Link>
                  <a
                    href="tel:+17209009342"
                    onClick={() => {
                      window.dataLayer = window.dataLayer || [];
                      window.dataLayer.push({
                        event: "phone_click",
                        phone_number: "720-900-9342",
                        phone_location: "Home - At Home Kits Service Card"
                      });
                    }}
                    className="text-[#2C6FA6] hover:text-[#7DB9E8] font-semibold transition duration-300"
                  >
                    Call Now →
                  </a>
                </div>
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
                <p className="text-gray-600 mb-4">Accurate grandparent DNA testing in Denver to confirm biological relationships when a parent is unavailable. Reliable, confidential results accepted for legal or personal purposes.</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <Link
                    to="/services/grandparentage-testing"
                    className="text-[#2C6FA6] hover:text-[#7DB9E8] font-semibold transition duration-300"
                  >
                    Learn More →
                  </Link>
                  <a
                    href="tel:+17209009342"
                    onClick={() => {
                      window.dataLayer = window.dataLayer || [];
                      window.dataLayer.push({
                        event: "phone_click",
                        phone_number: "720-900-9342",
                        phone_location: "Home - Grandparentage Service Card"
                      });
                    }}
                    className="text-[#2C6FA6] hover:text-[#7DB9E8] font-semibold transition duration-300"
                  >
                    Call Now →
                  </a>
                </div>
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
                <p className="text-gray-600 mb-4">Trusted siblingship DNA testing in Denver to determine full or half-sibling relationships. Perfect for personal knowledge or legal documentation. Convenient collection with secure processing.</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <Link
                    to="/services/siblingship-testing"
                    className="text-[#2C6FA6] hover:text-[#7DB9E8] font-semibold transition duration-300"
                  >
                    Learn More →
                  </Link>
                  <a
                    href="tel:+17209009342"
                    onClick={() => {
                      window.dataLayer = window.dataLayer || [];
                      window.dataLayer.push({
                        event: "phone_click",
                        phone_number: "720-900-9342",
                        phone_location: "Home - Siblingship Service Card"
                      });
                    }}
                    className="text-[#2C6FA6] hover:text-[#7DB9E8] font-semibold transition duration-300"
                  >
                    Call Now →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="section-padding section-bg-alt">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Families Trust Mile High DNA</h2>

          <p className="max-w-3xl mx-auto text-gray-700 mb-10">
            From paternity dna testing to legal relationship testing, we provide 99.99% accurate results with fast turnaround times. Our team guides you through every step with care and confidentiality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-2">AABB-Accredited</h3>
              <p className="text-gray-600">Court-admissible testing trusted by immigration attorneys and legal professionals.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-2">Fast Results</h3>
              <p className="text-gray-600">Get results in as little as 3–5 business days. Expedited testing available.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-2">100% Confidential</h3>
              <p className="text-gray-600">Your privacy is our priority—secure handling of all samples and results.</p>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">DNA Testing Services in Denver, Colorado</h2>
          
          <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              When you need reliable DNA testing in Denver, Mile High DNA Testing provides comprehensive paternity test Denver services for legal, personal, and medical purposes. Our AABB-accredited facility serves families throughout the greater Denver metro area, offering same-day appointments and court-admissible results. Whether you require legal paternity testing Denver for child support, custody, or immigration cases, our certified professionals ensure accurate, confidential testing with proper chain-of-custody documentation.
            </p>
            
            <p className="text-lg leading-relaxed">
              For expectant mothers seeking early answers, our prenatal paternity test Denver service uses non-invasive technology that's completely safe for both mother and baby. This advanced testing method requires only a blood sample from the mother and a cheek swab from the alleged father, eliminating any risk to the pregnancy. When a court ordered DNA test Denver is required, our legal paternity testing Denver process meets all judicial requirements, ensuring results are admissible in Colorado courts and accepted by immigration authorities.
            </p>
            
            <p className="text-lg leading-relaxed">
              Our Denver DNA testing laboratory processes all samples through AABB-accredited facilities, guaranteeing 99.99% accuracy for paternity test Denver results. We understand that DNA testing often occurs during sensitive family situations, which is why we provide compassionate, bilingual support throughout the entire process. From initial consultation to final results delivery, our team guides you every step of the way, ensuring you understand your options and receive reliable answers when you need them most.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600 mb-4">Explore our DNA testing services:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/services/legal-paternity-testing"
                className="text-[#2C6FA6] hover:text-[#7DB9E8] font-semibold transition duration-300"
              >
                Legal Paternity Testing
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                to="/services/prenatal-paternity-testing"
                className="text-[#2C6FA6] hover:text-[#7DB9E8] font-semibold transition duration-300"
              >
                Prenatal Paternity Testing
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                to="/services/non-legal-paternity-testing"
                className="text-[#2C6FA6] hover:text-[#7DB9E8] font-semibold transition duration-300"
              >
                Peace of Mind Testing
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                to="/appointments"
                className="text-[#2C6FA6] hover:text-[#7DB9E8] font-semibold transition duration-300"
              >
                Schedule Appointment
              </Link>
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
                name: 'Ilyas Ibrahim',
                role: 'Father',
                text: 'Mile High DNA Testing was amazing. The team was kind, professional, and very supportive throughout our case. We truly appreciate all their help and highly recommend them.',
                source: 'Google Review',
                sourceUrl: 'https://www.google.com/maps?q=Mile+High+DNA+Testing+Denver',
                },
              {
                name: 'Ruth Gallegos',
                role: 'Mother',
                text: 'Very good experience felt at ease, we all felt heard and seen.',
                source: 'Google Review',
                sourceUrl: 'https://www.google.com/maps?q=Mile+High+DNA+Testing+Denver',
              }
            ].map((testimonial, index) => (
              <a 
                key={index}
                href={testimonial.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-full"
              >
                <div className="card h-full flex flex-col p-6">
                  <div className="mb-4">
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
      </div>

      {/* Local Trust */}
      <ServingColorado />

      {/* Strong CTA */}
      <CallToAction />
      
      {/* Social Share Block */}
      <div className="mt-12 bg-gray-50 p-6 rounded-xl border border-gray-200 max-w-4xl mx-auto px-4">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">Share This Page</h3>
        <p className="text-center text-gray-600 mb-6">Help others find reliable DNA testing services in Denver.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a 
            href="https://www.facebook.com/sharer/sharer.php?u=https://milehighdnatesting.com" 
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
            href="https://twitter.com/intent/tweet?url=https://milehighdnatesting.com&text=Fast%20%26%20Confidential%20DNA%20Testing%20in%20Denver" 
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
            href="mailto:?subject=Fast%20%26%20Confidential%20DNA%20Testing%20in%20Denver&body=Check%20out%20this%20page:%20https://milehighdnatesting.com" 
            className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span className="font-medium">Email</span>
          </a>
        </div>
      </div>

      {/* Sticky Mobile Call Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <a
          href="tel:+17209009342"
          onClick={() => {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: "phone_click",
              phone_number: "720-900-9342",
              phone_location: "Sticky Mobile Bar"
            });
          }}
          className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-bold py-4 text-lg shadow-lg transition"
        >
          📞 Call Now – 720-900-9342
          <div className="text-sm font-normal">
            Same-Day Appointments Available
          </div>
        </a>
      </div>      
    </div>
  );
};

export default Home;