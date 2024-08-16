import calculateTotalPrice from "../calculateTotalPrice";

describe("calculateTotalPrice", () => {
  it("should return the correct total price for a list of products", () => {
    const products = [
      { quantity: 3, price: 10 },
      { quantity: 2, price: 5 },
      { quantity: 1, price: 2 },
    ];

    const totalPrice = calculateTotalPrice(products);
    expect(totalPrice).toBeCloseTo(42);
  });

  it("should return 0 if there are no products", () => {
    const products = [];
    const totalPrice = calculateTotalPrice(products);
    expect(totalPrice).toBe(0);
  });
});
