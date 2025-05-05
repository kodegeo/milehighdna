import React, { useState } from 'react';
import { FaFacebookF } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { FaShoppingCart } from 'react-icons/fa6';


import { Link } from 'react-router-dom';

import emailIcon from '../../assets/images/email.png';
import phoneIcon from '../../assets/images/phone.png';
import addressIcon from '../../assets/images/address.png';
import usaFlag from '../../assets/images/usa.png';
import mexicoFlag from '../../assets/images/mexico.png';

const TopNavigationEs = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    // Later: use i18n.changeLanguage(lang) or redirect to /es
  };

  return (
    <div className="bg-[#1A3C59] text-white text-sm py-2 px-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left: Contact Info */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 text-center sm:text-left">
          <a href="mailto:info@milehightesting.com" className="flex items-center gap-2 hover:underline">
            <img src={emailIcon} alt="Correo electrónico" className="w-4 h-4" />
            info@milehightesting.com
          </a>
          <a href="tel:7202074467" className="flex items-center gap-2 hover:underline">
            <img src={phoneIcon} alt="Teléfono" className="w-4 h-4" />
            (720) 900-9349
          </a>
          <p className="ml-4">We Speak English Here</p>
        </div>

        {/* Right: Address, Social, Cart, Language */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img src={addressIcon} alt="Dirección" className="w-4 h-4" />
            <span>975 Lincoln St., Suite C, Denver, CO</span>
          </div>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="/cart" className="relative group">
            <FaShoppingCart className="w-6 h-6 hover:text-blue-500 transition" />
          </a>

          {/* Language Switch */}
          <div className="flex items-center gap-2 ml-4 border-l border-gray-700 pl-4">
            <button
              onClick={() => handleLanguageChange('en')}
              className={`flex items-center gap-1 px-2 py-1 rounded-full border border-transparent text-sm ${
                language === 'en'
                  ? 'text-blue-400 underline'
                  : 'hover:text-blue-300 hover:underline'
              }`}
            >
              <img src={usaFlag} alt="Inglés" className="w-4 h-4" />
              <Link to="/">Inglés</Link>
            </button>
            <button
              onClick={() => handleLanguageChange('es')}
              className={`flex items-center gap-1 px-2 py-1 rounded-full border border-transparent text-sm ${
                language === 'es'
                  ? 'text-blue-400 underline'
                  : 'hover:text-blue-300 hover:underline'
              }`}
            >
              <img src={mexicoFlag} alt="Español" className="w-4 h-4" />
              <Link to="/es">Español</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavigationEs; 