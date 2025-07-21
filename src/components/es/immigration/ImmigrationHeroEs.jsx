const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-white to-blue-50 py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Pruebas de ADN para Inmigración en las que Puede Confiar
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Proporcionamos pruebas de ADN rápidas, precisas y aprobadas por USCIS para casos de inmigración. Ya sea que esté patrocinando a un familiar o respondiendo a una solicitud de la embajada, hacemos que el proceso sea simple.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/milehighdnatesting/consulta-gratuita"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
            >
              Programar su Prueba
            </a>
            <a
              href="https://calendly.com/milehighdnatesting/consulta-gratuita"
              className="text-blue-600 font-semibold px-6 py-3 rounded-xl border border-blue-600 hover:bg-blue-50 transition"
            >
              Hablar con un Especialista
            </a>
          </div>
        </div>

        {/* Placeholder Image */}
        <div className="lg:w-1/2">
          <img
            src="/images/immigration-hero.png" // Replace with actual image
            alt="Pruebas de ADN para Inmigración"
            className="w-full rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero; 