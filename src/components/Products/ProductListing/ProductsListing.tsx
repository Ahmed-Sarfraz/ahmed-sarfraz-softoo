import React from "react";
import NoProductsMessage from "src/components/Common/Leaf/NoProductsMessage/NoProductsMessage";
import {
  CardContainer,
  CardWrapper,
} from "src/components/Products/ProductCard/ProductCard.styles";
import ProductCardComponent from "src/components/Products/ProductCard/ProductCardComponent";
import useLazyLoadList from "src/hooks/useLazyLoadList";
import Product from "src/interfaces/Product";

type ProductsListingProps = {
  products?: Product[];
};

const ProductsListing: React.FC<ProductsListingProps> = ({ products = [] }) => {
  const { visibleItems: productsList, loaderRef } =
    useLazyLoadList<Product>(products);

  if (!productsList.length) return <NoProductsMessage />;
  return (
    <CardContainer data-testid="products-container">
      {productsList.map((product) => (
        <CardWrapper data-testid={`product-${product.id}`} key={product.id}>
          <ProductCardComponent product={product} />
        </CardWrapper>
      ))}
      <div ref={loaderRef} style={{ height: "1px" }}></div>
    </CardContainer>
  );
};

export default ProductsListing;
