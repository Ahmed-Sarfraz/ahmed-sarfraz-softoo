import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// Main content wrapper that includes content
const MainWrapper = styled.div`
  display: flex;
  flex: 1;
`;

// Content section
const ContentSection = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: #fff;
`;

export { PageWrapper, MainWrapper, ContentSection };
