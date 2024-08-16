import React from "react";
import {
  MessageContainer,
  MessageIcon,
  MessageText,
} from "./NoProductsMessage.styles";

export default function NoProductsMessage() {
  return (
    <MessageContainer>
      <MessageIcon>🛒</MessageIcon>
      <MessageText data-testid="noproducts-message">
        No Products found
      </MessageText>
    </MessageContainer>
  );
}
