import { useContext } from "react";
import ProductCardContext from "src/components/Products/context/ProductCardContext";
import { ProductPrice } from "src/components/Products/ProductCard/ProductCard.styles";

const ProductCardPrice = () => {
  const product = useContext(ProductCardContext);
  return <ProductPrice>${product?.price.toFixed(2)}</ProductPrice>;
};

export default ProductCardPrice;
