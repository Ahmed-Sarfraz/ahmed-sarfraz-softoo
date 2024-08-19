import React from "react";
import {
  ProductColorBox,
  ProductColorText,
  ProductColorWrapper,
} from "./ProductCardColour.styles";
import ChildrenNodeProps from "../../../../../interfaces/ChildrenNode";

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
