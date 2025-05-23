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
        <title>Book a DNA Test or Contact Us | Mile High DNA | Denver, Aurora, Lakewood</title>
        <meta 
          name="description" 
          content="Schedule your DNA test or contact Mile High DNA for a free consultation. We offer legal, immigration, and family relationship testing in Denver, Aurora, and Lakewood." 
        />

        <meta property="og:title" content="Schedule a DNA Test or Get in Touch | Mile High DNA" />
        <meta property="og:description" content="Book your appointment for paternity, immigration, siblingship, or grandparentage DNA testing. Contact our team for help with documentation or scheduling." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:url" content="https://milehighdnatesting.com/appointments" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
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