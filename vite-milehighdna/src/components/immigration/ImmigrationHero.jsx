const Hero = () => {
    return (
      <section className="bg-gradient-to-r from-white to-blue-50 py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Immigration DNA Testing You Can Trust
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              We provide fast, accurate, and USCIS-compliant DNA testing for immigration cases. Whether you're sponsoring a family member or responding to an embassy request, we make the process simple.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/schedule"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
              >
                Schedule Your Test
              </a>
              <a
                href="tel:7209009342"
                className="text-blue-600 font-semibold px-6 py-3 rounded-xl border border-blue-600 hover:bg-blue-50 transition"
              >
                Call Now
              </a>
            </div>
          </div>
  
          {/* Placeholder Image */}
          <div className="lg:w-1/2">
            <img
              src="/images/immigration-hero.png" // Replace with actual image
              alt="Immigration DNA Testing"
              className="w-full rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  