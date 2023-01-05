import React, { ReactNode, FC } from "react";
import styled from "styled-components";
import Head from "./Head";
import Header from "src/ui/Header/HeaderDesktop";
import HeaderMobile from "src/ui/Header/HeaderMobile";
import Footer from "src/ui/Footer";
import {
  StyledContainer,
  StyledContainerLeft,
  StyledContainerRight,
} from "src/ui/Container/style";
import ComponentErrors from "src/ui/Errors";

const StyledContentWrapper = styled.div`
  padding-top: 8rem;
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

const Layout: FC<PropsLayout> = (props) => {
  return (
    <StyledContentWrapper>
      <div>
        <Head {...props} />
        <HeaderMobile />
        <ComponentErrors />

        <StyledContainer>
          <StyledContainerLeft>
            <main>{props.children}</main>
          </StyledContainerLeft>
          <StyledContainerRight>
            <Header />
          </StyledContainerRight>
        </StyledContainer>
      </div>

      <Footer />
    </StyledContentWrapper>
  );
};

export default Layout;
