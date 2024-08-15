import { ErrorContainer, ErrorIcon, ErrorText } from "./ErrorMessage.styles";

export default function ErrorMessage({ message }) {
  return (
    <ErrorContainer>
      <ErrorIcon>⚠️</ErrorIcon>
      <ErrorText>Error: {message}</ErrorText>
    </ErrorContainer>
  );
}
