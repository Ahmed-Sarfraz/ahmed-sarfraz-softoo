import { useContext } from "react";
import ProductCardContext from "src/components/Products/context/ProductCardContext";
import ProductCardRating from "src/components/Products/ProductCard/Leaf/ProductCardRating/ProductCardRating";

const ProductCardRatingComponent = () => {
  const product = useContext(ProductCardContext);
  return (
    <ProductCardRating>
      <ProductCardRating.Text>{product?.rating}</ProductCardRating.Text>
      <ProductCardRating.Star>★</ProductCardRating.Star>
    </ProductCardRating>
  );
};

export default ProductCardRatingComponent;
