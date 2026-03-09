import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/Footer";

// List of all city slugs (filename without .jsx)
// Add new cities here and they will automatically appear on the page
const citySlugs = [
  "arvada",
  "aurora",
  "boulder",
  "centennial",
  "colorado-springs",
  "denver",
  "englewood",
  "fort-collins",
  "greeley",
  "lakewood",
  "littleton",
  "longmont",
  "loveland",
  "pueblo",
  "thornton",
  "westminster"
];

// Convert city slug to display name
// e.g., "fort-collins" → "Fort Collins", "denver" → "Denver"
const formatCityName = (slug) => {
  return slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Sort cities alphabetically by display name
const sortedCities = citySlugs
  .map(slug => ({
    slug,
    displayName: formatCityName(slug)
  }))
  .sort((a, b) => a.displayName.localeCompare(b.displayName));

const LocationsIndex = () => {
  return (
    <>
      <Helmet>
        <title>DNA Testing Locations in Colorado | Mile High DNA Testing</title>
        <meta name="description" content="Find DNA testing locations across Colorado including Denver, Aurora, Lakewood, Colorado Springs, Boulder, Fort Collins, and more." />
        <link rel="canonical" href="https://milehighdnatesting.com/locations" />
      </Helmet>

            {/* Hero Section with City Image */}
{/* Hero Section */}
<section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">

  <div className="max-w-3xl mx-auto px-4 text-center">

    <h1 className="text-4xl font-bold mb-6 text-white">
      DNA Testing Locations in Colorado
    </h1>

    <p className="text-lg mb-6 text-blue-100">
      Mile High DNA Testing proudly serves families, attorneys, and immigration clients across Colorado with fast, confidential, and AABB-accredited DNA testing services. We offer{" "}
      <Link to="/services/legal-paternity-testing" className="underline text-white hover:text-blue-200">
        legal paternity testing
      </Link>,{" "}
      <Link to="/services/non-legal-paternity-testing" className="underline text-white hover:text-blue-200">
        peace of mind paternity testing
      </Link>,{" "}
      <Link to="/services/prenatal-paternity-testing" className="underline text-white hover:text-blue-200">
        prenatal paternity testing
      </Link>, and{" "}
      <Link to="/services/immigration-dna-testing" className="underline text-white hover:text-blue-200">
        immigration DNA testing
      </Link>.
      Select your city below to learn more.
    </p>

  </div>

</section>

      <div className="max-w-6xl mx-auto py-12 px-4">

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sortedCities.map(({ slug, displayName }) => (
            <li key={slug}>
              <Link
                to={`/locations/${slug}`}
                className="block p-4 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-500 transition-colors duration-200 text-blue-600 hover:text-blue-800 font-medium"
              >
                {displayName}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Helpful DNA Testing Guides */}
      <div className="max-w-6xl mx-auto px-4">
        <section className="mt-12">          
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Helpful DNA Testing Guides
          </h2>

          <p className="text-center text-gray-700 mb-6">
            If you are researching DNA testing before scheduling an appointment,
            these guides explain the process, timelines, and legal requirements.
          </p>

          <ul className="grid md:grid-cols-2 gap-3 max-w-3xl mx-auto text-gray-700">            <li>
              <Link to="/guides/how-dna-testing-works" className="text-blue-600 underline">
                How DNA Testing Works
              </Link>
            </li>

            <li>
              <Link to="/guides/how-long-does-dna-testing-take" className="text-blue-600 underline">
                How Long DNA Test Results Take
              </Link>
            </li>

            <li>
              <Link to="/guides/court-admissible-dna-testing" className="text-blue-600 underline">
                Court-Admissible DNA Testing
              </Link>
            </li>

            <li>
              <Link to="/guides/dna-test-while-pregnant" className="text-blue-600 underline">
                DNA Testing While Pregnant
              </Link>
            </li>

            <li>
              <Link to="/guides/immigration-dna-testing-process" className="text-blue-600 underline">
                Immigration DNA Testing Process
              </Link>
            </li>
            <li>
              <Link to="/guides/how-much-does-a-dna-test-cost" className="text-blue-600 underline">
                How Much Does a DNA Test Cost
              </Link>
            </li>

          </ul>
        </section>
      </div>

        {/* CTA Section - Full Width Background */}        
      
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 mt-16 mb-16 w-full">        
          <div className="max-w-6xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule Your Appointment</h2>
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

export default LocationsIndex;

