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
import { Helmet } from 'react-helmet';

const Siblingship = () => {
  return (
    <main>
      <Helmet>
        <title>Sibling DNA Test | Relationship DNA Testing in Denver, Aurora & Lakewood</title>
        <meta 
          name="description" 
          content="Confirm sibling relationships with AABB-accredited DNA testing. Legal and non-legal sibling DNA tests available in Denver, Aurora, and Lakewood. Fast, confidential results." 
        />

        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content="Sibling Relationship DNA Testing in Colorado" />
        <meta property="og:description" content="Get accurate sibling and relationship DNA tests in Colorado. Legal and non-legal testing for full, half, or no biological relation. AABB-accredited labs." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:url" content="https://milehighdnatesting.com/siblingship-dna-tests" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
      </Helmet>

      <SiblingshipHero 
        title="Sibling DNA Test | Relationship DNA Testing in Denver, Aurora & Lakewood"
        subtitle="AABB-accredited sibling DNA testing in Denver, Aurora, and Lakewood. Legal and non-legal options to confirm biological relationships for family, court, or immigration needs."
      />
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

export default Siblingship;
