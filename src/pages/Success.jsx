import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Success = () => {
  return (
    <div className="bg-gray-100 px-4 pt-16 pb-4 min-h-screen">
      <Helmet>
        <title>Thank You | Mile High DNA Testing</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold text-green-600 mb-4 text-center">Thank You!</h1>
        <p className="text-gray-700 mb-6 text-center">
          Your payment was successful. A confirmation email has been sent. We'll contact you soon to finalize your appointment details.
        </p>
        <div className="flex justify-center">
          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
