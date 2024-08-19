import { Card } from "./ProductCard.styles";
import ProductCardImage from "./Leaf/ProductCardImage";
import ProductCardContent from "./Leaf/ProductCardContent";
import ProductCardName from "./Leaf/ProductCardName";
import ProductCardPrice from "./Leaf/ProductCardPrice";
import ProductCardColourComponent from "./Leaf/ProductCardColour/ProductCardColourComponent";
import ChildrenNodeProps from "src/interfaces/ChildrenNode";

const ProductCard: React.FC<ChildrenNodeProps> & {
  Image: typeof ProductCardImage;
  Colour: typeof ProductCardColourComponent;
  Content: typeof ProductCardContent;
  Name: typeof ProductCardName;
  Price: typeof ProductCardPrice;
} = ({ children }) => {
  return <Card>{children}</Card>;
};

ProductCard.Image = ProductCardImage;
ProductCard.Colour = ProductCardColourComponent;
ProductCard.Content = ProductCardContent;
ProductCard.Name = ProductCardName;
ProductCard.Price = ProductCardPrice;

export default ProductCard;
