import grandparentageHero from '../../assets/images/grandparentage-hero.png';

const GrandparentageHero = () => {
    return (
      <section className="bg-gradient-to-r from-white to-blue-50 py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Grandparent DNA Testing You Can Trust
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Fast, accurate, and legal DNA testing for personal peace of mind, legal matters, or court-admissible cases. While grandparent testing may also support immigration cases, additional steps and pricing apply for embassy coordination and document delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://calendly.com/milehighdnatesting/grandparentage-dna-test" className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
                Schedule Your Test
              </a>
              <a 
                href="tel:7209009342" 
                onClick={() => {
                  window.dataLayer?.push({
                    event: "phone_click",
                    phone_location: "GrandparentageHero - Hero CTA"
                  });
                }}
                className="text-blue-600 font-semibold px-6 py-3 rounded-xl border border-blue-600 hover:bg-blue-50 transition">
                Call Now
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src={grandparentageHero} alt="Grandparent DNA Testing" className="w-full rounded-xl shadow-md" />
          </div>
        </div>
      </section>
    );
};

export default GrandparentageHero;
  