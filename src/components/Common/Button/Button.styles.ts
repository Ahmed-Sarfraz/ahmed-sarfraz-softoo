import StyledButtonProps from "src/interfaces/StyledButtonProps";
import styled, { css, keyframes } from "styled-components";

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme, size }) => {
    return theme.button.sizes[size || "medium"]?.padding;
  }};
  font-size: ${({ theme, size }) =>
    theme.button.sizes[size || "medium"]?.fontSize};
  font-weight: 600;
  border-radius: ${({ theme, rounded }) =>
    rounded
      ? theme.button.borderRadius.rounded
      : theme.button.borderRadius.normal};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  ${({ theme, variant }) =>
    variant &&
    css`
      background-color: ${theme.button.variants[variant].backgroundColor};
      color: ${theme.button.variants[variant].color};
      &:hover {
        background-color: ${theme.button.variants[variant].hover
          .backgroundColor};
      }
    `}

  ${({ theme, outline, variant }) =>
    outline &&
    variant &&
    css`
      background-color: transparent;
      border: 2px solid ${theme.button.variants.outline.borderColor[variant]};
      color: ${theme.button.variants.outline.borderColor[variant]};
      &:hover {
        background-color: ${theme.button.variants[variant].backgroundColor};
        color: #fff;
      }
    `}

  ${({ theme, disabled }) =>
    disabled &&
    css`
      background-color: ${theme.button.variants.disabled.backgroundColor};
      color: ${theme.button.variants.disabled.color};
      cursor: not-allowed;
      &:hover {
        background-color: ${theme.button.variants.disabled.backgroundColor};
        color: ${theme.button.variants.disabled.color};
      }
    `}

  ${({ loading }) =>
    loading &&
    css`
      cursor: wait;
      pointer-events: none;
      opacity: 0.6;
    `}

  &:active {
    transform: scale(0.98);
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const ButtonSpinner = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  animation: ${spin} 0.6s linear infinite;
`;

export default StyledButton;
