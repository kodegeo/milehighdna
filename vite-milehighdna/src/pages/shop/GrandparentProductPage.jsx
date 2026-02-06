import React from "react";
import { useParams, Navigate } from "react-router-dom";
import ProductDetailTemplate from "../../components/shop/ProductDetailTemplate";
import { getGrandparentProductBySlug } from "../../data/grandparentProducts";
import grandparentBox from "../../assets/images/shop/grandparent-box.png";

const GrandparentProductPage = () => {
  const { productSlug } = useParams();
  const product = getGrandparentProductBySlug(productSlug);

  if (!product) {
    return <Navigate to="/shop/grandparent-dna-test" replace />;
  }

  return (
    <ProductDetailTemplate
      product={product}
      image={grandparentBox}
      canonicalUrl={`https://milehighdnatesting.com/shop/grandparent-dna-test/${product.slug}`}
      metaTitle={`${product.title} | Mile High DNA`}
      breadcrumbParentUrl="/shop/grandparent-dna-test"
    />
  );
};

export default GrandparentProductPage;
