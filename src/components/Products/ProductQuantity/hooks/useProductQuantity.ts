import { useContext, useCallback } from "react";
import produce from "immer";
import { ProductsContext } from "../../context/ProductsContext";
import { ProductsContextType } from "src/components/Products/context/types";
import Product from "src/interfaces/Product";

const useProductQuantity = (id: number, initialQuantity: number = 1) => {
  const { setProducts, removeProduct } = useContext(
    ProductsContext
  ) as ProductsContextType;

  const updateItemQuantity = useCallback(
    (newQuantity: number) => {
      setProducts(
        produce((draft: Product[]) => {
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
