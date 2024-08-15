import "./App.css";
import Layout from "./components/Common/Layout/Layout";
import { ProductsProvider } from "./components/Products/context/ProductsContext";
import ProductColourFilter from "./components/Products/ProductColourFilter/ProductColourFilter";
import TotalQuantity from "./components/Products/ProductQuantity/TotalQuantity";
import Products from "./components/Products/Products/Products";

function App() {
  return (
    <Layout>
      <ProductsProvider>
        <ProductColourFilter />
        <Products />
        <TotalQuantity />
      </ProductsProvider>
    </Layout>
  );
}

export default App;
