import SiblingshipHero from '../../components/es/siblingship/SiblingshipHeroEs';
import SiblingshipPricing from '../../components/es/siblingship/SiblingshipPricingEs';
import SiblingshipOverview from '../../components/es/siblingship/SiblingshipOverviewEs';
import SiblingshipTypes from '../../components/es/siblingship/SiblingshipTypesEs';
import SiblingshipWhenToUse from '../../components/es/siblingship/SiblingshipWhenToUseEs';
import SiblingshipSteps from '../../components/es/siblingship/SiblingshipStepsEs';
import SiblingshipLegalVsNonLegal from '../../components/es/siblingship/SiblingshipLegalVsNonLegalEs';
import SiblingshipWhyChooseUs from '../../components/es/siblingship/SiblingshipWhyChooseUsEs';
import SiblingshipTestimonials from '../../components/es/siblingship/SiblingshipTestimonialsEs';
import SiblingshipContact from '../../components/es/siblingship/SiblingshipContactEs';
import SiblingshipLegalNote from '../../components/es/siblingship/SiblingshipLegalNoteEs';
import siblingshipHero from "../../assets/images/siblingship-hero.png";
import ServingColoradoEs from "../../components/es/common/ServingColoradoEs";
import CallToActionEs from "../../components/es/common/CallToActionEs";
import { Helmet } from 'react-helmet-async';


const SiblingshipPageEs = () => {
  return (
    <main>
      <Helmet>
        <title>Prueba de ADN entre Hermanos en Denver, Aurora y Colorado | Mile High DNA</title>
        <meta 
          name="description" 
          content="Confirmación de relación biológica entre hermanos o medios hermanos con pruebas de ADN legales y confidenciales. Resultados válidos en corte. Servicios en Denver, Aurora, Lakewood y Colorado." 
        />

        <link rel="canonical" href="https://milehighdnatesting.com/es/prueba-de-hermanos" />
        <link rel="alternate" hreflang="en-us" href="https://milehighdnatesting.com/services/siblingship-testing" />
        <link rel="alternate" hreflang="es-us" href="https://milehighdnatesting.com/es/prueba-de-hermanos" />
        <link rel="alternate" hreflang="x-default" href="https://milehighdnatesting.com/" />

        <meta property="og:title" content="Prueba de Hermandad por ADN en Colorado | Legal y Personal" />
        <meta property="og:description" content="Realizamos pruebas de ADN entre hermanos con opciones legales y privadas. Resultados válidos para la corte e inmigración. Atendemos en español en Colorado." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:url" content="https://milehighdnatesting.com/es/prueba-de-hermanos" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
      </Helmet>

      <SiblingshipHero
      title="Prueba de ADN entre Hermanos en Denver, Aurora y Colorado | Mile High DNA"
      subtitle="Confirme relaciones biológicas entre hermanos o medios hermanos con pruebas de ADN legales o personales. Resultados confidenciales y válidos en la corte. Laboratorio acreditado por AABB."
      />
      <SiblingshipPricing />
      <SiblingshipOverview />
      <SiblingshipTypes />
      <SiblingshipWhenToUse />
      <SiblingshipSteps />
      <SiblingshipLegalVsNonLegal />
      <SiblingshipWhyChooseUs />
      <SiblingshipTestimonials />
      <ServingColoradoEs />
      <CallToActionEs />
      <SiblingshipLegalNote />
    </main>
  );
};

export default SiblingshipPageEs; 