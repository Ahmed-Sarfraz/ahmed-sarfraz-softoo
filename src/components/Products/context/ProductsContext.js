import React, { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children, initialProducts = [] }) => {
  const [filter, setFilter] = useState([]);
  const [products, setProducts] = useState(initialProducts);

  const removeProduct = (id) => {
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
