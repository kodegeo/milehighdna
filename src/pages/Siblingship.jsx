import SiblingshipHero from '../components/siblingship/SiblingshipHero';
import SiblingshipPricing from '../components/siblingship/SiblingshipPricing';
import SiblingshipOverview from '../components/siblingship/SiblingshipOverview';
import SiblingshipTypes from '../components/siblingship/SiblingshipTypes';
import SiblingshipWhenToUse from '../components/siblingship/SiblingshipWhenToUse';
import SiblingshipSteps from '../components/siblingship/SiblingshipSteps';
import SiblingshipLegalVsNonLegal from '../components/siblingship/SiblingshipLegalVsNonLegal';
import SiblingshipWhyChooseUs from '../components/siblingship/SiblingshipWhyChooseUs';
import SiblingshipTestimonials from '../components/siblingship/SiblingshipTestimonials';
import SiblingshipContact from '../components/siblingship/SiblingshipContact';
import SiblingshipLegalNote from '../components/siblingship/SiblingshipLegalNote';
import siblingshipHero from "../assets/images/siblingship-hero.png";
import ServingColorado from '../components/common/ServingColorado';
import CallToAction from '../components/siblingship/CallToAction';


const SiblingshipPage = () => {
  return (
    <main>
      <SiblingshipHero />
      <SiblingshipPricing />
      <SiblingshipOverview />
      <SiblingshipTypes />
      <SiblingshipWhenToUse />
      <SiblingshipSteps />
      <SiblingshipLegalVsNonLegal />
      <SiblingshipWhyChooseUs />
      <SiblingshipTestimonials />
      <ServingColorado />
      <CallToAction />
      <SiblingshipLegalNote />
    </main>
  );
};

export default SiblingshipPage;
