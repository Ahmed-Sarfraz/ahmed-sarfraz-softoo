import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import mockProducts from "src/mocks/mockProducts";
import { ProductsProvider } from "../context/ProductsContext";
import FilteredProductsList from "../ProductsCotainer/FilteredProductsList";
import ShoppingCart from "./ShoppingCart";

describe("ProductQuantity component", () => {
  it("should add and remove the product from the cart and Total Quantity is updated", () => {
    const products = mockProducts;
    const { id } = products[0];
    render(
      <ProductsProvider>
        <FilteredProductsList initialProducts={products} />
        <ShoppingCart />
      </ProductsProvider>
    );
    const QuantityElement = screen.getByTestId(`quantity-${id}`);

    // Check that the product is initially in the DOM
    expect(screen.getByTestId(`product-${id}`)).toBeInTheDocument();

    // Find and click the add button
    const addButton = screen.getByTestId(`add-${id}`);
    fireEvent.click(addButton);
    expect(QuantityElement).toHaveTextContent(1);

    // Find and click the remove button
    const removeButton = screen.getByTestId(`remove-${id}`);
    fireEvent.click(removeButton);
    expect(QuantityElement).toHaveTextContent(0);

    // Correct Total Quantity is displayed
    const totalPrice = screen.getByTestId(`total-price`);

    expect(totalPrice).toHaveTextContent(0);
  });

  it("Item Quantity and Total Quantity is updated when quantity of specific item is increased or decreased", () => {
    const products = mockProducts;
    const { id, price } = products[0];
    render(
      <ProductsProvider>
        <FilteredProductsList initialProducts={products} />
        <ShoppingCart />
      </ProductsProvider>
    );

    const QuantityElement = screen.getByTestId(`quantity-${id}`);
    const currentQuantity = parseInt(QuantityElement.textContent, 10);
    const increase = 5;
    const decrease = 2;
    const finalQuantity = increase - decrease;
    // Correct Updated Quantity is displayed after increase and decrease
    const increaseButton = screen.getByTestId(`increase-${id}`);
    const decreaseButton = screen.getByTestId(`decrease-${id}`);
    for (let i = 0; i < increase; i++) {
      fireEvent.click(increaseButton);
    }
    for (let i = 0; i < decrease; i++) {
      fireEvent.click(decreaseButton);
    }

    const updatedQuantity = parseInt(QuantityElement.textContent, 10);
    expect(updatedQuantity).toBe(currentQuantity + finalQuantity);

    // Correct Total Quantity is displayed after increase and decrease
    const totalPrice = screen.getByTestId(`total-price`);
    const updatedPrice = (updatedQuantity * price).toFixed(2);
    expect(totalPrice).toHaveTextContent(updatedPrice);
  });
});
