const Steps = () => {
  const steps = [
    {
      number: 1,
      title: 'Inicie su Caso',
      description:
        'Llame o complete nuestro formulario en línea para comenzar el proceso de prueba de ADN para inmigración. Recopilaremos los detalles necesarios y lo guiaremos en cada paso.',
    },
    {
      number: 2,
      title: 'Coordinación con la Embajada o Clínica',
      description:
        'Trabajaremos directamente con la Embajada de EE.UU. o la clínica en el extranjero para programar la recolección de ADN para su familiar en el extranjero.',
    },
    {
      number: 3,
      title: 'Recolección de Muestra de ADN',
      description:
        'Las muestras se recolectan en una instalación aprobada en EE.UU. y en el extranjero. Se mantiene la cadena de custodia para garantizar el cumplimiento legal.',
    },
    {
      number: 4,
      title: 'Pruebas y Análisis de Laboratorio',
      description:
        'Nuestro laboratorio acreditado por AABB realiza el análisis de ADN con precisión. La mayoría de los resultados están disponibles en 2–5 días hábiles.',
    },
    {
      number: 5,
      title: 'Resultados Enviados Directamente a las Autoridades',
      description:
        'Los resultados de las pruebas se envían de forma segura a USCIS, la embajada o la oficina de inmigración solicitante según lo requiera la ley.',
    },
  ];

  return (
    <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Cómo Funcionan las Pruebas de ADN para Inmigración
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border-l-4 border-blue-600 hover:shadow-md transition"
            >
              <div className="text-3xl font-bold text-blue-600">{step.number}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps; 