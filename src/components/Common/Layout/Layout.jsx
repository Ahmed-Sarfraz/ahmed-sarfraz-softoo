import { ContentSection, MainWrapper, PageWrapper } from "./Layout.styles";

function Layout({ children }) {
  return (
    <PageWrapper>
      <MainWrapper>
        <ContentSection>{children}</ContentSection>
      </MainWrapper>
    </PageWrapper>
  );
}

export default Layout;
