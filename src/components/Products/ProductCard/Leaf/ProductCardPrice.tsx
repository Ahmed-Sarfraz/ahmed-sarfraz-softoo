import { useContext } from "react";
import ProductCardContext from "../../context/ProductCardContext";
import { ProductPrice } from "../ProductCard.styles";

const ProductCardPrice = () => {
  const product = useContext(ProductCardContext);
  return <ProductPrice>${product?.price.toFixed(2)}</ProductPrice>;
};

export default ProductCardPrice;
