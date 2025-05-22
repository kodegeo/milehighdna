import React from 'react';
import HeroSection from '../../components/es/appointments/HeroSection';
import FreeConsultationSection from '../../components/es/appointments/FreeConsultationSection';
import ScheduleTestSection from '../../components/es/appointments/ScheduleTestSection';
import ServingColoradoEs from '../../components/es/common/ServingColoradoEs';
import CallToActionEs from '../../components/es/common/CallToActionEs';

const AppointmentsEs = () => {
  return (
    <main>
      <HeroSection />
      <FreeConsultationSection />
      <ScheduleTestSection />
      <ServingColoradoEs />
      <CallToActionEs />
    </main>
  );
};

export default AppointmentsEs; 