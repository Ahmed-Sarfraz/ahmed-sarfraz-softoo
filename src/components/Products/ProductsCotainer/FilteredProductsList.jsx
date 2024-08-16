import { useContext, useEffect, useMemo } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ProductsListing from "../ProductListing/ProductsListing";
import PropTypes from "prop-types";
import { productPropTypes } from "../ProductCard/productPropTypes";

const FilteredProductsList = ({ initialProducts = [] }) => {
  const { products, setProducts, filter } = useContext(ProductsContext);
  useEffect(() => {
    const productsWithQuantities = initialProducts.map((item) => ({
      ...item,
      quantity: 1,
    }));
    setProducts(productsWithQuantities);
  }, [initialProducts]);

  const filteredProducts = useMemo(() => {
    if (filter.length === 0) {
      return products;
    }
    return products.filter((product) => filter.includes(product.colour));
  }, [products, filter]);

  return <ProductsListing products={filteredProducts} />;
};

ProductsListing.propTypes = {
  initialProducts: PropTypes.arrayOf(productPropTypes).isRequired,
};

export default FilteredProductsList;
