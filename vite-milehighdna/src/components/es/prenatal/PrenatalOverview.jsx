import React from 'react';

const PrenatalOverview = () => {
return (
  <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
      Cómo funciona la prueba de paternidad prenatal</h2>
      <p className="text-lg text-gray-600 mb-8">
      La prueba de paternidad prenatal utiliza una simple muestra de sangre de la madre y un hisopo bucal del presunto padre para determinar de manera segura la paternidad antes de que nazca el bebé. Esta prueba no invasiva no representa ningún riesgo para el embarazo y ofrece resultados precisos, admisibles en tribunales, para fines personales, legales o de inmigración.
      </p>

      <div className="grid gap-8 md:grid-cols-3 text-left">
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">No invasivo</h3>
          <p className="text-gray-600">
          Solo se requiere una muestra de sangre de la madre y un hisopo bucal del presunto padre.
          </p>
        </div>
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Seguro</h3>
          <p className="text-gray-600">
          Sin riesgo para el embarazo: no se necesita amniocentesis ni biopsia de vellosidades coriónicas (CVS).
          </p>
        </div>
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Preciso</h3>
          <p className="text-gray-600">
          Los resultados son más del 99.9% concluyentes y están acreditados por la AABB.
          </p>
        </div>
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Rápido</h3>
          <p className="text-gray-600">
          Los resultados están normalmente disponibles en 7 a 10 días hábiles.          
          </p>
        </div>
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Confidencial</h3>
          <p className="text-gray-600">
          Todas las pruebas y resultados se manejan con la máxima privacidad.
          </p>
        </div>

      </div>
    </div>
  </section>
);
};

export default PrenatalOverview; 