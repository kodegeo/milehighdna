const SiblingshipLegalVsNonLegal = () => {
    return (
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Pruebas Legales vs. No Legales: ¿Cuál es la Diferencia?
          </h2>
          <p className="text-lg text-gray-600 mb-10">
          Aunque ambos tipos de pruebas utilizan el mismo proceso de laboratorio y ofrecen resultados precisos, la validez legal depende de cómo se recolectan y documentan las muestras.          
          </p>
  
          <div className="grid gap-8 md:grid-cols-2 text-left">
            {/* Legal Testing */}
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-800 mb-2">✔ Prueba Legal</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Recolección de muestras con cadena de custodia</li>
                <li>• Requerida para uso en corte, inmigración o trámites gubernamentales</li>
                <li>• Resultados notariados con documentación legal</li>
                <li>• Las muestras deben tomarse en un centro autorizado</li>
              </ul>
            </div>
  
            {/* Non-Legal Testing */}
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-gray-400 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-800 mb-2">✔ Prueba No Legal (Tranquilidad Personal)</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• La misma precisión de laboratorio, sin cadena de custodia formal</li>
                <li>• Puede realizarse con recolección en casa (donde esté permitido)</li>
                <li>• No válida para asuntos legales, judiciales o migratorios</li>
                <li>• Ideal para responder dudas personales de forma privada</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default SiblingshipLegalVsNonLegal; 