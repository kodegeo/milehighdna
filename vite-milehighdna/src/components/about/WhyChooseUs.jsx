import React from "react";

const WhyChooseUs = ({ title, content, imageUrl }) => {
  return (
    <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Why Choose Mile High DNA Testing
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            <b>Accurate DNA Testing With Professional Guidance You Can Trust</b>
            </p>
            <p className="text-gray-600">
            DNA testing is often required during important and sometimes stressful moments. Whether the purpose is legal compliance, immigration, medical clarity, relationship confirmation, or personal peace of mind, accuracy and proper handling matter.
<br />
<br />
Mile High DNA Testing provides professional DNA testing services supported by AABB accredited laboratory partners and real human guidance. Our approach combines scientific precision with accessible support to ensure every client understands the process and receives reliable results.
            </p>
        </div>

    </section>
  );
};

export default WhyChooseUs;
