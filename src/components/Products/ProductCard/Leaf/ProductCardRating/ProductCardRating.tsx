import React from "react";
import {
  ProductRatingStart,
  ProductRatingText,
  ProductRatingWrapper,
} from "src/components/Products/ProductCard/Leaf/ProductCardRating/ProductCardRating.styles";
import ChildrenNodeProps from "src/interfaces/ChildrenNodeProps";

interface ProductRatingProps extends React.FC<ChildrenNodeProps> {
  Text: typeof ProductRatingText;
  Star: typeof ProductRatingStart;
}

const ProductRating: ProductRatingProps = ({ children }) => {
  return <ProductRatingWrapper>{children}</ProductRatingWrapper>;
};

ProductRating.Text = ProductRatingText;
ProductRating.Star = ProductRatingStart;

export default ProductRating;
