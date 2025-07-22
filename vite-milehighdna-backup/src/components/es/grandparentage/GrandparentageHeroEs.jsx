import grandparentageHero from '../../../assets/images/grandparentage-hero.png';

const GrandparentageHeroEs = () => {
    return (
      <section className="bg-gradient-to-r from-white to-blue-50 py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Pruebas de ADN de Abuelos en las que Puede Confiar
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Pruebas de ADN rápidas, precisas y legales para casos de inmigración en EE.UU. Coordinamos con
              embajadas y proporcionamos entrega directa a las autoridades de inmigración.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://calendly.com/milehighdnatesting/consulta-gratuita" className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
                Programar su Prueba
              </a>
              <a href="https://calendly.com/milehighdnatesting/consulta-gratuita" className="text-blue-600 font-semibold px-6 py-3 rounded-xl border border-blue-600 hover:bg-blue-50 transition">
                Hablar con un Especialista
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src={grandparentageHero} alt="Prueba de ADN de Abuelos" className="w-full rounded-xl shadow-md" />
          </div>
        </div>
      </section>
    );
};

export default GrandparentageHeroEs; 