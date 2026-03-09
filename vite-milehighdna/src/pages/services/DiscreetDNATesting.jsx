import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HeroImage from '../../assets/images/father-baby-3.png';
import ServingColorado from '../../components/common/ServingColorado';
import CallToAction from '../../components/common/CallToAction';
import FAQSection from '../../components/FAQSection';

const DISCREET_DNA_FAQS = [
  { question: "Is discreet DNA testing confidential?", answer: "Yes. Discreet DNA testing in Denver is designed for maximum confidentiality. We use unbranded packaging, secure data handling, and private communication throughout the DNA testing process. Your paternity test or relationship test results and personal information are never shared without your authorization. Our AABB-accredited laboratory partners follow the same privacy standards for discreet DNA testing." },
  { question: "What is the most reliable alternative sample for discreet DNA testing?", answer: "Cheek (buccal) swabs are the most reliable and preferred sample type for DNA testing. When the alleged father cannot provide a swab, other samples (e.g., used toothbrush, hair with roots) may be possible for peace-of-mind paternity testing; discuss options with our Denver office. The DNA testing process works best with swabs when they can be obtained." },
  { question: "How should alternative samples be stored for DNA testing?", answer: "Place items in a clean, dry paper envelope or bag. Do not use plastic for items that may be damp. Label with the donor's name and date collected, and send or bring to the laboratory as soon as possible so the DNA testing process can begin. Proper storage helps the AABB-accredited lab recover sufficient DNA for analysis." },
  { question: "How long does discreet DNA testing take?", answer: "Discreet DNA testing results are typically available in 2–3 business days after the AABB-accredited laboratory receives samples. The DNA testing results timeline may vary with alternative samples or if recollection is needed. Ask about expedited options when you order your discreet paternity test or relationship test." },
  { question: "Can discreet DNA test samples be expedited?", answer: "Expedited processing for discreet DNA testing may be available for an additional fee. Ask about rush options when you order or schedule your paternity test or relationship test at our Denver location. The DNA testing process can sometimes be accelerated for time-sensitive situations." },
  { question: "What happens if sufficient DNA is not recovered from a discreet sample?", answer: "If the laboratory cannot obtain enough DNA from an alternative sample, we will notify you and can send a cheek swab kit or arrange in-person collection at no extra charge in most cases. The DNA testing process requires sufficient DNA for accurate paternity test or relationship test results." },
  { question: "Can discreet DNA test results be used in court?", answer: "Discreet DNA testing is typically for peace of mind only and is not court-admissible. For court-admissible results, you need a legal paternity test with verified ID and chain of custody from an AABB-accredited laboratory. We can arrange discreet handling for legal DNA testing in Denver when privacy is still a priority." },
  { question: "Are cheek swabs more reliable than alternative samples for DNA testing?", answer: "Yes. Cheek swabs are the standard and most reliable sample for DNA testing. Alternative samples (e.g., toothbrush, hair) can work for peace-of-mind paternity testing but may have a higher chance of insufficient DNA; we recommend swabs when possible. Our Denver office can guide you through the DNA testing process for either option." }
];

const DiscreetDNATesting = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Helmet>
        <html lang="en" />
        <title>Discreet DNA Testing in Denver | 100% Confidential & Private | Mile High DNA</title>
        <meta
          name="description"
          content="Completely private and discreet DNA testing in Denver with unbranded packaging and confidential handling. Perfect for sensitive situations requiring maximum privacy. AABB-accredited results."
        />
        <meta
          name="keywords"
          content="discreet DNA testing Denver, confidential DNA test, private DNA testing Colorado, anonymous DNA testing, unbranded dna kit"
        />
        <link rel="canonical" href="https://milehighdnatesting.com/services/discreet-dna-testing" />
        
        {/* OG / Twitter */}
        <meta property="og:title" content="Discreet DNA Testing in Denver | 100% Confidential & Private" />
        <meta property="og:description" content="Completely private DNA testing with unbranded packaging and confidential handling. Perfect for sensitive situations requiring maximum privacy." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://milehighdnatesting.com/services/discreet-dna-testing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Discreet DNA Testing in Denver" />
        <meta name="twitter:description" content="100% confidential DNA testing with unbranded packaging and private handling." />
        <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />

        {/* Breadcrumb JSON-LD Schema */}
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
                "name": "Discreet DNA Testing",
                "item": "https://milehighdnatesting.com/services/discreet-dna-testing"
              }
            ]
          })}
        </script>

        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://milehighdnatesting.com/services/discreet-dna-testing#business",
            "name": "Mile High DNA Testing",
            "url": "https://milehighdnatesting.com/services/discreet-dna-testing",
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
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              }
            ],
            "areaServed": [
              "Denver",
              "Aurora",
              "Lakewood",
              "Westminster",
              "Thornton",
              "Littleton",
              "Colorado Springs",
              "Boulder"
            ]
          })}
        </script>

        {/* FAQ JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": DISCREET_DNA_FAQS.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Discreet DNA Testing in Denver
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              100% Confidential. Unbranded Packaging. Maximum Privacy.
            </p>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Our Discreet DNA Testing service provides completely private DNA testing with unbranded packaging 
              and confidential handling. Perfect for sensitive situations where maximum privacy is essential. 
              All testing is performed by AABB-accredited laboratories with the same accuracy as standard tests, 
              but with enhanced privacy protections.
            </p>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Whether you need paternity testing, relationship verification, or any other DNA test, 
              we ensure your privacy is protected every step of the way. No identifying information 
              appears on packaging, and all communications are handled with complete discretion.
            </p>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Mile High DNA Testing provides services throughout Denver, Aurora, Lakewood, Englewood, Thornton, Westminster, and surrounding Colorado communities. We serve clients statewide for both legal and non-legal DNA testing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/shop/at-home-paternity-test"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition font-semibold text-lg inline-block text-center"
              >
                Order Discreet Kit
              </a>
              <a
                href="/appointments"
                className="bg-green-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-green-700 transition font-semibold text-lg inline-block text-center"
              >
                Schedule Private Appointment
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src={HeroImage}
              alt="Discreet DNA Testing in Denver"
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Discreet Testing Options</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">At-Home Kit</h4>
              <p className="text-3xl font-bold text-blue-600 mb-4">$199</p>
              <p className="text-gray-600 mb-4">Unbranded kit delivered discreetly to your address</p>
              <a
                href="/shop/at-home-paternity-test"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition font-semibold text-lg inline-block w-full"
              >
                Order Kit
              </a>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Private Appointment</h4>
              <p className="text-3xl font-bold text-green-600 mb-4">$249</p>
              <p className="text-gray-600 mb-4">Private, confidential in-person testing at our location</p>
              <a
                href="/appointments"
                className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 transition font-semibold text-lg inline-block w-full"
              >
                Schedule Appointment
              </a>
            </div>
          </div>
          
          <p className="text-gray-700 mb-6 text-lg">
            Both options provide the same AABB-accredited accuracy and complete privacy protection. 
            Choose the option that best fits your needs for maximum discretion.
          </p>
        </div>
      </section>

      {/* Why Choose Discreet Testing */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Why Choose Discreet DNA Testing?
          </h2>
          <ul className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
            <li>✅ Unbranded Packaging — No company logos or identifying information visible</li>
            <li>✅ Complete Confidentiality — All personal data protected and never shared</li>
            <li>✅ Private Communication — Secure, discreet handling of all correspondence</li>
            <li>✅ Same Accuracy — AABB-accredited laboratory testing with 99%+ accuracy</li>
            <li>✅ Flexible Options — At-home kit or private in-person appointment available</li>
            <li>✅ Fast Results — Results delivered securely within 2–3 business days</li>
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How Discreet Testing Works</h2>
          <ol className="grid md:grid-cols-4 gap-6 text-center text-gray-700">
            <li className="p-4 bg-gray-50 rounded-lg shadow">
              <div className="text-2xl font-bold text-blue-600 mb-2">1</div>
              <p className="font-semibold mb-2">Order Privately</p>
              <p className="text-sm">Order online with complete privacy protection</p>
            </li>
            <li className="p-4 bg-gray-50 rounded-lg shadow">
              <div className="text-2xl font-bold text-blue-600 mb-2">2</div>
              <p className="font-semibold mb-2">Receive Unbranded Kit</p>
              <p className="text-sm">Package arrives with no identifying labels</p>
            </li>
            <li className="p-4 bg-gray-50 rounded-lg shadow">
              <div className="text-2xl font-bold text-blue-600 mb-2">3</div>
              <p className="font-semibold mb-2">Collect & Return</p>
              <p className="text-sm">Simple cheek swab, return in provided envelope</p>
            </li>
            <li className="p-4 bg-gray-50 rounded-lg shadow">
              <div className="text-2xl font-bold text-blue-600 mb-2">4</div>
              <p className="font-semibold mb-2">Secure Results</p>
              <p className="text-sm">Results delivered confidentially via secure email</p>
            </li>
          </ol>
        </div>
      </section>

      {/* Privacy Features */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Privacy Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Unbranded Packaging</h3>
              <p className="text-gray-600">No company logos, names, or identifying information appears on any packaging or correspondence.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Secure Data Handling</h3>
              <p className="text-gray-600">All personal information is encrypted and stored securely. Never shared with third parties.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Confidential Communication</h3>
              <p className="text-gray-600">All phone calls, emails, and results are handled with complete discretion and privacy.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={DISCREET_DNA_FAQS} className="bg-gray-50" />

      <ServingColorado />
      <CallToAction />
      
      {/* Social Share Block */}
      <div className="mt-12 bg-gray-50 p-6 rounded-xl border border-gray-200 max-w-4xl mx-auto px-4">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">Share This Page</h3>
        <p className="text-center text-gray-600 mb-6">Help others find reliable DNA testing services in Denver.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a 
            href="https://www.facebook.com/sharer/sharer.php?u=https://milehighdnatesting.com/services/discreet-dna-testing" 
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
            href="https://twitter.com/intent/tweet?url=https://milehighdnatesting.com/services/discreet-dna-testing&text=Discreet%20DNA%20Testing%20in%20Denver" 
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
            href="mailto:?subject=Discreet%20DNA%20Testing%20in%20Denver&body=Check%20out%20this%20page:%20https://milehighdnatesting.com/services/discreet-dna-testing" 
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

export default DiscreetDNATesting;
