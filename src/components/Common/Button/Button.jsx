import PropTypes from "prop-types";
import StyledButton, { Spinner } from "./Button.styles";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  rounded = false,
  outline = false,
  disabled = false,
  loading = false,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      rounded={rounded}
      outline={outline}
      disabled={disabled || loading}
      loading={loading}
      {...props}
    >
      {loading ? <Spinner /> : children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "danger", "success"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  rounded: PropTypes.bool,
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Button;
