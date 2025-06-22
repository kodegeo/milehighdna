const GrandparentageContact = () => {
    return (
      <section className="bg-white py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-start">
          {/* Left: Call-to-Action */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to Schedule Your Grandparent DNA Test?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We’re here to help you move forward — whether for legal reasons, immigration support, or peace of mind. Our team is ready to answer questions and guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/schedule"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
              >
                Schedule Your Appointment
              </a>
              <a
                href="/contact"
                className="text-blue-600 font-semibold px-6 py-3 rounded-xl border border-blue-600 hover:bg-blue-50 transition"
              >
                Contact Our Team
              </a>
            </div>
          </div>
  
          {/* Right: Contact Info */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
            <p className="text-gray-700 mb-2">
              📍 <strong>Address:</strong> 975 N. Lincoln Street Suite 205 C, Denver, CO
            </p>
            <p className="text-gray-700 mb-2">
              📞 <strong>Phone:</strong> <a href="tel:+13035550123" className="text-blue-600 hover:underline">(303) 555-0123</a>
            </p>
            <p className="text-gray-700 mb-2">
              ✉️ <strong>Email:</strong> <a href="mailto:info@milehighdna.com" className="text-blue-600 hover:underline">info@milehighdna.com</a>
            </p>
            <p className="text-gray-700">
              🕒 <strong>Hours:</strong> Hours: Mon-Fri: 9am–6pm | Sat & Sun: 9am-5pm | All hours by appointment only
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default GrandparentageContact;
  