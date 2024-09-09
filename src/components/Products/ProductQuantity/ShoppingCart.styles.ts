import styled from "styled-components";

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Price = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
`;

export { SummaryContainer, Price };
