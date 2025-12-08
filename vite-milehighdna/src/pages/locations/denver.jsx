import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { canonicalUrl } from "../../lib/canonical";

const Denver = () => {
  return (
    <>
      <Helmet>
        <title>DNA Testing in Denver, Colorado | Mile High DNA Testing</title>
        <meta name="description" content="Fast, confidential, AABB-accredited DNA testing in Denver, Colorado. Legal paternity, immigration, prenatal, and peace-of-mind testing with results in 2-3 business days." />
        <link rel="canonical" href={canonicalUrl("denver")} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Mile High DNA Testing",
            "url": canonicalUrl("denver"),
            "serviceArea": {
              "@type": "City",
              "name": "Denver"
            },
            "description": "Fast, confidential, AABB-accredited DNA testing in Denver, Colorado. Legal paternity, immigration, prenatal, and peace-of-mind testing with results in 2-3 business days."
          })}
        </script>
      </Helmet>
      <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6">DNA Testing in Denver, Colorado</h1>
      
      <p className="text-lg mb-6">
        Mile High DNA Testing provides confidential, accurate, and AABB-accredited DNA testing services to families, attorneys, and immigration agencies throughout <strong>Denver, Colorado</strong>. Whether you need legal documentation, answers for personal reasons, or immigration verification for USCIS, our team delivers fast, professional, and trustworthy results.
      </p>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-3xl font-bold mb-4">DNA Testing Services Available in Denver</h2>
      
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li><strong>Legal Paternity Testing (Court-Admissible)</strong></li>
        <li><strong>Non-Legal Paternity Testing (Peace of Mind)</strong></li>
        <li><strong>Immigration DNA Testing (USCIS, Embassies, Consulates)</strong></li>
        <li><strong>Prenatal Paternity Testing (Non-Invasive)</strong></li>
        <li><strong>Siblingship Testing</strong></li>
        <li><strong>Grandparentage Testing</strong></li>
        <li><strong>Avuncular (Aunt/Uncle) DNA Testing</strong></li>
        <li><strong>Forensic and Specialty Analysis (Optional)</strong></li>
      </ul>

      <p className="mb-6">All tests follow strict chain-of-custody procedures when required.</p>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-3xl font-bold mb-4">Areas We Serve in Denver</h2>
      
      <p className="mb-4">
        We proudly support residents across <strong>Denver</strong> and nearby neighborhoods, including:
      </p>
      
      <p className="mb-6 font-semibold">
        Capitol Hill, LoDo, Five Points, Cherry Creek, Washington Park, Highlands, RiNo, Stapleton, Park Hill, Baker, Sloan's Lake, and Glendale
      </p>

      <p className="mb-6">
        If you need a reliable DNA test "near me," our team provides convenient scheduling and flexible appointment options.
      </p>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-3xl font-bold mb-4">Why Choose Mile High DNA Testing in Denver?</h2>
      
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>AABB-Accredited Laboratory</li>
        <li>Court-Admissible Results</li>
        <li>USCIS-Approved Immigration Testing</li>
        <li>Fast Turnaround Times</li>
        <li>Local Colorado Team</li>
        <li>Flexible Scheduling</li>
        <li>100% Confidential</li>
      </ul>

      <p className="mb-6">Your privacy and accuracy come first.</p>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-3xl font-bold mb-4">How DNA Testing Works</h2>
      
      <ol className="list-decimal list-inside mb-6 space-y-2">
        <li><strong>Schedule your appointment</strong></li>
        <li><strong>Provide your sample</strong> (simple cheek swab)</li>
        <li><strong>Laboratory processing begins immediately</strong></li>
        <li><strong>Receive your results securely via email</strong></li>
      </ol>

      <p className="mb-6">We guide you through every step.</p>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-3xl font-bold mb-4">FAQ for Denver DNA Testing</h2>
      
      <div className="space-y-4 mb-6">
        <div>
          <p className="font-semibold mb-2">How fast can I get DNA results in Denver?</p>
          <p>Results typically return within 2–3 business days. Expedited options may be available.</p>
        </div>
        
        <div>
          <p className="font-semibold mb-2">Are your paternity tests legal in Colorado courts?</p>
          <p>Yes — when you choose a legal test with chain-of-custody documentation.</p>
        </div>
        
        <div>
          <p className="font-semibold mb-2">Do you offer mobile DNA testing in Denver?</p>
          <p>Yes, mobile appointments are available in most areas.</p>
        </div>
        
        <div>
          <p className="font-semibold mb-2">Is immigration DNA testing approved for USCIS cases?</p>
          <p>Yes, all immigration tests follow USCIS, AABB, and embassy requirements.</p>
        </div>
      </div>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-3xl font-bold mb-4">Schedule Your Appointment in Denver</h2>
      
      <p className="mb-6">Click below to schedule your DNA test:</p>
      
      <div className="mb-8">
        <a href="/appointments" className="btn-primary inline-block">
          Schedule an Appointment
        </a>
      </div>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-2xl font-bold mb-4">Related Services</h2>
      
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li><Link to="/legal-paternity-tests" className="text-blue-600 hover:underline">Paternity Testing</Link></li>
        <li><Link to="/immigration-dna-tests" className="text-blue-600 hover:underline">Immigration DNA Testing</Link></li>
        <li><Link to="/locations" className="text-blue-600 hover:underline">All Locations</Link></li>
      </ul>
      </div>
    </>
  );
};

export default Denver;

