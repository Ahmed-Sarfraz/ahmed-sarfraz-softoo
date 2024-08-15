import React, { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children, initialProducts }) => {
  const [filter, setFilter] = useState(null);
  const [products, setProducts] = useState(initialProducts);
  useEffect(() => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.colour === filter)
    );
  }, [filter]);

  const removeProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, removeProduct, setFilter }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
