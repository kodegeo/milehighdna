import React from "react";

const Testimonial = ({ quote, author, role, imageUrl }) => {
  return (
    <section className="bg-[#F5F7FA] py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-6">
          <svg
            className="mx-auto w-12 h-12 text-[#2C6FA6]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7.17 8A5 5 0 002 13v1a3 3 0 003 3v3h4v-7a5 5 0 00-1.83-4zm10 0A5 5 0 0012 13v1a3 3 0 003 3v3h4v-7a5 5 0 00-1.83-4z" />
          </svg>
        </div>
        <p className="text-xl text-gray-700 italic mb-6">"{quote}"</p>
        <div className="flex justify-center items-center gap-4">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={author}
              className="w-12 h-12 rounded-full object-cover"
            />
          )}
          <div className="text-sm text-gray-600 text-left">
            <div className="font-semibold text-[#1A3C59]">{author}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
