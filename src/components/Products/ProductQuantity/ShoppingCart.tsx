import {
  // ElementRef,
  useContext,
  useMemo,
  // useRef
} from "react";
// import Dropdown from "src/components/Common/Form/MultiSelect/Dropdown";
// import NoProductsMessage from "src/components/Common/Leaf/NoProductsMessage/NoProductsMessage";
import Tooltip from "src/components/Common/Tooltip/Tooltip";
import { ProductsContext } from "src/components/Products/context/ProductsContext";
import { ProductsContextType } from "src/components/Products/context/types";
import {
  Badge,
  Price,
  SummaryContainer,
} from "src/components/Products/ProductQuantity/ShoppingCart.styles";
import calculateTotalPrice from "src/utils/calculateTotalPrice";

const TotalQuantity = () => {
  const { products } = useContext(ProductsContext) as ProductsContextType;
  const totalPrice = useMemo(() => calculateTotalPrice(products), [products]);
  const totalItems = useMemo(
    () => products.filter((product) => product.quantity),
    [products]
  );
  // const dropdownRef = useRef<ElementRef<typeof Dropdown>>(null);

  // const toggleDropdown = () => {
  //   if (dropdownRef.current) {
  //     dropdownRef.current?.toggleDropdown();
  //   }
  // };
  if (!products.length) {
    return null;
  }
  return (
    <>
      <Tooltip data-testid="tooltip-price" text={totalPrice.toFixed(2) + " $"}>
        <SummaryContainer
        // onClick={toggleDropdown}
        >
          {/* <Dropdown ref={dropdownRef}>
            {totalPrice ? (
              <div>{totalPrice.toFixed(2) + " $"}</div>
            ) : (
              <NoProductsMessage />
            )}
          </Dropdown> */}
          {totalItems.length ? <Badge>{totalItems.length}</Badge> : null}
          <Price data-testid="total-price">
            <i className="fas fa-shopping-cart centered"></i>
          </Price>
        </SummaryContainer>
      </Tooltip>
    </>
  );
};

export default TotalQuantity;
