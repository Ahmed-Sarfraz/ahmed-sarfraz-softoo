import styled from "styled-components";

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  text-align: center;
  margin: 20px 0px;
  height: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const MessageIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #888;
`;

const MessageText = styled.div`
  font-size: 1.25rem;
  color: #555;
  font-weight: 500;
`;

export { MessageContainer, MessageIcon, MessageText };
