import React from "react";
import {
  ProductColorBox,
  ProductColorText,
  ProductColorWrapper,
} from "src/components/Products/ProductCard/Leaf/ProductCardColour/ProductCardColour.styles";
import ChildrenNodeProps from "src/interfaces/ChildrenNodeProps";

interface ProductCardColourProps extends React.FC<ChildrenNodeProps> {
  Text: typeof ProductColorText;
  Box: typeof ProductColorBox;
}

const ProductCardColour: ProductCardColourProps = ({ children }) => {
  return <ProductColorWrapper>{children}</ProductColorWrapper>;
};

ProductCardColour.Text = ProductColorText;
ProductCardColour.Box = ProductColorBox;

export default ProductCardColour;
