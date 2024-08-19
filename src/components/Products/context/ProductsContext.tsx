import React, { createContext, useState } from "react";
import Product from "../../../interfaces/Product";
import { ProductsContextType, ProductsProviderProps } from "./types";

export const ProductsContext = createContext<ProductsContextType | null>(null);

export const ProductsProvider: React.FC<ProductsProviderProps> = ({
  children,
  initialProducts = [],
}) => {
  const [filter, setFilter] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const removeProduct = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, removeProduct, setFilter, filter }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
