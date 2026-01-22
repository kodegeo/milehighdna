import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    name: 'Legal Paternity Testing',
    description: 'Legal paternity testing confirms biological parenthood using a court-admissible DNA test that meets legal and chain-of-custody requirements. This test is commonly used for court cases, child support, custody matters, and legal documentation. Schedule an appointment for legal paternity DNA testing in Denver.',
    link: 'https://calendly.com/milehighdnatesting/legal-paternity-test',
  },
  {
    name: 'Non Legal Paternity Testing',
    description: 'Non-legal paternity testing confirms biological parenthood for personal knowledge without legal documentation requirements. This peace-of-mind DNA test is often used for family clarity and private decision-making. Schedule an appointment for confidential, non-legal paternity DNA testing.',
    link: 'https://calendly.com/milehighdnatesting/non-legal-paternity-test',
  },
  {
    name: 'Legal Prenatal Paternity Testing',
    description: 'Legal prenatal paternity testing verifies biological parenthood during pregnancy using a non-invasive DNA test that meets legal standards. This test is commonly used for court-related matters and legal documentation prior to birth. Schedule an appointment for legal prenatal paternity testing in Denver.',
    link: 'https://calendly.com/milehighdnatesting/noninvasive-prenatal-paternity',
  },
  {
    name: 'Non Legal Prenatal Paternity Testing',
    description: 'Non-legal prenatal paternity testing allows expectant parents to verify biological parenthood during pregnancy for peace of mind. This non-invasive DNA test is designed for personal use without legal documentation requirements. Schedule an appointment for prenatal paternity testing with fast, confidential results.',
    link: 'https://calendly.com/milehighdnatesting/noninvasive-prenatal-paternity',
  },
  {
    name: 'Siblingship Testing',
    description: 'Siblingship DNA testing determines whether individuals are full or half siblings through genetic analysis. This test is commonly used when one or both parents are unavailable for testing. Schedule an appointment to establish sibling relationships with accurate DNA testing.',
    link: 'https://calendly.com/milehighdnatesting/full-siblingship-dna-test',
  },
  {
    name: 'Grandparentage Testing',
    description: 'Grandparentage DNA testing helps establish a biological relationship between grandparents and grandchildren when a parent is unavailable for testing. This test is often used for family verification, legal cases, or personal knowledge. Schedule an appointment for reliable grandparentage DNA testing.',
    link: 'https://calendly.com/milehighdnatesting/grandparentage-dna-test',
  },
  {
    name: 'Avuncular DNA Testing (Aunt / Uncle)',
    description: 'Avuncular DNA testing helps determine a biological relationship between a child and an alleged aunt or uncle when a parent is unavailable for testing. This option is commonly used when a mother or father cannot participate but extended family members are available.',
    link: 'https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment',
  },
  {
    name: 'Infidelity DNA Testing',
    description: 'Infidelity DNA testing provides discreet analysis using personal items or DNA samples to help confirm or exclude biological relationships. This testing is conducted with strict confidentiality and sensitivity, making it suitable for private, non-court use situations.',
    link: 'https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment',
  },
  {
    name: 'Immigration DNA Testing (AABB-Accredited Lab Contact Request)',
    description: 'This appointment initiates a USCIS-compliant immigration DNA test through an AABB-accredited laboratory. It includes coordination of case requirements, documentation guidance, and proper sample collection procedures required for immigration cases.',
    link: 'https://calendly.com/milehighdnatesting/immigration',
  },
  {
    name: 'Peek-A-Boo Gender Reveal',
    description: 'The Peek-A-Boo Gender Reveal DNA test determines your baby\'s gender as early as 6 weeks into pregnancy using a simple maternal blood draw. This early gender DNA test delivers fast, reliable results with no risk to the baby. Schedule an appointment for early gender reveal testing in Denver.',
    link: 'https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment',
  },
  {
    name: 'Twin Zygosity DNA Testing',
    description: 'Twin zygosity DNA testing determines whether twins are identical or fraternal using precise DNA analysis. This test is commonly used for medical insight, family knowledge, or personal clarity. Schedule an appointment to confirm twin zygosity with accurate DNA testing.',
    link: 'https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment',
  },
  {
    name: 'Y-STR DNA Testing (Paternal Lineage)',
    description: 'Y-STR DNA testing analyzes the male Y-chromosome to establish paternal lineage and shared male ancestry. This test is frequently used for genealogy research, surname studies, and paternal relationship analysis. Schedule an appointment to explore your paternal genetic lineage.',
    link: 'https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment',
  },
  {
    name: 'mtDNA Testing (Maternal Lineage)',
    description: 'Mitochondrial DNA (mtDNA) testing traces maternal ancestry through the direct maternal line and is useful when close maternal relatives are unavailable. This test is commonly used for genealogy and extended maternal relationship testing. Schedule an appointment to explore your maternal genetic lineage.',
    link: 'https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment',
  },
  {
    name: 'Infidelity DNA Testing (Personal Items or Samples)',
    description: 'Infidelity DNA testing provides discreet DNA analysis using personal items or submitted samples to answer sensitive questions privately. This confidential DNA test is designed for non-legal, personal use with careful handling. Schedule an appointment for private and accurate infidelity DNA testing.',
    link: 'https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment',
  },
  {
    name: 'Lifestyle & Ancestry DNA Tests',
    description: 'Lifestyle and ancestry DNA testing provides insight into genetic traits related to wellness, nutrition, and ancestral origins. These DNA tests are commonly used to better understand personal genetics beyond paternity. Schedule an appointment to explore your lifestyle and ancestry DNA results.',
    link: 'https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment',
  },
  {
    name: 'Healthy Weight DNA Test',
    description: 'The Healthy Weight DNA Test analyzes genetic factors related to metabolism, diet response, and exercise tendencies. This DNA test helps personalize weight and wellness strategies based on your genetics. Schedule an appointment to support your health goals with genetic insight.',
    link: 'https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment',
  },
  {
    name: 'GPS Origins DNA Test',
    description: 'The GPS Origins DNA Test provides detailed ancestry insights and geographic genetic origins using advanced DNA analysis. This test is ideal for individuals seeking deeper ancestral and regional genetic information. Schedule an appointment to discover your genetic origins.',
    link: 'https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment',
  },
  {
    name: 'At-Home DNA Kits (Postnatal Only)',
    description: 'At-home DNA test kits provide a convenient, non-legal postnatal DNA testing option with the same laboratory accuracy as in-office testing. All samples are processed by an AABB-accredited laboratory and shipped securely nationwide. Schedule an appointment to order your at-home DNA test kit.',
    link: 'https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment',
  },
];

const ScheduleTestSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-10">
        Book a DNA Test Appointment in Denver, Aurora, or Lakewood
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {service.detailPath ? (
                  <Link to={service.detailPath} className="hover:text-blue-600 transition">
                    {service.name}
                  </Link>
                ) : (
                  service.name
                )}
              </h3>
              <p className="text-gray-600 mb-4 whitespace-pre-line">{service.description}</p>
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Book Appointment
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleTestSection;
