const GrandparentageLegalVsNonLegal = () => {
    return (
      <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Legal vs. Non-Legal Testing: What’s the Difference?
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            We offer both legally-admissible and peace-of-mind DNA testing options. The testing method is the same — the difference lies in how the samples are collected and documented.
          </p>
  
          <div className="grid gap-8 md:grid-cols-2 text-left">
            {/* Legal Test */}
            <div className="bg-white p-6 rounded-xl border-l-4 border-blue-600 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-800 mb-2">✔ Legal Test</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Chain-of-custody sample collection</li>
                <li>• Valid for court, immigration, and government cases</li>
                <li>• Notarized results & optional direct submission</li>
                <li>• Appointment at certified collection facility required</li>
              </ul>
            </div>
  
            {/* Non-Legal Test */}
            <div className="bg-white p-6 rounded-xl border-l-4 border-gray-400 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-800 mb-2">✔ Non-Legal Test</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Same lab analysis, no formal chain-of-custody</li>
                <li>• For personal knowledge only</li>
                <li>• At-home collection kit (where allowed)</li>
                <li>• Not valid in court or for official matters</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default GrandparentageLegalVsNonLegal;
  