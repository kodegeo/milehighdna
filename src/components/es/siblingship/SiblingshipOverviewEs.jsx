const SiblingshipOverview = () => {
    return (
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
          ¿Qué es una prueba de ADN entre hermanos?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
          La prueba de hermandad por ADN se utiliza para determinar si dos o más personas comparten uno o ambos padres biológicos. Es una alternativa útil cuando un padre no está disponible para la prueba y se usa comúnmente en casos de inmigración, herencia o situaciones familiares personales.          
          </p>
          <div className="grid gap-8 md:grid-cols-3 text-left">
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Hermanos Completos o Medios Hermanos</h3>
              <p className="text-gray-600">
              Descubre si comparten ambos padres o solo uno, incluso sin necesidad de realizar la prueba a un padre biológico.              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Cuando un Padre No Está Disponible</h3>
              <p className="text-gray-600">
              Ideal cuando un padre biológico ha fallecido, está ausente o no desea participar en la prueba.              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Uso Legal o Personal</h3>
              <p className="text-gray-600">
              Ofrecemos opciones de prueba válidas para casos aprobados por la corte, trámites migratorios o para obtener tranquilidad personal.              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default SiblingshipOverview; 