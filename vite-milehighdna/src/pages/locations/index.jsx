import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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
      <div className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold mb-6">
          DNA Testing Locations in Colorado
        </h1>

        <p className="mb-6 text-lg">
          Mile High DNA Testing proudly serves families, attorneys, and immigration clients across Colorado with fast, confidential, and AABB-accredited DNA testing services. We offer <Link to="/services/legal-paternity-testing" className="text-blue-600 underline">legal paternity testing</Link>, <Link to="/services/non-legal-paternity-testing" className="text-blue-600 underline">peace of mind paternity testing</Link>, <Link to="/services/prenatal-paternity-testing" className="text-blue-600 underline">prenatal paternity testing</Link>, and <Link to="/services/immigration-dna-testing" className="text-blue-600 underline">immigration DNA testing</Link>. Select your city below to learn more.
        </p>

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
    </>
  );
};

export default LocationsIndex;

