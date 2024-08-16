import styled, { css, keyframes } from "styled-components";

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) =>
    props.size === "large"
      ? "12px 24px"
      : props.size === "small"
      ? "8px 16px"
      : "10px 20px"};
  font-size: ${(props) =>
    props.size === "large" ? "16px" : props.size === "small" ? "12px" : "14px"};
  font-weight: 600;
  border-radius: ${(props) => (props.rounded ? "50px" : "4px")};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  ${(props) =>
    props.variant === "primary" &&
    css`
      background-color: #007bff;
      color: #fff;
      &:hover {
        background-color: #0056b3;
      }
    `}

  ${(props) =>
    props.variant === "secondary" &&
    css`
      background-color: #6c757d;
      color: #fff;
      &:hover {
        background-color: #5a6268;
      }
    `}

  ${(props) =>
    props.variant === "danger" &&
    css`
      background-color: #dc3545;
      color: #fff;
      &:hover {
        background-color: #c82333;
      }
    `}

  ${(props) =>
    props.variant === "success" &&
    css`
      background-color: #28a745;
      color: #fff;
      &:hover {
        background-color: #218838;
      }
    `}

  ${(props) =>
    props.outline &&
    css`
      background-color: transparent;
      border: 2px solid
        ${(props) =>
          props.variant === "primary"
            ? "#007bff"
            : props.variant === "secondary"
            ? "#6c757d"
            : props.variant === "danger"
            ? "#dc3545"
            : "#28a745"};
      color: ${(props) =>
        props.variant === "primary"
          ? "#007bff"
          : props.variant === "secondary"
          ? "#6c757d"
          : props.variant === "danger"
          ? "#dc3545"
          : "#28a745"};
      &:hover {
        background-color: ${(props) =>
          props.variant === "primary"
            ? "#007bff"
            : props.variant === "secondary"
            ? "#6c757d"
            : props.variant === "danger"
            ? "#dc3545"
            : "#28a745"};
        color: #fff;
      }
    `}

  ${(props) =>
    props.disabled &&
    css`
      background-color: #e0e0e0;
      color: #6c757d;
      cursor: not-allowed;
      &:hover {
        background-color: #e0e0e0;
        color: #6c757d;
      }
    `}

  ${(props) =>
    props.loading &&
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

export const Spinner = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  animation: ${spin} 0.6s linear infinite;
`;

export default StyledButton;
