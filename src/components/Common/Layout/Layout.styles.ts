import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const ContentSection = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: #f8f9fa;
`;

export { PageWrapper, MainWrapper, ContentSection };
