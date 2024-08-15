import { useContext } from "react";
import ProductCardContext from "../../context/ProductCardContext";
import { CardImage, CardImageWrapper } from "../ProductCard.styles";

const ProductCardImage = () => {
  const { img, name } = useContext(ProductCardContext);
  return (
    <CardImageWrapper>
      <CardImage src={img} alt={name} />
    </CardImageWrapper>
  );
};
export default ProductCardImage;
