import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaShoppingCart } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/milehigh-dna-logo.png";

import emailIcon from '../assets/images/email.png';
import phoneIcon from '../assets/images/phone.png';
import addressIcon from '../assets/images/address.png';
import usaFlag from '../assets/images/usa.png';
import mexicoFlag from '../assets/images/mexico.png';

const TopNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguage] = useState('en');

  const handleLanguageToggle = () => {
    const currentPath = location.pathname;
    const isSpanish = currentPath.startsWith("/es");

    // Map English routes to their Spanish equivalents
    const routeMap = {
      "/": "/es",
      "/about": "/es/about",
      "/services": "/es/services",
      "/book-appointment": "/es/book-appointment",
      "/get-results": "/es/get-results",
    };

    const newPath = isSpanish
      ? currentPath.replace("/es", "") || "/"
      : routeMap[currentPath] || "/es";

    navigate(newPath);
  };

  return (
    <div className="bg-[#1A3C59] text-white text-sm py-2 px-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left: Contact Info */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 text-center sm:text-left">
          <a href="mailto:info@milehightesting.com" className="flex items-center gap-2 hover:underline">
            <img src={emailIcon} alt="Email" className="w-4 h-4" />
            info@milehightesting.com
          </a>
          <a href="tel:7209009349" className="flex items-center gap-2 hover:underline">
            <img src={phoneIcon} alt="Phone" className="w-4 h-4" />
            (720) 900-9349
          </a>
          <p className="ml-4">Se Habla Español</p>
        </div>

        {/* Right: Address, Social, Cart, Language */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img src={addressIcon} alt="Address" className="w-4 h-4" />
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
              onClick={handleLanguageToggle}
              className={`flex items-center gap-1 px-2 py-1 rounded-full border border-transparent text-sm ${
                !location.pathname.startsWith('/es')
                  ? 'text-blue-400 underline'
                  : 'hover:text-blue-300 hover:underline'
              }`}
            >
              <img src={usaFlag} alt="English" className="w-4 h-4" />
              English
            </button>
            <button
              onClick={handleLanguageToggle}
              className={`flex items-center gap-1 px-2 py-1 rounded-full border border-transparent text-sm ${
                location.pathname.startsWith('/es')
                  ? 'text-blue-400 underline'
                  : 'hover:text-blue-300 hover:underline'
              }`}
            >
              <img src={mexicoFlag} alt="Español" className="w-4 h-4" />
              Español
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
