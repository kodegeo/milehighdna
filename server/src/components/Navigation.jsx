import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';
import logo from '../assets/images/milehigh-dna-logo.png';

const Navigation = () => {
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
            <Link to="/" className="flex items-center h-16">
              {!logoError ? (
                <img
                  src={logo}
                  alt="Mile High DNA Testing"
                  className="h-14 md:h-16 w-auto"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="text-xl font-bold text-blue-600">Mile High DNA</span>
              )}
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition duration-300">About Us</Link>
            <Link to="/aabb-accreditation" className="text-gray-700 hover:text-blue-600 transition duration-300">AABB Accreditation</Link>
            

            {/* Services Dropdown */}
            <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("services")}
                onMouseLeave={() => setOpenDropdown(null)}
                >
                <button className="text-gray-700 hover:text-blue-600 transition duration-300">
                    Services
                </button>

                {openDropdown === "services" && (
                    <div className="absolute top-[100%] bg-white border border-gray-200 shadow-lg rounded-md pt-2 w-64 z-50 max-h-72 overflow-y-auto">
                    <Link
                        to="/legal-paternity-tests"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Paternity Testing
                    </Link>
                    <Link
                        to="/immigration-dna-tests"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Immigration DNA Testing
                    </Link>
                    <Link
                        to="/siblingship-dna-tests"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Sibling DNA Testing
                    </Link>
                    <Link
                        to="/grandparentage-dna-tests"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Grandparentage Testing
                    </Link>
                    </div>
                )}
                </div>
            <Link to="/appointments" className="text-gray-700 hover:text-blue-600 transition duration-300">Appointments</Link>

            <Link to="/faq" className="text-gray-700 hover:text-blue-600 transition duration-300">FAQ</Link>
            <Link to="/get-results" className="text-gray-700 hover:text-blue-600 transition duration-300">Get Results</Link>

            <Link 
              to="/book-appointment" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Book Now
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

        {/* Mobile Menu - moved inside max-w container */}
        {isMenuOpen && (
          <div className="md:hidden px-4 pb-4 max-h-[80vh] overflow-y-auto">
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition duration-300 block py-2">About Us</Link>
            <Link to="/aabb-accreditation" className="text-gray-700 hover:text-blue-600 transition duration-300 block py-2">AABB Accreditation</Link>

            <details className="py-2">
              <summary className="text-gray-700 hover:text-blue-600 transition duration-300 cursor-pointer">Services</summary>
              <div className="ml-4 space-y-1 mt-1 max-h-[300px] overflow-y-auto">
                <Link to="/legal-paternity-tests" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Paternity Testing</Link>
                <Link to="/services/immigration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Immigration DNA Testing</Link>
                <Link to="/services/prenatal" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Prenatal Testing</Link>
                <Link to="/services/sibling" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sibling Testing</Link>
                <Link to="/services/grandparentage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Grandparentage Testing</Link>
              </div>
            </details>

            <details className="py-2">
              <summary className="text-gray-700 hover:text-blue-600 transition duration-300 cursor-pointer">Appointments</summary>
              <div className="ml-4 space-y-1 mt-1">
                <Link to="/appointments/free-consultation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Free Consultation</Link>
                <Link to="/appointments/service" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Service Appointment</Link>
              </div>
            </details>

            <Link to="/faq" className="text-gray-700 hover:text-blue-600 transition duration-300 block py-2">FAQ</Link>
            <Link to="/get-results" className="text-gray-700 hover:text-blue-600 transition duration-300 block py-2">Get Results</Link>

            <Link 
              to="/book-appointment" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 mt-4 block text-center"
            >
              Book Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
