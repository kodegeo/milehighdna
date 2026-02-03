const Overview = () => {
    return (
      <section className="bg-white py-12 md:py-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1A3C59] mb-8">
            Trusted Immigration DNA Testing in Denver
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
            Mile High DNA Testing, in partnership with an{' '}
            <a href="https://www.ufclab.com/lab-services/immigration" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">AABB-accredited</a>
            {' '}and CAP-certified laboratory, provides specialized immigration DNA testing for visa, passport, and citizenship cases. All immigration DNA testing services are fully compliant with USCIS protocols. We manage the entire testing process — coordinating U.S. sample collection and international logistics — to ensure timely delivery of official results to{' '}
            <a href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/list-of-posts.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">U.S. Embassies and Consulates</a>.
          </p>
  
          <div className="grid gap-6 md:grid-cols-2 text-left">
            <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-[#1A3C59] mb-3">USCIS-Compliant</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                All immigration DNA tests follow strict USCIS chain-of-custody procedures to ensure legal admissibility. Testing is conducted through our{' '}
                <a href="https://www.ufclab.com/lab-services/immigration" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">AABB-accredited</a>
                {' '}lab partner in full compliance with USCIS and U.S. Department of State requirements.
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-[#1A3C59] mb-3">Worldwide Support, Trusted Outcomes</h3>
              <p className="text-base text-gray-600 leading-relaxed">
              Our international network allows quick shipment of DNA kits abroad, ensuring a seamless testing experience. Results are quick, accurate and sent straight to immigration authorities to support your application.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Overview;
  