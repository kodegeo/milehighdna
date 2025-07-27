const PrenatalWhoNeedsTest = () => {
  const scenarios = [
    'You want to confirm paternity before the baby is born for peace of mind',
    'A legal case or custody matter requires proof of paternity during pregnancy',
    'You need documentation for immigration or benefits before the child’s birth',
    'The alleged father is unavailable, and early answers are important for family planning',
  ];

    return (
      <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Who Should Consider Prenatal DNA Testing?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
          Expectant mothers and families seeking to confirm paternity before the baby is born for peace of mind, legal, or immigration reasons.
          </p>
  
          <div className="grid gap-4 md:grid-cols-2 text-left max-w-3xl mx-auto">
            {scenarios.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-white"
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
  
  export default PrenatalWhoNeedsTest;
  