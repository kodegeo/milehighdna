import React from "react";

const CallToActionEs = () => {
  return (
    <section className="bg-[#2C6FA6] text-white w-full">
      <div className="max-w-3xl mx-auto py-16 px-6 md:px-12 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
        Agenda tu consulta gratuita hoy mismo
        </h2>
        <p className="text-lg mb-8">
        Habla con un especialista para conocer más sobre nuestros servicios de pruebas de ADN, tiempos de entrega y opciones legales. Nuestras consultas de 30 minutos son gratuitas y confidenciales.        </p>
        <iframe
            src="https://calendly.com/milehighdnatesting/consulta-gratuita"
            width="100%"
            height="500"
            frameBorder="0"
            title="Agenda tu consulta gratuita"
            style={{ minHeight: '500px', borderRadius: '12px', border: '1px solid #e5e7eb' }}
            allowFullScreen
          ></iframe>
      </div>
    </section>
  );
};

export default CallToActionEs;