import React from "react";
import { ProductsProvider } from "../../components/Products/context/ProductsContext";
import ProductColourFilter from "../../components/Products/ProductColourFilter/ProductColourFilter";
import ProductsCotainer from "../../components/Products/ProductsCotainer/ProductsCotainer";
import TotalQuantity from "../../components/Products/ProductQuantity/TotalQuantity";

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
