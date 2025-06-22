const Contact = () => {
    return (
      <section className="bg-white py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-start">
          {/* Left: Schedule Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Schedule your immigration DNA test today. We're here to guide you through every step — from embassy coordination to result delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/schedule"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
              >
                Schedule Online
              </a>
              <a
                href="/contact"
                className="text-blue-600 font-semibold px-6 py-3 rounded-xl border border-blue-600 hover:bg-blue-50 transition"
              >
                Speak to a Specialist
              </a>
            </div>
          </div>
  
          {/* Right: Contact Details */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h3>
            <p className="text-gray-700 mb-2">
              📍 <strong>Address:</strong> 123 Main St, Denver, CO 80204
            </p>
            <p className="text-gray-700 mb-2">
              📞 <strong>Phone:</strong> <a href="tel:+13035550123" className="text-blue-600 hover:underline">(303) 555-0123</a>
            </p>
            <p className="text-gray-700 mb-2">
              ✉️ <strong>Email:</strong> <a href="mailto:info@milehighdna.com" className="text-blue-600 hover:underline">info@milehighdna.com</a>
            </p>
            <p className="text-gray-700">
              🕒 <strong>Hours:</strong> Mon–Fri: 9am–5pm | Sat & Sun: By Appointment
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  