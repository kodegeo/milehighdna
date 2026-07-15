import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import { getAllProductsEs } from "../../../data/productCatalogEs";

import shopHero from "../../../assets/images/banner_bg_Res_2.png";
import paternityImg from "../../../assets/images/shop/paternity-box.png";
import grandparentImg from "../../../assets/images/shop/grandparent-box.png";
import siblingImg from "../../../assets/images/shop/sibling-box.png";
import discreetImg from "../../../assets/images/shop/discreet-box.png";

const PHONE = "720-900-9342";
const PHONE_TEL = "tel:+17209009342";
const ADDRESS = "975 N Lincoln Street, Suite 205C, Denver, CO 80203";
const CALENDLY_EN = "https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment";
const CALENDLY_ES = "https://calendly.com/milehighdnatesting/cita-prueba-adn";

const CATEGORY_IMAGES = {
  paternity: paternityImg,
  grandparent: grandparentImg,
  sibling: siblingImg,
  discreet: discreetImg,
  addon: paternityImg,
};

const CATEGORY_LABELS = {
  paternity: "Pruebas de Paternidad",
  grandparent: "Pruebas de Abuelidad",
  sibling: "Pruebas de Hermandad",
  discreet: "Pruebas Discretas",
  addon: "Servicios Adicionales",
};

const CATEGORY_ORDER = ["paternity", "grandparent", "sibling", "discreet", "addon"];

const TiendaCollection = () => {
  const products = getAllProductsEs();
  const productsByCategory = CATEGORY_ORDER.map((category) => ({
    category,
    label: CATEGORY_LABELS[category],
    items: products.filter((p) => p.category === category),
  })).filter((group) => group.items.length > 0);

  const scrollToProducts = () => {
    document.getElementById("product-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Helmet>
        <html lang="es" />
        <title>Tienda de Pruebas de ADN | Mile High DNA Testing</title>
        <meta
          name="description"
          content="Kits de pruebas de ADN de relación familiar para hacer en casa, diseñados para su tranquilidad, privacidad y precisión. Servimos a personas y familias en todo el país."
        />
        <link rel="canonical" href="https://milehighdnatesting.com/es/tienda" />
      </Helmet>

      {/* Hero */}
      <section
        className="relative bg-gray-900 py-16 md:py-24 px-4 md:px-8 bg-cover bg-center"
        style={{ backgroundImage: `url(${shopHero})` }}
        aria-label="Ordene un kit profesional de prueba de ADN"
      >
        <div className="absolute inset-0 bg-black/50" aria-hidden />
        <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Ordene un Kit Profesional de Prueba de ADN en Línea
          </h1>
          <p className="mt-4 text-lg text-blue-100">
            Procesado por un laboratorio acreditado por la AABB. Preciso. Confidencial. Rápido.
          </p>

          <div className="mt-6 space-y-2 text-sm md:text-base text-blue-50">
            <p>✔ Laboratorio asociado acreditado</p>
            <p>✔ Opciones admisibles en corte disponibles</p>
            <p>✔ Resultados seguros y confidenciales</p>
            <p>✔ Atención en inglés y español</p>
          </div>

          <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
            <button
              type="button"
              onClick={scrollToProducts}
              className="bg-white text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Ordenar Kit de ADN
            </button>
            <Link
              to="/es/programar-cita"
              className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition text-center"
            >
              ¿Necesita una Prueba de ADN Legal?
            </Link>
          </div>
        </div>
      </section>

      {/* AABB Certification */}
      <section className="bg-gray-50 py-10 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 text-center">
            Por Qué Importa Trabajar con un Laboratorio Acreditado por la AABB
          </h2>

          <div className="mt-6 space-y-4 text-gray-700 text-sm md:text-base">
            <p>
              La acreditación de la AABB garantiza estrictos estándares de control de calidad
              de laboratorio, procedimientos adecuados de cadena de custodia para pruebas
              legales y resultados que cumplen con los requisitos de las cortes y de USCIS
              cuando corresponde.
            </p>
            <p>
              Mile High DNA Testing trabaja exclusivamente con laboratorios asociados
              acreditados para garantizar resultados confiables y de nivel profesional.
            </p>
          </div>
        </div>
      </section>

      {/* Test Type Differentiation */}
      <section className="bg-white py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">
              Kit de ADN en Casa (Tranquilidad)
            </h3>
            <ul className="mt-4 space-y-2 text-gray-700 text-sm md:text-base">
              <li>• Prueba para conocimiento personal</li>
              <li>• Privada y discreta</li>
              <li>• No requiere documentación legal</li>
              <li>• Opción de menor costo</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">
              Prueba de ADN Legal
            </h3>
            <ul className="mt-4 space-y-2 text-gray-700 text-sm md:text-base">
              <li>• Requerida para casos en corte</li>
              <li>• Requerida para inmigración (USCIS)</li>
              <li>• Requiere cadena de custodia</li>
              <li>• Debe programar una cita en persona</li>
            </ul>
            <Link
              to="/es/programar-cita"
              className="inline-block mt-6 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition font-semibold"
            >
              Programar Prueba Legal
            </Link>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section id="product-section" className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {productsByCategory.map((group) => (
            <div key={group.category} className="mb-14 last:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {group.label}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {group.items.map((product) => (
                  <div key={product.key} className="text-center">
                    <div className="mx-auto mb-6 w-full max-w-[240px] aspect-[4/3] flex items-center justify-center bg-white">
                      <img
                        src={CATEGORY_IMAGES[product.category] || paternityImg}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>

                    <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                      {product.shortDescription}
                    </p>

                    <p className="text-sm font-medium text-gray-900 mb-4">
                      ${product.price} <span className="text-gray-500 font-normal">+ envío</span>
                    </p>

                    <Link
                      to={`/es/tienda/producto/${product.key}`}
                      className="inline-block text-blue-600 font-medium hover:text-blue-800"
                    >
                      Comprar Ahora →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION / WHY WE DO THIS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Por Qué Hacemos Esto
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            En Mile High DNA Testing, creemos que el acceso a pruebas de ADN precisas y
            éticas debe ser simple, privado y respetuoso. Las preguntas sobre la familia
            y las relaciones biológicas pueden ser profundamente personales, y existimos
            para ayudar a las personas a encontrar claridad sin presión ni juicios.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Aunque nuestras raíces están en Colorado, nuestra misión va mucho más allá de
            una sola ciudad. Servimos a personas y familias en todo el país que buscan
            respuestas, comprensión y tranquilidad a través de pruebas de ADN confiables.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Estamos comprometidos con la comunidad, la transparencia y las prácticas de
            prueba responsables — diseñando experiencias que respetan tanto la ciencia
            como las historias humanas detrás de cada resultado.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Tome Acción Ahora</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">Si la otra parte no está disponible, aún puede avanzar. Asegure su perfil de ADN hoy y mantenga el control de sus tiempos.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CALENDLY_ES} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition">Reserve Su Cita (Español)</a>
            <a href={CALENDLY_EN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition">Appointment in English</a>
          </div>
          <p className="mt-8 text-blue-200">📍 {ADDRESS}</p>
          <p className="mt-4 text-blue-200 text-sm">Llame o envíe un mensaje de texto a nuestra oficina si no está seguro de si la documentación legal o no legal es apropiada para su situación. <a href={PHONE_TEL} className="underline font-semibold" onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: "phone_click", phone_number: PHONE }); }}>{PHONE}</a></p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600">
            ¿Busca pruebas de ADN admisibles en corte o en persona?{" "}
            <Link
              to="/es/programar-cita"
              className="text-blue-600 hover:text-blue-800 font-medium underline"
            >
              Programe una cita
            </Link>
            .
          </p>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] p-3 flex justify-between items-center z-50">
        <span className="font-semibold text-gray-900">
          Ordene su Kit de ADN
        </span>
        <button
          type="button"
          onClick={scrollToProducts}
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition"
        >
          Ordenar Ahora
        </button>
      </div>
    </main>
  );
};

export default TiendaCollection;
