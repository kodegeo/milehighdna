import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";

const Confirmation = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());

    const {
      orderId,
      customerEmail,
      customerName,
      productName,
      price,
      shippingFee,
      shippingMethod,
      locations,
      primaryStreet,
      primaryCity,
      primaryState,
      primaryZip,
      secondaryStreet,
      secondaryCity,
      secondaryState,
      secondaryZip,
      orderType,
    } = params;

    if (customerEmail && customerName) {
      // Build the email payload
      const payload = {
        toCustomer: customerEmail,
        toAdmin: "cynthia@milehighdnatesting.com",
        from: "info@milehighdnatesting.com",
        subject: "Order Confirmation - Mile High DNA Testing",
        orderDetails: {
          orderNumber: orderId,
          customerName,
          productName: productName || "DNA Test",
          price: Number(price || 0).toFixed(2),
          shippingFee: Number(shippingFee || 0).toFixed(2),
          total: (Number(price || 0) + Number(shippingFee || 0)).toFixed(2),
          shippingMethod: shippingMethod || "Regular",
          locations: Number(locations || 1),
          orderType: orderType || "Domestic",
          primaryAddress: {
            street: primaryStreet,
            city: primaryCity,
            state: primaryState,
            zip: primaryZip,
          },
          secondaryAddress:
            Number(locations) === 2
              ? {
                  street: secondaryStreet,
                  city: secondaryCity,
                  state: secondaryState,
                  zip: secondaryZip,
                }
              : null,
        },
      };

      // Call backend to send confirmation email
      fetch(`${import.meta.env.VITE_API_URL}/api/send-confirmation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => console.log("✅ Email sent:", data))
        .catch((err) => console.error("❌ Email send error:", err))
        .finally(() => setStatus("success"));
    } else {
      setStatus("success");
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Helmet>
        <title>Order Confirmation | Mile High DNA Testing</title>
        <meta
          name="description"
          content="Thank you for your order with Mile High DNA Testing. Your kit is being processed."
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
            <h1 className="text-3xl font-bold text-green-700 mb-4">Thank You!</h1>
            <p className="text-gray-700 mb-6">
              Your payment has been successfully processed. Your DNA kit will be shipped soon.
            </p>

            {searchParams.get("orderId") && (
              <p className="text-gray-900 font-semibold mb-4">
                Order ID: {searchParams.get("orderId")}
              </p>
            )}

            <p className="text-gray-600 mb-8">
              A confirmation email has been sent to{" "}
              <span className="font-semibold">{searchParams.get("customerEmail")}</span>.{" "}
              If you have any questions, contact us at{" "}
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
