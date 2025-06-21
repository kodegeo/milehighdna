import React from 'react';
import bannerBg from '../../../assets/images/banner_sch_1.png';


const HeroSection = () => {
  return (
    <section className="relative h-[500px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bannerBg})`,
          filter: 'brightness(0.9)'
        }}
      />
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-brand-primary">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Programe su Prueba de ADN
          </h1>
          <p className="text-xl mb-8">
            Reserve su cita en línea o hable con uno de nuestros especialistas en ADN.<br />
            Ofrecemos horarios flexibles y citas el mismo día cuando están disponibles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-primary text-white px-6 py-3 rounded-xl shadow hover:bg-brand-hover transition"
            >
              Programar Prueba
            </a>
            <a
              href="https://calendly.com/milehighdnatesting-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary font-semibold px-6 py-3 rounded-xl border border-brand-primary hover:bg-brand-hover/10 transition"
            >
              Hablar con un Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
