import React from 'react';
import CornerLayout from '../../components/corner/CornerLayout';
import ServingColorado from "../../components/common/ServingColorado";
import CallToAction from "../../components/corner/CallToAction";

import answersMatterImg from '../../assets/images/answer-matter-most.png';

const WhenTheAnswersMatterMost = () => {
  return (
    <>
      <CornerLayout>
        {/* Hero Section */}
        <div className="relative w-full h-[350px] md:h-[450px] mb-12">
          <img
            src={answersMatterImg}
            alt="When the Answers Matter Most - Mile High DNA Testing"
            className="w-full h-full object-cover object-center rounded-b-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl" />
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white drop-shadow-lg">
              Mile High DNA Corner
            </h1>
            <h2 className="text-xl md:text-2xl text-white drop-shadow-lg">
              When the Answers Matter Most: A Family DNA Story About Clarity, Care, and Connection
            </h2>
          </div>
        </div>

        {/* Article Content */}
        <div className="w-full px-4 md:px-0 py-8 bg-white/90 rounded-xl shadow-lg">
          <p className="text-base leading-relaxed mb-6 text-justify">
            There's a moment before every DNA test decision — a quiet pause filled not with uncertainty,
            but with the weight of what's about to be known.
          </p>

          <p className="text-base mb-6 text-justify">
            Here in Denver and across the Front Range, we meet families every day who come
            to us seeking clarity through family relationship DNA testing — whether that means confirming
            a grandparent relationship, a siblingship, or simply finding peace of mind.
          </p>

          <p className="text-base mb-6 text-justify">
            At <span className="font-semibold text-[#2C6FA6]">Mile High DNA Testing</span>, we understand that no two stories are the same. Some are about love,
            some about loss, and some about closure. But all are about truth — and the courage to face it with compassion
            and confidentiality.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-800">The Story Behind the Swab</h3>
          <p className="text-base mb-6 text-justify">
            A few months ago, someone came in for a family relationship DNA test — the kind designed to
            bring clarity to personal questions, not headlines. The paperwork listed it as a "non-legal test," but we could
            tell from the way they sat that the results meant more than a line on a page.
          </p>

          <p className="text-base mb-6 text-justify">
            We didn’t ask for details. We simply provided what we always do: a safe, private space to find reliable answers.
          </p>

          <p className="text-base mb-6 text-justify">
            They said only this: <em>"I just need to know."</em> That sentence says everything about why{" "}
            peace-of-mind DNA testing exists. It's not about drama — it's about understanding. For some,
            that understanding changes relationships. For others, it changes everything.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-800">
            Why Families Turn to DNA Testing in Colorado
          </h3>
          <p className="text-base mb-6 text-justify">
            Many people assume DNA testing is only for court cases or legal disputes. In reality, most{" "}
            DNA testing in Denver is done quietly — for families who simply want clarity and confidence in
            their relationships.
          </p>

          <ul className="list-disc list-outside ml-6 mb-4 space-y-3">
            <li>Grandparent DNA testing when a parent is unavailable</li>
            <li>Siblingship DNA testing to confirm biological relationships</li>
            <li>Aunt, uncle, or extended family testing to verify generational connections</li>
            <li>Peace-of-mind testing for private, non-legal understanding</li>
          </ul>

          <p className="text-base mb-6 text-justify">
            Each situation is unique, but what matters most is trust — in both the process and the people guiding it.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-800">Compassion, Confidentiality, and Care</h3>
          <p className="text-base mb-6 text-justify">
            Our mission at <span className="font-semibold text-[#2C6FA6]">Mile High DNA Testing</span> is to ensure every client feels respected, supported,
            and safe. We follow the same professional standards used in{" "}
            AABB-accredited laboratories, whether a test is for legal documentation or personal knowledge.
          </p>

          <p className="text-base mb-6 text-justify">
            We know that confidential DNA testing isn't about curiosity — it's about closure. That's why
            our team treats every case with the same precision, privacy, and empathy you'd expect from a medical
            professional.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-800">What “Peace of Mind” Really Means</h3>
          <p className="text-base mb-6 text-justify">
            When you choose peace-of-mind DNA testing, you're choosing a process that brings truth to
            light quietly and respectfully. You don't need to share your story — you just need to take the first step
            toward understanding.
          </p>

          <p className="text-base mb-6 text-justify">
            While court-admissible DNA testing follows strict chain-of-custody procedures for legal use,
            non-legal relationship testing offers the same scientific accuracy with added privacy for
            families who simply need reassurance.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-800">A Note to Anyone Reading</h3>
          <p className="text-base mb-6 text-justify">
            If you're here because you're considering a DNA test, take a moment. This decision doesn't define you — it
            empowers you. Whether you're searching for answers about family relationships, need{" "}
            legal DNA testing near Denver, or just want a{" "}
            private, confidential DNA test, we're here to guide you through it.
          </p>

          <p className="text-base mb-6 text-justify">
            You’ll be treated with dignity, compassion, and respect — always.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-800">Final Thoughts</h3>
          <p className="text-base mb-6 text-justify">
            Every swab, every report, every result tells a story — not about science, but about people. When the answers
            matter most, choose a provider who understands both.
          </p>

          <p className="text-base mb-6 text-justify">
            At <span className="font-semibold text-[#2C6FA6]">Mile High DNA Testing</span>, we help families across Denver, Aurora, Thornton, and
            Lakewood find clarity through professional, compassionate DNA testing services — from{" "}
            <a href="/legal-paternity-tests" className="text-blue-600 hover:text-blue-800 underline">
              legal relationship verification
            </a>{" "}
            to{" "}
            <a href="/peace-of-mind-paternity-tests" className="text-blue-600 hover:text-blue-800 underline">
              peace-of-mind testing
            </a>{" "}
            that restores understanding.
          </p>

          <p className="text-base mb-6 text-justify">
            This is <a href="/mile-high-dna-corner" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline"><em>Mile High DNA Corner</em></a> — a space for real stories, quiet strength, and honest answers.
          </p>

          <div className="mt-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Share This Article</h3>
              <p className="text-gray-600 mb-6">Help other families find compassionate DNA testing resources</p>
              
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://milehighdnatesting.com/mile-high-dna-corner/family-relationship-dna-testing-denver" 
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="font-medium">Facebook</span>
                </a>
                
                <a 
                  href="https://twitter.com/intent/tweet?url=https://milehighdnatesting.com/mile-high-dna-corner/family-relationship-dna-testing-denver&text=When%20the%20Answers%20Matter%20Most" 
                  className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className="font-medium">X / Twitter</span>
                </a>

                <a 
                  href="mailto:?subject=When%20the%20Answers%20Matter%20Most%20-%20Mile%20High%20DNA%20Testing&body=Check%20out%20this%20article%20about%20family%20DNA%20testing%20in%20Denver:%0A%0Ahttps://milehighdnatesting.com/mile-high-dna-corner/family-relationship-dna-testing-denver%0A%0AThis%20article%20shares%20a%20compassionate%20story%20about%20DNA%20testing%20and%20why%20families%20choose%20clarity%20through%20professional%20testing." 
                  className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span className="font-medium">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </CornerLayout>

      <section className="w-full">
        <ServingColorado />
        <CallToAction />
      </section>
    </>
  );
};

export default WhenTheAnswersMatterMost;
