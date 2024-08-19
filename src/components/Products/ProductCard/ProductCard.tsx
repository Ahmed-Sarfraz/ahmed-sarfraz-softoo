import ProductCardColourComponent from "src/components/Products/ProductCard/Leaf/ProductCardColour/ProductCardColourComponent";
import ProductCardContent from "src/components/Products/ProductCard/Leaf/ProductCardContent";
import ProductCardImage from "src/components/Products/ProductCard/Leaf/ProductCardImage";
import ProductCardName from "src/components/Products/ProductCard/Leaf/ProductCardName";
import ProductCardPrice from "src/components/Products/ProductCard/Leaf/ProductCardPrice";
import { Card } from "src/components/Products/ProductCard/ProductCard.styles";
import ChildrenNodeProps from "src/interfaces/ChildrenNodeProps";

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
