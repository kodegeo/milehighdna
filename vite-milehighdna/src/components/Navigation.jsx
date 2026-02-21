import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';
import logo from '../assets/images/milehigh-dna-logo.png';

const SERVICES_MENU = [
  {
    label: 'Paternity Testing',
    children: [
      { label: 'Legal Paternity', to: '/services/legal-paternity-testing' },
      { label: 'Non-Legal Paternity', to: '/services/non-legal-paternity-testing' },
      { label: 'Postmortem Paternity', to: '/services/postmortem-paternity-testing' },
    ],
  },
  { label: 'Non-Invasive Prenatal', to: '/services/prenatal-paternity-testing' },
  { label: 'Immigration & Government', to: '/services/immigration-dna-testing' },
  {
    label: 'Relationship Testing',
    children: [
      { label: 'Siblingship DNA Test', to: '/services/siblingship-testing' },
      { label: 'Grandparent DNA Test', to: '/services/grandparentage-testing' },
      { label: 'Avuncular DNA Test', to: '/services/avuncular-dna-testing' },
      { label: 'Twin Zygosity DNA Test', to: '/services/twin-zygosity-testing' },
    ],
  },
  {
    label: 'Private & Specialty Testing',
    children: [
      { label: 'Infidelity DNA Testing', to: '/services/infidelity-dna-testing' },
      { label: 'Discreet & Private DNA Testing', to: '/services/discreet-dna-testing' },
      { label: 'Single DNA Profile', to: '/services/single-dna-profile' },
      { label: 'DNA Gender Reveal', to: '/services/gender-reveal-dna-testing' },
      { label: 'Y-STR / mtDNA Testing', to: '/services/y-str-dna-testing' },
      { label: 'GPS Origins DNA', to: '/services/gps-origins-dna-test' },
      { label: 'Healthy Weight DNA', to: '/services/healthy-weight-dna-test' },
    ],
  },
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

            {/* About */}
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition duration-300">
              About
            </Link>

            {/* AABB Accredited */}
            <Link to="/aabb-accreditation" className="text-gray-700 hover:text-blue-600 transition duration-300">
              AABB Accredited
            </Link>

          {/* Services Dropdown - Nested flyout */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('services')}
            onMouseLeave={closeDropdown}
          >
            <button
              type="button"
              className="text-gray-700 hover:text-blue-600 transition duration-300 flex items-center"
              onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
            >
              Services
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openDropdown === 'services' && (
              <div
                className="absolute top-full left-0 pt-2 z-50"
                style={{ minWidth: '240px' }}
              >
                <div
                  className="bg-white rounded-[10px] py-2 z-50"
                  style={{ boxShadow: '0 12px 30px rgba(0,0,0,0.12)' }}
                >
                  {SERVICES_MENU.map((item) =>
                    item.children ? (
                      <div key={item.label} className="group relative">
                        <span className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 whitespace-nowrap hover:bg-gray-50 hover:text-blue-600 cursor-default">
                          {item.label}
                          <svg className="w-4 h-4 text-gray-400 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                        <div
                          className="absolute left-full top-0 hidden group-hover:block py-2 z-50"
                          style={{
                            minWidth: '220px',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                            borderRadius: '8px',
                            background: 'white',
                          }}
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.to}
                              to={child.to}
                              className="block px-4 py-2.5 text-sm text-gray-700 whitespace-nowrap hover:bg-gray-50 hover:text-blue-600"
                              onClick={closeDropdown}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block px-4 py-2.5 text-sm text-gray-700 whitespace-nowrap hover:bg-gray-50 hover:text-blue-600"
                        onClick={closeDropdown}
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <Link
                      to="/services"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={closeDropdown}
                    >
                      View All DNA Testing Services
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>


            {/* Shop */}
            <Link to="/shop" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Shop At-Home Kits
            </Link>

            {/* Locations */}
            <Link to="/locations" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Locations
            </Link>

            {/* Mile High DNA Corner Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('corner')}
              onMouseLeave={closeDropdown}
            >
              <button
                type="button"
                className="text-gray-700 hover:text-blue-600 transition duration-300 flex items-center"
                onClick={() => setOpenDropdown(openDropdown === 'corner' ? null : 'corner')}
              >
                Mile High DNA Corner
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openDropdown === 'corner' && (
                <div className="absolute top-[100%] left-0 bg-white border border-gray-200 shadow-lg rounded-md pt-2 w-64 z-50">
                  <Link to="/mile-high-dna-corner" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdown}>
                  DNA Resource Center
                  </Link>

                  <div className="border-t border-gray-200 mt-2 pt-2">
                    <span className="block px-4 py-2 text-xs font-semibold text-gray-500 uppercase">
                      Pricing Guides
                    </span>

                    <Link to="/guides/legal-dna-test-cost" className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdown}>
                      Legal DNA Test Cost
                    </Link>

                    <Link to="/guides/non-legal-dna-test-cost" className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdown}>
                      Non-Legal DNA Test Cost
                    </Link>
                  </div>
                </div>
              )}
            </div>

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
            <Link to="/about" className="block py-2 text-gray-700" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/aabb-accreditation" className="block py-2 text-gray-700" onClick={() => setIsMenuOpen(false)}>AABB Accredited</Link>

            <details className="py-2">
              <summary className="cursor-pointer text-gray-700 font-semibold">Services</summary>
              <div className="ml-4 mt-2 space-y-3 text-sm">

                <div>
                  <p className="text-xs uppercase text-gray-500 mb-1">Paternity Testing</p>
                  <Link to="/services/legal-paternity-testing" className="block py-1" onClick={() => setIsMenuOpen(false)}>Legal Paternity</Link>
                  <Link to="/services/non-legal-paternity-testing" className="block py-1" onClick={() => setIsMenuOpen(false)}>Non-Legal Paternity</Link>
                  <Link to="/services/postmortem-paternity-testing" className="block py-1" onClick={() => setIsMenuOpen(false)}>Postmortem Paternity</Link>
                </div>

                <div>
                  <p className="text-xs uppercase text-gray-500 mb-1">Prenatal</p>
                  <Link to="/services/prenatal-paternity-testing" className="block py-1" onClick={() => setIsMenuOpen(false)}>Non-Invasive Prenatal</Link>
                </div>

                <div>
                  <p className="text-xs uppercase text-gray-500 mb-1">Immigration</p>
                  <Link to="/services/immigration-dna-testing" className="block py-1" onClick={() => setIsMenuOpen(false)}>Immigration DNA Testing</Link>
                </div>

                <div>
                  <p className="text-xs uppercase text-gray-500 mb-1">Relationship Testing</p>
                  <Link to="/services/siblingship-testing" className="block py-1" onClick={() => setIsMenuOpen(false)}>Siblingship</Link>
                  <Link to="/services/grandparentage-testing" className="block py-1" onClick={() => setIsMenuOpen(false)}>Grandparent</Link>
                  <Link to="/services/avuncular-dna-testing" className="block py-1" onClick={() => setIsMenuOpen(false)}>Avuncular</Link>
                  <Link to="/services/twin-zygosity-dna-testing" className="block py-1" onClick={() => setIsMenuOpen(false)}>Twin Zygosity</Link>
                </div>

                <div>
                  <p className="text-xs uppercase text-gray-500 mb-1">Specialty</p>
                  <Link to="/services/infidelity-dna-testing" className="block py-1" onClick={() => setIsMenuOpen(false)}>Infidelity</Link>
                  <Link to="/services/discreet-private-dna-testing" className="block py-1" onClick={() => setIsMenuOpen(false)}>Discreet & Private</Link>
                  <Link to="/services/single-dna-profile" className="block py-1" onClick={() => setIsMenuOpen(false)}>Single DNA Profile</Link>
                  <Link to="/services/dna-gender-reveal" className="block py-1" onClick={() => setIsMenuOpen(false)}>Gender Reveal</Link>
                  <Link to="/services/y-str-mtdna-testing" className="block py-1" onClick={() => setIsMenuOpen(false)}>Y-STR / mtDNA</Link>
                  <Link to="/services/gps-origins-dna" className="block py-1" onClick={() => setIsMenuOpen(false)}>GPS Origins</Link>
                  <Link to="/services/healthy-weight-dna" className="block py-1" onClick={() => setIsMenuOpen(false)}>Healthy Weight DNA</Link>
                </div>

                <div className="border-t pt-2">
                  <Link 
                    to="/services" 
                    className="block py-1 font-semibold text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    View All DNA Testing Services →
                  </Link>
                </div>

              </div>
            </details>

            <Link to="/shop" className="block py-2 text-gray-700" onClick={() => setIsMenuOpen(false)}>Shop At-Home Kits</Link>

            <Link to="/locations" className="block py-2 text-gray-700" onClick={() => setIsMenuOpen(false)}>Locations</Link>

            <details className="py-2">
              <summary className="cursor-pointer text-gray-700">Mile High DNA Corner</summary>
              <div className="ml-4 mt-2 space-y-1">
                <Link to="/mile-high-dna-corner" className="block py-1" onClick={() => setIsMenuOpen(false)}>DNA Resource Center</Link>
                <Link to="/guides/legal-dna-test-cost" className="block py-1" onClick={() => setIsMenuOpen(false)}>Legal Pricing Guide</Link>
                <Link to="/guides/non-legal-dna-test-cost" className="block py-1" onClick={() => setIsMenuOpen(false)}>Non-Legal Pricing Guide</Link>
              </div>
            </details>

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
