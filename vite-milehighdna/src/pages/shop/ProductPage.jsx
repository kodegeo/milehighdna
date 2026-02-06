import React from "react";
import { useParams, Navigate } from "react-router-dom";
import ProductDetailTemplate from "../../components/shop/ProductDetailTemplate";
import { getProductByKey } from "../../data/productCatalog";
import paternityBox from "../../assets/images/shop/paternity-box.png";
import grandparentBox from "../../assets/images/shop/grandparent-box.png";
import siblingBox from "../../assets/images/shop/sibling-box.png";
import discreetBox from "../../assets/images/shop/discreet-box.png";

const CATEGORY_IMAGES = {
  paternity: paternityBox,
  grandparent: grandparentBox,
  sibling: siblingBox,
  discreet: discreetBox,
};

/**
 * Unified product detail page that loads product data from PRODUCT_CATALOG.
 * Route: /shop/product/:productKey
 */
const ProductPage = () => {
  const { productKey } = useParams();
  const product = getProductByKey(productKey);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const image = CATEGORY_IMAGES[product.category] || paternityBox;
  const categoryUrl = `/shop/${product.categorySlug}`;

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
      canonicalUrl={`https://milehighdnatesting.com/shop/product/${productKey}`}
      metaTitle={`${product.name} | Mile High DNA`}
      breadcrumbParentUrl={categoryUrl}
    />
  );
};

export default ProductPage;
