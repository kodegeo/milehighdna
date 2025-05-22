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

const GrandparentagePage = () => {
  return (
    <main>
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
