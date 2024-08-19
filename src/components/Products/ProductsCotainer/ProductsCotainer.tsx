import Product from "src/interfaces/Product";
import { ENDPOINTS } from "../../../middleware/url";
import ApiDataRenderer from "../../Common/HOC/ApiDataRenderer";
import FilteredProductsList from "./FilteredProductsList";

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
