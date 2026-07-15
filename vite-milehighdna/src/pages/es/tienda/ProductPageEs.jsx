import React from "react";
import { useParams, Navigate } from "react-router-dom";
import ProductDetailTemplate from "../../../components/shop/ProductDetailTemplate";
import { getProductEsByKey } from "../../../data/productCatalogEs";
import paternityBox from "../../../assets/images/shop/paternity-box.png";
import grandparentBox from "../../../assets/images/shop/grandparent-box.png";
import siblingBox from "../../../assets/images/shop/sibling-box.png";
import discreetBox from "../../../assets/images/shop/discreet-box.png";

const CATEGORY_IMAGES = {
  paternity: paternityBox,
  grandparent: grandparentBox,
  sibling: siblingBox,
  discreet: discreetBox,
};

// Full Spanish UI strings for ProductDetailTemplate.
// Checkout pages remain in English for now (interim, per owner).
const STRINGS_ES = {
  trustBullets: [
    "Preciso y Confidencial",
    "Se Analizan 24 Marcadores Genéticos",
    "Envío por Correo Incluido",
  ],
  whatsIncluded: [
    "Hisopos y materiales para la recolección de ADN",
    "Instrucciones paso a paso",
    "Empaque de devolución prepagado",
    "Análisis seguro de laboratorio",
    "Acceso a resultados en línea",
  ],
  howItWorks: [
    { step: 1, title: "Ordene su kit", text: "Complete su pedido en línea. Su kit se envía de forma segura a su domicilio." },
    { step: 2, title: "Recolecte las muestras", text: "Siga las sencillas instrucciones desde casa." },
    { step: 3, title: "Envíe las muestras", text: "Use el sobre prepagado para devolver las muestras al laboratorio." },
    { step: 4, title: "Reciba sus resultados", text: "Obtenga resultados confidenciales de forma segura, generalmente dentro de 2 a 3 días hábiles después de la recepción en el laboratorio." },
  ],
  importantNote:
    "Esta prueba es solo para uso privado y no es admisible en corte. Para pruebas legales o de inmigración, utilice nuestros servicios en persona.",
  breadcrumbHome: "Inicio",
  breadcrumbShop: "Tienda",
  breadcrumbDefaultParent: "Kits de Prueba de ADN",
  plusShipping: "+ envío",
  orderFormTitle: "Ordene su prueba",
  firstNamePlaceholder: "Nombre *",
  lastNamePlaceholder: "Apellido *",
  emailPlaceholder: "Correo Electrónico *",
  phonePlaceholder: "Teléfono",
  fillDetailsAlert: "Por favor complete sus datos antes de continuar.",
  loading: "Cargando…",
  buyNowUS: (price) => `Comprar Ahora — EE. UU. ($${price} + envío)`,
  buyNowInternational: (price) => `Pedido Internacional ($${price} + envío)`,
  usShippingLabel: (amount) => `Envío en EE. UU.: $${amount}`,
  intlShippingLabel: (amount) => `Envío internacional (desde $${amount} — varía según el país)`,
  howItWorksTitle: "Cómo funciona",
  whatsIncludedTitle: "Qué incluye",
  compareOptions: "← Comparar opciones de prueba",
};

/**
 * Spanish product detail page. Loads Spanish display copy from
 * productCatalogEs while reusing the same productKeys and checkout flow.
 * Route: /es/tienda/producto/:productKey
 */
const ProductPageEs = () => {
  const { productKey } = useParams();
  const product = getProductEsByKey(productKey);

  if (!product) {
    return <Navigate to="/es/tienda" replace />;
  }

  const image = CATEGORY_IMAGES[product.category] || paternityBox;

  // Map catalog product to ProductDetailTemplate format
  const templateProduct = {
    title: product.name,
    shortDescription: product.shortDescription,
    unitPrice: product.price,
    metaDescription: product.metaDescription,
    breadcrumbParentLabel: product.breadcrumbParentLabel,
    productKey: productKey, // Pass productKey instead of stripePriceId
  };

  return (
    <ProductDetailTemplate
      product={templateProduct}
      image={image}
      canonicalUrl={`https://milehighdnatesting.com/es/tienda/producto/${productKey}`}
      metaTitle={`${product.name} | Mile High DNA`}
      breadcrumbParentUrl="/es/tienda"
      strings={STRINGS_ES}
      lang="es"
      homeUrl="/es"
      shopUrl="/es/tienda"
    />
  );
};

export default ProductPageEs;
