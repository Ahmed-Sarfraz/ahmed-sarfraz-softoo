import { useContext, useMemo } from "react";
import MultiSelect from "../../Common/Form/MultiSelect/MultiSelect";
import { ProductsContext } from "../context/ProductsContext";

export default function ProductColourFilter() {
  const { setFilter, products } = useContext(ProductsContext);

  const colourFilters = useMemo(
    () => [...new Set(products.map((product) => product.colour))],
    [products]
  );
  if (!products.length) return null;

  const handleFilterChange = (options) => {
    setFilter(options);
  };
  return (
    <MultiSelect
      data-testid="filter-colour"
      placeholder="Select colour"
      options={colourFilters}
      onChange={handleFilterChange}
    />
  );
}
