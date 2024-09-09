import React from "react";
import ProductCardContext from "src/components/Products/context/ProductCardContext";
import ProductCard from "src/components/Products/ProductCard/ProductCard";
import { ProductDetails } from "src/components/Products/ProductCard/ProductCard.styles";
import ProductQuantity from "src/components/Products/ProductQuantity/ProductQuantity";
import Product from "src/interfaces/Product";

type ProductCardComponentProps = {
  product: Product;
};

const ProductCardComponent: React.FC<ProductCardComponentProps> = ({
  product,
}) => {
  console.log("ProductCardComponent rerendered");

  return (
    <ProductCardContext.Provider value={product}>
      <ProductCard>
        <ProductCard.Image />
        <ProductCard.Content>
          <ProductCard.Name />
          <div>
            <ProductDetails>
              <ProductCard.Price />
              <ProductCard.Rating />
            </ProductDetails>
            <ProductQuantity />
          </div>
        </ProductCard.Content>
      </ProductCard>
    </ProductCardContext.Provider>
  );
};

export default React.memo(ProductCardComponent);
