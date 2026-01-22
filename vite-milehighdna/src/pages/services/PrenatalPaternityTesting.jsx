import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const PrenatalPaternityTesting = () => {
  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>Prenatal Paternity DNA Testing in Denver | Non-Invasive Prenatal DNA Test | Mile High DNA</title>
        <meta
          name="description"
          content="Prenatal paternity DNA testing determines biological parenthood during pregnancy using non-invasive DNA analysis. Available for legal and peace-of-mind purposes in Denver, Colorado."
        />
        <meta
          name="keywords"
          content="prenatal paternity DNA testing Denver, non-invasive prenatal DNA test, pregnancy paternity test Colorado, early paternity testing"
        />
        <link rel="canonical" href="https://milehighdnatesting.com/services/prenatal-paternity-testing" />
        
        {/* OG / Twitter */}
        <meta property="og:title" content="Prenatal Paternity DNA Testing in Denver | Non-Invasive Prenatal DNA Test" />
        <meta property="og:description" content="Prenatal paternity DNA testing determines biological parenthood during pregnancy using non-invasive DNA analysis for legal and peace-of-mind purposes." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://milehighdnatesting.com/services/prenatal-paternity-testing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Prenatal Paternity DNA Testing in Denver" />
        <meta name="twitter:description" content="Non-invasive prenatal paternity testing during pregnancy." />
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
                "name": "Prenatal Paternity DNA Testing",
                "item": "https://milehighdnatesting.com/services/prenatal-paternity-testing"
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
                "name": "How early in pregnancy can prenatal paternity testing be performed?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Non-invasive prenatal paternity testing can typically be performed as early as 6-8 weeks into pregnancy using a maternal blood sample. The exact timing depends on the specific test method and laboratory requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Is prenatal paternity testing safe for the baby?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Non-invasive prenatal paternity testing uses a maternal blood sample and does not pose risks to the developing baby. The test analyzes cell-free fetal DNA found in the mother's bloodstream."
                }
              },
              {
                "@type": "Question",
                "name": "Can prenatal paternity test results be used in court?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Legal prenatal paternity testing that follows proper chain-of-custody procedures can be used in court. Non-legal prenatal testing provides accurate results but is not court-admissible."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between legal and non-legal prenatal paternity testing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Legal prenatal paternity testing follows strict chain-of-custody procedures and identification verification for court use. Non-legal prenatal testing provides accurate results for personal knowledge without the formal documentation requirements."
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
            Prenatal Paternity DNA Testing
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            An overview of prenatal paternity DNA testing, including when it is appropriate,
            how non-invasive testing works, and how to determine whether this is the right test for your situation.
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
                Prenatal paternity DNA testing is designed for expectant parents who need to determine biological parenthood during pregnancy. This type of DNA test uses non-invasive methods to analyze fetal DNA. Non-invasive prenatal paternity testing as early as 6 weeks into pregnancy is available for expectant parents who need early answers.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                If answers about paternity are needed before birth, this is an appropriate testing option.
              </p>
            </section>

            {/* When Prenatal Paternity Testing Is Appropriate */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                When Prenatal Paternity Testing Is Appropriate
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Prenatal paternity testing is commonly chosen when:
              </p>
              <ul className="list-disc list-outside space-y-3 text-base text-gray-700 mb-6 ml-6 pl-2">
                <li>Early answers are needed before birth</li>
                <li>Legal documentation is required during pregnancy</li>
                <li>Personal knowledge is needed for family planning</li>
                <li>Court cases or legal matters require prenatal confirmation</li>
                <li>Personal knowledge is needed to make informed decisions</li>
                <li>Family clarity is important before the baby is born</li>
              </ul>
              <p className="text-base text-gray-700 leading-relaxed">
                This testing option allows results to be obtained during pregnancy without waiting until after birth.
              </p>
            </section>

            {/* When Prenatal Paternity Testing Is Not Appropriate */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                When Prenatal Paternity Testing Is Not Required
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Prenatal paternity testing may not be necessary if:
              </p>
              <ul className="list-disc list-outside space-y-3 text-base text-gray-700 mb-6 ml-6 pl-2">
                <li>Testing can wait until after birth</li>
                <li>No urgent legal or personal decisions depend on early results</li>
                <li>Postnatal testing would be more convenient or cost-effective</li>
                <li>The pregnancy is too early for reliable testing</li>
              </ul>
              <p className="text-base text-gray-700 leading-relaxed">
                In these cases, postnatal paternity DNA testing may be a suitable alternative.
              </p>
            </section>

            {/* How Prenatal Paternity DNA Testing Works */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                How Prenatal Paternity DNA Testing Works
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Non-invasive prenatal paternity testing follows a safe process:
              </p>
              <ul className="list-disc list-outside space-y-3 text-base text-gray-700 mb-6 ml-6 pl-2">
                <li>A blood sample is collected from the expectant mother</li>
                <li>The sample contains cell-free fetal DNA from the developing baby</li>
                <li>A DNA sample is collected from the alleged father</li>
                <li>Laboratory analysis compares the DNA profiles</li>
                <li>Results confirm or exclude biological paternity</li>
              </ul>
              <p className="text-base text-gray-700 leading-relaxed">
                This non-invasive method does not pose risks to the developing baby and allows testing during pregnancy.
              </p>
            </section>

            {/* Common Situations */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                Common Situations
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Prenatal paternity testing is commonly requested when expectant parents need early answers for family planning, when legal matters require prenatal confirmation, when personal knowledge is needed before birth, or when court cases or custody matters depend on establishing paternity during pregnancy.
              </p>
            </section>

            {/* Results & Accuracy */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1A3C59] mb-6">
                Results & Accuracy
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Prenatal paternity DNA testing provides statistically reliable results when performed using proper non-invasive methods. Results confirm or exclude biological parenthood and are available during pregnancy. Legal prenatal testing includes documentation suitable for court use, while non-legal testing provides results for personal knowledge.
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
                  How early in pregnancy can prenatal paternity testing be performed?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Non-invasive prenatal paternity testing can typically be performed as early as 6-8 weeks into pregnancy using a maternal blood sample. The exact timing depends on the specific test method and laboratory requirements.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold text-[#1A3C59] mb-3">
                  Is prenatal paternity testing safe for the baby?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Non-invasive prenatal paternity testing uses a maternal blood sample and does not pose risks to the developing baby. The test analyzes cell-free fetal DNA found in the mother's bloodstream.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold text-[#1A3C59] mb-3">
                  Can prenatal paternity test results be used in court?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Legal prenatal paternity testing that follows proper chain-of-custody procedures can be used in court. Non-legal prenatal testing provides results but is not court-admissible.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold text-[#1A3C59] mb-3">
                  What is the difference between legal and non-legal prenatal paternity testing?
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Legal prenatal paternity testing follows strict chain-of-custody procedures and identification verification for court use. Non-legal prenatal testing provides results for personal knowledge without the formal documentation requirements.
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
            <p className="text-sm text-gray-600 mt-6">
              Related service:{" "}
              <Link to="/services/legal-paternity-testing" className="underline">
                Legal Paternity Testing
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrenatalPaternityTesting;
