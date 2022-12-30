import React, { ReactNode, FC } from "react";
import styled from "styled-components";
import Head from "./Head";
import Header from "src/ui/Header/HeaderDesktop";
import HeaderMobile from "src/ui/Header/HeaderMobile";
// import { FormattedMessage, useIntl } from "react-intl";
import Footer from "src/ui/Footer";

const StyledContentWrapper = styled.div`
  padding-top: 80px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export interface PropsLayout {
  children: ReactNode;
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  imageAlt?: string;
  twitter?: string;
}
// TODO: update container __left/right to styled components
const Layout: FC<PropsLayout> = (props) => {
  return (
    <StyledContentWrapper>
      <div>
        <Head {...props} />
        <HeaderMobile />

        <div className="container">
          <div className="container__left">
            {/* <h1> <FormattedMessage id="page.home.description" /> </h1> */}
            <main>{props.children}</main>
          </div>
          <div className="container__right">
            <Header />
          </div>
        </div>
      </div>

      <Footer />
    </StyledContentWrapper>
  );
};

export default Layout;
