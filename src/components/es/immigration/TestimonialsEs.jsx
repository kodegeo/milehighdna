const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carla M.',
      location: 'Denver, CO',
      quote:
        'Mile High DNA hizo que un proceso estresante se sintiera fácil. Me ayudaron a coordinar las pruebas con mi hijo en el extranjero, y los resultados llegaron más rápido de lo que esperaba. ¡USCIS aprobó todo sin demora!',
    },
    {
      name: 'Luis R.',
      location: 'Lakewood, CO',
      quote:
        'El personal fue amable, profesional y bilingüe — lo que realmente ayudó a que mis padres se sintieran cómodos. Recomiendo encarecidamente Mile High DNA para cualquiera que necesite pruebas de inmigración.',
    },
    {
      name: 'Fatou S.',
      location: 'Aurora, CO',
      quote:
        'Manejaron todo con la embajada en Senegal. Estaba preocupada de que sería complicado, pero me guiaron en cada paso. ¡Gracias por hacerlo sin estrés!',
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Historias Reales de Nuestros Clientes</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-blue-50 border border-blue-100 p-6 rounded-xl shadow-sm text-left"
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

export default Testimonials; 