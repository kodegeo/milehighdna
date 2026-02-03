const WhoNeedsTest = () => {
    const relationships = [
      'Parentage testing (mother, father, and child)',
      'Full and half sibling testing',
      'Avuncular testing (aunts, uncles, nieces, nephews)',
      'Grandparent testing',
      'Extended-family testing when requested',
    ];
  
    return (
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Who Needs Immigration DNA Testing?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Mile High DNA Testing provides all USCIS-recognized relationship tests for visa, passport, and citizenship cases. Immigration DNA testing is typically requested when documentation is insufficient to establish a biological relationship — USCIS, embassies, or consulates will specify if a DNA test is required for your case.
          </p>
  
          <div className="grid gap-4 md:grid-cols-2 text-left max-w-xl mx-auto">
            {relationships.map((relation, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition"
              >
                <span className="text-blue-600 text-xl">✓</span>
                <span className="text-gray-700 font-medium">{relation}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default WhoNeedsTest;
  