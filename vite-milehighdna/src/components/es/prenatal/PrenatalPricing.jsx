const PrenatalPricing = () => {
    return (
      <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Precios de las pruebas de ADN prenatales
          </h2>
          <p className="text-lg text-gray-600 mb-10">
          Nuestros precios prenatales cubren el análisis de laboratorio no invasivo, la recolección profesional de muestras y la opción de documentación legal. Ofrecemos paquetes de pruebas flexibles diseñados para satisfacer tanto necesidades personales como legales.
          </p>
  
          <div className="grid gap-6 md:grid-cols-2">
            {/* Single Grandparent */}
            <div className="bg-white rounded-xl shadow-md border-l-4 border-blue-600 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Prueba no legal: Padre presunto + madre embarazada</h3>
              <p className="text-gray-600 mb-4">Incluye una prueba de ADN no legal para un padre y una madre embarazada. Ideal para tranquilidad personal.</p>
              <p className="text-2xl font-bold text-blue-700 mb-4">$1,500.00</p>
              <ul className="text-left text-gray-700 space-y-2 mb-4">
                <li>✔ Análisis de laboratorio acreditado por la AABB</li>
                <li>✔ Recolección de muestras</li>
                <li>✔ Tranquilidad de espíritu</li>
                <li>✔ 7–10 Entrega del día laborable</li>
              </ul>
              <a
                href="https://calendly.com/milehighdnatesting/noninvasive-prenatal-paternity"
                className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Reserve Esta Prueba
              </a>
            </div>
  
            {/* Both Grandparents */}
            <div className="bg-white rounded-xl shadow-md border-l-4 border-blue-600 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Prueba legal: Padre presunto + madre embarazada</h3>
              <p className="text-gray-600 mb-4">Incluye una prueba de ADN legal para un presunto padre y una madre embarazada. Recomendado para casos donde se requiere verificación judicial.</p>
              <p className="text-2xl font-bold text-blue-700 mb-4">$1,800.00</p>
              <ul className="text-left text-gray-700 space-y-2 mb-4">
                <li>✔ Análisis de laboratorio acreditado por la AABB</li>
                <li>✔ Recolección de muestras</li>
                <li>✔ Documentación Legal</li>
                <li>✔ 7–10 Entrega del día laborable</li>
              </ul>
              <a
                href="https://calendly.com/milehighdnatesting/noninvasive-prenatal-paternity"
                className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Reserve Esta Prueba
              </a>
            </div>
          </div>
  
          <p className="text-sm text-gray-500 mt-8">
          *El precio puede variar para pruebas fuera del estado.
          </p>
        </div>
      </section>
    );
  };
  
  export default PrenatalPricing;
  