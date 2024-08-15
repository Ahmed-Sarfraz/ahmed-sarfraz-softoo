import styled from "styled-components";

const ProductColorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 10px 0 0;
`;

const ProductColorText = styled.span`
  font-size: 0.8rem;
  color: #666;
`;

const ProductColorBox = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.colour || "gray"};
  border: 1px solid #ccc;
`;

export { ProductColorWrapper, ProductColorText, ProductColorBox };
