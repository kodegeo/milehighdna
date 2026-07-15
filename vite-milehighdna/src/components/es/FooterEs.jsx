import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const FOOTER_AABB_ES =
  'Mile High DNA Testing no está acreditada por la AABB. Las pruebas son procesadas por laboratorios asociados acreditados cuando corresponde.';

const FooterEs = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-12 border-t">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="text-lg font-semibold mb-4">Mile High DNA Testing</h4>
          <p className="text-gray-600">
            Proporcionando servicios de pruebas de ADN confiables y confidenciales a familias en todo Colorado.
          </p>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Enlaces Rápidos</h5>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-gray-700 hover:text-blue-600 transition duration-300">Sobre Nosotros</Link></li>
            <li><Link to="/services" className="text-gray-700 hover:text-blue-600 transition duration-300">Servicios</Link></li>
            <li><Link to="/es/tienda" className="text-gray-700 hover:text-blue-600 transition duration-300">Tienda</Link></li>
            <li><Link to="/faq" className="text-gray-700 hover:text-blue-600 transition duration-300">Preguntas Frecuentes</Link></li>
            <li><Link to="/contact" className="text-gray-700 hover:text-blue-600 transition duration-300">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Citas</h5>
          <ul className="space-y-2">
            <li><Link to="/appointments/free-consultation" className="text-gray-700 hover:text-blue-600 transition duration-300">Consulta Gratuita</Link></li>
            <li><Link to="/appointments/service" className="text-gray-700 hover:text-blue-600 transition duration-300">Cita de Servicio</Link></li>
            <li><Link to="/appointments" className="text-gray-700 hover:text-blue-600 transition duration-300">Reservar Ahora</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Contacto</h5>
          <p className="text-gray-600 mb-2">Denver, CO</p>
          <p className="text-gray-600 mb-2">Teléfono: (720) 900-9342</p>
          <p className="text-gray-600">Correo: support@milehighdna.com</p>
        </div>
      </div>

      <div className="mt-12 border-t pt-8 px-4 max-w-4xl mx-auto">
        <p className="text-xs text-gray-600 text-center leading-relaxed mb-6">{FOOTER_AABB_ES}</p>
      </div>

      <div className="border-t pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Mile High DNA Testing. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default FooterEs; 