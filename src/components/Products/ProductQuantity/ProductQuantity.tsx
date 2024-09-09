import React, { useContext, useMemo } from "react";
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

  const { increaseQuantity, decreaseQuantity, handleRemove, handleAdd } =
    useProductQuantity(id, quantity);
  return useMemo(() => {
    console.log("ProductQuantity rerendered");
    return (
      <QuantityButtonWrapper>
        <div style={{ display: "flex" }}>
          <QuantityButtonElement
            disabled={!quantity}
            data-testid={`decrease-${id}`}
            onClick={decreaseQuantity}
          >
            -
          </QuantityButtonElement>
          <QuantityDisplay data-testid={`quantity-${id}`}>
            {quantity ?? 0}
          </QuantityDisplay>
          <QuantityButtonElement
            data-testid={`increase-${id}`}
            onClick={increaseQuantity}
          >
            +
          </QuantityButtonElement>
        </div>
        {quantity ? (
          <Button
            data-testid={`remove-${id}`}
            variant="danger"
            onClick={handleRemove}
          >
            Remove
          </Button>
        ) : (
          <Button
            data-testid={`add-${id}`}
            variant="primary"
            onClick={handleAdd}
          >
            Add
          </Button>
        )}
      </QuantityButtonWrapper>
    );
  }, [
    quantity,
    id,
    increaseQuantity,
    handleRemove,
    decreaseQuantity,
    handleAdd,
  ]);
};

export default React.memo(ProductQuantity);
