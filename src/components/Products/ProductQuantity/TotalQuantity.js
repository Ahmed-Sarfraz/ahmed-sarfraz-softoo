import { useContext, useMemo } from "react";
import { ProductsContext } from "../context/ProductsContext";
import {
  Price,
  SummaryContainer,
  SummaryDetails,
} from "./TotalQuantity.styles";

export default function TotalQuantity() {
  const { products } = useContext(ProductsContext);
  const totalPrice = useMemo(() => {
    return products.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );
  }, [products]);
  if (!products.length) {
    return null;
  }
  return (
    <SummaryContainer>
      <SummaryDetails>
        <Price>Total Price: ${totalPrice.toFixed(2)}</Price>
      </SummaryDetails>
    </SummaryContainer>
  );
}
