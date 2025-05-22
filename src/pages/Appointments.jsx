import React from 'react';
import HeroSection from '../components/appointments/HeroSection';
import FreeConsultationSection from '../components/appointments/FreeConsultationSection';
import ScheduleTestSection from '../components/appointments/ScheduleTestSection';
import ServingColorado from '../components/common/ServingColorado';
import CallToAction from '../components/common/CallToAction';

const Appointments = () => {
  return (
    <main>
      <HeroSection />
      <FreeConsultationSection />
      <ScheduleTestSection />
      <ServingColorado />
      <CallToAction />
    </main>
  );
};

export default Appointments; 