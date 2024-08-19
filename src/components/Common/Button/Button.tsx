import { ReactNode, FC } from "react";
import StyledButton, { Spinner } from "./Button.styles";
import StyledButtonProps from "../../../interfaces/StyledButtonProps";
import ChildrenNodeProps from "src/interfaces/ChildrenNodeProps";

enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
  Danger = "danger",
  Success = "success",
}

enum ButtonSize {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

const Button: FC<StyledButtonProps & ChildrenNodeProps> = ({
  children,
  variant = ButtonVariant.Primary,
  size = ButtonSize.Medium,
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

export default Button;
