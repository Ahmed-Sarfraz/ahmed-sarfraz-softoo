import React from "react";
import ProductCard from "./ProductCard";
import ProductQuantity from "../ProductQuantity/ProductQuantity";
import ProductCardContext from "../context/ProductCardContext";
import Product from "src/interfaces/Product";

type ProductComponentProps = {
  product: Product;
};

const ProductComponent: React.FC<ProductComponentProps> = ({ product }) => {
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
