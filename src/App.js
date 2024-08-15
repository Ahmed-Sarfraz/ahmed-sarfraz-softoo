import "./App.css";
import Layout from "./components/Common/Layout/Layout";
import { ProductsProvider } from "./components/Products/context/ProductsContext";
import ProductColourFilter from "./components/Products/ProductColourFilter/ProductColourFilter";
import ProductFetch from "./components/Products/ProductFetch/ProductFetch";

function App() {
  return (
    <Layout>
      <ProductsProvider>
        <ProductColourFilter />
        <ProductFetch />
      </ProductsProvider>
    </Layout>
  );
}

export default App;
