import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ id, question, answer }) => {
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
      {open && <p className="text-gray-600 mt-3">{answer}</p>}
    </div>
  );
};

export default FAQItem;
