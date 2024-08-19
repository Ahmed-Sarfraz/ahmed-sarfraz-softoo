import React, { useContext } from "react";
import Button from "src/components/Common/Button/Button";
import ProductCardContext from "src/components/Products/context/ProductCardContext";
import useProductQuantity from "src/components/Products/ProductQuantity/hooks/useProductQuantity";
import {
  QuantityButtonElement,
  QuantityButtonWrapper,
  QuantityDisplay,
} from "src/components/Products/ProductQuantity/QuantityButton.styles";
import Product from "src/interfaces/Product";

const ProductQuantity = () => {
  const { id, quantity } = useContext(ProductCardContext) as Product;

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
