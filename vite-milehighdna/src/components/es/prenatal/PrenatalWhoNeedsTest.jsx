const PrenatalWhoNeedsTest = () => {
  const scenarios = [
    'Quiere confirmar la paternidad antes de que nazca el bebé para tranquilidad personal',
    'Un caso legal o de custodia requiere prueba de paternidad durante el embarazo',
    'Necesita documentación para inmigración o beneficios antes del nacimiento del niño',
    'El presunto padre no está disponible, y las respuestas tempranas son importantes para la planificación familiar',
  ];

    return (
      <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
          ¿Quién debería considerar la prueba de ADN prenatal?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Madres embarazadas y familias que desean confirmar la paternidad antes de que nazca el bebé por razones de tranquilidad personal, legales o de inmigración.
            </p>
  
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
  
  export default PrenatalWhoNeedsTest;
  