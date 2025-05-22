// src/pages/es/HomeEs.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import bannerBg from '../../assets/images/banner_bg_Res.jpg';
import servicePat from '../../assets/images/service_pat.png';
import servicePre from '../../assets/images/grandparantage_1.png';
import serviceImma from '../../assets/images/service_imma.png';

const HomeEs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bannerBg})`,
            filter: 'brightness(0.9)'
          }}
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Servicios Profesionales de Pruebas de ADN en Colorado</h1>
            <p className="text-xl mb-8">
            Pruebas de ADN claras, seguras y confidenciales. Resultados rápidos y válidos para uso legal o personal. Encuentra las respuestas que necesitas con nuestro laboratorio acreditado por la AABB. Servicios disponibles en español.
            </p>
            <Link
              to="/es/book-appointment"
              className="btn-primary"
            >
              Agenda tu prueba hoy
            </Link>
          </div>
        </div>
      </div>

      {/* Vista previa de servicios */}
      <div className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <img 
                src={servicePat} 
                alt="Prueba de Paternidad"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Prueba de Paternidad</h3>
                <p className="text-gray-600 mb-4">Pruebas de paternidad confiables, confidenciales y respaldadas por una precisión del 99.9%.</p>
                <Link
                  to="/es/prueba-de-paternidad-legal"
                  className="text-[#2C6FA6] hover:text-[#7DB9E8] font-semibold transition duration-300"
                >
                  Más información →
                </Link>
              </div>
            </div>

            <div className="card">
              <img 
                src={servicePre} 
                alt="Prueba de Abuelazgo"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Prueba de Abuelidad</h3>
                <p className="text-gray-600 mb-4">Pruebas de ADN legales y privadas para confirmar vínculos biológicos con abuelos, con resultados precisos y confiables.</p>
                <Link
                  to="/es/prueba-de-abuelidad"
                  className="text-[#2C6FA6] hover:text-[#7DB9E8] font-semibold transition duration-300"
                >
                  Más información →
                </Link>
              </div>
            </div>

            <div className="card">
              <img 
                src={serviceImma} 
                alt="Prueba de Hermanos"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Prueba de Hermandad</h3>
                <p className="text-gray-600 mb-4">Confirma vínculos biológicos entre hermanos con resultados precisos y confiables.</p>
                <Link
                  to="/es/prueba-de-hermanos"
                  className="text-[#2C6FA6] hover:text-[#7DB9E8] font-semibold transition duration-300"
                >
                  Más información →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Testimonials */}
      <div className="section-padding section-bg-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Lo Que Dicen Nuestros Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Sara Jiménez',
                role: 'Madre',
                image: 'https://picsum.photos/200/200?random=5',
                text: 'El proceso fue sencillo y profesional. Los resultados se entregaron rápidamente y el personal fue muy comprensivo durante todo el proceso.'
              },
              {
                name: 'Miguel Bravo',
                role: 'Padre',
                image: 'https://picsum.photos/200/200?random=6',
                text: 'Estaba nervioso por el proceso, pero el equipo lo hizo fácil y cómodo. Los resultados fueron claros y presentados profesionalmente.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeEs;
