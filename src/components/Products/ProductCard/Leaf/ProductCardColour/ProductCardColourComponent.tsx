import { useContext } from "react";
import ProductCardContext from "../../../context/ProductCardContext";
import ProductCardColour from "./ProductCardColour";

const ProductCardColourComponent = () => {
  const product = useContext(ProductCardContext);
  return (
    <ProductCardColour>
      <ProductCardColour.Text>{product?.colour}</ProductCardColour.Text>
      <ProductCardColour.Box colour={product?.colour} />
    </ProductCardColour>
  );
};

export default ProductCardColourComponent;
