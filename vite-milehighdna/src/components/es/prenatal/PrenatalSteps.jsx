const PrenatalSteps = () => {
  const steps = [
    {
      number: 1,
      title: 'Schedule Your Appointment',
      description:
        'Call us or book online to schedule your prenatal DNA test. We’ll explain the process, answer questions, and coordinate the collection for both parents.',
    },
    {
      number: 2,
      title: 'Sample Collection',
      description:
        'The expectant mother will have a safe, non-invasive blood draw at a certified collection site. The alleged father will provide a simple cheek swab sample at our office.',
    },
    {
      number: 3,
      title: 'Lab Analysis',
      description:
        'Our AABB-accredited lab extracts and compares fetal DNA from the mother’s blood with the alleged father’s DNA profile to determine paternity with over 99.9% accuracy.',
    },
    {
      number: 4,
      title: 'Receive Results',
      description:
        'Results are typically available in 7–10 business days. Legal tests include notarized documentation suitable for court, immigration, or personal use.',
    },
  ];
  
  
    return (
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            How Prenatal DNA Testing Works
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex items-start gap-4 p-6 bg-white rounded-xl border-l-4 border-blue-600 shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl font-bold text-blue-600">{step.number}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default PrenatalSteps;
  