const SiblingshipTypes = () => {
    const types = [
      {
        title: 'Full Siblingship Test',
        description:
          'Used to determine if two individuals share both biological parents. This is ideal when neither parent is available and both siblings are suspected to be fully related.',
      },
      {
        title: 'Half Siblingship Test',
        description:
          'Used when individuals share only one biological parent. This test helps distinguish half-sibling relationships when a parent is missing or unavailable.',
      },
      {
        title: 'Siblingship with Known Parent',
        description:
          'Includes one known parent (usually the mother) to improve result accuracy. Adding a parent strengthens the statistical likelihood of determining full or half relationships.',
      },
      {
        title: 'Twin Zygosity Test (Optional)',
        description:
          'Used to determine whether twins are identical (monozygotic) or fraternal (dizygotic). Especially helpful for medical or personal documentation.',
      },
    ];
  
    return (
      <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Types of Sibling Relationships We Test
          </h2>
          <div className="grid gap-8 md:grid-cols-2 text-left">
            {types.map((type, index) => (
              <div
                key={index}
                className="bg-white border-l-4 border-blue-600 p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default SiblingshipTypes;
  