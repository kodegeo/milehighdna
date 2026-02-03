const WhyChooseUs = () => {
    const benefits = [
      {
        title: 'U.S. DNA Collection',
        description:
          'Appointments are coordinated at our Denver office or approved partner facilities nationwide, with strict chain-of-custody procedures for USCIS acceptance.',
      },
      {
        title: 'International Coordination',
        description:
          'Secure DNA kit delivery to U.S. Embassies and Consulates abroad, creating a seamless experience for families with relatives outside the United States.',
      },
      {
        title: 'Rapid Laboratory Processing',
        description:
          'Testing is performed by UFC, an AABB-accredited laboratory approved for USCIS cases. Quick and accurate results with full compliance.',
      },
      {
        title: 'Direct Result Submission',
        description:
          'Official results are sent directly to USCIS, passport agencies, or the requesting immigration authority. You also receive a copy for your records.',
      },
      {
        title: 'Nationwide Support',
        description:
          'Assistance available throughout the United States. Our team guides you through every step with clarity and confidence.',
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
  