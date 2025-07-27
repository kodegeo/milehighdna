import React from "react";
import HeroSection from "../../components/common/HeroSection";
import WhoWeAre from "../../components/about/WhoWeAre";
import ValuePillars from "../../components/about/ValuePillars";
import ServingColorado from "../../components/es/common/ServingColoradoEs";
import CallToAction from "../../components/es/common/CallToActionEs";
import aboutHero from "../../assets/images/about_hero.png";
import aboutMid from "../../assets/images/about_mid.png";
import { Helmet } from 'react-helmet-async';


const AboutUsPage = () => {
  return (
    <main>
      <Helmet>
        <title>Sobre Nosotros | Pruebas de ADN en Español en Colorado</title>
        <meta 
          name="description" 
          content="Conoce a Mile High DNA Testing. Servicios confiables de pruebas de ADN en Denver, Aurora y Lakewood. Atención en español. Laboratorio acreditado por la AABB. Resultados válidos para inmigración y corte." 
        />

        <meta property="og:title" content="Quiénes Somos | Pruebas de ADN en Español en Denver" />
        <meta property="og:description" content="Mile High DNA Testing ofrece servicios de pruebas de ADN legales, personales y migratorias con atención profesional en español. Acreditado por AABB." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:url" content="https://milehighdnatesting.com/es/sobre-nosotros" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
      </Helmet>

      <HeroSection
        title="Aliado Confiable"
        subtitle="Tu aliado confiable en Colorado para pruebas de ADN claras, rápidas y confidenciales, válidas para uso legal, personal o migratorio.
Ofrecemos atención profesional en inglés y español, con empatía, precisión y total discreción."
        imageUrl={aboutHero}
        buttonText="Agenda tu consulta gratuita"
        buttonLink="https://calendly.com/milehighdnatesting/consulta-gratuita"
        secondaryButtonText="Llama Hoy"
        secondaryButtonLink="tel:7209009342"
      />

      <WhoWeAre
        title="Quiénes Somos"
        content={
          <>
            En Mile High DNA Testing nos dedicamos a ofrecer pruebas de ADN confiables en Colorado para ayudarte a tomar decisiones importantes con información clara y precisa.
            <br /> <br />
            Trabajamos con un laboratorio acreditado por la AABB y brindamos atención profesional en inglés y en español.
            <br /><br />
            Nos enorgullece servir a comunidades diversas, incluyendo a familias que requieren pruebas para propósitos legales, personales o migratorios en Colorado.
            <br /><br />
            ✅ Atención bilingüe
            <br />
            ✅ Seguro y Rapidez
            <br />
            ✅ Compromiso con la privacidad
          </>
        }
        imageUrl={aboutMid}
      />


      <ValuePillars
        title="¿Qué nos hace diferentes?"
        pillars={[
          { icon: "🧪", title: "Precisión Certificada", description: "Nos asociamos con laboratorios acreditados por la AABB para garantizar resultados precisos y legalmente admisibles, aceptados por el USCIS y válidos para pruebas ordenadas por la corte." },
          { icon: "⚡", title: "Resultados Rápidos", description: "Obtenga sus resultados en 1–3 días hábiles, con actualizaciones en cada paso del proceso." },
          { icon: "🤝", title: "Servicios con Compasión", description: "Sabemos que realizar una prueba de ADN puede ser un momento delicado. Por eso ofrecemos un trato respetuoso, empático y sin juicios, acompañándote con claridad y apoyo en cada paso del proceso." },
        ]}
      />

      <ServingColorado />
      <CallToAction />
    </main>
  );
};

export default AboutUsPage; 