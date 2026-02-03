const Steps = () => {
    const steps = [
      {
        number: 1,
        title: 'Complete the Immigration Referral Form',
        description:
          'Submit your case information via the referral form. When asked "Who referred you to our laboratory?", enter J68 – Mile High DNA Testing so your case is routed correctly through our office.',
      },
      {
        number: 2,
        title: 'UFC Will Contact You With Next Steps',
        description:
          'After submission, UFC (our AABB-accredited lab partner) will provide custom pricing for your case, required forms and invoice, and payment options such as credit cards or money orders.',
      },
      {
        number: 3,
        title: 'DNA Sample Collection Arranged by UFC',
        description:
          'Inside the U.S., appointments are scheduled at Mile High DNA Testing or another approved collection facility near you. Outside the U.S., DNA kits are sent to the appropriate U.S. Embassy or designated international collection site for your relative abroad.',
      },
      {
        number: 4,
        title: 'Laboratory Testing and Analysis',
        description:
          'Testing is performed by UFC, an AABB-accredited laboratory approved for USCIS cases. All testing follows strict chain-of-custody procedures for legal admissibility.',
      },
      {
        number: 5,
        title: 'Results Sent Directly to Immigration Authorities',
        description:
          'Official DNA results are sent directly to USCIS, passport agencies, or the requesting office. You will also receive a copy for your records.',
      },
    ];
  
    return (
      <section className="bg-[#F5F7FA] py-12 md:py-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A3C59] text-center mb-10">
            Steps to Begin Your DNA Test
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border-l-4 border-blue-600 hover:shadow-md transition"
              >
                <div className="text-3xl font-bold text-blue-600 flex-shrink-0">{step.number}</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1A3C59] mb-2">{step.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Steps;
  