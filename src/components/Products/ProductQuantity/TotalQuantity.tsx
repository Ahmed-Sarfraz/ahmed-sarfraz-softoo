import { useContext, useMemo } from "react";
import { ProductsContext } from "../context/ProductsContext";
import {
  Price,
  SummaryContainer,
  SummaryDetails,
} from "./TotalQuantity.styles";
import calculateTotalPrice from "../../../utils/calculateTotalPrice";
import { ProductsContextType } from "src/components/Products/context/types";

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
