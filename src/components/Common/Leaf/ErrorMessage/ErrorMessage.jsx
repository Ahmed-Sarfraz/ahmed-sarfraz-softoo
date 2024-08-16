import { ErrorContainer, ErrorIcon, ErrorText } from "./ErrorMessage.styles";
import PropTypes from "prop-types";

export default function ErrorMessage({ message }) {
  return (
    <ErrorContainer>
      <ErrorIcon>⚠️</ErrorIcon>
      <ErrorText data-testid="error-message">Error: {message}</ErrorText>
    </ErrorContainer>
  );
}
ErrorMessage.defaultProps = {
  message: "An error occurred",
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};
