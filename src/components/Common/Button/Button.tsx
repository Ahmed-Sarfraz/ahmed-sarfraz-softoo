import { FC } from "react";
import StyledButton, {
  ButtonSpinner,
} from "src/components/Common/Button/Button.styles";
import ChildrenNodeProps from "src/interfaces/ChildrenNodeProps";
import StyledButtonProps from "src/interfaces/StyledButtonProps";

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
      {loading ? <ButtonSpinner /> : children}
    </StyledButton>
  );
};

export default Button;
