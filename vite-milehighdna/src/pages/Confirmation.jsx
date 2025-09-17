import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import peaceOfMindKitImage from '../assets/images/peace-of-mind-kit.jpg';

const Confirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const orderDetails = location.state || {
    orderNumber: `MH-${Date.now().toString().slice(-6)}`,
    productName: 'Peace of Mind Paternity Test Kit',
    price: 99,
    orderType: 'domestic',
    customerName: 'Customer',
    email: 'customer@example.com',
  };

  // Email sending logic (using SendGrid endpoint or similar)
  useEffect(() => {
    const sendEmails = async () => {
      try {
        await fetch('/api/send-confirmation-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            toCustomer: orderDetails.email,
            toAdmin: 'cynthia@milehighdnatesting.com',
            from: 'info@milehighdnatesting.com',
            subject: `Order Confirmation - ${orderDetails.orderNumber}`,
            orderDetails,
          }),
        });
      } catch (err) {
        console.error('Failed to send confirmation emails:', err);
      }
    };

    sendEmails();
  }, [orderDetails]);

  const handleTrackOrder = () => navigate('/my-results');
  const handleReturnHome = () => navigate('/');
  const handleOrderAnother = () => navigate('/products/peace-of-mind-dna-kit');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
            <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-lg text-gray-600">
            Thank you for choosing Mile High DNA Testing. Your order has been successfully placed.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 px-6 py-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-white">Order Details</h2>
            <span className="text-blue-100">Order #{orderDetails.orderNumber}</span>
          </div>

          <div className="p-6">
            <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-gray-200">
              <img
                src={peaceOfMindKitImage}
                alt={orderDetails.productName}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{orderDetails.productName}</h3>
                <p className="text-gray-600">Fast, Accurate, Confidential</p>
                <p className="text-lg font-bold text-blue-600">${orderDetails.price}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Order Information</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <p><span className="font-medium">Order Number:</span> {orderDetails.orderNumber}</p>
                  <p><span className="font-medium">Order Date:</span> {new Date().toLocaleDateString()}</p>
                  <p><span className="font-medium">Order Type:</span> {orderDetails.orderType === 'domestic' ? 'Domestic Shipping' : 'International Shipping'}</p>
                  <p><span className="font-medium">Status:</span> <span className="text-green-600 font-medium">Confirmed</span></p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Customer Information</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <p><span className="font-medium">Name:</span> {orderDetails.customerName}</p>
                  <p><span className="font-medium">Email:</span> {orderDetails.email}</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-blue-900 mb-2">What's Next?</h4>
              <div className="space-y-2 text-sm text-blue-800">
                {orderDetails.orderType === 'domestic' ? (
                  <>
                    <p>• You will receive a confirmation email with tracking information</p>
                    <p>• Your test kit will be shipped within 1-2 business days</p>
                    <p>• Follow the instructions included in your kit</p>
                    <p>• Return your samples using the prepaid envelope</p>
                    <p>• Results will be available in 3-5 business days</p>
                  </>
                ) : (
                  <>
                    <p>• You will receive a confirmation email with shipping details</p>
                    <p>• Your test kit will be shipped internationally within 2-3 business days</p>
                    <p>• Follow the instructions included in your kit</p>
                    <p>• Return your samples using the prepaid international envelope</p>
                    <p>• Results will be available in 5-7 business days</p>
                  </>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleTrackOrder}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Track My Order
              </button>
              <button
                onClick={handleOrderAnother}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
              >
                Order Another Kit
              </button>
              <button
                onClick={handleReturnHome}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300"
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Customer Support</h4>
              <p className="text-sm text-gray-600 mb-2">
                Our team is here to help with any questions about your order.
              </p>
              <div className="space-y-1 text-sm">
                <p><span className="font-medium">Phone:</span> (720) 900-9342</p>
                <p><span className="font-medium">Email:</span> info@milehighdnatesting.com</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Business Hours</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <p>Monday - Friday: 8:00 AM - 6:00 PM MST</p>
                <p>Saturday: 9:00 AM - 2:00 PM MST</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            You will receive a confirmation email shortly. Please check your spam folder if you don't see it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
