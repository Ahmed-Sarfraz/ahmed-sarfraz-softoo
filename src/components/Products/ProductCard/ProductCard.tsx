import ProductCardRatingComponent from "src/components/Products/ProductCard/Leaf/ProductCardRating/ProductCardRatingComponent";
import ProductCardContent from "src/components/Products/ProductCard/Leaf/ProductCardContent";
import ProductCardImage from "src/components/Products/ProductCard/Leaf/ProductCardImage";
import ProductCardName from "src/components/Products/ProductCard/Leaf/ProductCardName";
import ProductCardPrice from "src/components/Products/ProductCard/Leaf/ProductCardPrice";
import { Card } from "src/components/Products/ProductCard/ProductCard.styles";
import ChildrenNodeProps from "src/interfaces/ChildrenNodeProps";

const ProductCard: React.FC<ChildrenNodeProps> & {
  Image: typeof ProductCardImage;
  Rating: typeof ProductCardRatingComponent;
  Content: typeof ProductCardContent;
  Name: typeof ProductCardName;
  Price: typeof ProductCardPrice;
} = ({ children }) => {
  return <Card>{children}</Card>;
};

ProductCard.Image = ProductCardImage;
ProductCard.Rating = ProductCardRatingComponent;
ProductCard.Content = ProductCardContent;
ProductCard.Name = ProductCardName;
ProductCard.Price = ProductCardPrice;

export default ProductCard;
