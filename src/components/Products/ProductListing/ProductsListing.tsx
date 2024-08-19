import React from "react";
import NoProductsMessage from "../../Common/Leaf/NoProductsMessage/NoProductsMessage";
import { CardContainer, CardWrapper } from "../ProductCard/ProductCard.styles";
import ProductComponent from "../ProductCard/ProductCardComponent";
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
          <ProductComponent product={product} />
        </CardWrapper>
      ))}
    </CardContainer>
  );
};

export default ProductsListing;
