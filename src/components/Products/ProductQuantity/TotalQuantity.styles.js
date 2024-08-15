import styled from "styled-components";

const SummaryContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SummaryDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: right;
`;

const Price = styled.p`
  font-size: 1.2rem;
  color: #28a745;
  font-weight: 600;
`;

export { SummaryContainer, SummaryDetails, Price };
