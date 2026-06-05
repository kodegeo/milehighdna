import { MH_AABB_PARTNER_COURTS_USCIS, MH_IMMIGRATION_INITIATION } from '../../constants/aabbComplianceCopy';

const Compliance = () => {
    return (
      <section className="bg-[#F5F7FA] py-10 md:py-12 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            Immigration DNA testing differs from standard legal DNA tests. {MH_IMMIGRATION_INITIATION}
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            {MH_AABB_PARTNER_COURTS_USCIS} Every step aligns with federal immigration standards, and official results are submitted directly to the appropriate immigration authorities to maintain chain-of-custody and legal validity.
          </p>
        </div>
      </section>
    );
  };
  
  export default Compliance;
  