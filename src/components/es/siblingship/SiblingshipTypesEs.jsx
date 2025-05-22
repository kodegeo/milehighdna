const SiblingshipTypes = () => {
    const types = [
      {
        title: 'Prueba de Hermandad Completa',
        description:
          'Se utiliza para determinar si dos personas comparten ambos padres biológicos. Es ideal cuando ninguno de los padres está disponible y se sospecha que los hermanos están completamente relacionados.',
      },
      {
        title: 'Prueba de Medios Hermanos',
        description:
          'Se utiliza cuando las personas comparten solo uno de los padres biológicos. Esta prueba ayuda a distinguir si la relación es de medio hermanos, especialmente cuando uno de los padres está ausente o no puede participar.',
      },
      {
        title: 'Prueba de Hermanos con Padre Conocido',
        description:
          'Incluye a uno de los padres conocidos (generalmente la madre) para mejorar la precisión de los resultados. Agregar a un padre refuerza el nivel de certeza para distinguir entre hermanos completos o medios hermanos.',
      },
      {
        title: 'Prueba de Cigosidad en Gemelos (Opcional)',
        description:
          'Sirve para determinar si los gemelos son idénticos (monocigóticos) o fraternales (dicigóticos). Especialmente útil para propósitos médicos o documentación personal.',
      },
    ];
  
    return (
      <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Tipos de relación entre hermanos que analizamos
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