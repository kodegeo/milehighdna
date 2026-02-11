import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/milehigh-dna-logo.png";
import { FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { FaShoppingCart } from 'react-icons/fa';

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

    const routeMap = {
      "/": "/es",
      "/about": "/es/about",
      "/services": "/es/services",
      "/appointments": "/es/programar-cita",
    };

    const newPath = isSpanish
      ? currentPath.replace("/es", "") || "/"
      : routeMap[currentPath] || "/es";

    navigate(newPath);
  };

  return (
    <div className="bg-[#1A3C59] text-white text-sm shadow-md">
      {/* Desktop Navigation */}
      <div className="hidden sm:flex justify-between items-center px-8 py-2 max-w-7xl mx-auto">
        <div className="flex items-center gap-6">
          <a href="mailto:info@milehighdnatesting.com" className="flex items-center gap-2 hover:underline whitespace-nowrap">
            <img src={emailIcon} alt="Email" className="w-4 h-4" />
            info@milehighdnatesting.com
          </a>
          <a
            href="tel:+17209009342"
            onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "phone_click", phone_number: "720-900-9342" }); }}
            className="flex items-center gap-2 hover:underline whitespace-nowrap"
          >
          <img src={phoneIcon} alt="Phone" className="w-4 h-4" />
            (720) 900-9342
            </a>

          <p className="whitespace-nowrap">Se Habla Español</p>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <img src={addressIcon} alt="Address" className="w-4 h-4" />
            <span>975 N. Lincoln Street Suite 205 C, Denver, CO</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/profile.php?id=61576000982562" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="/cart" className="relative group">
              <FaShoppingCart className="w-6 h-6 hover:text-blue-500 transition" />
            </a>
          </div>

          {/* Language Switch */}
          <div className="flex items-center gap-2 ml-4 border-l border-gray-700 pl-4">
            <button
              onClick={handleLanguageToggle}
              className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm ${
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
              className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm ${
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

      {/* Mobile Top Navigation */}
      <div className="flex sm:hidden justify-between items-center px-4 py-2">
        <div className="flex gap-4">
          <a href="mailto:info@milehighdnatesting.com" aria-label="Email">
            <img src={emailIcon} alt="Email" className="w-5 h-5" />
          </a>
          <a
            href="tel:+17209009342"
            onClick={() => {
              window.dataLayer?.push({
                event: "phone_click",
                phone_location: "TopNavigation - Mobile"
              });
            }}
            aria-label="Phone"          >
            </a>

        </div>
        <div className="flex gap-2">
          <button onClick={handleLanguageToggle} aria-label="English">
            <img src={usaFlag} alt="English" className="w-5 h-5" />
          </button>
          <button onClick={handleLanguageToggle} aria-label="Español">
            <img src={mexicoFlag} alt="Español" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
