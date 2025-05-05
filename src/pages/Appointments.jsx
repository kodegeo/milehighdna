import React from 'react';
import HeroSection from '../components/appointments/HeroSection';
import FreeConsultationSection from '../components/appointments/FreeConsultationSection';
import ScheduleTestSection from '../components/appointments/ScheduleTestSection';

const Appointments = () => {
  return (
    <main>
      <HeroSection />
      <FreeConsultationSection />
      <ScheduleTestSection />
    </main>
  );
};

export default Appointments; 