import { ProductsProvider } from "src/components/Products/context/ProductsContext";
import ProductCategoryFilter from "src/components/Products/ProductCategoryFilter/ProductCategoryFilter";
import ShoppingCart from "src/components/Products/ProductQuantity/ShoppingCart";
import ProductsCotainer from "src/components/Products/ProductsCotainer/ProductsCotainer";
import "./home.css";
const Home = () => {
  return (
    <ProductsProvider>
      <div className="product-details">
        <ProductCategoryFilter />
        <ShoppingCart />
      </div>
      <ProductsCotainer />
    </ProductsProvider>
  );
};

export default Home;
