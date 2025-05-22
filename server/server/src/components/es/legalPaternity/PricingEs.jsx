const Pricing = () => {
    return (
      <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Precios Transparentes para Pruebas de ADN de Inmigración
          </h2>
          <p className="text-lg text-gray-600 mb-10">
          Sin cargos ocultos. Nuestro precio incluye el análisis en laboratorio, la coordinación con embajadas internacionales y la entrega directa de resultados a las autoridades de inmigración.  
          </p>
  
          <div className="bg-white rounded-xl shadow-lg border-t-4 border-blue-600 p-8 max-w-xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Desde $349</h3>
            <ul className="text-left text-gray-700 space-y-4 mb-6">
              <li>✔ Análisis en laboratorio acreditado por la AABB</li>
              <li>✔ Recolección de muestra en nuestra oficina</li>
              <li>✔ Resultados en 2 a 5 días hábiles</li>
            </ul>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://calendly.com/cynthia-milehighdnatesting/30-minute-dna-test-appointment"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
              >
                Reserva ahora
              </a>
            </div>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Pricing;
  