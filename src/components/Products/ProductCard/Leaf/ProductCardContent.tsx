import { CardContent } from "src/components/Products/ProductCard/ProductCard.styles";
import ChildrenNodeProps from "src/interfaces/ChildrenNode";

const ProductCardContent: React.FC<ChildrenNodeProps> = ({ children }) => {
  return <CardContent>{children}</CardContent>;
};

export default ProductCardContent;
