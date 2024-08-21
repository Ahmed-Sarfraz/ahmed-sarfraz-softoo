import React from "react";
import NoProductsMessage from "src/components/Common/Leaf/NoProductsMessage/NoProductsMessage";
import {
  CardContainer,
  CardWrapper,
} from "src/components/Products/ProductCard/ProductCard.styles";
import ProductCardComponent from "src/components/Products/ProductCard/ProductCardComponent";
import Product from "src/interfaces/Product";

type ProductsListingProps = {
  products?: Product[];
};

const ProductsListing: React.FC<ProductsListingProps> = ({ products = [] }) => {
  if (!products.length) return <NoProductsMessage />;
  return (
    <CardContainer data-testid="products-container">
      {products.map((product) => (
        <CardWrapper data-testid={`product-${product.id}`} key={product.id}>
          <ProductCardComponent product={product} />
        </CardWrapper>
      ))}
    </CardContainer>
  );
};

export default ProductsListing;
