import React from "react";
import HeroSection from "../../components/common/HeroSection";
import WhoWeAre from "../../components/about/WhoWeAre";
import ValuePillars from "../../components/about/ValuePillars";
import ServingColorado from "../../components/es/about/ServingColoradoEs";
import CallToAction from "../../components/es/about/CallToActionEs";
import aboutHero from "../../assets/images/about_hero.png";
import aboutMid from "../../assets/images/about_mid.png";

const AboutUsPage = () => {
  return (
    <main>
      <HeroSection
        title="Aliado Confiable"
        subtitle="Tu aliado confiable en Colorado para pruebas de ADN claras, rápidas y confidenciales, válidas para uso legal, personal o migratorio.
Ofrecemos atención profesional en inglés y español, con empatía, precisión y total discreción."
        imageUrl={aboutHero}
        buttonText="Agenda tu consulta gratuita"
        buttonLink="https://calendly.com/cynthia-milehighdnatesting/30min"
        secondaryButtonText="Contáctanos"
        secondaryButtonLink="https://calendly.com/milehighdnatesting-info/30min"
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