const SiblingshipTypes = () => {
    const types = [
      {
        title: 'Prueba de Hermanos Completos',
        description:
          'Se utiliza para determinar si dos individuos comparten ambos padres biológicos. Es ideal cuando ninguno de los padres está disponible y se sospecha que ambos hermanos están completamente relacionados.',
      },
      {
        title: 'Prueba de Medios Hermanos',
        description:
          'Se utiliza cuando los individuos comparten solo un padre biológico. Esta prueba ayuda a distinguir las relaciones de medios hermanos cuando un padre está ausente o no disponible.',
      },
      {
        title: 'Prueba de Hermanos con Padre Conocido',
        description:
          'Incluye un padre conocido (generalmente la madre) para mejorar la precisión del resultado. Agregar un padre fortalece la probabilidad estadística de determinar relaciones completas o medias.',
      },
      {
        title: 'Prueba de Cigosidad en Gemelos (Opcional)',
        description:
          'Se utiliza para determinar si los gemelos son idénticos (monocigóticos) o fraternos (dicigóticos). Especialmente útil para documentación médica o personal.',
      },
    ];
  
    return (
      <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Tipos de Relaciones de Hermanos que Analizamos
          </h2>
          <div className="grid gap-8 md:grid-cols-2 text-left">
            {types.map((type, index) => (
              <div
                key={index}
                className="bg-white border-l-4 border-blue-600 p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default SiblingshipTypes; 