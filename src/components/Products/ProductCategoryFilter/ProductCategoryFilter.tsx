import { useContext, useMemo } from "react";
import MultiSelect from "src/components/Common/Form/MultiSelect/MultiSelect";
import { ProductsContext } from "src/components/Products/context/ProductsContext";
import { ProductsContextType } from "src/components/Products/context/types";
import { getUniquePropertyValues } from "src/utils/helpers";

export default function ProductColourFilter() {
  const { setFilter, products } = useContext(
    ProductsContext
  ) as ProductsContextType;

  const categoryFilters = useMemo(
    () => getUniquePropertyValues(products, "category"),
    [products]
  );

  if (!products.length) return null;

  const handleFilterChange = (options: string[]) => {
    setFilter(options);
  };

  return (
    <MultiSelect
      data-testid="filter-category"
      placeholder="Select category"
      options={categoryFilters}
      onChange={handleFilterChange}
    />
  );
}
