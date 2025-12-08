const SiblingshipSteps = () => {
    const steps = [
      {
        number: 1,
        title: 'Schedule Your Appointment',
        description:
          'Call us or book online to schedule your test. We’ll guide you through the setup and answer any questions about your case.',
      },
      {
        number: 2,
        title: 'Sample Collection',
        description:
          'We collect cheek swabs from all participants at our certified collection site. Legal tests follow strict chain-of-custody procedures.',
      },
      {
        number: 3,
        title: 'Lab Analysis',
        description:
          'Our AABB-accredited lab compares DNA profiles to determine whether individuals are full or half siblings.',
      },
      {
        number: 4,
        title: 'Receive Results',
        description:
          'Results are ready in 3–5 business days. Legal tests include notarized documentation suitable for court or immigration use.',
      },
    ];
  
    return (
      <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            How Siblingship DNA Testing Works
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
  
  export default SiblingshipSteps;
  