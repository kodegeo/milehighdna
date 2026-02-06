import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const TRUST_BULLETS = [
  "Accurate & Confidential",
  "24 Genetic Markers Tested",
  "Mail-In Testing Included",
];

const HOW_IT_WORKS_STEPS = [
  { title: "Order your test kit", text: "Choose your test and complete your order online. Your kit ships securely to you." },
  { title: "Collect samples at home", text: "Follow the simple instructions. Most tests use easy cheek swab collection." },
  { title: "Mail samples to the lab", text: "Use the prepaid label to return samples. All handled with strict confidentiality." },
  { title: "Receive secure results", text: "Results delivered privately, typically within 2–3 business days after lab receipt." },
];

const MISSION_COPY =
  "At Mile High DNA Testing, we believe DNA testing should be accurate, ethical, and respectful. We serve individuals and families nationwide with a commitment to privacy, clarity, and responsible testing practices.";

const DEFAULT_WHAT_INCLUDED = [
  "DNA collection materials",
  "Step-by-step instructions",
  "Pre-paid return packaging",
  "Secure laboratory analysis",
  "Online results access",
];

/**
 * Reusable Product Detail Page (PDP) template for at-home DNA test kits.
 * Used across Paternity, Grandparent, Sibling, Discreet, Peace of Mind, and Add-ons.
 *
 * Props:
 * - productName (H1)
 * - valueProposition (one line)
 * - heroImage
 * - badges (optional string[], e.g. ["Private Use", "At-Home Testing"])
 * - compareTestUrl (optional, for "Compare Test Options" link)
 * - primaryCtaHref (optional – if set, CTA is a link; for checkout flow later use this or render custom CTA in slot)
 * - primaryCtaLabel (default "Select This Test")
 * - aboutCopy (paragraph for "About This Test")
 * - keyDetails (array of { label, value })
 * - whatsIncluded (optional string[], defaults to DEFAULT_WHAT_INCLUDED)
 * - whoFor (string[])
 * - notFor (string[])
 * - addOns (optional array of { name, description, benefit, pricePlaceholder? })
 * - relatedProducts (array of { name, url })
 * - canonicalUrl, metaTitle, metaDescription
 * - breadcrumbParentUrl, breadcrumbParentLabel (e.g. /shop/paternity-dna-test, "Paternity DNA Tests")
 * - children (optional – e.g. checkout form section rendered after hero)
 */
const ShopProductDetailLayout = ({
  productName,
  valueProposition,
  heroImage,
  badges = [],
  compareTestUrl,
  primaryCtaHref,
  primaryCtaLabel = "Select This Test",
  primaryCtaAsButton,
  onPrimaryCtaClick,
  aboutCopy,
  keyDetails = [],
  whatsIncluded = DEFAULT_WHAT_INCLUDED,
  whoFor = [],
  notFor = [],
  addOns = [],
  relatedProducts = [],
  canonicalUrl,
  metaTitle,
  metaDescription,
  breadcrumbParentUrl = "/shop",
  breadcrumbParentLabel = "Shop",
  children,
}) => {
  const renderPrimaryCta = () => {
    if (primaryCtaAsButton && typeof onPrimaryCtaClick === "function") {
      return (
        <button
          type="button"
          onClick={onPrimaryCtaClick}
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition font-semibold"
        >
          {primaryCtaLabel}
        </button>
      );
    }
    if (primaryCtaHref) {
      const isHash = primaryCtaHref.startsWith("#");
      const className = "inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition font-semibold";
      if (isHash) {
        return (
          <a href={primaryCtaHref} className={className}>
            {primaryCtaLabel}
          </a>
        );
      }
      return (
        <Link to={primaryCtaHref} className={className}>
          {primaryCtaLabel}
        </Link>
      );
    }
    return (
      <a
        href="#select-test"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition font-semibold"
      >
        {primaryCtaLabel}
      </a>
    );
  };

  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <html lang="en" />
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-gray-700">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gray-700">Shop</Link>
          {breadcrumbParentUrl !== "/shop" && (
            <>
              <span className="mx-2">/</span>
              <Link to={breadcrumbParentUrl} className="hover:text-gray-700">{breadcrumbParentLabel}</Link>
            </>
          )}
          <span className="mx-2">/</span>
          <span className="text-gray-900">{productName}</span>
        </nav>

        {/* 1. Hero (image left, copy right; mobile: image above) */}
        <section className="bg-white border-b border-gray-200 pb-12 md:pb-14">
          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
            <div className="md:w-2/5 flex-shrink-0 order-2 md:order-1">
              <div className="aspect-square max-w-sm mx-auto md:mx-0 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                <img src={heroImage} alt="" className="w-full h-full object-contain p-4" />
              </div>
            </div>
            <div className="md:w-3/5 order-1 md:order-2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {productName}
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                {valueProposition}
              </p>
              <ul className="space-y-2 mb-4">
                {TRUST_BULLETS.map((bullet) => (
                  <li key={bullet} className="flex items-center text-gray-700">
                    <span className="text-blue-600 mr-2">✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              {badges.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {badges.map((badge) => (
                    <span
                      key={badge}
                      className="inline-block text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex flex-wrap gap-4">
                {renderPrimaryCta()}
                {compareTestUrl && (
                  <Link
                    to={compareTestUrl}
                    className="inline-block text-blue-600 font-semibold px-6 py-3 rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition"
                  >
                    Compare Test Options
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        {children}

        {/* 2. About This Test */}
        <section className="py-12 md:py-14 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-[#1A3C59] mb-4">About This Test</h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            {aboutCopy}
          </p>
        </section>

        {/* 3. Key details grid */}
        {keyDetails.length > 0 && (
          <section className="py-12 md:py-14 bg-[#F5F7FA]">
            <h2 className="text-2xl font-bold text-[#1A3C59] mb-6">Key Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
              {keyDetails.map((item) => (
                <div key={item.label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <dt className="text-sm font-medium text-gray-500">{item.label}</dt>
                  <dd className="text-gray-900 font-medium">{item.value}</dd>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. What's included */}
        <section className="py-12 md:py-14 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-[#1A3C59] mb-6">What&apos;s Included</h2>
          <ul className="space-y-2 text-gray-700">
            {whatsIncluded.map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-blue-600 mr-2 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 5. How it works (identical across PDPs) */}
        <section className="py-12 md:py-14 bg-[#F5F7FA]">
          <h2 className="text-2xl font-bold text-[#1A3C59] mb-8">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS_STEPS.map((step, i) => (
              <div key={i}>
                <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold mb-3">
                  {i + 1}
                </span>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Who this test is for / not for */}
        <section className="py-12 md:py-14 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-[#1A3C59] mb-6">Who This Test Is For / Not For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">This test may be right for you if:</h3>
              <ul className="space-y-2 text-gray-700">
                {whoFor.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">This test is not intended for:</h3>
              <ul className="space-y-2 text-gray-700">
                {notFor.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-gray-400 mr-2 mt-0.5">×</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 7. Optional add-ons */}
        {addOns.length > 0 && (
          <section className="py-12 md:py-14 bg-[#F5F7FA]">
            <h2 className="text-2xl font-bold text-[#1A3C59] mb-6">Optional Add-Ons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {addOns.map((addon) => (
                <div
                  key={addon.name}
                  className="bg-white rounded-xl border border-gray-200 p-6"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">{addon.name}</h3>
                  <p className="text-sm text-gray-700 mb-2">{addon.description}</p>
                  <p className="text-sm text-gray-600 mb-2">{addon.benefit}</p>
                  {addon.pricePlaceholder != null && addon.pricePlaceholder !== "" && (
                    <p className="text-sm font-medium text-gray-900">{addon.pricePlaceholder}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 8. Trust & mission */}
        <section className="py-12 md:py-14 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-[#1A3C59] mb-4">Why Mile High DNA Testing</h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            {MISSION_COPY}
          </p>
        </section>

        {/* 9. Related tests */}
        {relatedProducts.length > 0 && (
          <section className="py-12 md:py-14">
            <h2 className="text-2xl font-bold text-[#1A3C59] mb-6">Related Tests</h2>
            <ul className="flex flex-wrap gap-4">
              {relatedProducts.map((product) => (
                <li key={product.url}>
                  <Link
                    to={product.url}
                    className="text-blue-600 hover:text-blue-800 font-medium underline"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* 10. Footer */}
      <Footer />
    </main>
  );
};

export default ShopProductDetailLayout;
