const SiblingshipOverview = () => {
    return (
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            What is a Siblingship DNA Test?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            A Siblingship DNA test is used to determine whether two or more individuals share one or both biological parents. At Mile High DNA Testing, we offer professional relationship DNA testing to confirm whether individuals share one or both biological parents. Our sibling DNA tests are available for full siblings, half siblings, or to rule out a biological relationship altogether.

          </p>
  
          <div className="grid gap-8 md:grid-cols-3 text-left">
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Full or Half Siblings</h3>
              <p className="text-gray-600">
                Determine whether you share both parents (full siblings) or only one (half siblings), even without testing a parent.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Unavailable Parent</h3>
              <p className="text-gray-600">
                Ideal when a biological parent is deceased, missing, or unwilling to participate in the test.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Legal or Personal Use</h3>
              <p className="text-gray-600">
              We provide both legal and non-legal options, and every test is processed through AABB-accredited labs to ensure accuracy and court admissibility. Whether you're in Denver, Aurora, Lakewood, or nearby communities, we make it easy to schedule, collect, and receive your results with complete confidentiality.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default SiblingshipOverview;
  