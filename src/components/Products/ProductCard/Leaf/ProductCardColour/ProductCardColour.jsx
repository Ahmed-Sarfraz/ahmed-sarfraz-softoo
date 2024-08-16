import {
  ProductColorBox,
  ProductColorText,
  ProductColorWrapper,
} from "./ProductCardColour.styles";

const ProductCardColour = ({ children }) => {
  return <ProductColorWrapper>{children}</ProductColorWrapper>;
};

ProductCardColour.Text = ProductColorText;
ProductCardColour.Box = ProductColorBox;

export default ProductCardColour;
