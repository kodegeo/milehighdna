const SiblingshipWhyChooseUs = () => {
    const benefits = [
      {
        title: 'AABB-Accredited Laboratory',
        description:
          'All DNA testing is performed by AABB-accredited labs to ensure the highest level of legal and scientific accuracy.',
      },
      {
        title: 'Legal & Non-Legal Options',
        description:
          'We offer flexible testing for both official legal purposes and personal peace of mind — with full clarity on the process.',
      },
      {
        title: 'Fast Turnaround',
        description:
          'Get your results in just 3–5 business days. Expedited options are available if you need answers quickly.',
      },
      {
        title: 'Experienced, Caring Staff',
        description:
          'Our bilingual team understands the emotional and legal significance of DNA testing. We’re here to guide you with care.',
      },
      {
        title: 'Transparent Pricing',
        description:
          'No hidden fees — our pricing includes everything from sample collection to lab analysis and result delivery.',
      },
      {
        title: 'Secure & Confidential',
        description:
          'We respect your privacy. All information is handled securely and discreetly from start to finish.',
      },
    ];
  
    return (
      <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Choose Mile High DNA Testing?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-600 hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default SiblingshipWhyChooseUs;
  