import {
  Spinner,
  SpinnerContainer,
} from "src/components/Common/Leaf/LoadingSpinner/LoadingSpinner.styles";

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <Spinner data-testid="loading-spinner" />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
