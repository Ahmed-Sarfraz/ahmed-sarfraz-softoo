import { ButtonProps } from "src/interfaces/FormElementsProps";
import styled from "styled-components";

export const QuantityButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
  justify-content: space-evenly;
  padding: 6px;
  gap: 8px;
`;

export const QuantityButtonElement = styled.button<ButtonProps>`
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  width: 50px;
  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background-color: #d0d0d0;
    color: #999;
    cursor: not-allowed;
    opacity: 0.6;
    box-shadow: none; /* Removes shadow for disabled state */
  }
`;

export const QuantityDisplay = styled.div`
  padding: 10px 15px;
  font-size: 16px;
  font-weight: bold;
  background-color: #fff;
  color: #333;
  min-width: 40px;
  text-align: center;
`;
