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
  },
  {
    title: 'Grandparentage DNA Testing',
    description: 'Establish biological relationships through grandparentage testing. Legal and non-legal options available.',
    image: grandparentageHero,
    link: '/grandparentage-dna-tests',
  },
  {
    title: 'Siblingship DNA Testing',
    description: 'Determine full, half, or no biological relationship between siblings. Legal and personal use testing available.',
    image: siblingshipHero,
    link: '/siblingship-dna-tests',
  },
  {
    title: 'Prenatal Paternity DNA Testing',
    description: 'Non-invasive prenatal paternity testing for expectant mothers. Safe, accurate, and confidential.',
    image: prenatalHero,
    link: '/prenatal-dna-test',
  },
];

const Services = () => {
  return (
    <main>
      <Helmet>
        <title>DNA Testing Services in Denver | Paternity, Prenatal & More</title>
        <meta
          name="description"
          content="Explore all DNA testing services offered by Mile High DNA in Denver, Aurora, and Lakewood. Legal, immigration, prenatal, siblingship, and grandparentage tests available."
        />
      </Helmet>
      {/* HERO SECTION - Full width banner with overlayed text */}
      <section className="relative w-full h-[320px] md:h-[420px] lg:h-[500px] flex items-center justify-center mb-0">
        <img
          src={servicesBanner}
          alt="DNA Testing Services Banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-blue-900/60 z-10" />
        <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Our DNA Testing Services</h1>
          <p className="text-lg md:text-2xl text-white max-w-2xl mx-auto drop-shadow-md">
          Mile High DNA offers fast, confidential, and AABB-accredited DNA testing for families, legal cases, and prenatal testing needs in Denver, Aurora, Lakewood, and across Colorado.          </p>
          {/* Quick trust points */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-6 w-full max-w-3xl mx-auto">
            <div className="bg-white/90 shadow-md rounded-lg p-4 w-full md:w-1/3 text-blue-900 font-semibold text-base md:text-lg">
              ✅ AABB-Accredited & Court-Admissible
            </div>
            <div className="bg-white/90 shadow-md rounded-lg p-4 w-full md:w-1/3 text-blue-900 font-semibold text-base md:text-lg">
              ✅ Serving Denver, Aurora & Englewood
            </div>
            <div className="bg-white/90 shadow-md rounded-lg p-4 w-full md:w-1/3 text-blue-900 font-semibold text-base md:text-lg">
              ✅ Results in 2–5 Business Days
            </div>
          </div>
          {/* Immediate CTAs */}
          <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
            <Link
              to="/book-appointment"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md text-lg font-semibold shadow"
            >
              Book Online Now
            </Link>
            <a
              href="tel:+17209009342"
              className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md text-lg font-semibold shadow"
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
          <p className="italic text-gray-800">
            "They made a stressful situation simple and fast. Highly recommend Mile High DNA Testing!"
          </p>
          <p className="mt-2 font-semibold text-blue-700">– Maria G., Denver</p>
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
