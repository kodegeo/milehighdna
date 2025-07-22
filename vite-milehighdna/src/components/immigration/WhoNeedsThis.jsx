const WhoNeedsTest = () => {
    const relationships = [
      'Parent / Child',
      'Siblings',
      'Grandparent / Grandchild',
      'Aunt / Uncle and Niece / Nephew',
      'Other Biological Relatives (case-by-case)',
    ];
  
    return (
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Who Needs Immigration DNA Testing?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Immigration DNA testing is typically required when there is a need to prove a biological relationship for a visa or residency petition. This is often used when documents are unavailable, incomplete, or questioned by immigration authorities.
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
  