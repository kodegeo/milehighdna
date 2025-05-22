const GrandparentagePricingEs = () => {
    return (
      <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Precios claros y sin complicaciones
          </h2>
          <p className="text-lg text-gray-600 mb-10">
          Nuestros precios incluyen el análisis en laboratorio, la recolección de muestras y documentación legal opcional. Ofrecemos configuraciones flexibles para adaptarnos a tus necesidades.          
          </p>
  
          <div className="grid gap-6 md:grid-cols-2">
            {/* Single Grandparent */}
            <div className="bg-white rounded-xl shadow-md border-l-4 border-blue-600 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Un abuelo(a) + menor</h3>
              <p className="text-gray-600 mb-4">Incluye prueba de ADN entre un abuelo o abuela y un menor. Ideal cuando el padre presunto no está disponible.</p>
              <p className="text-2xl font-bold text-blue-700 mb-4">$349</p>
              <ul className="text-left text-gray-700 space-y-2 mb-4">
                <li>✔ Análisis en laboratorio acreditado por la AABB</li>
                <li>✔ Recolección de muestras</li>
                <li>✔ Opción legal o para tranquilidad personal</li>
                <li>✔ Resultados en 2 a 5 días hábiles</li>
              </ul>
              <a
                href="https://calendly.com/milehighdnatesting-info"
                className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Reserva esta prueba
              </a>
            </div>
  
            {/* Both Grandparents */}
            <div className="bg-white rounded-xl shadow-md border-l-4 border-blue-600 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Ambos abuelos + menor</h3>
              <p className="text-gray-600 mb-4">Mejora la precisión y la confianza en los resultados. Recomendado para obtener resultados concluyentes.</p>
              <p className="text-2xl font-bold text-blue-700 mb-4">$399</p>
              <ul className="text-left text-gray-700 space-y-2 mb-4">
                <li>✔ Análisis en laboratorio acreditado por la AABB</li>
                <li>✔ Recolección de muestras para todos los participantes</li>
                <li>✔ Documentación legal (si se requiere)</li>
                <li>✔ Resultados en 2 a 5 días hábiles</li>
              </ul>
              <a
                href="https://calendly.com/milehighdnatesting-info"
                className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Reserva esta prueba
              </a>
            </div>
          </div>
  
          <p className="text-sm text-gray-500 mt-8">
          *El precio puede variar ligeramente según la ubicación, el número de participantes o la coordinación internacional.          </p>
        </div>
      </section>
    );
  };
  
  export default GrandparentagePricingEs; 