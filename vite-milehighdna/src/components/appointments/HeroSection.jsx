import React from 'react';
import bannerBg from '../../assets/images/banner_sch_1.png';

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
        <div className="max-w-3xl text-brand-primary">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Schedule Your DNA Test
          </h1>
          <p className="text-xl mb-8 text-white">
            Book your appointment online or speak with one of our DNA specialists.<br /> 
            We offer flexible scheduling and same-day appointments when available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+17209009342"
                onClick={() => {
                  window.dataLayer?.push({
                    event: "phone_click",
                    phone_location: "AppointmentsHeroSection - Hero CTA"
                  });
                }}
                className="btn-secondary bg-white text-blue-700 font-bold py-3 px-6 rounded shadow hover:bg-gray-100">
                  Call Today
                  </a>

           </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
