const SiblingshipPricing = () => {
    return (
      <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Precios Accesibles y Transparentes
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Nuestros precios incluyen análisis de laboratorio, recolección de muestras y entrega de resultados. Elija la opción
            que mejor se adapte a su relación y necesidades de prueba.
          </p>
  
          <div className="grid gap-6 md:grid-cols-3">
            {/* Standard Siblingship Test */}
            <div className="bg-white rounded-xl shadow-md border-l-4 border-blue-600 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Prueba de Hermanos Estándar</h3>
              <p className="text-gray-600 mb-4">
                Dos personas evaluadas para determinar si son hermanos completos o medios hermanos.
              </p>
              <p className="text-2xl font-bold text-blue-700 mb-4">$325</p>
              <ul className="text-left text-gray-700 space-y-2 mb-4">
                <li>✔ Laboratorio Acreditado por AABB</li>
                <li>✔ 2 Participantes</li>
                <li>✔ Resultados en 2–5 Días Hábiles</li>
                <li>✔ Uso Legal o Personal</li>
              </ul>
              <a
                href="/schedule"
                className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Reservar Ahora
              </a>
            </div>
  
            {/* With Known Parent */}
            <div className="bg-white rounded-xl shadow-md border-l-4 border-blue-600 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Con Padre Conocido</h3>
              <p className="text-gray-600 mb-4">
                Incluye un padre biológico conocido para mejorar la precisión y certeza de la relación.
              </p>
              <p className="text-2xl font-bold text-blue-700 mb-4">$395</p>
              <ul className="text-left text-gray-700 space-y-2 mb-4">
                <li>✔ Agrega Padre Biológico al Análisis</li>
                <li>✔ Fortalece la Confianza del Resultado</li>
                <li>✔ Documentación Legal Disponible</li>
              </ul>
              <a
                href="/schedule"
                className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Reservar Ahora
              </a>
            </div>
  
            {/* Add-On Sibling */}
            <div className="bg-white rounded-xl shadow-md border-l-4 border-blue-600 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Agregar Hermano Adicional</h3>
              <p className="text-gray-600 mb-4">
                Incluya otro hermano en la prueba para un perfil familiar más completo.
              </p>
              <p className="text-2xl font-bold text-blue-700 mb-4">+$100</p>
              <ul className="text-left text-gray-700 space-y-2 mb-4">
                <li>✔ Ampliar Grupo de Prueba</li>
                <li>✔ Útil para Relaciones Complejas</li>
                <li>✔ Aplica a Pruebas Legales o Personales</li>
              </ul>
              <a
                href="/contact"
                className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Solicitar Cotización Personalizada
              </a>
            </div>
          </div>
  
          <p className="text-sm text-gray-500 mt-8">
            *Los precios pueden variar según la ubicación, necesidades de documentación legal o coordinación internacional.
          </p>
        </div>
      </section>
    );
  };
  
  export default SiblingshipPricing; 