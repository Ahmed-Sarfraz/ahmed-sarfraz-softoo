import { CardContainer, CardWrapper } from "../ProductCard/ProductCard.styles";
import ProductComponent from "../ProductCard/ProductCardComponent";

export default function ProductsListing({ products }) {
  return (
    <CardContainer>
      {products.map((product) => (
        <CardWrapper key={product.id}>
          <ProductComponent product={product} />
        </CardWrapper>
      ))}
    </CardContainer>
  );
}
