import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';
import logo from '../assets/images/milehigh-dna-logo.png';

const GUIDE_ITEMS = [
  { label: 'Paternity Test Guide', to: '/guides/paternity-test-guide' },
  { label: 'Legal DNA Test Cost', to: '/guides/legal-dna-test-cost' },
  { label: 'Non-Legal DNA Test Cost', to: '/guides/non-legal-dna-test-cost' },
  { label: 'Prenatal DNA Test Cost', to: '/guides/prenatal-dna-test-cost' },
];

const ABOUT_ITEMS = [
  { label: 'About Us', to: '/about' },
  { label: 'AABB Accreditation', to: '/aabb-accreditation' },
];

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

  const closeDropdown = () => setOpenDropdown(null);

  const handleDropdownKeyDown = (e, name) => {
    if (e.key === 'Escape') {
      closeDropdown();
      e.currentTarget.focus();
    }
  };

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
            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('about')}
              onMouseLeave={closeDropdown}
            >
              <button
                type="button"
                className="text-gray-700 hover:text-blue-600 transition duration-300 flex items-center"
                aria-expanded={openDropdown === 'about'}
                aria-haspopup="true"
                aria-controls="nav-about-menu"
                id="nav-about-trigger"
                onClick={() => setOpenDropdown(openDropdown === 'about' ? null : 'about')}
                onKeyDown={(e) => handleDropdownKeyDown(e, 'about')}
              >
                About
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'about' && (
                <div
                  id="nav-about-menu"
                  role="menu"
                  aria-labelledby="nav-about-trigger"
                  className="absolute top-[100%] left-0 bg-white border border-gray-200 shadow-lg rounded-md pt-2 w-52 z-50"
                >
                  {ABOUT_ITEMS.map(({ label, to }) => (
                    <Link
                      key={to}
                      to={to}
                      role="menuitem"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={closeDropdown}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Guides Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('guides')}
              onMouseLeave={closeDropdown}
            >
              <button
                type="button"
                className="text-gray-700 hover:text-blue-600 transition duration-300 flex items-center"
                aria-expanded={openDropdown === 'guides'}
                aria-haspopup="true"
                aria-controls="nav-guides-menu"
                id="nav-guides-trigger"
                onClick={() => setOpenDropdown(openDropdown === 'guides' ? null : 'guides')}
                onKeyDown={(e) => handleDropdownKeyDown(e, 'guides')}
              >
                Guides
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'guides' && (
                <div
                  id="nav-guides-menu"
                  role="menu"
                  aria-labelledby="nav-guides-trigger"
                  className="absolute top-[100%] left-0 bg-white border border-gray-200 shadow-lg rounded-md pt-2 w-64 z-50"
                >
                  <Link to="/guides" role="menuitem" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdown}>
                    All DNA Testing Guides
                  </Link>

                  {GUIDE_ITEMS.map(({ label, to }) => (
                    <Link
                      key={to}
                      to={to}
                      role="menuitem"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={closeDropdown}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('services')}
              onMouseLeave={closeDropdown}
            >
              <button
                type="button"
                className="text-gray-700 hover:text-blue-600 transition duration-300 flex items-center"
                aria-expanded={openDropdown === 'services'}
                aria-haspopup="true"
                aria-controls="nav-services-menu"
                id="nav-services-trigger"
                onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
                onKeyDown={(e) => handleDropdownKeyDown(e, 'services')}
              >
                Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'services' && (
                <div
                  id="nav-services-menu"
                  role="menu"
                  aria-labelledby="nav-services-trigger"
                  className="absolute top-[100%] bg-white border border-gray-200 shadow-lg rounded-md pt-2 w-64 z-50 max-h-72 overflow-y-auto"
                >
                  <Link to="/services" role="menuitem" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdown}>
                    All DNA Testing Services
                  </Link>
                  <Link to="/services/legal-paternity-testing" role="menuitem" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdown}>
                    Legal Paternity DNA Testing
                  </Link>
                  <Link to="/services/non-legal-paternity-testing" role="menuitem" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdown}>
                    Non Legal Paternity Testing
                  </Link>
                  <Link to="/services/prenatal-paternity-testing" role="menuitem" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdown}>
                    Prenatal DNA Testing
                  </Link>
                  <Link to="/services/grandparentage-testing" role="menuitem" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdown}>
                    Grandparentage Testing
                  </Link>
                  <Link to="/services/siblingship-testing" role="menuitem" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdown}>
                    Siblingship Testing
                  </Link>
                  <Link to="/shop/at-home-paternity-test" role="menuitem" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdown}>
                    At Home DNA Test Kits
                  </Link>
                </div>
              )}
            </div>

            <Link to="/mile-high-dna-corner" className="text-gray-700 hover:text-blue-600 transition duration-300">Mile High DNA Corner</Link>

            <Link to="/locations" className="text-gray-700 hover:text-blue-600 transition duration-300">Locations</Link>
            <Link to="/faq" className="text-gray-700 hover:text-blue-600 transition duration-300">FAQ</Link>
            <Link to="/get-results" className="text-gray-700 hover:text-blue-600 transition duration-300">Get Results</Link>

            <Link 
              to="/appointments" 
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
            <details className="py-2" aria-label="About menu">
              <summary className="text-gray-700 hover:text-blue-600 transition duration-300 cursor-pointer list-none flex items-center justify-between">
                <span>About</span>
                <svg className="w-4 h-4 flex-shrink-0 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="ml-4 space-y-1 mt-1">
                {ABOUT_ITEMS.map(({ label, to }) => (
                  <Link key={to} to={to} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                    {label}
                  </Link>
                ))}
              </div>
            </details>

            <details className="py-2" aria-label="Guides menu">
              <summary className="text-gray-700 hover:text-blue-600 transition duration-300 cursor-pointer list-none flex items-center justify-between">
                <span>Guides</span>
                <svg className="w-4 h-4 flex-shrink-0 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="ml-4 space-y-1 mt-1">
                {GUIDE_ITEMS.map(({ label, to }) => (
                  <Link key={to} to={to} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                    {label}
                  </Link>
                ))}
              </div>
            </details>

            <details className="py-2" aria-label="Services menu">
              <summary className="text-gray-700 hover:text-blue-600 transition duration-300 cursor-pointer list-none flex items-center justify-between">
                <span>Services</span>
                <svg className="w-4 h-4 flex-shrink-0 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="ml-4 space-y-1 mt-1 max-h-[300px] overflow-y-auto">
                <Link to="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>All DNA Testing Services</Link>
                <Link to="/services/legal-paternity-testing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Legal Paternity DNA Testing</Link>
                <Link to="/services/non-legal-paternity-testing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Non Legal Paternity DNA Testing</Link>
                <Link to="/services/prenatal-paternity-testing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Prenatal DNA Testing</Link>
                <Link to="/services/grandparentage-testing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Grandparentage Testing</Link>
                <Link to="/services/siblingship-testing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>Siblingship Testing</Link>
                <Link to="/shop/at-home-paternity-test" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>At Home DNA Test Kits</Link>
              </div>
            </details>

            <Link to="/mile-high-dna-corner" className="text-gray-700 hover:text-blue-600 transition duration-300 block py-2" onClick={() => setIsMenuOpen(false)}>Mile High DNA Corner</Link>
            <Link to="/locations" className="text-gray-700 hover:text-blue-600 transition duration-300 block py-2" onClick={() => setIsMenuOpen(false)}>Locations</Link>
            <Link to="/faq" className="text-gray-700 hover:text-blue-600 transition duration-300 block py-2" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
            <Link to="/get-results" className="text-gray-700 hover:text-blue-600 transition duration-300 block py-2" onClick={() => setIsMenuOpen(false)}>Get Results</Link>

            <Link 
              to="/appointments" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 mt-4 block text-center"
              onClick={() => setIsMenuOpen(false)}
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
