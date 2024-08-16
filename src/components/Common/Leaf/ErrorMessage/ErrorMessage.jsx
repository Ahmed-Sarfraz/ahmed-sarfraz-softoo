import { ErrorContainer, ErrorIcon, ErrorText } from "./ErrorMessage.styles";
import PropTypes from "prop-types";

export default function ErrorMessage({ message = "An error occurred" }) {
  return (
    <ErrorContainer>
      <ErrorIcon>⚠️</ErrorIcon>
      <ErrorText data-testid="error-message">Error: {message}</ErrorText>
    </ErrorContainer>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
};
