const SiblingshipLegalVsNonLegal = () => {
    return (
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Legal vs. Non-Legal Testing: What’s the Difference?
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            While both types of tests use the same lab process and deliver accurate results, the way samples are collected and documented determines whether your results are legally valid.
          </p>
  
          <div className="grid gap-8 md:grid-cols-2 text-left">
            {/* Legal Testing */}
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-800 mb-2">✔ Legal Testing</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Chain-of-custody sample collection</li>
                <li>• Required for court, immigration, and government use</li>
                <li>• Notarized results and legal documentation</li>
                <li>• Samples must be collected at an approved facility</li>
              </ul>
            </div>
  
            {/* Non-Legal Testing */}
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-gray-400 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-800 mb-2">✔ Non-Legal (Peace of Mind)</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Same lab accuracy, no formal chain-of-custody</li>
                <li>• At-home collection may be available (where permitted)</li>
                <li>• Not valid for legal, court, or immigration matters</li>
                <li>• Ideal for resolving personal questions privately</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default SiblingshipLegalVsNonLegal;
  