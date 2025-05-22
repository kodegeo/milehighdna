const Testimonials = () => {
    const testimonials = [
      {
        name: 'Carla M.',
        location: 'Denver, CO',
        quote:
          'Mile High DNA made a stressful process feel easy. They helped me coordinate testing with my son overseas, and the results arrived faster than I expected. USCIS approved everything without delay!',
      },
      {
        name: 'Luis R.',
        location: 'Lakewood, CO',
        quote:
          'The staff was friendly, professional, and bilingual — which really helped my parents feel comfortable. I highly recommend Mile High DNA for anyone dealing with immigration testing.',
      },
      {
        name: 'Fatou S.',
        location: 'Aurora, CO',
        quote:
          'They handled everything with the embassy in Senegal. I was worried it would be complicated, but they walked me through every step. Thank you for making it stress-free!',
      },
    ];
  
    return (
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Real Stories From Our Clients</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-blue-50 border border-blue-100 p-6 rounded-xl shadow-sm text-left"
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
  
  export default Testimonials;
  