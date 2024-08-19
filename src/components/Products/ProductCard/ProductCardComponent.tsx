import React from "react";
import ProductCardContext from "src/components/Products/context/ProductCardContext";
import ProductCard from "src/components/Products/ProductCard/ProductCard";
import ProductQuantity from "src/components/Products/ProductQuantity/ProductQuantity";
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
