import React, { createContext, useState } from "react";
import {
  ProductsContextType,
  ProductsProviderProps,
} from "src/components/Products/context/types";
import Product from "src/interfaces/Product";

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
