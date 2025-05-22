const SiblingshipPricing = () => {
    return (
      <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Precios claros y accesibles
          </h2>
          <p className="text-lg text-gray-600 mb-10">
          Nuestros precios incluyen el análisis en laboratorio, la recolección de muestras y la entrega segura de resultados. Escoge la opción que mejor se ajuste a tu situación familiar y tipo de prueba.          </p>  
          <div className="grid gap-6 md:grid-cols-3">
            {/* Standard Siblingship Test */}
            <div className="bg-white rounded-xl shadow-md border-l-4 border-blue-600 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Prueba Estándar de Hermandad</h3>
              <p className="text-gray-600 mb-4">
              Dos personas se analizan para determinar si son hermanos completos o medios hermanos.              </p>
              <p className="text-2xl font-bold text-blue-700 mb-4">$349</p>
              <ul className="text-left text-gray-700 space-y-2 mb-4">
                <li>✔ Laboratorio Acreditado por AABB</li>
                <li>✔ 2 Participantes</li>
                <li>✔ Resultados en 2–5 Días Hábiles</li>
                <li>✔ Válida para uso legal o personal</li>
              
              </ul>
              <br ></br>
              <a
                href="https://calendly.com/cynthia-milehighdnatesting/30-minute-dna-test-appointment"
                className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Reserva Ahora
              </a>
            </div>
  
            {/* With Known Parent */}
            <div className="bg-white rounded-xl shadow-md border-l-4 border-blue-600 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Con padre o madre biológica conocida</h3>
              <p className="text-gray-600 mb-4">
              Incluye a un padre biológico conocido para mejorar la precisión y la certeza del resultado.
              </p>
              <p className="text-2xl font-bold text-blue-700 mb-4">$399</p>
              <ul className="text-left text-gray-700 space-y-2 mb-4">
                <li>✔ Se agrega un padre biológico al análisis</li>
                <li>✔ Mayor confiabilidad en los resultados</li>
                <li>✔ Documentación legal disponible</li>
              </ul>
              <a
                href="https://calendly.com/cynthia-milehighdnatesting/30-minute-dna-test-appointment"
                className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Reserva Ahora
              </a>
            </div>
  
            {/* Add-On Sibling */}
            <div className="bg-white rounded-xl shadow-md border-l-4 border-blue-600 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Agregar Hermano o Hermana Adicional</h3>
              <p className="text-gray-600 mb-4">
              Incluye a otro hermano en la prueba para obtener un perfil familiar más completo.
              </p>
              <p className="text-2xl font-bold text-blue-700 mb-4">+$100</p>
              <ul className="text-left text-gray-700 space-y-2 mb-4">
                <li>✔ Amplía el grupo de análisis</li>
                <li>✔ Útil para relaciones familiares complejas</li>
                <li>✔ Válido para pruebas legales o personales</li>
              </ul>
              <a
                href="https://calendly.com/cynthia-milehighdnatesting/30-minute-dna-test-appointment"
                className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Solicita una cotización
              </a>
            </div>
          </div>
  
          <p className="text-sm text-gray-500 mt-8">
          *El precio puede variar según la ubicación, la necesidad de documentación legal o la coordinación internacional.
          </p>
        </div>
      </section>
    );
  };
  
  export default SiblingshipPricing; 