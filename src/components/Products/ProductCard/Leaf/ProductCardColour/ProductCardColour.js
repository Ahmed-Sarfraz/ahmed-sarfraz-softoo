import React from "react";
import {
  ProductColorBox,
  ProductColorText,
  ProductColorWrapper,
} from "./ProductCardColour.styles";

const ProductCardColour = ({ children }) => {
  return <ProductColorWrapper>{children}</ProductColorWrapper>;
};

// Attach Text and Box as subcomponents
ProductCardColour.Text = ProductColorText;
ProductCardColour.Box = ProductColorBox;

export default ProductCardColour;
