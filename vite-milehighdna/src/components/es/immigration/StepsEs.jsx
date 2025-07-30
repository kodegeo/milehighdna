const StepsEs = () => {
  const steps = [
    {
      number: 1,
      title: 'Inicie tu caso',
      description:
        'Llámanos o llena nuestro formulario en línea para comenzar el proceso de prueba de ADN para inmigración. Recopilaremos la información necesaria y te guiaremos en cada paso.',
    },
    {
      number: 2,
      title: 'Coordinación con la embajada o clínica',
      description:
        'Nos encargamos de coordinar directamente con la embajada de EE.UU. o la clínica correspondiente en el extranjero para programar la recolección de la muestra de tu familiar.',
    },
    {
      number: 3,
      title: 'Recolección de muestras de AND',
      description:
        'Las muestras se recolectan en instalaciones autorizadas tanto en EE.UU. como en el extranjero. Se mantiene la cadena de custodia para cumplir con los requisitos legales.',
    },
    {
      number: 4,
      title: 'Análisis en laboratorio',
      description:
        'Nuestro laboratorio acreditado por la AABB realiza el análisis con precisión.',
    },
    {
      number: 5,
      title: 'Entrega de resultados a las autoridades',
      description:
        'Los resultados se envían de forma segura al USCIS, a la embajada o a la oficina de inmigración correspondiente, según lo exija el proceso legal.',
    },
  ];

  return (
    <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Cómo funciona la prueba de ADN para inmigración
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

export default StepsEs; 