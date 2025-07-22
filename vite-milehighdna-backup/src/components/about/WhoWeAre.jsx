import React from "react";

const WhoWeAre = ({ title, content, imageUrl }) => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-[#1A3C59] mb-4">
            {title}
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">{content}</p>
        </div>

        {/* Image Section */}
        {imageUrl && (
          <div className="flex justify-center">
            <img
              src={imageUrl}
              alt="About Us"
              className="rounded-lg shadow-md w-full max-h-[400px] object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default WhoWeAre;
