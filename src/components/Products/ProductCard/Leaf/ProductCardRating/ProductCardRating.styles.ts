import styled from "styled-components";

const ProductRatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 10px 0 0;
`;

const ProductRatingText = styled.span`
  font-size: 0.8rem;
  color: #666;
`;

const ProductRatingStart = styled.span`
  font-size: 20px;
  color: orange;
  display: inline-block;
`;

export { ProductRatingWrapper, ProductRatingText, ProductRatingStart };
