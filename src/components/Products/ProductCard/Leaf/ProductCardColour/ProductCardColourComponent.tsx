import { useContext } from "react";
import ProductCardContext from "src/components/Products/context/ProductCardContext";
import ProductCardColour from "src/components/Products/ProductCard/Leaf/ProductCardColour/ProductCardColour";

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
