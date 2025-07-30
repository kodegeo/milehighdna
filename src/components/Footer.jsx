// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';


const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-12 border-t">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="text-lg font-semibold mb-4">Mile High DNA Testing</h4>
          <p className="text-gray-600">
            Providing trusted, confidential DNA testing services to families across Colorado.
          </p>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Quick Links</h5>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-gray-700 hover:text-blue-600 transition duration-300">About Us</Link></li>
            <li><Link to="/services" className="text-gray-700 hover:text-blue-600 transition duration-300">Services</Link></li>
            <li><Link to="/faq" className="text-gray-700 hover:text-blue-600 transition duration-300">FAQ</Link></li>
            <li><Link to="/contact" className="text-gray-700 hover:text-blue-600 transition duration-300">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Appointments</h5>
          <ul className="space-y-2">
            <li><Link to="/appointments/free-consultation" className="text-gray-700 hover:text-blue-600 transition duration-300">Free Consultation</Link></li>
            <li><Link to="/appointments/service" className="text-gray-700 hover:text-blue-600 transition duration-300">Service Appointment</Link></li>
            <li><Link to="/book-appointment" className="text-gray-700 hover:text-blue-600 transition duration-300">Book Now</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Contact</h5>
          <p className="text-gray-600 mb-2">Denver, CO</p>
          <p className="text-gray-600 mb-2">Phone: (720) 900-9342</p>
          <p className="text-gray-600">Email: info@milehighdnatesting.com</p>
        </div>
      </div>

      <div className="mt-12 border-t pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Mile High DNA Testing. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;