import { useContext, useMemo } from "react";
import { ProductsContext } from "src/components/Products/context/ProductsContext";
import { ProductsContextType } from "src/components/Products/context/types";
import {
  Price,
  SummaryContainer,
  SummaryDetails,
} from "src/components/Products/ProductQuantity/TotalQuantity.styles";
import calculateTotalPrice from "src/utils/calculateTotalPrice";

const TotalQuantity = () => {
  const { products } = useContext(ProductsContext) as ProductsContextType;
  const totalPrice = useMemo(() => calculateTotalPrice(products), [products]);

  if (!products.length) {
    return null;
  }

  return (
    <SummaryContainer>
      <SummaryDetails>
        <Price data-testid="total-price">
          Total Price: ${totalPrice.toFixed(2)}
        </Price>
      </SummaryDetails>
    </SummaryContainer>
  );
};

export default TotalQuantity;
