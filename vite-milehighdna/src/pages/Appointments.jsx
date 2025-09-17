import React from 'react';
import HeroSection from '../components/appointments/HeroSection';
import FreeConsultationSection from '../components/appointments/FreeConsultationSection';
import ScheduleTestSection from '../components/appointments/ScheduleTestSection';
import ServingColorado from '../components/common/ServingColorado';
import CallToAction from '../components/common/CallToAction';
import { Helmet } from 'react-helmet-async';


const Appointments = () => {
  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title> Schedule Paternity DNA Test in Denver | Mile High DNA Testing</title>
        <meta 
          name="description" 
          content="Schedule a legal paternity or prenatal DNA test in Denver, Aurora, or Lakewood. Same-day appointments, AABB-accredited labs, and results valid for court cases." 
        />
        <link rel="canonical" href="https://milehighdnatesting.com/appointments" />
        <link rel="alternate" hreflang="es" href="https://milehighdnatesting.com/es/citas" />
        <link rel="alternate" hreflang="en" href="https://milehighdnatesting.com/appointments" />
      </Helmet>

      <HeroSection
      title="Book a DNA Test or Contact Our Team | Mile High DNA | Denver, Aurora, Lakewood"
      subtitle="Schedule an appointment online or speak with a DNA specialist. We offer paternity, immigration, siblingship, and grandparentage testing — with flexible and same-day availability."
      />
      <FreeConsultationSection />
      <ScheduleTestSection />
      <ServingColorado />
      <CallToAction />
    </main>
  );
};

export default Appointments; 