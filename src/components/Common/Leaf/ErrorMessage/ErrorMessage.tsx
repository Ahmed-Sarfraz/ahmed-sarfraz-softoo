import React from "react";
import { ErrorContainer, ErrorIcon, ErrorText } from "./ErrorMessage.styles";

type ErrorMessageProps = {
  message?: string;
};

export default function ErrorMessage({
  message = "An error occurred",
}: ErrorMessageProps) {
  return (
    <ErrorContainer>
      <ErrorIcon>⚠️</ErrorIcon>
      <ErrorText data-testid="error-message">Error: {message}</ErrorText>
    </ErrorContainer>
  );
}
