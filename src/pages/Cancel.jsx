import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Cancel = () => {
  return (
    <div className="bg-gray-100 px-4 pt-16 pb-4 min-h-screen">
      <Helmet>
        <title>Payment Cancelled | Mile High DNA Testing</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold text-red-600 mb-4 text-center">Payment Cancelled</h1>
        <p className="text-gray-700 mb-6 text-center">
          Your payment was not completed. No charges were made. You can return to the booking page and try again.
        </p>
        <div className="flex justify-center">
          <Link
            to="/book-appointment"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition"
          >
            Return to Booking Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cancel;
