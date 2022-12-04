import Head from "./Head"
import Header from 'src/ui/Header/HeaderDesktop';
import HeaderMobile from 'src/ui/Header/HeaderMobile';
import { FormattedMessage, useIntl } from "react-intl";
import FooterComponent from "src/ui/Footer";
import styled from "styled-components";

const ContentWrapper = styled.div`
  padding-top: 80px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Layout = (props: any) => {
  return (
    <>
      <ContentWrapper>
        <div>
          <Head { ...props } />
          <HeaderMobile />

          <div className="container">
            <div className="container__left">
              {/* <h1> <FormattedMessage id="page.home.description" /> </h1> */}
              <main>
                { props.children }
              </main>
            </div>
            <div className="container__right">
              <Header />
            </div>
          </div>
        </div>

        <FooterComponent />
      </ContentWrapper>
    </>
  )
}

export default Layout
