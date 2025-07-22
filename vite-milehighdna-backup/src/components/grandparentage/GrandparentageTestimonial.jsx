const GrandparentageTestimonials = () => {
    const testimonials = [
      {
        name: 'Maria S.',
        location: 'Denver, CO',
        quote:
          "After my son passed, I needed to prove I was the biological grandmother of his child. Mile High DNA made the process simple, respectful, and fast. I received results in just three days and was able to gain custody without delays.",
      },
      {
        name: 'James & Carol T.',
        location: 'Aurora, CO',
        quote:
          "We weren’t sure if we were truly the grandparents — it had been a sensitive family matter. The peace of mind we got from the results helped bring clarity and healing. Highly recommend their caring team.",
      },
      {
        name: 'Fatima R.',
        location: 'Lakewood, CO',
        quote:
          "We needed proof for an immigration petition involving our grandson. Mile High DNA coordinated everything with the embassy and made sure the results were accepted. They were efficient and trustworthy.",
      },
    ];
  
    return (
      <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">What Families Are Saying</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white border border-blue-100 p-6 rounded-xl shadow-sm text-left hover:shadow-md transition"
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
  
  export default GrandparentageTestimonials;
  