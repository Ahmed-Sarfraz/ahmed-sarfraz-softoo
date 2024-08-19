import ApiDataRenderer from "src/components/Common/HOC/ApiDataRenderer";
import FilteredProductsList from "src/components/Products/ProductsCotainer/FilteredProductsList";
import Product from "src/interfaces/Product";
import { ENDPOINTS } from "src/middleware/url";

const ProductsCotainer = () => {
  return (
    <ApiDataRenderer<Product[]>
      config={{
        url: ENDPOINTS.GET_ITEMS,
      }}
      renderData={(initialProducts) => (
        <FilteredProductsList initialProducts={initialProducts || []} />
      )}
    />
  );
};
export default ProductsCotainer;
