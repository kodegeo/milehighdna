const StreamlinedServices = () => {
  const services = [
    { title: 'U.S. DNA Collection', rest: 'appointments coordinated at our Denver office or approved partner facilities nationwide' },
    { title: 'International Coordination', rest: 'secure DNA kit delivery to U.S. Embassies and Consulates abroad' },
    { title: 'Rapid Laboratory Processing', rest: 'testing performed by an AABB-accredited laboratory' },
    { title: 'Direct Result Submission', rest: 'official results sent directly to USCIS or the requesting agency' },
    { title: 'Nationwide Support', rest: 'assistance available throughout the United States' },
  ];

  return (
    <section className="bg-[#F5F7FA] py-12 md:py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1A3C59] mb-8 text-center">
          Streamlined Immigration DNA Testing Services
        </h2>
        <p className="text-base text-gray-600 mb-8 text-center leading-relaxed">
          Our process is designed for efficiency and compliance:
        </p>
        <div className="space-y-4">
          {services.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition flex items-start gap-3"
            >
              <span className="text-blue-600 text-xl font-bold flex-shrink-0">{index + 1}.</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-base text-gray-600 leading-relaxed">{item.rest}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StreamlinedServices;
