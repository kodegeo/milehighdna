const SiblingshipWhenToUse = () => {
    const useCases = [
      'A parent is unavailable, deceased, or unwilling to test',
      'You need proof of a sibling relationship for immigration purposes',
      'You’re involved in an inheritance, custody, or benefits case',
      'You want to confirm a full or half-sibling relationship',
      'You’re seeking peace of mind about your biological connection',
    ];
  
    return (
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Who Should Consider a Siblingship DNA Test?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Siblingship testing is a helpful option when questions of biological connection arise —
            whether due to missing parents, legal disputes, or family clarity.
          </p>
  
          <div className="grid gap-4 md:grid-cols-2 text-left max-w-3xl mx-auto">
            {useCases.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-blue-50"
              >
                <span className="text-blue-600 text-xl mt-1">✓</span>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default SiblingshipWhenToUse;
  