import { useContext } from "react";
import ProductCardContext from "../../../context/ProductCardContext";
import ProductCardColour from "./ProductCardColour";
const ProductCardColourComponent = () => {
  const { colour } = useContext(ProductCardContext);
  return (
    <ProductCardColour>
      <ProductCardColour.Text>{colour}</ProductCardColour.Text>
      <ProductCardColour.Box colour={colour} />
    </ProductCardColour>
  );
};

export default ProductCardColourComponent;
