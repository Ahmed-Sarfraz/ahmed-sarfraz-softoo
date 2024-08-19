import React from "react";
import {
  MessageContainer,
  MessageIcon,
  MessageText,
} from "./NoProductsMessage.styles";

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
