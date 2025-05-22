// src/components/FAQ/HowToUse.jsx
import React from 'react';
import { HashLink } from 'react-router-hash-link';

const HowToUse = () => {
  return (
    <div className="my-6">
      <p className="text-lg text-gray-700">
        Have questions about legal testing?
        <HashLink 
          smooth 
          to="/faq#legal" 
          className="text-blue-600 hover:underline ml-2"
          scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        >
          Legal DNA FAQs
        </HashLink>
      </p>
    </div>
  );
};

export default HowToUse; 
