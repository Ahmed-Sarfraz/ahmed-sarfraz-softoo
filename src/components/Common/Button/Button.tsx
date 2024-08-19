import { ReactNode, FC } from "react";
import StyledButton, { Spinner } from "./Button.styles";
import StyledButtonProps from "../../../interfaces/StyledButtonProps";

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

// Interface for Button Props
interface ExtendedButtonProps extends StyledButtonProps {
  children: ReactNode;
}

const Button: FC<ExtendedButtonProps> = ({
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
