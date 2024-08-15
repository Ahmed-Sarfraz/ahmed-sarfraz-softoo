import "./App.css";
import Layout from "./components/Common/Layout/Layout";
import { ProductsProvider } from "./components/Products/context/ProductsContext";
import ProductColourFilter from "./components/Products/ProductColourFilter/ProductColourFilter";
import Products from "./components/Products/Products/Products";

function App() {
  return (
    <Layout>
      <ProductsProvider>
        <ProductColourFilter />
        <Products />
      </ProductsProvider>
    </Layout>
  );
}

export default App;
