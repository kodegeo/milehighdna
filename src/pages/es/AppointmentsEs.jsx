import React from 'react';
import HeroSection from '../../components/es/appointments/HeroSection';
import FreeConsultationSection from '../../components/es/appointments/FreeConsultationSection';
import ScheduleTestSection from '../../components/es/appointments/ScheduleTestSection';
import ServingColoradoEs from '../../components/es/common/ServingColoradoEs';
import CallToActionEs from '../../components/es/common/CallToActionEs';
import { Helmet } from 'react-helmet-async';


const AppointmentsEs = () => {
  return (
    <main>
      <Helmet>
        <title>Agenda Tu Prueba de ADN en Español | Mile High DNA Denver</title>
        <meta 
          name="description" 
          content="Reserva en línea tu cita para pruebas de ADN legales, de inmigración o familiares. Servicios disponibles en español en Denver, Aurora y Lakewood." 
        />

        <meta property="og:title" content="Reserva Tu Cita para Pruebas de ADN en Colorado" />
        <meta property="og:description" content="Agenda tu prueba de paternidad, inmigración, o parentesco. Resultados válidos y atención en español. Sirviendo Denver, Aurora y comunidades cercanas." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:url" content="https://milehighdnatesting.com/es/appointments" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
      </Helmet>

      <HeroSection />
      <FreeConsultationSection />
      <ScheduleTestSection />
      <ServingColoradoEs />
      <CallToActionEs />
    </main>
  );
};

export default AppointmentsEs; 