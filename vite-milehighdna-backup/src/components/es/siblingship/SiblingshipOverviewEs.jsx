const SiblingshipOverview = () => {
    return (
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            ¿Qué es una Prueba de ADN de Hermanos?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Una prueba de ADN de hermanos se utiliza para determinar si dos o más individuos comparten uno o ambos padres biológicos. Es una alternativa eficaz cuando un padre no está disponible para la prueba y se usa comúnmente en casos de inmigración, herencia y situaciones familiares personales.
          </p>
  
          <div className="grid gap-8 md:grid-cols-3 text-left">
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Hermanos Completos o Medios Hermanos</h3>
              <p className="text-gray-600">
                Determine si comparten ambos padres (hermanos completos) o solo uno (medios hermanos), incluso sin realizar pruebas a un padre.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Cuando un Padre No Está Disponible</h3>
              <p className="text-gray-600">
                Ideal cuando un padre biológico ha fallecido, está desaparecido o no está dispuesto a participar en la prueba.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Uso Legal o Personal</h3>
              <p className="text-gray-600">
                Ofrecemos opciones de pruebas para casos aprobados por tribunales, trámites de inmigración o simplemente para su tranquilidad personal.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default SiblingshipOverview; 