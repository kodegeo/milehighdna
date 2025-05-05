const GrandparentageOverview = () => {
    return (
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            What is Grandparent DNA Testing?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Grandparent DNA testing is used to determine the biological relationship between a child and the alleged grandparents when the parent is unavailable, deceased, or unwilling to participate. This type of test helps establish family connections and can be used for legal, immigration, or personal purposes.
          </p>
  
          <div className="grid gap-8 md:grid-cols-3 text-left">
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Parent Not Available</h3>
              <p className="text-gray-600">
                If the alleged father or mother cannot be tested, a grandparent test offers a reliable alternative to confirm family relationships.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Legal or Peace-of-Mind</h3>
              <p className="text-gray-600">
                Whether you need results for court, immigration, or just personal certainty, we provide options tailored to your needs.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">AABB Accredited</h3>
              <p className="text-gray-600">
                All testing is performed by AABB-accredited laboratories to ensure accuracy, confidentiality, and full legal compliance.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default GrandparentageOverview;
  