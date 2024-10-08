import styled from "styled-components";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: 10px 0px;
  grid-gap: 24px;
`;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  @media (min-width: 768px) {
    flex-direction: column;
    border: none;
    border-radius: 0px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  padding: 16px;
  margin-bottom: 8px;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  @media (min-width: 768px) {
    flex-direction: column;
    padding: 8px;
    flex: 1;
  }
`;

const CardImageWrapper = styled.div`
  background-color: #f4f4f4;
  height: 200px;
  border-radius: 8px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 8px;
`;

// const CardImageWrapper = styled.div`
//   width: 30%;
//   height: 150px; /* Fixed height */
//   overflow: hidden;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const CardImage = styled.img`
//   max-width: 100%;
//   max-height: 100%;
// `;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  justify-content: space-between;
  flex: 1;
`;

const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductName = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin: 10px 0 0;
`;

const ProductColour = styled.p`
  font-size: 0.8rem;
  color: #666;
  margin: 10px 0 0;
`;

export {
  CardContainer,
  CardWrapper,
  Card,
  CardImageWrapper,
  CardImage,
  CardContent,
  ProductName,
  ProductPrice,
  ProductColour,
  ProductDetails,
};
