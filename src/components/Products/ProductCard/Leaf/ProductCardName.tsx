import { useContext } from "react";
import ProductCardContext from "src/components/Products/context/ProductCardContext";
import { ProductName } from "src/components/Products/ProductCard/ProductCard.styles";

const ProductCardName = () => {
  const product = useContext(ProductCardContext);
  return <ProductName className="clamp-text">{product?.title}</ProductName>;
};

export default ProductCardName;
