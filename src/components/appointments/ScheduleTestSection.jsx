import React from 'react';

const services = [
  {
    name: 'Paternity Testing',
    description: 'Confirm biological parenthood for legal or personal reasons.',
    link: 'https://calendly.com/milehighdnatesting-paternity',
  },
  {
    name: 'Immigration DNA Testing',
    description: 'Approved testing for USCIS and embassies to support immigration cases.',
    link: 'https://calendly.com/milehighdnatesting-immigration',
  },
  {
    name: 'Prenatal Testing',
    description: 'Non-invasive testing to determine paternity before birth.',
    link: 'https://calendly.com/milehighdnatesting-prenatal',
  },
  {
    name: 'Siblingship Testing',
    description: 'Establish full or half-sibling biological relationships.',
    link: 'https://calendly.com/milehighdnatesting-siblingship',
  },
  {
    name: 'Grandparentage Testing',
    description: 'Test for biological relationships between grandparents and grandchildren.',
    link: 'https://calendly.com/milehighdnatesting-grandparentage',
  },
];

const ScheduleTestSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-10">
          Schedule a DNA Test Appointment
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Schedule Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleTestSection;
