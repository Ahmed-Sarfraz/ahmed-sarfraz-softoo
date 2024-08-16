const calculateTotalPrice = (products) => {
  return products.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );
};

export default calculateTotalPrice;
