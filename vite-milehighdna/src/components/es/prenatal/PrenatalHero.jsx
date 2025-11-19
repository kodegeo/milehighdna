import React from 'react';
import prenatalHero from '../../../assets/images/service_pre.png';

const PrenatalHero = () => {
return (
    <section className="bg-gradient-to-r from-white to-blue-50 py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Prueba de ADN de Paternidad Prenatal
          </h1>
          <p className="text-lg text-gray-600 mb-6">
          Confirme la paternidad antes del nacimiento con nuestra prueba de ADN prenatal no invasiva. Segura para la madre y el bebé, nuestro laboratorio acreditado por la AABB ofrece resultados rápidos, confidenciales y admisibles en los tribunales para familias en Denver, Aurora, Lakewood y en todo Colorado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://calendly.com/milehighdnatesting/noninvasive-prenatal-paternity" className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
            Programar Su Prueba
            </a>
            <a 
              href="tel:7209009342" 
              onClick={() => {
                window.dataLayer?.push({
                  event: "phone_click",
                  phone_location: "PrenatalHeroEs - Hero CTA"
                });
              }}
              className="text-blue-600 font-semibold px-6 py-3 rounded-xl border border-blue-600 hover:bg-blue-50 transition">
            Llama Hoy
            </a>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img src={prenatalHero} alt="Prenatal DNA Testing" className="w-full rounded-xl shadow-md" />
        </div>
      </div>
    </section>
  );
};

export default PrenatalHero; 