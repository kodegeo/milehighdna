const SiblingshipPricing = () => {
    return (
      <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Affordable & Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Our pricing includes lab analysis, sample collection, and result delivery. Choose the option
            that best fits your relationship and testing needs.
          </p>
  
          <div className="grid gap-6 md:grid-cols-3">
            {/* Standard Siblingship Test */}
            <div className="bg-white rounded-xl shadow-md border-l-4 border-blue-600 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Standard Siblingship</h3>
              <p className="text-gray-600 mb-4">
                Two individuals tested to determine if they are full or half siblings.
              </p>
              <p className="text-2xl font-bold text-blue-700 mb-4">$325</p>
              <ul className="text-left text-gray-700 space-y-2 mb-4">
                <li>✔ AABB-Accredited Lab</li>
                <li>✔ 2 Participants</li>
                <li>✔ 2–5 Business Day Turnaround</li>
                <li>✔ Legal or Peace-of-Mind Use</li>
              </ul>
              <a
                href="/schedule"
                className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Book Now
              </a>
            </div>
  
            {/* With Known Parent */}
            <div className="bg-white rounded-xl shadow-md border-l-4 border-blue-600 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">With Known Parent</h3>
              <p className="text-gray-600 mb-4">
                Includes one known biological parent to improve accuracy and relationship certainty.
              </p>
              <p className="text-2xl font-bold text-blue-700 mb-4">$395</p>
              <ul className="text-left text-gray-700 space-y-2 mb-4">
                <li>✔ Adds Biological Parent to Analysis</li>
                <li>✔ Strengthens Result Confidence</li>
                <li>✔ Legal Documentation Available</li>
              </ul>
              <a
                href="/schedule"
                className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Book Now
              </a>
            </div>
  
            {/* Add-On Sibling */}
            <div className="bg-white rounded-xl shadow-md border-l-4 border-blue-600 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Add Additional Sibling</h3>
              <p className="text-gray-600 mb-4">
                Include another sibling in the test for a more complete family profile.
              </p>
              <p className="text-2xl font-bold text-blue-700 mb-4">+$100</p>
              <ul className="text-left text-gray-700 space-y-2 mb-4">
                <li>✔ Expand Testing Group</li>
                <li>✔ Useful for Complex Relationships</li>
                <li>✔ Applies to Legal or Personal Tests</li>
              </ul>
              <a
                href="/contact"
                className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Request Custom Quote
              </a>
            </div>
          </div>
  
          <p className="text-sm text-gray-500 mt-8">
            *Pricing may vary based on location, legal documentation needs, or international coordination.
          </p>
        </div>
      </section>
    );
  };
  
  export default SiblingshipPricing;
  