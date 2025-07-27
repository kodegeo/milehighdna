import React from 'react';

const PrenatalWhyChooseUs = () => {

  const reasons = [
    {
      title: 'Seguro y no invasivo',
      description:
        'La prueba prenatal solo requiere un simple dibujo de sangre de la madre y un hisopo bucal del presunto padre—sin riesgo para el embarazo.',
    },
    {
      title: 'Laboratorios acreditados por la AABB',
      description:
        'Todas las pruebas son procesadas por laboratorios acreditados por la AABB, garantizando precisión, confiabilidad y cumplimiento legal.',
    },
    {
      title: 'Opciones legales y de tranquilidad',
      description:
        'Elija resultados certificados para necesidades legales, inmigración o custodia, o seleccione una prueba no legal para tranquilidad personal.',
    },
    {
      title: 'Resultados precisos y admisibles en tribunales',
      description:
        'Los resultados son más del 99.9% concluyentes y incluyen documentación notarial si es necesario para uso legal.',
    },
    {
      title: 'Confidencial y de apoyo',
      description:
        'Manejamos cada caso con la máxima privacidad y compasión, guiándote a través de cada paso del proceso.',
    },
    {
      title: 'Precios transparentes',
      description:
        'Sin cargos ocultos. Nuestros precios incluyen análisis de laboratorio, recolección de muestras y documentación legal opcional.',
    },
  ];

  return (
    <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">¿Por qué elegir Mile High DNA para pruebas prenatales?</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-xl shadow-sm border-l-4 border-blue-600 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrenatalWhyChooseUs; 