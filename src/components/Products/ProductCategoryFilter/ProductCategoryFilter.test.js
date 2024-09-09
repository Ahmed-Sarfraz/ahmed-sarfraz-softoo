/* eslint-disable jest/no-conditional-expect */
import { render, screen, fireEvent } from "@testing-library/react";
import { ProductsProvider } from "../context/ProductsContext";
import ProductCategoryFilter from "./ProductCategoryFilter";
import FilteredProductsList from "../ProductsCotainer/FilteredProductsList";
import mockProducts from "src/mocks/mockProducts";

test("displays the correct products when filter is applied", () => {
  render(
    <ProductsProvider>
      <ProductCategoryFilter />
      <FilteredProductsList initialProducts={mockProducts} />
    </ProductsProvider>
  );

  // Find and click the filter dropdown
  const filterCategoryButton = screen.getByTestId("filter-category");
  fireEvent.click(filterCategoryButton);

  // Check if the dropdown is displayed
  const selectDropdown = screen.getByTestId("select-dropdown");
  expect(selectDropdown).toBeVisible();

  // Find and click the "beauty" option in the dropdown
  const beautyOption = screen.getByTestId("option-beauty");
  fireEvent.click(beautyOption);

  // Check that product-1 and product-3 are found
  mockProducts.forEach((p) => {
    if (p.category === beautyOption.textContent) {
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
