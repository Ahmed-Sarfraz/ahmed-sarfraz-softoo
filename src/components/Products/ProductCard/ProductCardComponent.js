import React from "react";
import ProductCardContext from "../context/ProductCardContext";
import ProductCard from "./ProductCard";
import ProductQuantity from "../ProductQuantity/ProductQuantity";

const ProductComponent = ({ product }) => {
  return (
    <ProductCardContext.Provider value={product}>
      <ProductCard>
        <ProductCard.Image />
        <ProductCard.Content>
          <ProductCard.Name />
          <ProductCard.Price />
          <ProductCard.Colour />
        </ProductCard.Content>
      </ProductCard>
      <ProductQuantity />
    </ProductCardContext.Provider>
  );
};

export default ProductComponent;
