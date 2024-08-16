import { Spinner, SpinnerContainer } from "./LoadingSpinner.styles";

export default function LoadingSpinner() {
  return (
    <SpinnerContainer>
      <Spinner data-testid="loading-spinner" />
    </SpinnerContainer>
  );
}
