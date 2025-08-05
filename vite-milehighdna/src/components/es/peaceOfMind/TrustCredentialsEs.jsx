import React from "react";

const TrustCredentialsEs = () => {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Confianza y Credenciales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Laboratorios Acreditados AABB o CLIA
            </h3>
            <p className="text-gray-600">
              Procesado en laboratorios acreditados que cumplen con estándares estrictos de calidad.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
              🔒
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Confidencialidad Completa
            </h3>
            <p className="text-gray-600">
              Tus datos permanecen confidenciales y no se comparten con terceros.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
              💰
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Precios Transparentes
            </h3>
            <p className="text-gray-600">
              Sin cargos ocultos - precios transparentes y entrega incluida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustCredentialsEs; 