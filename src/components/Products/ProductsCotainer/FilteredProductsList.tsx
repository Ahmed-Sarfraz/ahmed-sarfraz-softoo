import { useContext, useEffect, useMemo } from "react";
import Product from "src/interfaces/Product";
import { ProductsContext } from "src/components/Products/context/ProductsContext";
import { ProductsContextType } from "src/components/Products/context/types";
import ProductsListing from "src/components/Products/ProductListing/ProductsListing";

type FilteredProductsListProps = {
  initialProducts: Product[];
};

const FilteredProductsList: React.FC<FilteredProductsListProps> = ({
  initialProducts = [],
}) => {
  const { products, setProducts, filter } = useContext(
    ProductsContext
  ) as ProductsContextType;

  useEffect(() => {
    setProducts(initialProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialProducts]);

  const filteredProducts = useMemo(() => {
    return filter.length === 0
      ? products
      : products.filter((product) => filter.includes(product.colour));
  }, [products, filter]);

  return <ProductsListing products={filteredProducts} />;
};

export default FilteredProductsList;
