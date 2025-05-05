import React from "react";

const ServingColorado = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-[#1A3C59] mb-6">
          Proudly Serving Denver and the Front Range
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Mile High DNA Testing provides trusted and confidential DNA testing
          services throughout the Denver metro area, including Lakewood, Aurora,
          Westminster, and surrounding Front Range communities.
        </p>
        <p className="text-gray-700 mb-8">
          We are centrally located at:
        </p>
        <div className="text-[#2C6FA6] text-lg font-semibold">
          975 Lincoln St., Suite C
          <br />
          Denver, CO 80203
        </div>
      </div>
    </section>
  );
};

export default ServingColorado;
