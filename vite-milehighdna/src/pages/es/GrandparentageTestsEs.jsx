import GrandparentageHero from '../../components/es/grandparentage/GrandparentageHeroEs';
import GrandparentagePricing from '../../components/es/grandparentage/GrandparentagePricingEs';
import GrandparentageOverview from '../../components/es/grandparentage/GrandparentageOverviewEs';
import GrandparentageWhoNeedsTest from '../../components/es/grandparentage/GrandparentageWhoNeedsTestEs';
import GrandparentageSteps from '../../components/es/grandparentage/GrandparentageStepsEs';
import GrandparentageLegalVsNonLegal from '../../components/es/grandparentage/GrandparentageLegalVsNonLegalEs';
import GrandparentageWhyChooseUs from '../../components/es/grandparentage/GrandparentageWhyChooseUsEs';
import GrandparentageTestimonial from '../../components/es/grandparentage/GrandparentageTestimonialEs';
import GrandparentageContact from '../../components/es/grandparentage/GrandparentageContactEs';
import GrandparentageCompliance from '../../components/es/grandparentage/GrandparentageComplianceEs';
import ServingColoradoEs from '../../components/es/common/ServingColoradoEs';
import CallToActionEs from '../../components/es/common/CallToActionEs';
import { Helmet } from 'react-helmet-async';


import grandparentageHero from '../../assets/images/grandparentage-hero.png';

const GrandparentageTestsEs = () => {
  return (
    <main>
      <Helmet>
        <title>Prueba de ADN de Abuelos en Denver, Aurora y Colorado | Mile High DNA</title>
        <meta 
          name="description" 
          content="Prueba de abuelidad con resultados legales y confidenciales. Sirviendo Denver, Aurora, Lakewood y otras comunidades de Colorado. Resultados válidos para inmigración y corte." 
        />

        <meta property="og:title" content="Prueba de Parentesco por ADN con Abuelos en Colorado" />
        <meta property="og:description" content="Confirme relaciones familiares con pruebas de ADN de abuelidad. Resultados válidos para inmigración, corte y uso personal. Laboratorio acreditado por AABB." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:url" content="https://milehighdnatesting.com/es/prueba-de-abuelidad" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
      </Helmet>

      <GrandparentageHero
      title="Prueba de ADN de Abuelos en Denver, Aurora y Colorado | Mile High DNA"
      subtitle="Prueba legal y confidencial para establecer relaciones familiares entre abuelos y nietos. Resultados aceptados por tribunales e inmigración. Laboratorio acreditado por la AABB."
      />
      <GrandparentagePricing />
      <GrandparentageOverview />
      <GrandparentageWhoNeedsTest />
      <GrandparentageSteps />
      <GrandparentageLegalVsNonLegal />
      <GrandparentageWhyChooseUs />
      <GrandparentageTestimonial />
      <ServingColoradoEs />
      <CallToActionEs />
      <GrandparentageCompliance />
    </main>
  );
};

export default GrandparentageTestsEs; 