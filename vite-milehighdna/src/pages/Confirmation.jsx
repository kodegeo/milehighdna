import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";

const Confirmation = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("loading");
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    // Stripe passes session_id (and we passed orderId in success_url query param)
    const orderIdParam = searchParams.get("orderId");
    if (orderIdParam) {
      setOrderId(orderIdParam);
    }
    setStatus("success");
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Helmet>
        <title>Order Confirmation | Mile High DNA</title>
        <meta
          name="description"
          content="Thank you for your order with Mile High DNA Testing. Your Peace of Mind DNA Kit is being processed."
        />
      </Helmet>

      <div className="max-w-lg w-full bg-white shadow rounded-lg p-8 text-center">
      {status === "loading" && (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-green-600"></div>
          <p className="ml-3 text-gray-700">Finalizing your order...</p>
        </div>
      )}


        {status === "success" && (
          <>
            <h1 className="text-3xl font-bold text-green-700 mb-4">
              Thank You!
            </h1>
            <p className="text-gray-700 mb-6">
              Your payment has been successfully processed.
            </p>

            {orderId && (
              <p className="text-gray-900 font-semibold mb-4">
                Order ID: {orderId}
              </p>
            )}

            <p className="text-gray-600 mb-8">
              You will receive an email confirmation with your order details
              shortly. If you have any questions, please contact us at{" "}
              <a
                href="mailto:info@milehighdnatesting.com"
                className="text-blue-600 hover:underline"
              >
                info@milehighdnatesting.com
              </a>
              .
            </p>

            <a
              href="/"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Return to Home
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Confirmation;
