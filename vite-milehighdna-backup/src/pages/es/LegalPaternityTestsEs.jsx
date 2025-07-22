import React from "react";
import HeroSection from "../../components/common/HeroSection";
import ServiceOverview from "../../components/legalPaternity/ServiceOverview";
import HowItWorks from "../../components/legalPaternity/HowItWorks";
import LegalUseCases from "../../components/legalPaternity/LegalUseCases";
import Testimonial from "../../components/legalPaternity/Testimonial";
import CallToAction from "../../components/legalPaternity/CallToAction";
import legalHero from "../../assets/images/legal_hero.png";

const LegalPaternityTestsEs = () => {
  return (
    <main>
      <HeroSection
        title="Prueba Legal de Paternidad por ADN"
        subtitle="Resultados precisos y admisibles en la corte en los que puede confiar. Obtenga claridad y apoyo legal con resultados rápidos y atención compasiva — sirviendo a Denver y Front Range."
        imageUrl={legalHero}
        buttonText="Programar Su Prueba"
        buttonLink="https://calendly.com/milehighdnatesting/prueba-legal-paternidad-spanish"
        secondaryButtonText="Hablar con un Especialista"
        secondaryButtonLink="https://calendly.com/milehighdnatesting/consulta-gratuita"
      />

      <ServiceOverview
        title="¿Qué Es una Prueba Legal de Paternidad por ADN?"
        paragraphs={[
          "La prueba legal de paternidad por ADN establece la relación biológica entre un niño y un presunto padre, y se realiza bajo estrictos protocolos de cadena de custodia para ser válida ante la corte.",
          "Nuestras pruebas se procesan a través de laboratorios acreditados por AABB para garantizar resultados confiables y legalmente admisibles. Desde la programación hasta la entrega final, priorizamos la precisión, la confidencialidad y la compasión.",
          "Ya sea que esté navegando por un caso de custodia, una orden de manutención infantil o documentos de inmigración, estamos aquí para guiarlo en cada paso del camino."
        ]}
      />

      <LegalUseCases
        title="¿Cuándo Se Requiere una Prueba Legal de Paternidad?"
        useCases={[
          {
            title: "Disputas de Custodia",
            description:
              "Confirme la paternidad para respaldar acuerdos o modificaciones de custodia legal.",
          },
          {
            title: "Órdenes Judiciales de Manutención",
            description:
              "Proporcione prueba legal de paternidad para obligaciones de manutención infantil ordenadas por la corte.",
          },
          {
            title: "Actualizaciones de Actas de Nacimiento",
            description:
              "Establezca la paternidad para agregar o corregir el nombre del padre en el acta de nacimiento.",
          },
          {
            title: "Casos de Inmigración",
            description:
              "Verifique las relaciones biológicas para solicitudes y peticiones de inmigración.",
          },
        ]}
      />

      <HowItWorks
        title="Cómo Funciona la Prueba Legal de Paternidad"
        steps={[
          {
            title: "Reserve una Consulta Gratuita",
            description:
              "Reserve una consulta gratuita o programe su cita para la prueba legal de paternidad.",
          },
          {
            title: "Programe una Cita",
            description:
              "Venga a nuestra ubicación en Denver para una recolección de muestras rápida y profesional.",
          },
          {
            title: "Obtenga Sus Resultados",
            description:
              "Reciba sus resultados admisibles en la corte dentro de 1-3 días hábiles.",
          },
        ]}
      />

      <Testimonial
        quote="El proceso fue sencillo y profesional. Los resultados se entregaron rápidamente y el personal fue muy comprensivo durante todo el proceso."
        author="Sara Johnson"
        role="Madre"
      />

      <CallToAction
        heading="¿Listo para Comenzar?"
        subtext="Programe su consulta gratuita o reserve su prueba legal de paternidad hoy."
        buttonText="Reserve Ahora"
        buttonLink="https://calendly.com/milehighdnatesting/consulta-gratuita"
      />
    </main>
  );
};

export default LegalPaternityTestsEs;