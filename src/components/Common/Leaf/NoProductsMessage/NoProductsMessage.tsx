import {
  MessageContainer,
  MessageIcon,
  MessageText,
} from "src/components/Common/Leaf/NoProductsMessage/NoProductsMessage.styles";

const NoProductsMessage = () => {
  return (
    <MessageContainer>
      <MessageIcon>🛒</MessageIcon>
      <MessageText data-testid="noproducts-message">
        No Products found
      </MessageText>
    </MessageContainer>
  );
};

export default NoProductsMessage;
