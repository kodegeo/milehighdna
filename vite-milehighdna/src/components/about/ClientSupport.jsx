import React from "react";

const ClientSupport = ({ title, content, imageUrl }) => {
  return (
    <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
      Built Around Client Support and Accountability
          </h2>
          <p className="text-lg text-gray-600 mb-8">
          Mile High DNA Testing is structured to support clients throughout the entire DNA testing process. From the first inquiry to final results delivery, each case is handled with care, clarity, and professionalism.
            </p>
            <p className="text-gray-600">
            Clients have direct access to trained DNA professionals who assist with: </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 text-left">
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Trusted and Accredited Testing</h3>
              <p className="text-gray-600">
              Selecting the correct DNA test              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Personalized, Bilingual Support</h3>
              <p className="text-gray-600">
              Understanding collection and testing options              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Locally Based, Community Focused</h3>
              <p className="text-gray-600">
              Confirming documentation and compliance requirements              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Locally Based, Community Focused</h3>
              <p className="text-gray-600">
              Reviewing and understanding results               </p>
            </div>


          </div>

          <p className="text-lg text-gray-600 mb-8">
          Support is available in English and Spanish, allowing us to serve a diverse client base without compromising accuracy or professionalism.
</p>


    </section>
  );
};

export default ClientSupport;
