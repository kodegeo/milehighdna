const USCISRelationshipTesting = () => {
  const relationships = [
    'Parentage testing (mother, father, and child)',
    'Full and half-sibling testing',
    'Avuncular testing (aunts, uncles, nieces, nephews)',
    'Grandparent testing',
    'Extended-family testing when requested',
  ];

  return (
    <section className="bg-[#F5F7FA] py-12 md:py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#1A3C59] mb-8">
          USCIS-Approved Relationship Testing
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
          Mile High DNA Testing provides all USCIS-recognized relationship DNA tests, including:
        </p>

        <ul className="text-left max-w-2xl mx-auto space-y-3 mb-8">
          {relationships.map((item, index) => (
            <li key={index} className="flex items-center gap-3 text-base text-gray-700">
              <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-base text-gray-600 mb-8 leading-relaxed">
          All immigration DNA tests follow strict USCIS chain-of-custody procedures to ensure legal admissibility.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://calendly.com/milehighdnatesting/immigration"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition font-semibold text-center"
          >
            Get Started Today
          </a>
          <a
            href="tel:+17209009342"
            onClick={() => {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: 'phone_click',
                phone_number: '720-900-9342',
                phone_location: 'USCISRelationshipTesting - CTA',
              });
            }}
            className="inline-block text-blue-600 font-semibold px-6 py-3 rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition text-center"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default USCISRelationshipTesting;
