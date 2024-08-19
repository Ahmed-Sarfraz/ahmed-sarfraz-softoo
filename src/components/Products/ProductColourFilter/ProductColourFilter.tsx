import { useContext, useMemo } from "react";
import MultiSelect from "../../Common/Form/MultiSelect/MultiSelect";
import { ProductsContext } from "../context/ProductsContext";
import { getUniquePropertyValues } from "../../../utils/helpers";
import { ProductsContextType } from "src/components/Products/context/types";

export default function ProductColourFilter() {
  const { setFilter, products } = useContext(
    ProductsContext
  ) as ProductsContextType;

  const colourFilters = useMemo(
    () => getUniquePropertyValues(products, "colour"),
    [products]
  );

  if (!products.length) return null;

  const handleFilterChange = (options: string[]) => {
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
