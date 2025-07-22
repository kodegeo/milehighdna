const GrandparentageTestimonialsEs = () => {
    const testimonials = [
      {
        name: 'María S.',
        location: 'Denver, CO',
        quote:
          "Después de que mi hijo falleció, necesitaba probar que era la abuela biológica de su hijo. Mile High DNA hizo que el proceso fuera simple, respetuoso y rápido. Recibí los resultados en solo tres días y pude obtener la custodia sin demoras.",
      },
      {
        name: 'James y Carol T.',
        location: 'Aurora, CO',
        quote:
          "No estábamos seguros si éramos realmente los abuelos — había sido un asunto familiar delicado. La tranquilidad que obtuvimos de los resultados ayudó a traer claridad y sanación. Recomendamos ampliamente a su equipo atento.",
      },
      {
        name: 'Fátima R.',
        location: 'Lakewood, CO',
        quote:
          "Necesitábamos pruebas para una petición de inmigración relacionada con nuestro nieto. Mile High DNA coordinó todo con la embajada y se aseguró de que los resultados fueran aceptados. Fueron eficientes y confiables.",
      },
    ];
  
    return (
      <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Lo que Dicen las Familias</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white border border-blue-100 p-6 rounded-xl shadow-sm text-left hover:shadow-md transition"
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
  
  export default GrandparentageTestimonialsEs; 