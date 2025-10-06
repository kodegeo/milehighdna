import React from 'react';

const UnderCurrentLayout = ({ title, subtitle, children }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-gray-900">{title}</h1>
      {subtitle && <h2 className="text-2xl font-semibold mb-8 text-gray-700">{subtitle}</h2>}
      <article className="prose prose-lg prose-gray max-w-none">
        {children}
      </article>
    </div>
  );
};

export default UnderCurrentLayout;
