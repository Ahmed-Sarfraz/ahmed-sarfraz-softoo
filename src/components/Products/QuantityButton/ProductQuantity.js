import React, { useContext, useState } from "react";
import {
  QuantityButtonElement,
  QuantityButtonWrapper,
  QuantityDisplay,
} from "./QuantityButton.styles";
import ProductCardContext from "../context/ProductCardContext";
import { ProductsContext } from "../context/ProductsContext";
import Button from "../../Common/Button/Button";

const ProductQuantity = () => {
  const { removeProduct } = useContext(ProductsContext);
  const { id } = useContext(ProductCardContext);

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const resetQuantity = () => {
    removeProduct(id);
  };

  return (
    <QuantityButtonWrapper>
      <div style={{ display: "flex" }}>
        <QuantityButtonElement onClick={decreaseQuantity}>
          -
        </QuantityButtonElement>
        <QuantityDisplay>{quantity}</QuantityDisplay>
        <QuantityButtonElement onClick={increaseQuantity}>
          +
        </QuantityButtonElement>
      </div>
      <Button variant="danger" onClick={resetQuantity}>
        Remove
      </Button>
    </QuantityButtonWrapper>
  );
};

export default ProductQuantity;
