import React from 'react';
import bannerBg from '../../assets/images/schedule_bg.png';

const HeroSection = () => {
  return (
    <section className="relative h-[500px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bannerBg})`,
          filter: 'brightness(0.7)'
        }}
      />
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Schedule Your DNA Test
          </h1>
          <p className="text-xl mb-8">
            Book your appointment online or speak with one of our DNA specialists. 
            We offer flexible scheduling and same-day appointments when available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/cynthia-milehighdnatesting"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
            >
              Schedule Test
            </a>
            <a
              href="https://calendly.com/milehighdnatesting-info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold px-6 py-3 rounded-xl border border-white hover:bg-white/10 transition"
            >
              Talk to a Specialist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
