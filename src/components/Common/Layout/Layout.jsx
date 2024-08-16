import { ContentSection, MainWrapper, PageWrapper } from "./Layout.styles";
import PropTypes from "prop-types";

function Layout({ children }) {
  return (
    <PageWrapper>
      <MainWrapper>
        <ContentSection>{children}</ContentSection>
      </MainWrapper>
    </PageWrapper>
  );
}

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
