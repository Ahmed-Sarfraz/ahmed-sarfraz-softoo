import { createContext } from "react";
import Product from "src/interfaces/Product";

const ProductCardContext = createContext<Product | null>(null);

export default ProductCardContext;
