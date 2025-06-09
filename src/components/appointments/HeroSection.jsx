import React from 'react';
import bannerBg from '../../assets/images/banner_sch_1.png';

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
            Schedule Your DNA Test
          </h1>
          <p className="text-xl mb-8">
            Book your appointment online or speak with one of our DNA specialists.<br /> 
            We offer flexible scheduling and same-day appointments when available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/cynthia-milehighdnatesting/30-minute-dna-test-appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-primary text-white px-6 py-3 rounded-xl shadow hover:bg-brand-hover transition"
            >
              Schedule Test
            </a>
            <a
              href="https://calendly.com/milehighdnatesting-info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary font-semibold px-6 py-3 rounded-xl border border-brand-primary hover:bg-brand-hover/10 transition"
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
