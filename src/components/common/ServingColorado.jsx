import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ServingColorado = () => {
  return (
    <section className="bg-white w-full">
      <div className="max-w-4xl mx-auto text-center py-16 px-6 md:px-12">
        <h2 className="text-2xl md:text-4xl font-bold text-[#1A3C59] mb-6">
          Proudly Serving Denver and the Front Range
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Mile High DNA Testing proudly serves families and legal professionals in Denver, Aurora, Lakewood, Westminster, Thornton, and surrounding Colorado communities.
        </p>
        <p className="text-gray-700 mb-2 font-medium">Visit us at:</p>
        <address className="text-[#2C6FA6] text-lg font-semibold not-italic mb-6">
          975 N Lincoln Street, Suite 205C<br />
          Denver, CO 80203
        </address>

        <p className="text-gray-700 mb-2 font-medium">Contact us:</p>
        <div className="text-[#2C6FA6] text-lg font-semibold space-y-2">
          <p>
            Phone:{" "}
            <a href="tel:+17209009342" className="hover:underline">
              (720) 900-9342
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:info@milehighdna.com" className="hover:underline">
              info@milehighdnatesting.com
            </a>
          </p>
          <p>Hours: Mon–Fri: 9am–5pm | Sat & Sun: By Appointment</p>
        </div>
      </div>
    </section>
  );
};

export default ServingColorado;
