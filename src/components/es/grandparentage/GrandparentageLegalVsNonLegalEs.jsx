const GrandparentageLegalVsNonLegalEs = () => {
    return (
      <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Pruebas Legales vs. No Legales: ¿Cuál es la Diferencia?
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Ofrecemos opciones de pruebas de ADN tanto legalmente admisibles como para tranquilidad personal. El método de prueba es el mismo — la diferencia está en cómo se recolectan y documentan las muestras.
          </p>
  
          <div className="grid gap-8 md:grid-cols-2 text-left">
            {/* Legal Test */}
            <div className="bg-white p-6 rounded-xl border-l-4 border-blue-600 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-800 mb-2">✔ Prueba Legal</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Recolección de muestras con cadena de custodia</li>
                <li>• Válida para casos judiciales, inmigración y gubernamentales</li>
                <li>• Resultados notariados y envío directo opcional</li>
                <li>• Se requiere cita en instalación de recolección certificada</li>
              </ul>
            </div>
  
            {/* Non-Legal Test */}
            <div className="bg-white p-6 rounded-xl border-l-4 border-gray-400 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-800 mb-2">✔ Prueba No Legal</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Mismo análisis de laboratorio, sin cadena de custodia formal</li>
                <li>• Solo para conocimiento personal</li>
                <li>• Kit de recolección en casa (donde está permitido)</li>
                <li>• No válida en tribunales ni para asuntos oficiales</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default GrandparentageLegalVsNonLegalEs; 