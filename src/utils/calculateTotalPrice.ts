import Product from "src/interfaces/Product";

const calculateTotalPrice = (products: Product[]): number => {
  return products.reduce(
    (total, product) => total + (product?.quantity || 0) * product.price,
    0
  );
};

export default calculateTotalPrice;
