import { Link } from 'react-router-dom';

const ProcessCompliance = () => {
  const mustBeItems = [
    'Initiated through an AABB-accredited laboratory',
    'Conducted under strict USCIS and U.S. Department of State compliance requirements',
  ];

  const advantages = [
    { title: 'Petitioner-Initiated Testing', text: 'ensures accuracy, legitimacy, and USCIS acceptance' },
    { title: 'Strict Compliance Procedures', text: 'every step aligns with federal immigration standards' },
  ];

  return (
    <section className="bg-white py-12 md:py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1A3C59] mb-8 text-center">
          Make Your Immigration Process Easier
        </h2>
        <p className="text-base text-gray-600 mb-6 text-center leading-relaxed">
          Immigration DNA testing differs from standard <Link to="/services/legal-paternity-testing" className="text-blue-600 hover:text-blue-800 underline">legal DNA tests</Link>. These cases must be:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {mustBeItems.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-[#F5F7FA] border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition flex items-start gap-3"
            >
              <span className="text-base text-gray-700 leading-relaxed">
                {index === 0 ? (
                  <>
                    Initiated through an{' '}
                    <a
                      href="https://www.ufclab.com/lab-services/immigration"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline font-semibold"
                    >
                      AABB-accredited laboratory
                    </a>
                  </>
                ) : (
                  item
                )}
              </span>
            </div>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-[#1A3C59] mb-6 text-center">
          Key Compliance Advantages
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-[#F5F7FA] border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition text-center"
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h4>
              <p className="text-base text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessCompliance;
