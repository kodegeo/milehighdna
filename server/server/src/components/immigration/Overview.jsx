const Overview = () => {
    return (
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            What is Immigration DNA Testing?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Immigration DNA testing is used to verify biological relationships for immigration purposes when required by USCIS, U.S. embassies, or other immigration authorities. It is a reliable and legally accepted method to support your petition and prove family relationships when documents are insufficient or unavailable.
          </p>
  
          <div className="grid gap-8 md:grid-cols-3 text-left">
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">USCIS-Compliant</h3>
              <p className="text-gray-600">
                All tests are conducted by AABB-accredited labs, approved by USCIS and U.S. embassies worldwide.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Results Timeline</h3>
              <p className="text-gray-600">
              Immigration testing timelines vary widely based on country, embassy requirements, and shipping. Book an appointment for details.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">International Coordination</h3>
              <p className="text-gray-600">
                We coordinate with embassies and clinics abroad to ensure timely collection for family members outside the U.S.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Overview;
  