import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import mockProducts, { mockProductsTotalPrice } from "src/mocks/mockProducts";
import { ProductsProvider } from "../context/ProductsContext";
import FilteredProductsList from "../ProductsCotainer/FilteredProductsList";
import TotalQuantity from "./TotalQuantity";

describe("ProductQuantity component", () => {
  it("should remove the product from the DOM when remove button is clicked and Total Quantity is updated", () => {
    const products = mockProducts;
    const { id } = products[0];
    render(
      <ProductsProvider>
        <FilteredProductsList initialProducts={products} />
        <TotalQuantity />
      </ProductsProvider>
    );

    // Check that the product is initially in the DOM
    expect(screen.getByTestId(`product-${id}`)).toBeInTheDocument();

    // Find and click the remove button
    const removeButton = screen.getByTestId(`remove-${id}`);
    fireEvent.click(removeButton);

    // Check that the product is no longer in the DOM
    expect(screen.queryByTestId(`product-${id}`)).not.toBeInTheDocument();
    const productElements = screen.getAllByTestId(/product-/);
    expect(productElements).toHaveLength(products.length - 1);

    // Correct Total Quantity is displayed after removal of first element
    const totalPrice = screen.getByTestId(`total-price`);
    console.log(
      mockProductsTotalPrice - products[0].price,
      "mockProductsTotalPrice - products[0].price"
    );
    expect(totalPrice).toHaveTextContent(
      (mockProductsTotalPrice - products[0].price).toFixed(2)
    );
  });
  it("Total Quantity is updated when quantity is increased or decreased", () => {
    const products = mockProducts;
    const { id, price } = products[0];
    render(
      <ProductsProvider>
        <FilteredProductsList initialProducts={products} />
        <TotalQuantity />
      </ProductsProvider>
    );

    // Find and click the increase button
    const increaseButton = screen.getByTestId(`increase-${id}`);
    fireEvent.click(increaseButton);

    // Correct Total Quantity is displayed after increase
    const totalPrice = screen.getByTestId(`total-price`);
    const increasedPrice = (mockProductsTotalPrice + price).toFixed(2);
    expect(totalPrice).toHaveTextContent(increasedPrice);

    // Find and click the decrease button
    const decreaseButton = screen.getByTestId(`decrease-${id}`);
    fireEvent.click(decreaseButton);

    // Correct Total Quantity is displayed after increase
    expect(totalPrice).toHaveTextContent((increasedPrice - price).toFixed(2));
  });
});
