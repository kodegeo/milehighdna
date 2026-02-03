const Pricing = () => {
    return (
      <section className="bg-[#F5F7FA] py-12 md:py-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1A3C59] mb-8">
            Pricing for Immigration DNA Testing
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed">
            All immigration DNA testing fees are case-specific and not posted online. Immigration DNA tests must be initiated through the referral form and cannot be purchased directly through the website. Our team will guide you through the process so your case is handled accurately and in full compliance with USCIS and U.S. Department of State requirements.
          </p>
  
          <div className="bg-white rounded-xl shadow-lg border-t-4 border-blue-600 p-8 max-w-xl mx-auto">
            <h3 className="text-xl font-semibold text-[#1A3C59] mb-4">What’s Included</h3>
            <ul className="text-left text-base text-gray-700 space-y-3 mb-6 leading-relaxed">
              <li>✔ AABB-accredited laboratory testing (UFC, approved for USCIS cases)</li>
              <li>✔ U.S. sample collection at our Denver office or approved partner facilities</li>
              <li>✔ International coordination with U.S. Embassies and Consulates</li>
              <li>✔ Case-specific pricing and forms provided after referral submission</li>
              <li>✔ Direct submission of official results to USCIS or requesting agency</li>
            </ul>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://calendly.com/milehighdnatesting/immigration"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
              >
                Book Now
              </a>
            </div>
          </div>
  
          <p className="text-base text-gray-600 mt-6 leading-relaxed">
            Pricing varies by case, country, and number of participants. Immigration DNA testing is initiated through the referral form — schedule a call or complete the form to begin.
          </p>
        </div>
      </section>
    );
  };
  
  export default Pricing;
  