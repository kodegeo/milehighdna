const Pricing = () => {
    return (
      <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Pricing for Immigration DNA Testing
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            No hidden fees. Our pricing includes lab testing, coordination with international embassies, and direct result delivery to immigration officials.
          </p>
  
          <div className="bg-white rounded-xl shadow-lg border-t-4 border-blue-600 p-8 max-w-xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Call for a Custom Quote</h3>
            <ul className="text-left text-gray-700 space-y-4 mb-6">
              <li>✔ AABB-Accredited Laboratory Testing</li>
              <li>✔ Sample Collection at Our Office</li>
              <li>✔ Coordination With Embassies or Overseas Clinics</li>
              <li>✔ Results vary by country</li>
              <li>✔ Direct Submission to USCIS or Embassy</li>
            </ul>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://calendly.com/milehighdnatesting/freeconsultation"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
              >
                Book Now
              </a>
            </div>
          </div>
  
          <p className="text-sm text-gray-500 mt-6">
          *Pricing will vary by country and number of participants.
          </p>
        </div>
      </section>
    );
  };
  
  export default Pricing;
  