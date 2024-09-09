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
        src={product?.images[0] ?? "/assets/images/placeholder.jpg"}
        alt={product?.title}
      />
    </CardImageWrapper>
  );
};

export default ProductCardImage;
