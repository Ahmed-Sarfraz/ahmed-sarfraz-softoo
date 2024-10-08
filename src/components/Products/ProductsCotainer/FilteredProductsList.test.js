import { render, screen } from "@testing-library/react";
import FilteredProductsList from "./FilteredProductsList";
import { ProductsProvider } from "../context/ProductsContext";
import mockProducts from "src/mocks/mockProducts";
import { ThemeProvider } from "styled-components";
import { theme } from "src/themes/theme";

describe("FilteredProductsList Component", () => {
  it("should display NoProductsMessage when no products are available", () => {
    render(
      <ThemeProvider theme={theme}>
        <ProductsProvider>
          <FilteredProductsList initialProducts={[]} />
        </ProductsProvider>
      </ThemeProvider>
    );
    // Check if the NoProductsMessage is displayed
    const noProductsMessage = screen.getByTestId("noproducts-message");
    expect(noProductsMessage).toBeInTheDocument();
  });

  it("should display the correct number of product components when products are available", () => {
    const products = mockProducts;

    render(
      <ThemeProvider theme={theme}>
        <ProductsProvider>
          <FilteredProductsList initialProducts={products} />
        </ProductsProvider>
      </ThemeProvider>
    );

    // Check if the products container is rendered
    const productsContainer = screen.getByTestId("products-container");
    expect(productsContainer).toBeInTheDocument();

    // Check if the correct number of products is displayed
    products.forEach((product) => {
      const productElement = screen.getByTestId(`product-${product.id}`);
      expect(productElement).toBeInTheDocument();
      expect(productElement).toHaveTextContent(product.title);
    });

    // Check if the number of product elements matches the length of the products array
    const productElements = screen.getAllByTestId(/product-/);
    expect(productElements).toHaveLength(products.length);
  });
});
