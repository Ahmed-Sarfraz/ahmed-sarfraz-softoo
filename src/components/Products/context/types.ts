import { ReactNode } from "react";
import Product from "src/interfaces/Product";

export type ProductsContextType = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  removeProduct: (id: number) => void;
  filter: string[];
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
};

export type ProductsProviderProps = {
  children: ReactNode;
  initialProducts?: Product[];
};
