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
              All immigration DNA tests are processed by AABB-accredited laboratories and fully compliant with USCIS and U.S. embassy requirements for visa, green card, and family-based petitions.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Results Timeline</h3>
              <p className="text-gray-600">
              Immigration DNA testing timelines vary depending on the destination country, specific U.S. embassy requirements, and international shipping logistics. Schedule your appointment today to get accurate timelines for your case.
            </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">International Coordination</h3>
              <p className="text-gray-600">
              We coordinate directly with U.S. embassies and overseas collection clinics to ensure timely and secure DNA sample collection for family members outside the United States.
</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Overview;
  