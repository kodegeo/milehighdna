const SiblingshipTestimonials = () => {
    const testimonials = [
      {
        name: 'Ángela D.',
        location: 'Denver, CO',
        quote:
          "Siempre me pregunté si mi hermana y yo éramos realmente parientes — teníamos diferentes historias al crecer. Mile High DNA manejó todo profesionalmente y nos dio tranquilidad. Resultó que somos medias hermanas, y ahora estamos más unidas que nunca.",
      },
      {
        name: 'Víctor M.',
        location: 'Aurora, CO',
        quote:
          "Necesitábamos prueba de nuestra relación de hermanos para un caso de inmigración. El equipo nos guió en cada paso y coordinó todo con USCIS. La prueba fue aceptada sin problemas.",
      },
      {
        name: 'Terrence y Mike R.',
        location: 'Lakewood, CO',
        quote:
          "Fuimos adoptados por separado y queríamos saber si éramos hermanos. Esta prueba cambió nuestras vidas — y el apoyo de Mile High DNA lo hizo fácil y respetuoso durante todo el proceso.",
      },
    ];
  
    return (
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Historias Reales de Nuestros Clientes</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-blue-50 border border-blue-100 p-6 rounded-xl shadow-sm text-left hover:shadow-md transition"
              >
                <p className="text-gray-700 italic mb-4">"{t.quote}"</p>
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