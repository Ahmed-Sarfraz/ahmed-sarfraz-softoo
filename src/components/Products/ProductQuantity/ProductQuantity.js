import { useContext } from "react";
import produce from "immer";

import {
  QuantityButtonElement,
  QuantityButtonWrapper,
  QuantityDisplay,
} from "./QuantityButton.styles";
import ProductCardContext from "../context/ProductCardContext";
import { ProductsContext } from "../context/ProductsContext";
import Button from "../../Common/Button/Button";

const ProductQuantity = () => {
  const { removeProduct, setProducts } = useContext(ProductsContext);
  const { id, quantity } = useContext(ProductCardContext);

  const updateItemQuantity = (newQuantity) => {
    setProducts(
      produce((draft) => {
        const item = draft.find((item) => item.id === id);
        if (item) {
          item.quantity = newQuantity;
        }
      })
    );
  };

  const increaseQuantity = () => {
    updateItemQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      updateItemQuantity(quantity - 1);
    }
  };

  const handleRemove = () => {
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
      <Button variant="danger" onClick={handleRemove}>
        Remove
      </Button>
    </QuantityButtonWrapper>
  );
};

export default ProductQuantity;
