import { ProductsProvider } from "src/components/Products/context/ProductsContext";
import ProductColourFilter from "src/components/Products/ProductColourFilter/ProductColourFilter";
import TotalQuantity from "src/components/Products/ProductQuantity/TotalQuantity";
import ProductsCotainer from "src/components/Products/ProductsCotainer/ProductsCotainer";

const Home = () => {
  return (
    <ProductsProvider>
      <ProductColourFilter />
      <ProductsCotainer />
      <TotalQuantity />
    </ProductsProvider>
  );
};

export default Home;
