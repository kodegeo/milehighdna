import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ id, question, answer, guideLink, guideLabel }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      id={id}
      className="border border-gray-200 rounded-lg p-4 cursor-pointer shadow-sm hover:shadow-md transition scroll-mt-32"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-800">{question}</h3>
        {open ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </div>
      {open && (
        <div className="mt-3" onClick={(e) => e.stopPropagation()}>
          <p className="text-gray-600">{answer}</p>
          {guideLink && (
            <p className="mt-2">
              <Link to={guideLink} className="text-blue-600 font-medium hover:text-blue-700 hover:underline">
                {guideLabel || 'Learn more →'}
              </Link>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
