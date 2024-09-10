import styled from "styled-components";

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  color: white;
  background-color: darkslateblue;
`;

// Styled component for the badge
const Badge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: red;
  color: white;
  padding: 2px 6px;
  border-radius: 50%;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Price = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  align-items: center;
  justify-content: center;
`;

export { SummaryContainer, Price, Badge };
