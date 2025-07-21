import React from "react";
import HeroSection from "../../components/common/HeroSection";
import ServiceOverview from "../../components/legalPaternity/ServiceOverview";
import HowItWorksEs from "../../components/es/legalPaternity/HowItWorksEs";
import LegalUseCases from "../../components/legalPaternity/LegalUseCases";
import Testimonial from "../../components/legalPaternity/Testimonial";
import legalHero from "../../assets/images/legal_hero.png";
import ServingColoradoEs from "../../components/es/common/ServingColoradoEs";
import CallToActionEs from "../../components/es/common/CallToActionEs";
import PricingEs from "../../components/es/legalPaternity/PricingEs";
import { Helmet } from 'react-helmet-async';


const LegalPaternityTestsEs = () => {
  return (
    <main>
      <Helmet>
        <title>Prueba de Paternidad Legal en Denver, Aurora y Colorado | Mile High DNA</title>
        <meta 
          name="description" 
          content="Pruebas de paternidad legales y confidenciales con resultados válidos ante la corte e inmigración. Sirviendo Denver, Aurora, Lakewood y todo Colorado. Laboratorio acreditado por AABB." 
        />

        <meta property="og:title" content="Prueba de Paternidad Legal en Colorado | Resultados Válidos para Corte e Inmigración" />
        <meta property="og:description" content="Prueba de ADN legal para casos de custodia, manutención infantil, y peticiones migratorias. Acreditado por AABB. Resultados rápidos y admisibles." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:url" content="https://milehighdnatesting.com/es/prueba-de-paternidad-legal" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
      </Helmet>

      <HeroSection
        title="Prueba de Paternidad Legal Aceptada por la Corte en Denver y Colorado"
        subtitle={
          <>
          Confirma la relación biológica entre un presunto padre y un hijo con resultados precisos y confidenciales.<br /><br /> 
          Ofrecemos tanto pruebas legales, válidas en la corte con cadena de custodia, como pruebas informativas para uso personal.<br /><br /> 
          Obtenga claridad, respaldo legal y atención compasiva con resultados rápidos en los que puede confiar.<br /><br /> 
          Sirviendo con orgullo a Denver y las comunidades del Front Range.
          </>
        }
        imageUrl={legalHero}
        buttonText="Agenda tu prueba"
        buttonLink="https://calendly.com/milehighdnatesting/prueba-legal-paternidad-spanish"
        secondaryButtonText="Hablar con un Especialista"
        secondaryButtonLink="https://calendly.com/milehighdnatesting/consulta-gratuita"
      />

      <PricingEs />

      <ServiceOverview
        title="¿Qué Es una Prueba Legal de Paternidad por ADN?"
        paragraphs={[
          "La prueba de paternidad legal por ADN confirma la relación biológica entre un menor y un presunto padre, y se realiza bajo protocolos estrictos de cadena de custodia para que los resultados sean válidos ante la corte.",
          "Trabajamos con laboratorios acreditados por la AABB, lo que garantiza resultados precisos, confiables y legalmente admisibles. Desde la programación de la cita hasta la entrega final, nos enfocamos en ofrecer exactitud, confidencialidad y un trato compasivo.",
          "Ya sea que estés tramitando un caso de custodia, una orden de manutención o documentación para inmigración, nuestro equipo está aquí para guiarte en cada paso del proceso."
        ]}
      />

      <LegalUseCases
        title="¿Cuándo Se Requiere una Prueba Legal de Paternidad?"
        useCases={[
          {
            title: "Disputas por la Custodia de Menores",
            description:
              "Confirma la paternidad para respaldar acuerdos legales de custodia o solicitudes de modificación.",
          },
          {
            title: "Órdenes de Manutención Infantil",
            description:
              "Proporciona prueba legal de paternidad para respaldar obligaciones de manutención ordenadas por la corte.",
          },
          {
            title: "Actualización de Certificados de Nacimiento",
            description:
              "Establece la paternidad para agregar o corregir el nombre del padre en un certificado de nacimiento.",
          },
          {
            title: "Casos de Inmigración",
            description:
              "Verifica vínculos biológicos para solicitudes y peticiones migratorias.",
          },
        ]}
      />

      <HowItWorksEs
        title="Cómo Funciona la Prueba Legal de Paternidad"
        steps={[
          {
            title: "Reserva tu consulta gratuita o tu cita",
            description:
              "Reserva tu consulta gratuita o agenda directamente tu cita para la prueba de paternidad legal.",
          },
          {
            title: "Cita",
            description:
              "Visítanos en nuestra ubicación en Denver para una recolección de muestra rápida y profesional.",
          },
          {
            title: "Obtenga Sus Resultados",
            description:
              "Reciba sus resultados admisibles en la corte dentro de 2-5 días hábiles.",
          },
        ]}
      />

      <Testimonial
        quote="El proceso fue sencillo y profesional. Los resultados se entregaron rápidamente y el personal fue muy comprensivo durante todo el proceso."
        author="Sara Johnson"
        role="Madre"
      />

      <ServingColoradoEs />
      <CallToActionEs />
      
    </main>
  );
};

export default LegalPaternityTestsEs;