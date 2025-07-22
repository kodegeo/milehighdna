import React from "react";

const CallToActionEs = () => {
  return (
    <section className="bg-[#2C6FA6] text-white py-16 px-6 md:px-12 text-center">
      <div className="max-w-3xl mx-auto py-16 px-6 md:px-12 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
        Agenda tu consulta gratuita hoy mismo
        </h2>
        <p className="text-lg mb-8">
        Habla con un especialista para conocer más sobre nuestros servicios de pruebas de ADN, tiempos de entrega y opciones legales.
        Nuestras consultas de 30 minutos son gratuitas y confidenciales.
        </p>
        <a
          href="https://calendly.com/milehighdnatesting/consulta-gratuita"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#2C6FA6] font-semibold px-6 py-3 rounded-md hover:bg-[#7DB9E8] hover:text-white transition"
        >
          Agenda tu consulta gratuita
        </a>
      </div>
    </section>
  );
};

export default CallToActionEs;