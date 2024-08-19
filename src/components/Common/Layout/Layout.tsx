import React from "react";
import { ContentSection, MainWrapper, PageWrapper } from "./Layout.styles";
import ChildrenNodeProps from "../../../interfaces/ChildrenNodeProps";

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
