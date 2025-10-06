import React from 'react';
import CornerLayout from '../../components/corner/CornerLayout';
import ServingColorado from "../../components/common/ServingColorado";
import CallToAction from "../../components/corner/CallToAction";

import prenatalCostImg from '../../assets/images/prenatal-2.jpg';

const PrenatalDNACost = () => {
  return (
    <>
      <CornerLayout>
        {/* Hero Section */}
        <div className="relative w-full h-[350px] md:h-[450px] mb-12">
          <img
            src={prenatalCostImg}
            alt="Prenatal DNA Test Cost"
            className="w-full h-full object-cover object-center rounded-b-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl" />
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white drop-shadow-lg">Mile High DNA Corner</h1>
            <h2 className="text-xl md:text-2xl text-white drop-shadow-lg">
            Prenatal DNA Testing: What You'll Pay — And Why
            </h2>
          </div>
        </div>
        
        {/* Article Content */}
        <div className="w-full px-4 md:px-0 py-8 bg-white/90 rounded-xl shadow-lg">
          <p className="text-lg leading-relaxed mb-6">
            As you mentally and physically prepare for a little one, you might be asking a few questions. One of those questions may be, <strong>How much does a prenatal DNA test cost?</strong> 
          </p>
          <p className="mb-6">It's a complicated but fair question. If this is a question for you, then this article may be able to help you in your research. The truth is, there isn't one simple price. The cost of a <strong>prenatal DNA test</strong> depends on several factors: the type of test you choose, how early in pregnancy it's performed, and the laboratory that analyzes the DNA.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-800">Denver, Aurora, Thornton, and Lakewood</h3>
          <p className="mb-6">For the frontrange communities, you'll find a range of prenatal testing options — from non-invasive tests that safely analyze your baby's DNA through the mother's blood, to invasive procedures like CVS or amniocentesis, which are typically reserved for specific medical reasons.</p>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-blue-700 my-8">
          Non-invasive prenatal paternity testing is <strong>the most accurate and safest method</strong> of establishing paternity before a baby is born. <br /><br /> - <a href="https://americanpregnancy.org/paternity-tests/non-invasive-prenatal-paternity-test/" target="_blank" rel="noopener noreferrer">American Pregnancy Association
          </a>
          </blockquote>
          <p className="mb-6">For most families, <strong>the Non-Invasive Prenatal Paternity (NIPP) </strong> Test has become the preferred option. It offers accuracy, privacy, and peace of mind — all without any risk to the baby. The NIPP test works by detecting small fragments of fetal DNA, called cell-free fetal DNA (cffDNA), that circulate in the mother's bloodstream. These fragments are compared with the potential father's DNA using advanced lab analysis to confirm paternity with over 99.9% accuracy.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-800">How Much Does a Prenatal DNA Test Cost, Near Me?</h3>
          <p className="mb-6">The typical cost for a NIPP test ranges between <strong>$1,599 and $1,799</strong>, depending on turnaround time and whether legal documentation is required. While the price can seem high, it reflects the specialized technology and strict accreditation standards behind every test. Choosing a certified lab ensures you're receiving reliable, court-admissible results and professional confidentiality throughout the process.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-800">Prenatal DNA Test Cost Guide</h3>
          <p className="mb-6">If you're interested in a full breakdown of pricing — including what's included in the fee, how NIPP compares to other prenatal procedures, and what affects the final cost — we've created a detailed cost guide that walks through every part of the process.</p>

          <a
                href="/mile-high-dna-corner/prenatal-dna-cost-guide"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition font-semibold text-lg inline-block"
              >
                PrenatalDNA Test Cost Guide
              </a>

          <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-800">Next Steps</h3>
          <p className="mb-6">We're not here to romanticize these difficult family decisions. We are here to help you through the process to the best of our ability so give us a call or book an appointment online.</p>

          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-blue-700 my-8">
          Access to accurate prenatal genetic information increases decision-making confidence and reduces anxiety among expectant parents. <br /><br /> - <a href="https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/10/screening-for-fetal-chromosomal-abnormalities" target="_blank" rel="noopener noreferrer">American College of Obstetricians and Gynecologists (ACOG), Practice Bulletin 226, 2020</a>
          </blockquote>

          <p className="mb-6">This is <a href="/mile-high-dna-corner" target="_blank" rel="noopener noreferrer"><em>Mile High DNA Corner</em></a>, a safe place to ask questions and get the answers you need. We provide private and confidential service to our clients. Do not hesitate to call or reach out with any questions that you may have. We would be more than happy to answer them and help you through these difficult decisions.
          </p>
        </div>
      </CornerLayout>

      <section className="w-full">
        <ServingColorado />
        <CallToAction />      
      </section>
    </>
  );
};


export default PrenatalDNACost;
