import React from 'react';

const CornerLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {children}
      </div>
    </div>
  );
};

export default CornerLayout;
