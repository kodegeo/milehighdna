import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import legalHero from '../assets/images/legal_hero.png';
import grandparentageHero from '../assets/images/grandparentage-hero.png';
import siblingshipHero from '../assets/images/siblingship-hero.png';
import prenatalHero from '../assets/images/service_pre.png';
import immigrationHero from '../assets/images/service_imma.png';
import servicesBanner from '../assets/images/services-1.jpg';

const services = [
  {
    title: 'Legal Paternity DNA Testing',
    description: 'Court-admissible DNA testing for legal matters such as custody, child support, and court orders.',
    image: legalHero,
    link: '/legal-paternity-tests',
    badge: 'Court-Admissible',
  },
  {
    title: 'Peace of Mind DNA Testing',
    description: 'Non-legal paternity testing for personal knowledge. Fast, confidential results without court documentation.',
    image: legalHero,
    link: '/peace-of-mind-paternity-tests',
    badge: 'Non-Legal',
  },
  {
    title: 'Discreet DNA Testing',
    description: 'Completely private DNA testing with unbranded packaging and confidential handling. Perfect for sensitive situations requiring maximum privacy.',
    image: legalHero,
    link: '/discreet-dna-testing',
    badge: '100% Confidential',
  },
  {
    title: 'Immigration DNA Testing',
    description: 'USCIS-approved DNA testing for immigration cases. Meets embassy and consulate requirements worldwide.',
    image: immigrationHero,
    link: '/immigration-dna-tests',
    badge: 'USCIS Approved',
  },
  {
    title: 'Prenatal Paternity DNA Testing',
    description: 'Non-invasive prenatal paternity testing for expectant mothers. Safe, accurate, and confidential.',
    image: prenatalHero,
    link: '/prenatal-dna-test',
    badge: 'Non-Invasive',
  },
  {
    title: 'Siblingship DNA Testing',
    description: 'Determine full, half, or no biological relationship between siblings. Legal and personal use testing available.',
    image: siblingshipHero,
    link: '/siblingship-dna-tests',
    badge: 'Relationship Verification',
  },
  {
    title: 'Grandparentage DNA Testing',
    description: 'Establish biological relationships through grandparentage testing. Legal and non-legal options available.',
    image: grandparentageHero,
    link: '/grandparentage-dna-tests',
    badge: 'Family Relationships',
  },
  {
    title: 'Avuncular DNA Testing',
    description: 'Determine biological relationships through aunt/uncle DNA testing. Useful when direct parent testing is not possible.',
    image: siblingshipHero,
    link: '/appointments',
    badge: 'Aunt/Uncle DNA',
  },
  {
    title: 'Forensic DNA Analysis',
    description: 'Specialty DNA testing for legal cases, missing persons, and complex relationship verification. Expert analysis available.',
    image: legalHero,
    link: '/forensic-dna-analysis',
    badge: 'Specialty Testing',
  },
];

const Services = () => {
  return (
    <main>
      <Helmet>
        <title>All DNA Testing Services | Mile High DNA Testing</title>
        <meta
          name="description"
          content="Explore all DNA testing services offered by Mile High DNA Testing in Colorado. Legal paternity, peace of mind, discreet, immigration, prenatal, siblingship, grandparentage, avuncular, and forensic DNA testing available."
        />
        <meta
          name="keywords"
          content="DNA testing Denver, paternity testing Colorado, legal DNA test, immigration DNA Colorado, discreet DNA testing, forensic DNA, prenatal paternity test"
        />
        <link rel="canonical" href="https://milehighdnatesting.com/services" />
        
        {/* OG / Twitter */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="All DNA Testing Services | Mile High DNA Testing" />
        <meta property="og:description" content="Explore all DNA testing services offered by Mile High DNA Testing in Colorado. Legal paternity, peace of mind, discreet, immigration, prenatal, siblingship, grandparentage, avuncular, and forensic DNA testing available." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:url" content="https://milehighdnatesting.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="All DNA Testing Services | Mile High DNA Testing" />
        <meta name="twitter:description" content="Explore all DNA testing services offered by Mile High DNA Testing in Colorado." />
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
                "name": "All DNA Testing Services",
                "item": "https://milehighdnatesting.com/services"
              }
            ]
          })}
        </script>
      </Helmet>
      {/* HERO SECTION - Full width banner with overlayed text */}
      <section className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center pt-20 md:pt-24 pb-12 mb-8">
        <img
          src={servicesBanner}
          alt="DNA Testing Services Banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-blue-900/60 z-10" />
        <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-4 py-8 max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg leading-tight px-4">
            Our DNA Testing Services
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white max-w-3xl mx-auto drop-shadow-md mb-4 leading-relaxed px-4">
            Mile High DNA offers fast, confidential, and AABB-accredited DNA testing for families, legal cases, and prenatal testing needs in Denver, Aurora, Lakewood, and across Colorado.
          </p>
          <p className="text-sm md:text-base text-white max-w-3xl mx-auto drop-shadow-md mb-8 leading-relaxed px-4">
            Mile High DNA Testing provides services throughout Denver, Aurora, Lakewood, Englewood, Thornton, Westminster, and surrounding Colorado communities. We serve clients statewide for both legal and non-legal DNA testing needs.
          </p>
          {/* Quick trust points */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8 w-full max-w-4xl mx-auto px-4">
            <div className="bg-white/95 shadow-lg rounded-lg p-4 w-full md:w-1/3 text-blue-900 font-semibold text-sm md:text-base">
              ✅ AABB-Accredited & Court-Admissible
            </div>
            <div className="bg-white/95 shadow-lg rounded-lg p-4 w-full md:w-1/3 text-blue-900 font-semibold text-sm md:text-base">
              ✅ Serving Denver, Aurora & Englewood
            </div>
            <div className="bg-white/95 shadow-lg rounded-lg p-4 w-full md:w-1/3 text-blue-900 font-semibold text-sm md:text-base">
              ✅ Results in 3–5 Business Days
            </div>
          </div>
          {/* Immediate CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <Link
              to="/appointments"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md text-base md:text-lg font-semibold shadow-lg transition"
            >
              Book Online Now
            </Link>
            <a
              href="tel:+17209009342"
              onClick={() => {
                window.dataLayer?.push({
                  event: "phone_click",
                  phone_location: "Services - Hero CTA"
                });
              }}
              className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-md text-base md:text-lg font-semibold shadow-lg transition"
            >
              Call Us Today
            </a>
          </div>
        </div>
      </section>
      {/* SERVICES GRID */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">
                {service.title.replace('DNA Testing', '\nDNA Testing').split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {idx > 0 && <br />}
                    {line}
                  </React.Fragment>
                ))}
              </h2>
              {service.badge && (
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {service.badge}
                </span>
              )}
              <p className="text-gray-700 mb-4">{service.description}</p>
              <Link
                to={service.link}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>
      {/* MID-PAGE BOOKING CTA */}
      <section className="py-12 px-4 bg-blue-50 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Ready to Book Your DNA Test?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Many visitors are ready to book after choosing a service—so you can secure your appointment right here.
        </p>
        <div className="max-w-3xl mx-auto">
          <iframe
            src="https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment"
            width="100%"
            height="500"
            frameBorder="0"
            title="Schedule DNA Test Appointment"
            style={{ minHeight: '500px', borderRadius: '12px', border: '1px solid #e5e7eb' }}
            allowFullScreen
          ></iframe>
        </div>
      </section>
      {/* WHY CHOOSE US */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Why Families in Denver Trust Us</h2>
        <p className="text-gray-700 mb-6">
          Mile High DNA Testing is trusted by Colorado families, attorneys, and immigration specialists for accurate and confidential results.
        </p>
        <ul className="text-left mx-auto max-w-md space-y-3">
          <li>✅ Professional sample collection in a private setting</li>
          <li>✅ Legal chain-of-custody for court and USCIS cases</li>
          <li>✅ Convenient online booking and free consultations</li>
        </ul>
        {/* Optional testimonial placeholder */}
        <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow">
        {[
              {
                name: 'Tamara Argueta',
                role: 'Mother in Denver, CO',
                text: [
                  "Mile High DNA Testing definitely went above and beyond for me. They were incredibly communicative, keeping me updated every step of the way. You can tell the owner genuinely cares about her clients. She makes sure you not only get the answers you need but also feel prioritized and supported throughout the process.",
                  "If she didn't have the answer right away, she never pretended she did. She would go directly to the AABB-accredited lab to provide me the most accurate, credible information.",
                  "If you go with Mile High DNA Testing, you are truly in great hands"
                ],
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
                  <div className="flex-grow">
                    {testimonial.text.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-700 mb-3 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-4">{testimonial.source}</p>
                </div>
              </a>
            ))}
        </div>
      </section>
      {/* FINAL CALL TO ACTION */}
      <section className="py-12 px-4 text-center bg-blue-600">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to Schedule Your DNA Test?</h2>
        <p className="text-white mb-6">
          Book online or call us for a free consultation. Our team is here to help you every step of the way.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/book-appointment"
            className="bg-white text-blue-700 px-6 py-3 rounded font-semibold text-lg hover:bg-blue-100 transition"
          >
            Book Online
          </Link>
          <a
            href="tel:+17209009342"
            onClick={() => {
              window.dataLayer?.push({
                event: "phone_click",
                phone_location: "Services - Final CTA"
              });
            }}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-semibold text-lg transition"
          >
            Call Us Now
          </a>
        </div>
      </section>
    </main>
  );
};

export default Services;
