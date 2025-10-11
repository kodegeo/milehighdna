const PrenatalWhoNeedsTest = () => {
  const scenarios = [
    'You want to confirm paternity before birth for peace of mind.',
    'A legal case or custody matter requires proof of paternity during pregnancy.',
    'You need documentation for immigration or benefits before the child’s birth.',
    'You want early answers to plan and prepare for your family.',
  ];

  return (
    <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Who Should Get a Prenatal DNA Test in Denver?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Prenatal paternity testing helps expectant mothers and families confirm biological relationships 
          before birth. Whether for peace of mind or legal documentation, 
          it provides clear answers when you need them most.
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

        <p className="mt-6 text-gray-600">
          These tests are especially helpful for Denver-area families who want reliable answers early in pregnancy.
        </p>
      </div>
    </section>
  );
};

export default PrenatalWhoNeedsTest;
