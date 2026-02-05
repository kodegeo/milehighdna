import React from "react";
import HeroSection from "../../components/common/HeroSection";
import ServiceOverview from "../../components/peaceOfMind/ServiceOverview";
import HowItWorksEs from "../../components/es/peaceOfMind/HowItWorksEs";
import WhatIsIncludedEs from "../../components/es/peaceOfMind/WhatIsIncludedEs";
import FAQSectionEs from "../../components/es/peaceOfMind/FAQSectionEs";
import CallToActionEs from "../../components/es/peaceOfMind/CallToActionEs";
import peaceOfMindHero from "../../assets/images/father_baby.jpg";
import PricingEs from "../../components/es/peaceOfMind/PricingEs";
import ServingColoradoEs from "../../components/es/common/ServingColoradoEs";
import TrustCredentialsEs from "../../components/es/peaceOfMind/TrustCredentialsEs";
import { Helmet } from 'react-helmet-async';

const PeaceOfMindPaternityTestsEs = () => {
  return (
    <main>
      <Helmet>
        <title>Kit de Prueba de Paternidad para Tranquilidad | Pruebas de ADN Personales | Mile High DNA</title>
        <meta 
          name="description" 
          content="Obtén resultados confidenciales y precisos de paternidad solo para conocimiento personal. Kit de recolección en casa rápido y discreto con 99%+ de precisión. No para uso legal." 
        />

        <link rel="canonical" href="https://milehighdnatesting.com/es/prueba-paternidad-tranquilidad" />
        <link rel="alternate" hreflang="en" href="https://milehighdnatesting.com/services/non-legal-paternity-testing" />
        <link rel="alternate" hreflang="es" href="https://milehighdnatesting.com/es/prueba-paternidad-tranquilidad" />
        <link rel="alternate" hreflang="x-default" href="https://milehighdnatesting.com" />

        <meta property="og:title" content="Kit de Prueba de Paternidad para Tranquilidad | Pruebas de ADN Personales" />
        <meta property="og:description" content="Pruebas de paternidad confidenciales para conocimiento personal. 99%+ de precisión, empaque discreto, recolección simple en casa. Resultados en 2-3 días hábiles." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:url" content="https://milehighdnatesting.com/es/prueba-paternidad-tranquilidad" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
      </Helmet>

      <HeroSection
        title="Kit de Prueba de Paternidad para Tranquilidad"
        subtitle="Respuestas Claras. Resultados Confidenciales. Resultados rápidos y confidenciales solo para conocimiento personal. 99%+ de precisión con recolección simple en casa."
        imageUrl={peaceOfMindHero}
        buttonText="Ordena tu Kit Hoy"
        buttonLink="#order-now"
        secondaryButtonText="Aprende Más"
        secondaryButtonLink="#how-it-works"
      />

      <PricingEs />

      <ServiceOverview
        title="¿Por Qué Elegir Nuestra Prueba de Paternidad para Tranquilidad?"
        paragraphs={[
          "Nuestro Kit de Prueba de Paternidad para Tranquilidad proporciona resultados confidenciales y precisos solo para conocimiento personal. Esta prueba está diseñada para personas que buscan claridad sobre relaciones biológicas sin los requisitos legales de las pruebas admisibles en la corte.",
          "Con 99%+ de precisión usando la misma tecnología que los laboratorios admisibles en la corte, puedes confiar en los resultados. El kit incluye todo lo necesario para una recolección simple en casa con hisopos bucales - no se requieren extracciones de sangre ni citas médicas.",
          "Tu privacidad es nuestra prioridad. Todo el empaque es discreto y sin marca, y tus datos personales están protegidos durante todo el proceso. Los resultados se entregan de forma segura por correo electrónico o nuestro portal seguro."
        ]}
      />

      <HowItWorksEs
        title="Cómo Funciona (Paso a Paso)"
        steps={[
          {
            title: "Ordena tu Kit",
            description: "Envío rápido en empaque sin marcas para discreción completa.",
          },
          {
            title: "Recolecta Muestras en Casa",
            description: "Hisopos bucales fáciles incluidos con instrucciones simples e ilustradas.",
          },
          {
            title: "Envía de Vuelta al Laboratorio",
            description: "Sobre de retorno prepagado disponible para envío conveniente.",
          },
          {
            title: "Recibe Resultados de Forma Segura",
            description: "Acceso por portal seguro o correo electrónico en 2-3 días hábiles.",
          },
        ]}
      />

      <WhatIsIncludedEs
        title="Qué Incluye tu Kit"
        items={[
          "Hisopos estériles para el presunto padre y el niño",
          "Instrucciones simples e ilustradas",
          "Sobres de envío",
          "Envío de retorno prepagado opcional"
        ]}
      />

      <FAQSectionEs />

      <TrustCredentialsEs />

      <ServingColoradoEs />

      <CallToActionEs
        heading="¿Listo para saber con confianza?"
        subtext="Ordena tu Kit de Prueba de Paternidad para Tranquilidad hoy y obtén las respuestas que necesitas."
        buttonText="Ordena tu Prueba de Tranquilidad Hoy"
        buttonLink="#order-now"
      />
    </main>
  );
};

export default PeaceOfMindPaternityTestsEs; 