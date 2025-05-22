const Pricing = () => {
  return (
    <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Precios para Pruebas de ADN de Inmigración
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Sin cargos ocultos. Nuestro precio incluye pruebas de laboratorio, coordinación con embajadas internacionales y entrega directa de resultados a funcionarios de inmigración.
        </p>

        <div className="bg-white rounded-xl shadow-lg border-t-4 border-blue-600 p-8 max-w-xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Solicita una cotización</h3>
          <ul className="text-left text-gray-700 space-y-4 mb-6">
            <li>✔ Pruebas en Laboratorio Acreditado por AABB</li>
            <li>✔ Recolección de Muestras en Nuestra Oficina</li>
            <li>✔ Coordinación con Embajadas o Clínicas en el Extranjero</li>
            <li>✔ Envío Directo a USCIS o Embajada</li>
          </ul>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://calendly.com/cynthia-milehighdnatesting/30-minute-dna-test-appointment"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
            >
              Reservar Ahora
            </a>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          *El precio puede variar según el número de participantes y los requisitos de coordinación internacional.
        </p>
      </div>
    </section>
  );
};

export default Pricing; 