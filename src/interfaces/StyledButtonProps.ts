import { ButtonProps } from "./FormElementsProps";

interface StyledButtonProps extends ButtonProps {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "danger" | "success";
  rounded?: boolean;
  outline?: boolean;
  disabled?: boolean;
  loading?: boolean;
}
export default StyledButtonProps;
