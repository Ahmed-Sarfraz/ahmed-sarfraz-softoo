import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { productPropTypes } from "../ProductCard/productPropTypes";

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

ProductsProvider.defaultProps = {
  initialProducts: [],
};

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
  initialProducts: PropTypes.arrayOf(productPropTypes).isRequired,
};
