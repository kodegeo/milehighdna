import React from "react";
import CornerLayout from "../../components/corner/CornerLayout";
import ServingColorado from "../../components/common/ServingColorado";
import CallToAction from "../../components/corner/CallToAction";
import { Helmet } from "react-helmet-async";

import fatherTruthHeroImg from "../../assets/images/fathers-paternity-testing-denver.png";

const WhenDNATellsTheTruth = () => {
  return (
    <>
      <Helmet>
        <title>
          Paternity Testing in Denver | When DNA Tells the Truth – A Father’s Story
        </title>

        <meta
          name="description"
          content="A Denver father sought peace of mind through paternity testing. Learn how accurate, AABB-accredited DNA testing provides clarity when appearances raise questions."
        />

        <link
          rel="canonical"
          href="https://milehighdnatesting.com/mile-high-dna-corner/when-dna-tells-the-truth-paternity-testing-denver"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="When DNA Tells the Truth: A Father’s Journey Through Paternity Testing"
        />
        <meta
          property="og:description"
          content="A real story of how DNA testing brought peace of mind to a Denver father facing uncertainty about paternity."
        />
        <meta
          property="og:image"
          content="https://milehighdnatesting.com/images/fathers-paternity-testing-denver.png"
        />
        <meta
          property="og:url"
          content="https://milehighdnatesting.com/mile-high-dna-corner/when-dna-tells-the-truth-paternity-testing-denver"
        />
        <meta property="og:type" content="article" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="When DNA Tells the Truth | Paternity Testing in Denver"
        />
        <meta
          name="twitter:description"
          content="DNA testing provides answers that appearances cannot. Read a father’s real story of clarity and peace of mind."
        />
        <meta
          name="twitter:image"
          content="https://milehighdnatesting.com/images/fathers-paternity-testing-denver.png"
        />

        {/* Article Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "When DNA Tells the Truth: A Father’s Journey Through Paternity Testing",
            "description": "A true story of how paternity testing in Denver provided peace of mind and clarity when physical appearances raised doubts.",
            "image": "https://milehighdnatesting.com/images/fathers-paternity-testing-denver.png",
            "author": {
              "@type": "Organization",
              "name": "Mile High DNA Testing"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Mile High DNA Testing",
              "logo": {
                "@type": "ImageObject",
                "url": "https://milehighdnatesting.com/logo.png"
              }
            },
            "url": "https://milehighdnatesting.com/mile-high-dna-corner/when-dna-tells-the-truth-paternity-testing-denver",
            "mainEntityOfPage": "https://milehighdnatesting.com/mile-high-dna-corner/when-dna-tells-the-truth-paternity-testing-denver"
          }
        `}
        </script>
      </Helmet>

      <CornerLayout>
        {/* Hero */}
        <div className="relative w-full h-[350px] md:h-[450px] mb-12">
          <img
            src={fatherTruthHeroImg}
            alt="Paternity Testing in Denver"
            className="w-full h-full object-cover object-center rounded-b-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl" />
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
              When DNA Tells the Truth
            </h1>
            <p className="text-lg mt-2 max-w-3xl">
              A father’s journey through paternity testing and peace of mind
            </p>
          </div>
        </div>

        {/* Article Content */}
        <div className="w-full px-4 md:px-0 py-8 bg-white/90 rounded-xl shadow-lg">
          <p className="text-base mb-6 text-justify">
            When <em>Michael</em> came to us, he carried both courage and doubt.
            A devoted father to a young girl with long brown hair and big brown eyes,
            he couldn’t ignore the questions that had slowly taken over his peace of mind.
          </p>

          <p className="text-base mb-6 text-justify">
            Michael was fair-skinned, blonde-haired, and blue-eyed. His daughter
            looked nothing like him. Over time — especially after separating from
            the child’s mother — certain actions and decisions caused his uncertainty
            to grow.
          </p>

          <p className="text-base mb-6 text-justify">
            He didn’t come to us because he lacked love. He came because he needed
            clarity — and the ability to take the right steps for his future if necessary.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">
            More Than Science — Understanding the Emotions
          </h3>

          <p className="text-base mb-6 text-justify">
            At <span className="font-semibold text-[#2C6FA6]">Mile High DNA Testing</span>,
            we understand that paternity testing is not just about science.
            It’s about emotions, family, and peace of mind.
          </p>

          <p className="text-base mb-6 text-justify">
            Michael was welcomed with compassion and professionalism.
            After collecting cheek swab samples from both father and child,
            we assured him that our partner AABB-accredited laboratory would
            handle the analysis with the highest standards of accuracy and care.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">
            When Results Bring Relief
          </h3>

          <p className="text-base mb-6 text-justify">
            A few days later, Michael’s results were ready.
            As we reviewed the report together, the conclusion was clear.
            He was, without a doubt, the biological father.
          </p>

          <p className="text-base mb-6 text-justify">
            He took a deep breath, smiled softly, and said,
            <em> “I guess I just needed to know for sure.”</em>
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">
            DNA Answers What Appearances Cannot
          </h3>

          <p className="text-base mb-6 text-justify">
            Michael’s story reflects a common misconception.
            Physical traits like eye color, hair texture, and skin tone
            are influenced by complex genetic combinations.
            They do not always appear in predictable ways.
          </p>

          <p className="text-base mb-6 text-justify">
            DNA, however, is objective. It does not guess.
            It provides clear, accurate, and scientifically sound answers.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">
            Answers You Can Trust
          </h3>

          <p className="text-base mb-6 text-justify">
            Whether you’re seeking peace of mind, legal documentation,
            or simply the truth, DNA testing provides clarity
            when questions feel overwhelming.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">
            Schedule a Confidential Paternity Test
          </h3>

          <p className="text-base mb-6">
            <a href="https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment" className="text-blue-600 underline">
              Book an Appointment Today!
            </a>
          </p>

          <p className="text-base italic">
            This is{" "}
            <a href="/mile-high-dna-corner" className="underline">
              Mile High DNA Corner
            </a>{" "}
            — real stories, real answers, and compassionate care when it matters most.
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

export default WhenDNATellsTheTruth;
