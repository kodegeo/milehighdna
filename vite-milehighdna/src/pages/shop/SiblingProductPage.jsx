import React from "react";
import { useParams, Navigate } from "react-router-dom";
import ProductDetailTemplate from "../../components/shop/ProductDetailTemplate";
import { getSiblingProductBySlug } from "../../data/siblingProducts";
import siblingBox from "../../assets/images/shop/sibling-box.png";

const SiblingProductPage = () => {
  const { productSlug } = useParams();
  const product = getSiblingProductBySlug(productSlug);

  if (!product) {
    return <Navigate to="/shop/sibling-dna-test" replace />;
  }

  return (
    <ProductDetailTemplate
      product={product}
      image={siblingBox}
      canonicalUrl={`https://milehighdnatesting.com/shop/sibling-dna-test/${product.slug}`}
      metaTitle={`${product.title} | Mile High DNA`}
      breadcrumbParentUrl="/shop/sibling-dna-test"
    />
  );
};

export default SiblingProductPage;
