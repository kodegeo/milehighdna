import React from "react";
import HeroSection from "../../components/common/HeroSection";
import WhoWeAre from "../../components/about/WhoWeAre";
import ValuePillars from "../../components/about/ValuePillars";
import ServingColorado from "../../components/about/ServingColorado";
import CallToAction from "../../components/about/CallToAction";
import aboutHero from "../../assets/images/about_hero.png";
import aboutMid from "../../assets/images/about_mid.png";

const AboutUsPage = () => {
  return (
    <main>
      <HeroSection
        title="Acerca de Mile High DNA Testing"
        subtitle="Un socio de confianza para familias en todo Colorado — brindando servicios de pruebas de ADN precisos, compasivos y legalmente admisibles."
        imageUrl={aboutHero}
        buttonText="Programar una Consulta"
        buttonLink="https://calendly.com/milehighdnatesting/prueba-legal-paternidad-spanish"
        secondaryButtonText="Contáctenos"
        secondaryButtonLink="https://calendly.com/milehighdnatesting/consulta-gratuita"
      />

      <WhoWeAre
        title="Quiénes Somos"
        content="Mile High DNA Testing fue fundada para brindar a las familias de Colorado acceso a pruebas de ADN precisas, compasivas y confidenciales. Ya sea que esté navegando por asuntos legales, requisitos de inmigración o buscando claridad a través de pruebas prenatales, estamos aquí para apoyarle con confianza y cuidado. Con laboratorios certificados y tiempos de respuesta rápidos, nuestro objetivo es hacer que el proceso sea simple, seguro y libre de estrés."
        imageUrl={aboutMid}
      />

      <ValuePillars
        title="Qué Nos Hace Diferentes"
        pillars={[
          { icon: "🧪", title: "Precisión Certificada", description: "Nos asociamos con laboratorios acreditados por AABB para garantizar resultados legalmente admisibles y altamente confiables." },
          { icon: "⚡", title: "Resultados Rápidos", description: "Obtenga sus resultados en 1–3 días hábiles, con actualizaciones en cada paso del proceso." },
          { icon: "🤝", title: "Servicio Compasivo", description: "Nuestro equipo comprende la naturaleza personal de las pruebas. Estamos aquí para apoyarle durante todo el proceso." },
        ]}
      />

      <ServingColorado />

      <CallToAction />
    </main>
  );
};

export default AboutUsPage; 