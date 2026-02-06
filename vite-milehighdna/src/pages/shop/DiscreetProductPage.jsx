import React from "react";
import { useParams, Navigate } from "react-router-dom";
import ProductDetailTemplate from "../../components/shop/ProductDetailTemplate";
import { getDiscreetProductBySlug } from "../../data/discreetProducts";
import discreetBox from "../../assets/images/shop/discreet-box.png";

const DiscreetProductPage = () => {
  const { productSlug } = useParams();
  const product = getDiscreetProductBySlug(productSlug);

  if (!product) {
    return <Navigate to="/shop/discreet-dna-test" replace />;
  }

  return (
    <ProductDetailTemplate
      product={product}
      image={discreetBox}
      canonicalUrl={`https://milehighdnatesting.com/shop/discreet-dna-test/${product.slug}`}
      metaTitle={`${product.title} | Mile High DNA`}
      breadcrumbParentUrl="/shop/discreet-dna-test"
    />
  );
};

export default DiscreetProductPage;
