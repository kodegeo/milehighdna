import React, { useState } from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { FaShoppingCart, FaWhatsapp } from 'react-icons/fa'; // from FA5

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
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Contact Info */}
        <div className="flex items-center gap-6">
          <a href="mailto:info@milehightesting.com" className="flex items-center gap-2 hover:underline whitespace-nowrap">
            <img src={emailIcon} alt="Correo electrónico" className="w-4 h-4" />
            info@milehightesting.com
          </a>
          <a href="tel:7202074467" className="flex items-center gap-2 hover:underline whitespace-nowrap">
            <img src={phoneIcon} alt="Teléfono" className="w-4 h-4" />
            (720) 900-9349
          </a>
        </div>

        {/* Right: Address, Social, Cart, Language */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <img src={addressIcon} alt="Dirección" className="w-4 h-4" />
            <span>975 N. Lincoln Street Suite 205 C, Denver, CO</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/profile.php?id=61576000982562" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/milehighdnatesting/?igsh=OHJ2MHd3bjJwZzFy#" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://wa.me/17209009342" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-pink-400 whitespace-nowrap">
              <FaWhatsapp className="w-5 h-5" />
               
            </a>
            <a href="/cart" className="relative group">
              <FaShoppingCart className="w-6 h-6 hover:text-blue-500 transition" />
            </a>
          </div>

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