const PrenatalPricing = () => {
    return (
      <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Pricing for Prenatal DNA Tests
          </h2>
          <p className="text-lg text-gray-600 mb-10">
          Our prenatal pricing covers non-invasive lab analysis, professional sample collection, and the option for legal documentation. We provide flexible testing packages designed to meet both personal and legal needs.          </p>
  
          <div className="grid gap-6 md:grid-cols-2">
            {/* Single Grandparent */}
            <div className="bg-white rounded-xl shadow-md border-l-4 border-blue-600 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Non Legal Single Father + Pregnate Mother</h3>
              <p className="text-gray-600 mb-4">Includes a Non Legal DNA test for one father and one pregnant mother. Ideal for peace of mind.</p>
              <p className="text-2xl font-bold text-blue-700 mb-4">$1,500.00</p>
              <ul className="text-left text-gray-700 space-y-2 mb-4">
                <li>✔ AABB Lab Analysis</li>
                <li>✔ Sample Collection</li>
                <li>✔ Peace of Mind</li>
                <li>✔ 7–10 Business Day Turnaround</li>
              </ul>
              <a
                href="https://calendly.com/milehighdnatesting/noninvasive-prenatal-paternity"
                className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Book This Test
              </a>
            </div>
  
            {/* Both Grandparents */}
            <div className="bg-white rounded-xl shadow-md border-l-4 border-blue-600 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Legal Single Father + Pregnate Mother</h3>
              <p className="text-gray-600 mb-4">Includes a Legal DNA test for one alleged father and one pregnate mother. Recommended for cases where court verification is required.</p>
              <p className="text-2xl font-bold text-blue-700 mb-4">$1,800.00</p>
              <ul className="text-left text-gray-700 space-y-2 mb-4">
                <li>✔ AABB Lab Analysis</li>
                <li>✔ Sample Collection for All Participants</li>
                <li>✔ Legal Documentation</li>
                <li>✔ 7–10 Business Day Turnaround</li>
              </ul>
              <a
                href="https://calendly.com/milehighdnatesting/noninvasive-prenatal-paternity"
                className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Book This Test
              </a>
            </div>
          </div>
  
          <p className="text-sm text-gray-500 mt-8">
          *Pricing may vary for out of state testing.
          </p>
        </div>
      </section>
    );
  };
  
  export default PrenatalPricing;
  