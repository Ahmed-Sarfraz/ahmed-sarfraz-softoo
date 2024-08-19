import { useContext } from "react";
import ProductCardContext from "src/components/Products/context/ProductCardContext";
import {
  CardImage,
  CardImageWrapper,
} from "src/components/Products/ProductCard/ProductCard.styles";

const ProductCardImage = () => {
  const product = useContext(ProductCardContext);
  return (
    <CardImageWrapper>
      <CardImage
        src={product?.img ?? "/assets/images/placeholder.jpg"}
        alt={product?.name}
      />
    </CardImageWrapper>
  );
};

export default ProductCardImage;
