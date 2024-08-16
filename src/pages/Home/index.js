import React from "react";
import { ProductsProvider } from "../../components/Products/context/ProductsContext";
import ProductColourFilter from "../../components/Products/ProductColourFilter/ProductColourFilter";
import ProductsCotainer from "../../components/Products/ProductsCotainer/ProductsCotainer";
import TotalQuantity from "../../components/Products/ProductQuantity/TotalQuantity";

export default function Home() {
  return (
    <ProductsProvider>
      <ProductColourFilter />
      <ProductsCotainer />
      <TotalQuantity />
    </ProductsProvider>
  );
}
