import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

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
            <li><Link to="/faq" className="text-gray-700 hover:text-blue-600 transition duration-300">Preguntas Frecuentes</Link></li>
            <li><Link to="/contact" className="text-gray-700 hover:text-blue-600 transition duration-300">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Citas</h5>
          <ul className="space-y-2">
            <li><Link to="/appointments/free-consultation" className="text-gray-700 hover:text-blue-600 transition duration-300">Consulta Gratuita</Link></li>
            <li><Link to="/appointments/service" className="text-gray-700 hover:text-blue-600 transition duration-300">Cita de Servicio</Link></li>
            <li><Link to="/book-appointment" className="text-gray-700 hover:text-blue-600 transition duration-300">Reservar Ahora</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Contacto</h5>
          <p className="text-gray-600 mb-2">Denver, CO</p>
          <p className="text-gray-600 mb-2">Teléfono: (555) 123-4567</p>
          <p className="text-gray-600">Correo: support@milehighdna.com</p>
        </div>
      </div>

      <div className="mt-12 border-t pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Mile High DNA Testing. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default FooterEs; 