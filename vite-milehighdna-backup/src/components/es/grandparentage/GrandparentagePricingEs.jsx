const GrandparentagePricingEs = () => {
    return (
      <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Precios Simples y Transparentes
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Nuestros precios incluyen análisis de laboratorio, recolección de muestras y documentación legal opcional. Ofrecemos configuraciones de prueba flexibles que se adaptan a sus necesidades.
          </p>
  
          <div className="grid gap-6 md:grid-cols-2">
            {/* Single Grandparent */}
            <div className="bg-white rounded-xl shadow-md border-l-4 border-blue-600 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Un Abuelo + Niño</h3>
              <p className="text-gray-600 mb-4">Incluye prueba de ADN para un abuelo y un niño. Ideal cuando el presunto padre no está disponible.</p>
              <p className="text-2xl font-bold text-blue-700 mb-4">$325</p>
              <ul className="text-left text-gray-700 space-y-2 mb-4">
                <li>✔ Análisis de Laboratorio AABB</li>
                <li>✔ Recolección de Muestras</li>
                <li>✔ Opciones de Tranquilidad Personal o Legal</li>
                <li>✔ Resultados en 2–4 Días Hábiles</li>
              </ul>
              <a
                href="/schedule"
                className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Reservar Esta Prueba
              </a>
            </div>
  
            {/* Both Grandparents */}
            <div className="bg-white rounded-xl shadow-md border-l-4 border-blue-600 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Ambos Abuelos + Niño</h3>
              <p className="text-gray-600 mb-4">Mejora la precisión y confianza en los resultados. Recomendado para pruebas concluyentes.</p>
              <p className="text-2xl font-bold text-blue-700 mb-4">$395</p>
              <ul className="text-left text-gray-700 space-y-2 mb-4">
                <li>✔ Análisis de Laboratorio AABB</li>
                <li>✔ Recolección de Muestras para Todos los Participantes</li>
                <li>✔ Documentación Legal (si es necesario)</li>
                <li>✔ Resultados en 2–4 Días Hábiles</li>
              </ul>
              <a
                href="/schedule"
                className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Reservar Esta Prueba
              </a>
            </div>
          </div>
  
          <p className="text-sm text-gray-500 mt-8">
            *Los precios pueden variar ligeramente según la ubicación, el número de participantes o la coordinación internacional.
          </p>
        </div>
      </section>
    );
  };
  
  export default GrandparentagePricingEs; 