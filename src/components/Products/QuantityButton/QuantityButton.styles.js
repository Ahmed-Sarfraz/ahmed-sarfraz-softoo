import styled from "styled-components";

export const QuantityButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  margin-bottom: 16px;
  justify-content: space-evenly;
  padding: 6px;
`;

export const QuantityButtonElement = styled.button`
  background-color: #f0f0f0;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #333;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const QuantityDisplay = styled.div`
  padding: 10px 15px;
  font-size: 16px;
  font-weight: bold;
  background-color: #fff;
  color: #333;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  min-width: 40px;
  text-align: center;
`;
