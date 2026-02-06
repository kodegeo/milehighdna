import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import shopHero from "../../assets/images/banner_bg_Res_2.png";
import paternityImg from "../../assets/images/shop/paternity-box.png";
import grandparentImg from "../../assets/images/shop/grandparent-box.png";
import siblingImg from "../../assets/images/shop/sibling-box.png";
import discreetImg from "../../assets/images/shop/discreet-box.png";

const ShopCollection = () => {
  const collections = [
    {
      title: "Paternity DNA Test",
      description:
        "Designed to help confirm biological fatherhood for personal knowledge and peace of mind.",
      link: "/shop/paternity-dna-test",
      image: paternityImg,
    },
    {
      title: "Grandparent DNA Test",
      description:
        "Used when a parent is unavailable, helping establish biological relationships across generations.",
      link: "/shop/grandparent-dna-test",
      image: grandparentImg,
    },
    {
      title: "Sibling DNA Test",
      description:
        "Used to determine whether two individuals share one or both biological parents.",
      link: "/shop/sibling-dna-test",
      image: siblingImg,
    },
    {
      title: "Discreet DNA Test",
      description:
        "Private testing options using personal items, designed for maximum confidentiality.",
      link: "/shop/discreet-dna-test",
      image: discreetImg,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <html lang="en" />
        <title>DNA Relationship Test Kits | Mile High DNA</title>
        <meta
          name="description"
          content="At-home DNA relationship testing kits designed for peace of mind, privacy, and accuracy. Serving individuals and families nationwide."
        />
        <link rel="canonical" href="https://milehighdnatesting.com/shop" />
      </Helmet>

      {/* HERO */}
      <section
        className="relative h-[320px] md:h-[420px] bg-cover bg-center"
        style={{ backgroundImage: `url(${shopHero})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
            DNA Relationship Test Kits
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl">
            Thoughtfully designed at-home DNA tests to help individuals and
            families better understand their biological connections.
          </p>
        </div>
      </section>

      {/* PRODUCT ROW */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {collections.map((collection) => (
              <div key={collection.link} className="text-center">
                <div className="mx-auto mb-6 w-full max-w-[240px] aspect-[4/3] flex items-center justify-center bg-white">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  {collection.title}
                </h2>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {collection.description}
                </p>

                <Link
                  to={collection.link}
                  className="inline-block text-blue-600 font-medium hover:text-blue-800"
                >
                  Buy Now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION / WHY WE DO THIS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Why We Do This
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At Mile High DNA Testing, we believe access to accurate and ethical
            DNA testing should be simple, private, and respectful. Questions
            about family and biological relationships can be deeply personal,
            and we exist to help people find clarity without pressure or judgment.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            While our roots are in <a href="https://milehighdnatesting.com/dna-testing-colorado" className="text-blue-600 hover:text-blue-800 transition duration-300">Colorado</a>, our mission extends far beyond any
            single city. We serve individuals and families across the country
            who are seeking answers, understanding, and peace of mind through
            reliable DNA testing.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            We are committed to community, transparency, and responsible testing
            practices — designing product experiences that respect both the
            science and the human stories behind every result.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600">
            Looking for court-admissible or in-person DNA testing?{" "}
            <Link
              to="/services"
              className="text-blue-600 hover:text-blue-800 font-medium underline"
            >
              View our services
            </Link>
            .
          </p>
        </div>
      </footer>
    </main>
  );
};

export default ShopCollection;
