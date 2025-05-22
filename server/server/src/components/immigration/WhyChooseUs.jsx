const WhyChooseUs = () => {
    const benefits = [
      {
        title: 'AABB-Accredited Lab',
        description:
          'All tests are processed through an AABB-accredited laboratory, approved by USCIS and U.S. embassies worldwide.',
      },
      {
        title: 'Fast & Reliable Results',
        description:
          'Results are typically available within 2–5 business days after collection. Expedited processing available.',
      },
      {
        title: 'International Coordination',
        description:
          'We work directly with U.S. embassies and clinics overseas to coordinate testing for family members abroad.',
      },
      {
        title: 'Bilingual Support (English & Spanish)',
        description:
          'Our team speaks your language — we offer full support in both English and Spanish to make the process stress-free.',
      },
      {
        title: 'Simple, Secure Process',
        description:
          'From scheduling to sample collection and result delivery, we make the process easy and fully compliant with immigration regulations.',
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
  
  export default WhyChooseUs;
  