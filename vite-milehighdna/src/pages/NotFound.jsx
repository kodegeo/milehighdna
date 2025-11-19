// src/pages/NotFound.jsx
import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Page not found</h1>
      <p className="text-gray-700 mb-6 max-w-md">
        The page you’re looking for doesn’t exist. You can go back home or
        book an appointment below.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <a
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-semibold"
        >
          Go to Homepage
        </a>
        <a
          href="/appointments"
          className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md font-semibold"
        >
          Book an Appointment
        </a>
      </div>
    </div>
  );
}
