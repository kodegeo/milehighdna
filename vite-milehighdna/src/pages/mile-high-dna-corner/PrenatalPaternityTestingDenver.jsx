import React from "react";
import CornerLayout from "../../components/corner/CornerLayout";
import ServingColorado from "../../components/common/ServingColorado";
import CallToAction from "../../components/corner/CallToAction";
import { Helmet } from "react-helmet-async";

import prenatalHeroImg from "../../assets/images/prenatal-paternity-denver.png";

const PrenatalPaternityTestingDenver = () => {
  return (
    <>
      <Helmet>
        <title>
          Prenatal Paternity Testing in Denver | Safe Non-Invasive DNA Test for Mothers
        </title>

        <meta
          name="description"
          content="A Denver mother found clarity through a safe, non-invasive prenatal paternity test. Learn how Mile High DNA Testing helps women get answers with care, safety, and compassion."
        />

        <link
          rel="canonical"
          href="https://milehighdnatesting.com/mile-high-dna-corner/prenatal-paternity-testing-denver"
        />

        {/* Open Graph */}
        <meta property="og:title" content="When Clarity Brings Courage: A Mother’s Story of Strength and Answers" />
        <meta
          property="og:description"
          content="A powerful story of how non-invasive prenatal paternity testing helped a Denver mother find safety, clarity, and confidence."
        />
        <meta
          property="og:image"
          content="https://milehighdnatesting.com/images/prenatal-paternity-denver.png"
        />
        <meta
          property="og:url"
          content="https://milehighdnatesting.com/mile-high-dna-corner/prenatal-paternity-testing-denver"
        />
        <meta property="og:type" content="article" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Prenatal Paternity Testing in Denver | Safe & Non-Invasive"
        />
        <meta
          name="twitter:description"
          content="Learn how safe, non-invasive prenatal paternity testing helps Denver mothers get answers without risk to their baby."
        />
        <meta
          name="twitter:image"
          content="https://milehighdnatesting.com/images/prenatal-paternity-denver.png"
        />

        {/* Article Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "When Clarity Brings Courage: A Mother’s Story of Strength and Answers",
            "description": "A compassionate story about non-invasive prenatal paternity testing in Denver and how safe DNA testing helps expectant mothers find clarity and confidence.",
            "image": "https://milehighdnatesting.com/images/prenatal-paternity-denver.png",
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
            "url": "https://milehighdnatesting.com/mile-high-dna-corner/prenatal-paternity-testing-denver",
            "mainEntityOfPage": "https://milehighdnatesting.com/mile-high-dna-corner/prenatal-paternity-testing-denver"
          }
        `}
        </script>
      </Helmet>

      <CornerLayout>
        {/* Hero */}
        <div className="relative w-full h-[350px] md:h-[450px] mb-12">
          <img
            src={prenatalHeroImg}
            alt="Prenatal Paternity Testing in Denver"
            className="w-full h-full object-cover object-center rounded-b-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl" />
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
              When Clarity Brings Courage
            </h1>
            <p className="text-lg mt-2 max-w-3xl">
              A mother’s story of strength, safety, and answers through non-invasive prenatal DNA testing
            </p>
          </div>
        </div>

        {/* Article Content */}
        <div className="w-full px-4 md:px-0 py-8 bg-white/90 rounded-xl shadow-lg">
          <p className="text-base mb-6 text-justify">
            Pregnancy is often described as a time of joy and preparation. But for one Denver mother —
            we’ll call her <em>Maria</em> — it was a season filled with fear, uncertainty, and a question she
            could no longer avoid: <strong>Who is the father of my baby?</strong>
          </p>

          <p className="text-base mb-6 text-justify">
            Maria had recently left an abusive relationship. In the middle of rebuilding her life,
            she learned she was pregnant. What she needed wasn’t judgment — it was safety, clarity,
            and compassion.
          </p>

          <p className="text-base mb-6 text-justify">
            When Maria contacted <span className="font-semibold text-[#2C6FA6]">Mile High DNA Testing</span>,
            she was within the safe testing window for a non-invasive prenatal paternity test.
            Her greatest concern wasn’t accuracy — it was protecting her unborn child.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">
            Safe, Non-Invasive Prenatal Paternity Testing
          </h3>

          <p className="text-base mb-6 text-justify">
            We carefully explained that non-invasive prenatal paternity testing involves only a simple
            blood draw from the mother and cheek swabs from the alleged fathers. There is
            <strong> no risk to the baby</strong>.
          </p>

          <p className="text-base mb-6 text-justify">
            Our partner AABB-accredited laboratory pioneered this testing method and is the
            <strong> only AABB-accredited prenatal lab whose results are admissible in court</strong>.
            The test is also supported by the American Pregnancy Association, meeting the highest
            standards for safety and reliability.
          </p>

          <p className="text-base mb-6 text-justify">
            Maria also learned that if more than one man could be the father, multiple alleged fathers
            could be tested safely and confidentially at the same time — without delay or added risk.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">
            Compassion Through Every Step
          </h3>

          <p className="text-base mb-6 text-justify">
            From the first phone call to the moment results were ready, our team stayed connected.
            Every question, every concern, and every moment of uncertainty was met with empathy
            and professionalism.
          </p>

          <p className="text-base mb-6 text-justify">
            When Maria received her results, the weight she had carried for months began to lift.
            She finally had the clarity she needed to make informed decisions for herself and her child.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">
            More Than a Test — A Path Forward
          </h3>

          <p className="text-base mb-6 text-justify">
            At <span className="font-semibold text-[#2C6FA6]">Mile High DNA Testing</span>, every test tells a story.
            Sometimes it’s about reassurance. Sometimes it’s about safety.
            And sometimes it’s about empowerment.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">
            Test Information & Turnaround Times
          </h3>

          <ul className="list-disc ml-6 space-y-3 mb-6">
            <li>Results typically available in 7–10 business days after samples reach the lab</li>
            <li>Expedited options available with results in as little as 3 business days</li>
            <li>Multiple alleged fathers can be tested safely and confidentially</li>
          </ul>

          <h3 className="text-2xl font-bold mt-10 mb-4">
            Book Your Confidential Appointment Today
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
            — real stories, safe answers, and compassionate care when it matters most.
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

export default PrenatalPaternityTestingDenver;
