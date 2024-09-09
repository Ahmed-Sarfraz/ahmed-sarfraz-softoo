import ApiDataRenderer from "src/components/Common/HOC/ApiDataRenderer";
import FilteredProductsList from "src/components/Products/ProductsCotainer/FilteredProductsList";
import Product from "src/interfaces/Product";
import { ENDPOINTS } from "src/middleware/url";

interface ApiResponse {
  products: Product[];
  [key: string]: any;
}

const ProductsCotainer = () => {
  return (
    <ApiDataRenderer<ApiResponse>
      config={{
        url: ENDPOINTS.GET_ITEMS,
      }}
      renderData={(initialProducts) => (
        <FilteredProductsList
          initialProducts={initialProducts?.products || []}
        />
      )}
    />
  );
};
export default ProductsCotainer;
