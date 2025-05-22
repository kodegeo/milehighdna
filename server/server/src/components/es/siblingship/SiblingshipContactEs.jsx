const SiblingshipContact = () => {
    return (
      <section className="bg-blue-50 py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-start">
          {/* Left: CTA and Description */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              ¿Listo para programar su prueba de ADN de hermanos?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Ya sea que esté confirmando una relación de hermanos para fines legales, inmigración o tranquilidad mental, estamos aquí para ayudarle. Nuestro equipo le guiará a través del proceso y se asegurará de que todo transcurra sin problemas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/schedule"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
              >
                Programar Ahora
              </a>
              <a
                href="/contact"
                className="text-blue-600 font-semibold px-6 py-3 rounded-xl border border-blue-600 hover:bg-blue-50 transition"
              >
                Contactar a Nuestro Equipo
              </a>
            </div>
          </div>
  
          {/* Right: Contact Details */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Información de Contacto</h3>
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
  
  export default SiblingshipContact; 