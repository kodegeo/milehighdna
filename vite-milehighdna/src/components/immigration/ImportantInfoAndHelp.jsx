import { Link } from 'react-router-dom';

const ImportantInfoAndHelp = () => {
  const REFERRAL_FORM_URL = 'https://ufclab.forms-db.com/view.php?id=10429';
  const PHONE = '720-900-9342';
  const EMAIL = 'info@milehighdnatesting.com';

  return (
    <section className="bg-white py-12 md:py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Important Information */}
        <h2 className="text-3xl font-bold text-[#1A3C59] mb-8 text-center">
          Important Information
        </h2>
        <div className="space-y-4 mb-8">
          <div className="p-6 bg-[#F5F7FA] border border-gray-200 rounded-xl shadow-sm text-base text-gray-700 leading-relaxed">
            <strong>Pricing:</strong> All immigration DNA testing fees are case-specific and not posted online.
          </div>
          <div className="p-6 bg-[#F5F7FA] border border-gray-200 rounded-xl shadow-sm text-base text-gray-700 leading-relaxed">
            <strong>How to Purchase:</strong> Immigration DNA tests must be initiated through the referral form and{' '}
            <strong>cannot be purchased directly through the website</strong>.
          </div>
          <div className="p-6 bg-[#F5F7FA] border border-gray-200 rounded-xl shadow-sm text-base text-gray-700 leading-relaxed">
            <strong>Accreditation:</strong> All immigration DNA testing is performed by{' '}
            <strong>UFC, an AABB-accredited laboratory approved for USCIS cases</strong>.
          </div>
        </div>
        <p className="text-base text-gray-600 mb-10 leading-relaxed">
          This process ensures your immigration DNA testing is handled{' '}
          <strong>accurately, efficiently, and in full compliance</strong> with USCIS and U.S. Department of State requirements.
        </p>

        {/* Ready to Begin */}
        <h3 className="text-xl font-semibold text-[#1A3C59] mb-4 text-center">
          Ready to Begin the Immigration Testing Process?
        </h3>
        <p className="text-center mb-8 text-base text-gray-600">
          <a
            href={REFERRAL_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-semibold underline"
          >
            Complete the referral form
          </a>
        </p>

        {/* Need Assistance */}
        <h3 className="text-xl font-semibold text-[#1A3C59] mb-6 text-center mt-12">
          Need Assistance? We’re Here to Help
        </h3>
        <p className="text-base text-gray-600 mb-4 text-center leading-relaxed">
          If you have questions or need help getting started, our team is ready to guide you through every step.
        </p>
        <p className="text-center text-base text-gray-700 mb-2">
          <strong>Call or text:</strong>{' '}
          <a
            href={`tel:+1${PHONE.replace(/-/g, '')}`}
            onClick={() => {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: 'phone_click',
                phone_number: PHONE,
                phone_location: 'ImportantInfoAndHelp - Need Assistance',
              });
            }}
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            {PHONE}
          </a>
        </p>
        <p className="text-center text-base text-gray-700 mb-6">
          <strong>Email:</strong>{' '}
          <a href={`mailto:${EMAIL}`} className="text-blue-600 hover:text-blue-800 font-semibold">
            {EMAIL}
          </a>
        </p>
        <p className="text-base text-gray-600 text-center leading-relaxed">
          We’re here to help you move forward with your immigration DNA testing process with clarity, accuracy, and confidence. To <Link to="/appointments" className="text-blue-600 hover:text-blue-800 font-semibold underline">schedule a DNA test</Link> for other services, we also offer <Link to="/services/legal-paternity-testing" className="text-blue-600 hover:text-blue-800 font-semibold underline">legal paternity testing</Link> and <Link to="/services/prenatal-paternity-testing" className="text-blue-600 hover:text-blue-800 font-semibold underline">prenatal paternity testing</Link>.
        </p>
      </div>
    </section>
  );
};

export default ImportantInfoAndHelp;
