import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ImmigrationDNATesting = () => {
  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>Immigration DNA Testing in Denver | USCIS-Compliant DNA Test | Mile High DNA</title>
        <meta
          name="description"
          content="Immigration DNA testing for USCIS, embassy, and consular cases requiring verified biological relationships. AABB-accredited laboratory testing in Denver, Colorado."
        />
        <meta
          name="keywords"
          content="immigration DNA testing Denver, USCIS DNA test, embassy DNA testing Colorado, AABB accredited immigration DNA"
        />
        <link rel="canonical" href="https://milehighdnatesting.com/services/immigration-dna-testing" />
        
        {/* OG / Twitter */}
        <meta property="og:title" content="Immigration DNA Testing in Denver | USCIS-Compliant DNA Test" />
        <meta property="og:description" content="Immigration DNA testing for USCIS, embassy, and consular cases requiring verified biological relationships through AABB-accredited laboratory." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://milehighdnatesting.com/services/immigration-dna-testing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Immigration DNA Testing in Denver" />
        <meta name="twitter:description" content="USCIS-compliant DNA testing through AABB-accredited laboratory." />
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
                "name": "Immigration DNA Testing",
                "item": "https://milehighdnatesting.com/services/immigration-dna-testing"
              }
            ]
          })}
        </script>

        {/* FAQ JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is immigration DNA testing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Immigration DNA testing is a specialized process that verifies biological relationships for USCIS, embassy, and consular cases. Testing must be conducted through an AABB-accredited laboratory and follow strict protocols required for immigration applications."
                }
              },
              {
                "@type": "Question",
                "name": "Is immigration DNA testing required for all visa applications?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Immigration DNA testing is typically requested by USCIS, embassies, or consulates when documentation is insufficient to establish a biological relationship. The requesting agency will specify if DNA testing is required for your case."
                }
              },
              {
                "@type": "Question",
                "name": "How long does immigration DNA testing take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Immigration DNA testing involves coordination with an AABB-accredited laboratory and may include international sample collection. Timeline varies based on case requirements, laboratory processing, and any international coordination needed."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use a regular DNA test for immigration purposes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Immigration cases require testing through an AABB-accredited laboratory with specific documentation and chain-of-custody procedures. Regular DNA tests are not accepted for immigration purposes."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Header Section */}
      <section className="bg-blue-50 py-10 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-[#1A3C59] mb-4">
            Immigration DNA Testing
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            An overview of USCIS-compliant immigration DNA testing, including when it is required,
            how the process works, and how to determine whether this applies to your immigration case.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Who This Test Is For */}
            <section className="mb-16">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Immigration DNA testing is designed for individuals who need to verify biological relationships for USCIS, embassy, or consular cases. This type of DNA testing must be conducted through an AABB-accredited laboratory and follows strict protocols required for immigration and visa-related applications. Testing is coordinated through an AABB-accredited immigration DNA testing center in Denver.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                If a government agency has requested DNA testing to establish a biological relationship for immigration purposes, this is the appropriate process.
              </p>
            </section>

            {/* When Immigration DNA Testing Is Required */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                When Immigration DNA Testing Is Required
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Immigration DNA testing is typically required when:
              </p>
              <ul className="list-disc list-outside space-y-3 text-base text-gray-700 mb-6 ml-6 pl-2">
                <li>USCIS requests verification of a biological relationship</li>
                <li>Embassy or consular officials require DNA evidence</li>
                <li>Documentation is insufficient to establish family relationships</li>
                <li>Birth certificates or other documents are unavailable or questioned</li>
                <li>Family-based visa applications need biological relationship confirmation</li>
                <li>Refugee or asylum cases require relationship verification</li>
              </ul>
              <p className="text-base text-gray-700 leading-relaxed">
                The requesting agency will specify if DNA testing is required and provide guidance on the process.
              </p>
            </section>

            {/* When Immigration DNA Testing Is Not Required */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                When Immigration DNA Testing Is Not Required
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Immigration DNA testing is not necessary if:
              </p>
              <ul className="list-disc list-outside space-y-3 text-base text-gray-700 mb-6 ml-6 pl-2">
                <li>Sufficient documentation already establishes the relationship</li>
                <li>The immigration agency has not requested DNA testing</li>
                <li>Results are needed for personal knowledge only</li>
                <li>The case does not involve family relationship verification</li>
              </ul>
              <p className="text-base text-gray-700 leading-relaxed">
                If you are unsure whether DNA testing is required, consult with your immigration attorney or the requesting agency.
              </p>
            </section>

            {/* How Immigration DNA Testing Works */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                How Immigration DNA Testing Works
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Immigration DNA testing follows a coordinated process designed to meet government requirements:
              </p>
              <ul className="list-disc list-outside space-y-3 text-base text-gray-700 mb-6 ml-6 pl-2">
                <li>Case coordination with an AABB-accredited laboratory</li>
                <li>Documentation guidance for immigration requirements</li>
                <li>Proper sample collection procedures with chain of custody</li>
                <li>International sample collection coordination if needed</li>
                <li>Results formatted for immigration agency submission</li>
              </ul>
              <p className="text-base text-gray-700 leading-relaxed">
                This process meets the specific requirements of USCIS, embassies, and consulates.
              </p>
            </section>

            {/* Common Situations */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                Common Situations
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Immigration DNA testing is commonly requested when family members are separated across borders and documentation is insufficient, when birth certificates are unavailable or questioned, when USCIS requires additional evidence for family-based petitions, or when embassies need to verify relationships for visa applications.
              </p>
            </section>

            {/* Results & Accuracy */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                Results & Accuracy
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Immigration DNA testing provides statistically reliable results when performed through an AABB-accredited laboratory following proper procedures. Results confirm or exclude biological relationships and are formatted for submission to immigration agencies. The testing process is designed to meet the specific documentation and chain-of-custody requirements of USCIS, embassies, and consulates.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="section-padding section-bg-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A3C59] mb-10 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="card p-6">
                <h3 className="text-xl font-bold text-[#1A3C59] mb-3">
                  What is immigration DNA testing?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Immigration DNA testing is a specialized process that verifies biological relationships for USCIS, embassy, and consular cases. Testing must be conducted through an AABB-accredited laboratory and follow strict protocols required for immigration applications.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold text-[#1A3C59] mb-3">
                  Is immigration DNA testing required for all visa applications?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  No. Immigration DNA testing is typically requested by USCIS, embassies, or consulates when documentation is insufficient to establish a biological relationship. The requesting agency will specify if DNA testing is required for your case.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold text-[#1A3C59] mb-3">
                  How long does immigration DNA testing take?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Immigration DNA testing involves coordination with an AABB-accredited laboratory and may include international sample collection. Timeline varies based on case requirements, laboratory processing, and any international coordination needed.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold text-[#1A3C59] mb-3">
                  Can I use a regular DNA test for immigration purposes?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  No. Immigration cases require testing through an AABB-accredited laboratory with specific documentation and chain-of-custody procedures. Regular DNA tests are not accepted for immigration purposes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Step CTA */}
      <div className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <section className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Next Step
              </h2>
              <p className="text-base text-gray-700 mb-4">
                Appointments for this DNA test are scheduled separately.
              </p>
              <Link
                to="/appointments"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View appointment options →
              </Link>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ImmigrationDNATesting;
