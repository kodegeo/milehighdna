const SiblingshipTestimonials = () => {
    const testimonials = [
      {
        name: 'Angela D.',
        location: 'Denver, CO',
        quote:
          "I always wondered if my sister and I were truly related — we had different stories growing up. Mile High DNA handled everything professionally and gave us peace of mind. Turns out we’re half sisters, and now we’re closer than ever.",
      },
      {
        name: 'Victor M.',
        location: 'Aurora, CO',
        quote:
          "We needed proof of our sibling relationship for an immigration case. The team walked us through every step and coordinated everything with USCIS. The test was accepted without issue.",
      },
      {
        name: 'Terrence & Mike R.',
        location: 'Lakewood, CO',
        quote:
          "We were adopted separately and wanted to know if we were brothers. This test changed our lives — and the support from Mile High DNA made it easy and respectful throughout the entire process.",
      },
    ];
  
    return (
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Real Stories from Our Clients</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-blue-50 border border-blue-100 p-6 rounded-xl shadow-sm text-left hover:shadow-md transition"
              >
                <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
                <div className="text-sm font-semibold text-blue-700">
                  — {t.name}, {t.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default SiblingshipTestimonials;
  