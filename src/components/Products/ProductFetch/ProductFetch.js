import { useContext } from "react";
import { ENDPOINTS } from "../../../middleware/url";
import ApiDataRenderer from "../../Common/ApiDataRenderer";
import { ProductsContext, ProductsProvider } from "../context/ProductsContext";
import ProductsListing from "../ProductListing/ProductsListing";

const ProductsStoreListing = () => {
  const { products } = useContext(ProductsContext);
  return <ProductsListing products={products} />;
};

const ProductFetch = () => {
  return (
    <ApiDataRenderer
      config={{
        url: ENDPOINTS.GET_ITEMS,
      }}
      renderData={(products) => (
        <ProductsProvider initialProducts={products}>
          <ProductsStoreListing />
        </ProductsProvider>
      )}
    />
  );
};
export default ProductFetch;
