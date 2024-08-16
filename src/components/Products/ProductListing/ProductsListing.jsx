import NoProductsMessage from "../../Common/Leaf/NoProductsMessage/NoProductsMessage";
import { CardContainer, CardWrapper } from "../ProductCard/ProductCard.styles";
import ProductComponent from "../ProductCard/ProductCardComponent";
import { productPropTypes } from "../ProductCard/productPropTypes";
import PropTypes from "prop-types";
export default function ProductsListing({ products }) {
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
}
ProductsListing.defaultProps = {
  products: [],
};

ProductsListing.propTypes = {
  products: PropTypes.arrayOf(productPropTypes).isRequired,
};
