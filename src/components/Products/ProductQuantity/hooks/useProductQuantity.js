import { useContext, useCallback } from "react";
import produce from "immer";
import { ProductsContext } from "../../context/ProductsContext";

const useProductQuantity = (id, initialQuantity) => {
  const { setProducts, removeProduct } = useContext(ProductsContext);

  const updateItemQuantity = useCallback(
    (newQuantity) => {
      setProducts(
        produce((draft) => {
          const item = draft.find((item) => item.id === id);
          if (item) {
            item.quantity = newQuantity;
          }
        })
      );
    },
    [id, setProducts]
  );

  const increaseQuantity = useCallback(() => {
    updateItemQuantity(initialQuantity + 1);
  }, [initialQuantity, updateItemQuantity]);

  const decreaseQuantity = useCallback(() => {
    if (initialQuantity > 1) {
      updateItemQuantity(initialQuantity - 1);
    }
  }, [initialQuantity, updateItemQuantity]);

  const handleRemove = useCallback(() => {
    removeProduct(id);
  }, [id, removeProduct]);

  return {
    increaseQuantity,
    decreaseQuantity,
    handleRemove,
    updateItemQuantity,
  };
};

export default useProductQuantity;
