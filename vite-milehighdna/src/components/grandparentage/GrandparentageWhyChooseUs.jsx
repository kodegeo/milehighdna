const GrandparentageWhyChooseUs = () => {
    const reasons = [
      {
        title: 'AABB-Accredited Labs',
        description:
          'All tests are processed through AABB-accredited laboratories, ensuring legal compliance and industry-leading accuracy.',
      },
      {
        title: 'Legal & Peace-of-Mind Options',
        description:
          'Whether you need results for court or personal reassurance, we offer both certified and non-certified testing paths.',
      },
      {
        title: 'Fast Results',
        description:
          'You’ll receive accurate results within 7–10 business days. We also offer expedited options if time is critical.',
      },
      {
        title: 'Compassionate Support',
        description:
          'Our team understands the emotional and legal importance of these tests. We’re here to guide you every step of the way.',
      },
      {
        title: 'Clear, Upfront Pricing',
        description:
          'No surprise fees. We’re transparent about what’s included and offer support with insurance, legal, or immigration documentation.',
      },
      {
        title: 'Secure & Confidential',
        description:
          'Your information is kept private and secure throughout the process. Confidentiality is guaranteed.',
      },
    ];
  
    return (
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Choose Mile High DNA Testing?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
            {reasons.map((item, index) => (
              <div
                key={index}
                className="bg-blue-50 p-6 rounded-xl shadow-sm border-l-4 border-blue-600 hover:shadow-md transition"
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
  
  export default GrandparentageWhyChooseUs;
  