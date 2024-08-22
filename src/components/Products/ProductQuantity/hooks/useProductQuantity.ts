/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useCallback } from "react";
import produce from "immer";
import { ProductsContextType } from "src/components/Products/context/types";
import Product from "src/interfaces/Product";
import { ProductsContext } from "src/components/Products/context/ProductsContext";

const useProductQuantity = (id: number, initialQuantity: number = 0) => {
  const { setProducts } = useContext(ProductsContext) as ProductsContextType;

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
    if (initialQuantity > 0) {
      updateItemQuantity(initialQuantity - 1);
    }
  }, [initialQuantity, updateItemQuantity]);

  const resetQuantity = useCallback(() => {
    updateItemQuantity(0);
  }, [updateItemQuantity]);

  const handleRemove = useCallback(() => {
    // removeProduct(id);
    resetQuantity();
  }, []);

  const handleAdd = useCallback(() => {
    updateItemQuantity(1);
  }, []);

  return {
    increaseQuantity,
    decreaseQuantity,
    handleRemove,
    handleAdd,
    updateItemQuantity,
  };
};

export default useProductQuantity;
