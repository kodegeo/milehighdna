const OverviewEs = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
        ¿Qué es una prueba de ADN para inmigración?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
        La prueba de ADN para inmigración se utiliza para verificar vínculos biológicos con fines migratorios cuando lo requieren el USCIS, embajadas de EE.UU. u otras autoridades de inmigración. Es un método confiable y legalmente aceptado para respaldar tu petición y demostrar relaciones familiares cuando los documentos no son suficientes o no están disponibles.        </p>

        <div className="grid gap-8 md:grid-cols-3 text-left">
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Cumple con los requisitos del USCIS</h3>
            <p className="text-gray-600">
            Todas las pruebas se realizan en laboratorios acreditados por la AABB, aprobados por el USCIS y embajadas de EE.UU. en todo el mundo.
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Entrega rápida</h3>
            <p className="text-gray-600">
            Procesamos las muestras rápidamente: los resultados suelen estar listos en 2 a 5 días hábiles después de la recolección.            </p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Coordinación Internacional</h3>
            <p className="text-gray-600">
            Coordinamos con embajadas y clínicas en el extranjero para asegurar una recolección oportuna de muestras para familiares fuera de los Estados Unidos.            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewEs; 