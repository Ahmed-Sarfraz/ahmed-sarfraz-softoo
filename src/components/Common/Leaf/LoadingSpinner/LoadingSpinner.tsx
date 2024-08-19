import React from "react";
import { Spinner, SpinnerContainer } from "./LoadingSpinner.styles";

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <Spinner data-testid="loading-spinner" />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
