const Steps = () => {
    const steps = [
      {
        number: 1,
        title: 'Start Your Case',
        description:
          'Call us or fill out our online form to begin the immigration DNA testing process. We’ll collect the necessary details and guide you every step of the way.',
      },
      {
        number: 2,
        title: 'Coordinate with the Embassy or Clinic',
        description:
          'We’ll work directly with the U.S. Embassy or overseas clinic to schedule the DNA collection for your family member abroad.',
      },
      {
        number: 3,
        title: 'DNA Sample Collection',
        description:
          'Samples are collected at an approved facility in the U.S. and abroad. Chain of custody is maintained to ensure legal compliance.',
      },
      {
        number: 4,
        title: 'Lab Testing and Analysis',
        description:
          'Our AABB-accredited lab conducts the DNA analysis with precision.',
      },
      {
        number: 5,
        title: 'Results Sent Directly to Authorities',
        description:
          'Test results are securely sent to USCIS, the embassy, or the requesting immigration office as required by law.',
      },
    ];
  
    return (
      <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            How Immigration DNA Testing Works
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border-l-4 border-blue-600 hover:shadow-md transition"
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
  
  export default Steps;
  