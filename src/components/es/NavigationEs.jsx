import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/global.css';
import logo from '../../assets/images/milehigh-dna-logo.png';

const NavigationEs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/es" className="flex items-center h-16">
              {!logoError ? (
                <img
                  src={logo}
                  alt="Mile High DNA Testing"
                  className="h-10 md:h-12 w-auto"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="text-xl font-bold text-blue-600">Mile High DNA</span>
              )}
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/es/sobre-nosotros" className="text-gray-700 hover:text-blue-600 transition duration-300">Sobre Nosotros</Link>
            <Link to="/es/aabb-accreditation" className="text-gray-700 hover:text-blue-600 transition duration-300">Acreditación AABB</Link>
            
            {/* Services Dropdown */}
            <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("services")}
                onMouseLeave={() => setOpenDropdown(null)}
                >
                <button className="text-gray-700 hover:text-blue-600 transition duration-300">
                    Servicios
                </button>

                {openDropdown === "services" && (
                    <div className="absolute top-[100%] bg-white border border-gray-200 shadow-lg rounded-md pt-2 w-64 z-50 max-h-72 overflow-y-auto">
                    <Link
                        to="/es/prueba-de-paternidad-legal"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Prueba de Paternidad
                    </Link>
                    <Link
                        to="/es/prueba-de-inmigracion"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Prueba de ADN para Inmigración
                    </Link>
                    <Link
                        to="/es/services/prenatal"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Prueba Prenatal
                    </Link>
                    <Link
                        to="/es/prueba-de-hermanos"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Prueba de Hermanos
                    </Link>
                    <Link
                        to="/es/prueba-de-abuelidad"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Prueba de Abuelos
                    </Link>
                    </div>
                )}
                </div>
            <Link to="/es/programar-cita" className="text-gray-700 hover:text-blue-600 transition duration-300">Citas</Link>

            <Link to="/es/preguntas-frecuentes" className="text-gray-700 hover:text-blue-600 transition duration-300">Preguntas Frecuentes</Link>
            <Link to="/es/consultar-resultados" className="text-gray-700 hover:text-blue-600 transition duration-300">Obtener Resultados</Link>

            <Link 
              to="/es/reservar-cita" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Reservar Ahora
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden px-4 pb-4 max-h-[80vh] overflow-y-auto">
            <Link to="/es/sobre-nosotros" className="text-gray-700 hover:text-blue-600 transition duration-300 block py-2">Sobre Nosotros</Link>
            <Link to="/es/aabb-accreditation" className="text-gray-700 hover:text-blue-600 transition duration-300 block py-2">Acreditación AABB</Link>

            <details className="py-2">
              <summary className="text-gray-700 hover:text-blue-600 transition duration-300 cursor-pointer">Servicios</summary>
              <div className="ml-4 space-y-1 mt-1 max-h-[300px] overflow-y-auto">
                <Link to="/es/prueba-de-paternidad-legal" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Prueba de Paternidad</Link>
                <Link to="/es/prueba-de-inmigracion" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Prueba de ADN para Inmigración</Link>
                <Link to="/es/prueba-de-hermanos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Prueba de Hermanos</Link>
                <Link to="/es/prueba-de-abuelidad" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Prueba de Abuelos</Link>
              </div>
            </details>

            <details className="py-2">
              <summary className="text-gray-700 hover:text-blue-600 transition duration-300 cursor-pointer">Citas</summary>
              <div className="ml-4 space-y-1 mt-1">
                <Link to="/es/reservar-cita" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Consulta Gratuita</Link>
                <Link to="/es/reservar-cita" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cita de Servicio</Link>
              </div>
            </details>

            <Link to="/es/preguntas-frecuentes" className="text-gray-700 hover:text-blue-600 transition duration-300 block py-2">Preguntas Frecuentes</Link>
            <Link to="/es/consultar-resultados" className="text-gray-700 hover:text-blue-600 transition duration-300 block py-2">Obtener Resultados</Link>

            <Link 
              to="/es/reservar-cita" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 mt-4 block text-center"
            >
              Reservar Ahora
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationEs; 