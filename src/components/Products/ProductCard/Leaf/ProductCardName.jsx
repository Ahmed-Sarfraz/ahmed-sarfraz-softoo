import { useContext } from "react";
import { ProductName } from "../ProductCard.styles";
import ProductCardContext from "../../context/ProductCardContext";

const ProductCardName = () => {
  const { name } = useContext(ProductCardContext);
  return <ProductName>{name}</ProductName>;
};
export default ProductCardName;
