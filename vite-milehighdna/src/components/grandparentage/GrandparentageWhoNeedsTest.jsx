const GrandparentageWhoNeedsTest = () => {
    const scenarios = [
      'The alleged parent is unavailable, deceased, or unwilling to test',
      'You need proof of biological relationship for immigration purposes',
      'A legal case requires evidence of grandparental connection',
      'You are seeking custody, benefits, or inheritance verification',
      'You want peace of mind about your biological family connection',
    ];
  
    return (
      <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Who Needs Grandparent DNA Testing?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
          This test is ideal for situations where a biological parent is not available for testing, but you still need to establish a genetic relationship through the grandparent(s).          </p>
  
          <div className="grid gap-4 md:grid-cols-2 text-left max-w-3xl mx-auto">
            {scenarios.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-white"
              >
                <span className="text-blue-600 text-xl mt-1">✓</span>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default GrandparentageWhoNeedsTest;
  