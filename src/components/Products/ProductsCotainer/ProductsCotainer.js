import { ENDPOINTS } from "../../../middleware/url";
import ApiDataRenderer from "../../Common/ApiDataRenderer";
import FilteredProductsList from "./FilteredProductsList";

const ProductsCotainer = () => {
  return (
    <ApiDataRenderer
      config={{
        url: ENDPOINTS.GET_ITEMS,
      }}
      renderData={(initialProducts) => (
        <FilteredProductsList initialProducts={initialProducts} />
      )}
    />
  );
};
export default ProductsCotainer;
