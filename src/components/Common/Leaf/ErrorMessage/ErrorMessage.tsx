import {
  ErrorContainer,
  ErrorIcon,
  ErrorText,
} from "src/components/Common/Leaf/ErrorMessage/ErrorMessage.styles";

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
