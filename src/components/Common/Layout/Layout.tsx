import React from "react";
import {
  ContentSection,
  MainWrapper,
  PageWrapper,
} from "src/components/Common/Layout/Layout.styles";
import ChildrenNodeProps from "src/interfaces/ChildrenNodeProps";

const Layout: React.FC<ChildrenNodeProps> = ({ children = null }) => {
  return (
    <PageWrapper>
      <MainWrapper>
        <ContentSection>{children}</ContentSection>
      </MainWrapper>
    </PageWrapper>
  );
};

export default Layout;
