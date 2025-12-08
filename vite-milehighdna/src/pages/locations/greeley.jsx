import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { canonicalUrl } from "../../lib/canonical";

const Greeley = () => {
  return (
    <>
      <Helmet>
        <title>DNA Testing in Greeley, Colorado | Mile High DNA Testing</title>
        <meta name="description" content="Expert, AABB-accredited DNA testing in Greeley, Colorado. Court-required paternity, USCIS immigration, and relationship verification with precise, fast, trustworthy results." />
        <link rel="canonical" href={canonicalUrl("greeley")} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Mile High DNA Testing",
            "url": canonicalUrl("greeley"),
            "serviceArea": {
              "@type": "City",
              "name": "Greeley"
            },
            "description": "Expert, AABB-accredited DNA testing in Greeley, Colorado. Court-required paternity, USCIS immigration, and relationship verification with precise, fast, trustworthy results."
          })}
        </script>
      </Helmet>
      <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6">DNA Testing in Greeley, Colorado</h1>
      
      <p className="text-lg mb-6">
        Mile High DNA Testing provides expert, confidential, and AABB-accredited DNA testing services to residents, attorneys, and immigration professionals throughout <strong>Greeley, Colorado</strong>. From court-required paternity documentation to personal relationship verification and USCIS immigration cases, we deliver precise, fast, and trustworthy results you can rely on.
      </p>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-3xl font-bold mb-4">DNA Testing Services Available in Greeley</h2>
      
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

      <h2 className="text-3xl font-bold mb-4">Areas We Serve in Greeley</h2>
      
      <p className="mb-4">
        We proudly support residents across <strong>Greeley</strong> and nearby neighborhoods, including:
      </p>
      
      <p className="mb-6 font-semibold">
        Evans, LaSalle, Eaton, Ault, Pierce, and surrounding Weld County communities
      </p>

      <p className="mb-6">
        If you need a reliable DNA test "near me," our team provides convenient scheduling and flexible appointment options.
      </p>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-3xl font-bold mb-4">Why Choose Mile High DNA Testing in Greeley?</h2>
      
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

      <h2 className="text-3xl font-bold mb-4">FAQ for Greeley DNA Testing</h2>
      
      <div className="space-y-4 mb-6">
        <div>
          <p className="font-semibold mb-2">How fast can I get DNA results in Greeley?</p>
          <p>Results typically return within 2–3 business days. Expedited options may be available.</p>
        </div>
        
        <div>
          <p className="font-semibold mb-2">Are your paternity tests legal in Colorado courts?</p>
          <p>Yes — when you choose a legal test with chain-of-custody documentation.</p>
        </div>
        
        <div>
          <p className="font-semibold mb-2">Do you offer mobile DNA testing in Greeley?</p>
          <p>Yes, mobile appointments are available in most areas.</p>
        </div>
        
        <div>
          <p className="font-semibold mb-2">Is immigration DNA testing approved for USCIS cases?</p>
          <p>Yes, all immigration tests follow USCIS, AABB, and embassy requirements.</p>
        </div>
      </div>

      <hr className="my-8 border-gray-300" />

      <h2 className="text-3xl font-bold mb-4">Schedule Your Appointment in Greeley</h2>
      
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

export default Greeley;

