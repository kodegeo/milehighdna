const GrandparentagePricing = () => {
    return (
      <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Pricing for Grandparentage DNA Tests
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Our pricing includes lab analysis, sample collection, and optional legal documentation. We offer flexible testing setups to fit your needs.
          </p>
  
          <div className="grid gap-6 md:grid-cols-2">
            {/* Single Grandparent */}
            <div className="bg-white rounded-xl shadow-md border-l-4 border-blue-600 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Non Legal Single Grandparent + Child</h3>
              <p className="text-gray-600 mb-4">Includes a Non Legal DNA test for one grandparent and one child. Ideal for peace of mind.</p>
              <p className="text-2xl font-bold text-blue-700 mb-4">$349 and up</p>
              <ul className="text-left text-gray-700 space-y-2 mb-4">
                <li>✔ AABB Lab Analysis</li>
                <li>✔ Sample Collection</li>
                <li>✔ Peace of Mind</li>
                <li>✔ 2–5 Business Day Turnaround</li>
              </ul>
              <a
                href="https://calendly.com/milehighdnatesting/grandparentage-dna-test"
                className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Book This Test
              </a>
            </div>
  
            {/* Both Grandparents */}
            <div className="bg-white rounded-xl shadow-md border-l-4 border-blue-600 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Legal Single Grandparent + Child</h3>
              <p className="text-gray-600 mb-4">Includes a Legal DNA test for one grandparent and one child. Recommended for cases where court verification is required.</p>
              <p className="text-2xl font-bold text-blue-700 mb-4">$449 and up</p>
              <ul className="text-left text-gray-700 space-y-2 mb-4">
                <li>✔ AABB Lab Analysis</li>
                <li>✔ Sample Collection for All Participants</li>
                <li>✔ Legal Documentation</li>
                <li>✔ 2–5 Business Day Turnaround</li>
              </ul>
              <a
                href="https://calendly.com/milehighdnatesting/grandparentage-dna-test"
                className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Book This Test
              </a>
            </div>
          </div>
  
          <p className="text-sm text-gray-500 mt-8">
          *Pricing may vary for out of state testing or any required international coordination.
          </p>
        </div>
      </section>
    );
  };
  
  export default GrandparentagePricing;
  