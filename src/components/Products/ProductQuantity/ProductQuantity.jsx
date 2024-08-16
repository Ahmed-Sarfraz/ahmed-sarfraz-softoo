import { useContext } from "react";

import {
  QuantityButtonElement,
  QuantityButtonWrapper,
  QuantityDisplay,
} from "./QuantityButton.styles";
import ProductCardContext from "../context/ProductCardContext";
import Button from "../../Common/Button/Button";
import useProductQuantity from "./hooks/useProductQuantity";

const ProductQuantity = () => {
  const { id, quantity } = useContext(ProductCardContext);

  const { increaseQuantity, decreaseQuantity, handleRemove } =
    useProductQuantity(id, quantity);

  return (
    <QuantityButtonWrapper>
      <div style={{ display: "flex" }}>
        <QuantityButtonElement
          data-testid={`decrease-${id}`}
          onClick={decreaseQuantity}
        >
          -
        </QuantityButtonElement>
        <QuantityDisplay>{quantity}</QuantityDisplay>
        <QuantityButtonElement
          data-testid={`increase-${id}`}
          onClick={increaseQuantity}
        >
          +
        </QuantityButtonElement>
      </div>
      <Button
        data-testid={`remove-${id}`}
        variant="danger"
        onClick={handleRemove}
      >
        Remove
      </Button>
    </QuantityButtonWrapper>
  );
};

export default ProductQuantity;
