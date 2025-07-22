const GrandparentageSteps = () => {
    const steps = [
      {
        number: 1,
        title: 'Schedule Your Test',
        description:
          'Call us or book online to schedule a testing appointment for the grandparent(s) and child. We’ll confirm the setup that fits your situation best.',
      },
      {
        number: 2,
        title: 'Sample Collection',
        description:
          'We collect cheek swabs from all participants at one of our certified locations. Chain-of-custody is maintained for legal cases.',
      },
      {
        number: 3,
        title: 'Lab Analysis',
        description:
          'Our AABB-accredited lab compares the DNA profiles to determine the likelihood of a biological relationship.',
      },
      {
        number: 4,
        title: 'Receive Your Results',
        description:
          'Results are typically available within 2–4 business days. Legal test results include notarized documents and direct court submission if requested.',
      },
    ];
  
    return (
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            How Grandparent DNA Testing Works
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-600 shadow-sm hover:shadow-md transition"
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
  
  export default GrandparentageSteps;
  