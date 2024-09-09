import { useContext, useMemo } from "react";
import { ProductsContext } from "src/components/Products/context/ProductsContext";
import { ProductsContextType } from "src/components/Products/context/types";
import {
  Price,
  SummaryContainer,
} from "src/components/Products/ProductQuantity/ShoppingCart.styles";
import calculateTotalPrice from "src/utils/calculateTotalPrice";

const TotalQuantity = () => {
  const { products } = useContext(ProductsContext) as ProductsContextType;
  const totalPrice = useMemo(() => calculateTotalPrice(products), [products]);

  if (!products.length) {
    return null;
  }

  return (
    <SummaryContainer>
      <Price data-testid="total-price">
        <i className="fas fa-shopping-cart centered"></i>
        {totalPrice.toFixed(2)}
      </Price>
    </SummaryContainer>
  );
};

export default TotalQuantity;
