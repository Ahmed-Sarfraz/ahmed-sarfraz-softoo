import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  margin: 20px 0;
  background-color: #fdecea;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
  color: #721c24;
`;

const ErrorIcon = styled.div`
  margin-right: 10px;
  font-size: 1.5rem;
`;

const ErrorText = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;

export { ErrorContainer, ErrorIcon, ErrorText };
