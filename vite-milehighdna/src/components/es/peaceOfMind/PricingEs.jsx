import React from "react";

const PricingEs = () => {
  return (
    <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Precios del Kit de Prueba de Paternidad para Tranquilidad
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Precios claros sin cargos ocultos. Incluye todo lo que necesitas para resultados confidenciales y precisos.
        </p>

        <div className="bg-white rounded-xl shadow-lg border-t-4 border-blue-600 p-8 max-w-xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">$99–$129</h3>
          <p className="text-gray-600 mb-6">*(El precio puede variar por promoción o volumen.)</p>
          <ul className="text-left text-gray-700 space-y-4 mb-6">
            <li>✔ Garantía de Precisión 99%+</li>
            <li>✔ Kit de Recolección Simple en Casa</li>
            <li>✔ Empaque Discreto, Sin Marca</li>
            <li>✔ Resultados en 2–3 Días Hábil</li>
            <li>✔ Resultados Seguros y Confidenciales</li>
            <li>✔ Envío de Retorno Prepagado Disponible</li>
          </ul>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#order-now"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
            >
              Ordena tu Kit Hoy
            </a>
            <a
              href="tel:7209009342"
              onClick={() => {
                window.dataLayer?.push({
                  event: "phone_click",
                  phone_location: "PeaceOfMindPricingEs - Pricing Component"
                });
              }}
              className="text-blue-600 font-semibold px-6 py-3 rounded-xl border border-blue-600 hover:bg-blue-50 transition"
            >
              Llama Ahora
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingEs; 