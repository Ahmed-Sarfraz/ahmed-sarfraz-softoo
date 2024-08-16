import { useContext } from "react";
import ProductCardContext from "../../context/ProductCardContext";
import { ProductPrice } from "../ProductCard.styles";

const ProductCardPrice = () => {
  const { price } = useContext(ProductCardContext);
  return <ProductPrice>${price}</ProductPrice>;
};
export default ProductCardPrice;
