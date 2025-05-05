const SiblingshipOverview = () => {
    return (
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            What is a Siblingship DNA Test?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            A Siblingship DNA test is used to determine whether two or more individuals share one or both biological parents. It's a powerful alternative when a parent is unavailable for testing and is commonly used in immigration, inheritance, and personal family situations.
          </p>
  
          <div className="grid gap-8 md:grid-cols-3 text-left">
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Full or Half Siblings</h3>
              <p className="text-gray-600">
                Determine whether you share both parents (full siblings) or only one (half siblings), even without testing a parent.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">When a Parent Is Unavailable</h3>
              <p className="text-gray-600">
                Ideal when a biological parent is deceased, missing, or unwilling to participate in the test.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Legal or Personal Use</h3>
              <p className="text-gray-600">
                We offer testing options for court-approved cases, immigration filings, or simply gaining peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default SiblingshipOverview;
  