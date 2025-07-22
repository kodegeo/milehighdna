import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ServingColoradoEs = () => {
  return (
    <section className="bg-white w-full">
      <div className="max-w-4xl mx-auto text-center py-16 px-6 md:px-12">
        <h2 className="text-2xl md:text-4xl font-bold text-[#1A3C59] mb-6">
        Con orgullo atendemos a Denver y la región del Front Range
        </h2>
        <p className="text-lg text-gray-700 mb-4">
        Mile High DNA Testing ofrece servicios de pruebas de ADN confiables y confidenciales en toda el área metropolitana de Denver, incluyendo Lakewood, Aurora, Westminster y las comunidades cercanas del Front Range.
        </p>
        <p className="text-gray-700 mb-2 font-medium">Visítanos en:</p>
        <address className="text-[#2C6FA6] text-lg font-semibold not-italic mb-6">
          975 N Lincoln Street, Suite 205C<br />
          Denver, CO 80203
        </address>

        <p className="text-gray-700 mb-2 font-medium">Contáctanos:</p>
        <div className="text-[#2C6FA6] text-lg font-semibold space-y-2">
          <p>
            Teléfono:{" "}
            <a href="tel:+17209009342" className="hover:underline">
              (720) 900-9342
            </a>
          </p>
          <p>
            <a
              href="https://wa.me/17209009342"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:underline"
            >
              <FaWhatsapp className="text-green-500 w-5 h-5" />
              WhatsApp{" "}
            </a>
          </p>
          <p>
          Correo electrónico:{" "}
            <a href="mailto:info@milehighdna.com" className="hover:underline">
              info@milehighdnatesting.com
            </a>
          </p>
          <p>Horas de operación: Lunes–Viernes: 9am–6pm | Sábado & Domingo: 9am–5pm | Con cita previa</p>
        </div>
      </div>
    </section>
  );
};

export default ServingColoradoEs;
