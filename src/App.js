import "./App.css";
import Layout from "./components/Common/Layout/Layout";
import ProductColourFilter from "./components/Products/ProductColourFilter/ProductColourFilter";
import ProductFetch from "./components/Products/ProductFetch/ProductFetch";

function App() {
  return (
    <Layout>
      {/* <ProductColourFilter /> */}
      <ProductFetch />
    </Layout>
  );
}

export default App;
