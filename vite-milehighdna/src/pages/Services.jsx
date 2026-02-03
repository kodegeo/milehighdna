import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import legalHero from '../assets/images/legal_hero.png';
import peaceOfMindHero from '../assets/images/paternity-peace-of-mind-denver.png';
import avuncularHero from '../assets/images/family-dna-hero.png';
import discreetHero from '../assets/images/father_baby.jpg';
import grandparentageHero from '../assets/images/grandparentage-hero.png';
import siblingshipHero from '../assets/images/siblingship-hero.png';
import twinZygosityHero from '../assets/images/siblingship_1.png';
import prenatalHero from '../assets/images/prenatal-3.png';
import immigrationHero from '../assets/images/immigration-dna.png';
import servicesBanner from '../assets/images/services-1.jpg';
import ServingColorado from '../components/common/ServingColorado';
import forensicsHero from '../assets/images/forensic.png';
import yStrHero from '../assets/images/service_imma.png';
import mtdnaHero from '../assets/images/grandparantage_1.png';
import gpsOriginsHero from '../assets/images/gps.png';
import infidelityHero from '../assets/images/infidelity.png';
import healthyWeightHero from '../assets/images/healthy-weight.png';
import atHomeKitsHero from '../assets/images/at-home-test-kit-1.png';
import CallToAction from '../components/common/CallToAction';

const services = [
  {
    title: 'Legal Paternity DNA Testing',
    description: 'Legal paternity DNA testing is used when verified biological parenthood is required for court or government matters. This type of testing follows strict chain-of-custody procedures and produces court-admissible results commonly used in child support, custody, and legal documentation cases.',
    image: legalHero,
    link: '/services/legal-paternity-testing',
    badge: 'Court-Admissible',
  },
  {
    title: 'Peace of Mind DNA Testing',
    description: 'Peace-of-mind DNA testing is a non-legal option for individuals seeking private confirmation of biological parenthood. This testing is designed for personal knowledge and family clarity without the documentation or identification requirements associated with legal testing.',
    image: peaceOfMindHero,
    link: '/services/non-legal-paternity-testing',
    badge: 'Non-Legal',
  },
  {
    title: 'Discreet DNA Testing',
    description: 'Discreet DNA testing offers confidential DNA analysis for sensitive personal situations. This option allows testing using personal items or submitted samples and is intended for private, non-legal use with careful handling and privacy-focused processes.',
    image: discreetHero,
    link: '/services/discreet-dna-testing',
    badge: '100% Confidential',
  },
  {
    title: 'Immigration DNA Testing',
    description: 'Immigration DNA testing supports USCIS, embassy, and consular cases that require verified biological relationships. Testing is conducted through an AABB-accredited laboratory and follows strict protocols required for immigration and visa-related applications.',
    image: immigrationHero,
    link: '/services/immigration-dna-testing',
    badge: 'USCIS Approved',
  },
  {
    title: 'Prenatal Paternity DNA Testing',
    description: 'Prenatal paternity DNA testing determines biological parenthood during pregnancy using non-invasive DNA analysis. This service is available for both legal and peace-of-mind purposes and is commonly chosen when early answers are needed before birth.',
    image: prenatalHero,
    link: '/services/prenatal-paternity-testing',
    badge: 'Non-Invasive',
  },
  {
    title: 'Siblingship DNA Testing',
    description: 'Siblingship DNA testing evaluates whether individuals share a full or half-sibling biological relationship. This type of testing is often used when one or both parents are unavailable for comparison and extended family relationships need to be clarified.',
    image: siblingshipHero,
    link: '/services/siblingship-testing',
    badge: 'Relationship Verification',
  },
  {
    title: 'Grandparentage DNA Testing',
    description: 'Grandparentage DNA testing helps establish biological relationships between grandparents and grandchildren when a parent cannot be tested. This service is commonly used in legal cases, family verification situations, and extended relationship analysis.',
    image: grandparentageHero,
    link: '/services/grandparentage-testing',
    badge: 'Family Relationships',
  },
  {
    title: 'Avuncular DNA Testing',
    description: 'Avuncular DNA testing examines biological relationships through an aunt or uncle when direct parent testing is not possible. This method is used to evaluate extended family relationships and provide clarity in complex family situations.',
    image: avuncularHero,
    link: '/services/avuncular-dna-testing',
    badge: 'Aunt/Uncle DNA',
  },
  {
    title: 'Forensic DNA Analysis',
    description: 'Forensic DNA analysis involves advanced genetic testing for complex cases, including legal investigations, missing persons, and specialized relationship analysis. This service may include enhanced testing methods and expert-level interpretation depending on case requirements.',
    image: forensicsHero,
    link: '/services/forensic-dna-analysis',
    badge: 'Specialty Testing',
  },
  {
    title: 'Infidelity DNA Testing',
    description: 'Infidelity DNA testing provides discreet analysis using personal items or DNA samples to help confirm or exclude biological relationships. Conducted with strict confidentiality and sensitivity for private, non-court use.',
    image: infidelityHero,
    link: '/services/infidelity-dna-testing',
    badge: '100% Confidential',
  },
  {
    title: 'Peek-A-Boo Gender Reveal DNA Test',
    description: 'Early gender reveal DNA testing determines your baby\'s gender as early as 6 weeks into pregnancy using a simple maternal blood draw. Fast, reliable results with no risk to the baby. Available in Denver and Colorado.',
    image: prenatalHero,
    link: '/services/gender-reveal-dna-testing',
    badge: 'Early as 6 Weeks',
  },
  {
    title: 'Twin Zygosity DNA Testing',
    description: 'Twin zygosity DNA testing determines whether twins are identical or fraternal using precise DNA analysis. Used for medical insight, family knowledge, or personal clarity. Schedule in Denver or nearby.',
    image: twinZygosityHero,
    link: '/services/twin-zygosity-testing',
    badge: 'Identical vs Fraternal',
  },
  {
    title: 'Y-STR DNA Testing (Paternal Lineage)',
    description: 'Y-STR DNA testing analyzes the male Y-chromosome to establish paternal lineage and shared male ancestry. Used for genealogy research, surname studies, and paternal relationship analysis.',
    image: yStrHero,
    link: '/services/y-str-dna-testing',
    badge: 'Paternal Lineage',
  },
  {
    title: 'mtDNA Testing (Maternal Lineage)',
    description: 'Mitochondrial DNA (mtDNA) testing traces maternal ancestry through the direct maternal line. Useful for genealogy and extended maternal relationship testing when close maternal relatives are unavailable.',
    image: mtdnaHero,
    link: '/services/mtdna-testing',
    badge: 'Maternal Lineage',
  },
  {
    title: 'Lifestyle & Ancestry DNA Tests',
    description: 'Lifestyle and ancestry DNA testing provides insight into genetic traits related to wellness, nutrition, and ancestral origins. Explore your genetics beyond paternity with professional testing in Colorado.',
    image: servicesBanner,
    link: '/services/lifestyle-ancestry-dna-testing',
    badge: 'Wellness & Ancestry',
  },
  {
    title: 'Healthy Weight DNA Test',
    description: 'The Healthy Weight DNA Test analyzes genetic factors related to metabolism, diet response, and exercise tendencies. Personalize weight and wellness strategies based on your genetics.',
    image: healthyWeightHero,
    link: '/services/healthy-weight-dna-test',
    badge: 'Personalized Wellness',
  },
  {
    title: 'GPS Origins DNA Test',
    description: 'The GPS Origins DNA Test provides detailed ancestry insights and geographic genetic origins using advanced DNA analysis. Ideal for deeper ancestral and regional genetic information.',
    image: gpsOriginsHero,
    link: '/services/gps-origins-dna-test',
    badge: 'Ancestry & Origins',
  },
  {
    title: 'At-Home DNA Kits (Postnatal)',
    description: 'At-home DNA test kits offer convenient, non-legal postnatal DNA testing with the same laboratory accuracy as in-office testing. Processed by an AABB-accredited lab and shipped securely nationwide.',
    image: atHomeKitsHero,
    link: '/services/at-home-dna-kits',
    badge: 'Convenient & Accurate',
  },
];

const Services = () => {
  return (
    <main>
      <Helmet>
        <title>All DNA Testing Services | Mile High DNA Testing</title>
        <meta
          name="description"
          content="Explore all DNA testing services offered by Mile High DNA Testing in Colorado. Legal paternity, peace of mind, discreet, immigration, prenatal, siblingship, grandparentage, avuncular, forensic, infidelity, gender reveal, twin zygosity, Y-STR, mtDNA, lifestyle, healthy weight, GPS origins, and at-home DNA kits."
        />
        <meta
          name="keywords"
          content="DNA testing Denver, paternity testing Colorado, legal DNA test, immigration DNA Colorado, discreet DNA testing, forensic DNA, prenatal paternity test, infidelity DNA test, gender reveal DNA, twin zygosity, at-home DNA kit"
        />
        <link rel="canonical" href="https://milehighdnatesting.com/services" />
        
        {/* OG / Twitter */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="All DNA Testing Services | Mile High DNA Testing" />
        <meta property="og:description" content="Explore all DNA testing services offered by Mile High DNA Testing in Colorado. Legal paternity, peace of mind, discreet, immigration, prenatal, siblingship, grandparentage, avuncular, forensic, and more." />
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
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl text-white font-bold mb-4">Our DNA Testing Services</h1>
            <p className="text-xl mb-6">
              Fast, confidential, and AABB-accredited DNA testing for families, legal cases, and prenatal testing needs.
            </p>
            <p className="text-lg mb-8">
              Serving Denver, Aurora, Lakewood, Englewood, Thornton, Westminster, and surrounding Colorado communities. We serve clients statewide for both legal and non-legal DNA testing needs.
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
                onClick={() => {
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({
                    event: "phone_click",
                    phone_number: "720-900-9342",
                    phone_location: "Services - Hero CTA"
                  });
                }}
                className="btn-secondary bg-white text-[#2C6FA6] font-bold py-3 px-6 rounded shadow hover:bg-gray-100"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* SERVICES GRID */}
      <div className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our DNA Testing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="card">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  {service.badge && (
                    <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {service.badge}
                    </span>
                  )}
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      to={service.link}
                      className="text-[#2C6FA6] hover:text-[#7DB9E8] font-semibold transition duration-300"
                    >
                      Learn More →
                    </Link>
                    <a
                      href="tel:+17209009342"
                      onClick={() => {
                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({ event: "phone_click", phone_number: "720-900-9342" });
                      }}
                      className="text-[#2C6FA6] hover:text-[#7DB9E8] font-semibold transition duration-300 inline-flex items-center gap-1"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* MID-PAGE BOOKING CTA */}
      <div className="section-padding">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">Questions about pricing or testing? We’re here to help.</p>
          <a
            href="tel:+17209009342"
            onClick={() => {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({ event: "phone_click", phone_number: "720-900-9342" });
            }}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition font-medium mb-10"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            Call Now: (720) 900-9342
          </a>
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your DNA Test?</h2>
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
        </div>
      </div>
      {/* WHY CHOOSE US */}
      <div className="section-padding section-bg-alt">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Families in Denver Trust Us</h2>
          <p className="max-w-3xl mx-auto text-gray-700 mb-10">
            Mile High DNA Testing is trusted by Colorado families, attorneys, and immigration specialists for accurate and confidential results.
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

      {/* Testimonials */}
      <div className="section-padding section-bg-alt">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="flex flex-wrap justify-center gap-8">
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
                className="block w-full max-w-xl mx-auto"
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
        </div>
      </div>
      {/* Local Trust */}
      <ServingColorado />

      {/* Strong CTA */}
      <CallToAction />
    </main>
  );
};

export default Services;
