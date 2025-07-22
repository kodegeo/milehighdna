const ContactEs = () => {
    return (
      <section className="bg-white py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-start">
          {/* Left: Schedule Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              ¿Listo para Comenzar?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Programe su prueba de ADN para inmigración hoy. Estamos aquí para guiarle en cada paso — desde la coordinación con la embajada hasta la entrega de resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/schedule"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
              >
                Programar en Línea
              </a>
              <a
                href="/contact"
                className="text-blue-600 font-semibold px-6 py-3 rounded-xl border border-blue-600 hover:bg-blue-50 transition"
              >
                Hablar con un Especialista
              </a>
            </div>
          </div>
  
          {/* Right: Contact Details */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contáctenos</h3>
            <p className="text-gray-700 mb-2">
              📍 <strong>Dirección:</strong> 123 Main St, Denver, CO 80204
            </p>
            <p className="text-gray-700 mb-2">
              📞 <strong>Teléfono:</strong> <a href="tel:+13035550123" className="text-blue-600 hover:underline">(303) 555-0123</a>
            </p>
            <p className="text-gray-700 mb-2">
              ✉️ <strong>Correo:</strong> <a href="mailto:info@milehighdna.com" className="text-blue-600 hover:underline">info@milehighdna.com</a>
            </p>
            <p className="text-gray-700">
              🕒 <strong>Horario:</strong> Lun–Vie: 9am–5pm | Sáb: Con Cita
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactEs; 