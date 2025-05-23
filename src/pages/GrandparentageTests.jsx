import GrandparentageHero from '../components/grandparentage/GrandparentageHero';
import GrandparentagePricing from '../components/grandparentage/GrandparentagePricing';
import GrandparentageOverview from '../components/grandparentage/GrandparentageOverview';
import GrandparentageWhoNeedsTest from '../components/grandparentage/GrandparentageWhoNeedsTest';
import GrandparentageSteps from '../components/grandparentage/GrandparentageSteps';
import GrandparentageLegalVsNonLegal from '../components/grandparentage/GrandparentageLegalVsNonLegal';
import GrandparentageWhyChooseUs from '../components/grandparentage/GrandparentageWhyChooseUs';
import GrandparentageTestimonial from '../components/grandparentage/GrandparentageTestimonial';
import GrandparentageContact from '../components/grandparentage/GrandparentageContact';
import GrandparentageCompliance from '../components/grandparentage/GrandparentageCompliance';
import grandparentageHero from '../assets/images/grandparentage-hero.png';
import ServingColorado from '../components/common/ServingColorado';
import CallToAction from '../components/grandparentage/CallToAction';
import { Helmet } from 'react-helmet-async';


const GrandparentagePage = () => {
  return (
    <main>
      <Helmet>
        <title>Grandparent DNA Testing in Denver, Aurora & Lakewood | Mile High DNA</title>
        <meta 
          name="description" 
          content="AABB-accredited grandparent DNA testing in Denver, Aurora, and Lakewood. Legal and non-legal options available. Trusted results for families and courts." 
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Grandparentage DNA Testing in Colorado | Legal & Non-Legal Tests" />
        <meta property="og:description" content="Mile High DNA Testing offers fast, accurate grandparent DNA tests. Court-admissible and personal use testing available. Serving Denver, Aurora, and Lakewood." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:url" content="https://milehighdnatesting.com/grandparentage-dna-tests" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
      </Helmet>

      <GrandparentageHero />
      <GrandparentagePricing />
      <GrandparentageOverview />
      <GrandparentageWhoNeedsTest />
      <GrandparentageSteps />
      <GrandparentageLegalVsNonLegal />
      <GrandparentageWhyChooseUs />
      <GrandparentageTestimonial />
      <ServingColorado />
      <CallToAction />
      <GrandparentageCompliance />
    </main>
  );
};

export default GrandparentagePage;
