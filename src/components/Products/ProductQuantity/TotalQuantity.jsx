import { useContext, useMemo } from "react";
import { ProductsContext } from "../context/ProductsContext";
import {
  Price,
  SummaryContainer,
  SummaryDetails,
} from "./TotalQuantity.styles";
import calculateTotalPrice from "../../../utils/calculateTotalPrice";

export default function TotalQuantity() {
  const { products } = useContext(ProductsContext);
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
}
