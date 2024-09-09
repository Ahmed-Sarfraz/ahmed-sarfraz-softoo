import { ProductsProvider } from "src/components/Products/context/ProductsContext";
import ProductColourFilter from "src/components/Products/ProductColourFilter/ProductColourFilter";
import TotalQuantity from "src/components/Products/ProductQuantity/TotalQuantity";
import ProductsCotainer from "src/components/Products/ProductsCotainer/ProductsCotainer";
import "./home.css";
const Home = () => {
  return (
    <ProductsProvider>
      <div className="product-details">
        <ProductColourFilter />
        <TotalQuantity />
      </div>
      <ProductsCotainer />
    </ProductsProvider>
  );
};

export default Home;
