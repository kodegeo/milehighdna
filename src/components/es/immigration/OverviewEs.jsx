const Overview = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          ¿Qué son las Pruebas de ADN para Inmigración?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Las pruebas de ADN para inmigración se utilizan para verificar relaciones biológicas con fines de inmigración cuando son requeridas por USCIS, embajadas de EE.UU. u otras autoridades de inmigración. Es un método confiable y legalmente aceptado para respaldar su petición y demostrar relaciones familiares cuando los documentos son insuficientes o no están disponibles.
        </p>

        <div className="grid gap-8 md:grid-cols-3 text-left">
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Aprobado por USCIS</h3>
            <p className="text-gray-600">
              Todas las pruebas son realizadas por laboratorios acreditados por AABB, aprobados por USCIS y embajadas de EE.UU. en todo el mundo.
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Resultados Rápidos</h3>
            <p className="text-gray-600">
              Procesamos las muestras rápidamente — los resultados suelen estar listos en 2–5 días hábiles después de la recolección.
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Coordinación Internacional</h3>
            <p className="text-gray-600">
              Coordinamos con embajadas y clínicas en el extranjero para garantizar la recolección oportuna para familiares fuera de EE.UU.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview; 