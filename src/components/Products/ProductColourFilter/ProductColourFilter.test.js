/* eslint-disable jest/no-conditional-expect */
import { render, screen, fireEvent } from "@testing-library/react";
import { ProductsProvider } from "../context/ProductsContext";
import ProductColourFilter from "./ProductColourFilter";
import FilteredProductsList from "../ProductsCotainer/FilteredProductsList";
import mockProducts from "src/mocks/mockProducts";

test("displays the correct products when filter is applied", () => {
  render(
    <ProductsProvider>
      <ProductColourFilter />
      <FilteredProductsList initialProducts={mockProducts} />
    </ProductsProvider>
  );

  // Find and click the filter dropdown
  const filterColourButton = screen.getByTestId("filter-colour");
  fireEvent.click(filterColourButton);

  // Check if the dropdown is displayed
  const selectDropdown = screen.getByTestId("select-dropdown");
  expect(selectDropdown).toBeVisible();

  // Find and click the "Black" option in the dropdown
  const blackOption = screen.getByTestId("option-Black");
  fireEvent.click(blackOption);

  // Check that product-1 and product-3 are found
  mockProducts.forEach((p) => {
    if (p.colour === blackOption.textContent) {
      expect(screen.getByTestId(`product-${p.id}`)).toBeInTheDocument();
    } else {
      expect(screen.queryByTestId(`product-${p.id}`)).not.toBeInTheDocument();
    }
  });

  // Clear button clears the filters with all items displayed again
  const clearButton = screen.getByTestId("clear-selected");
  fireEvent.click(clearButton);

  mockProducts.forEach((p) => {
    expect(screen.getByTestId(`product-${p.id}`)).toBeInTheDocument();
  });
});
