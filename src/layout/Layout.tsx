import React, { FC } from "react";
import styled from "styled-components";
import Head from "./Head";
import {
  StyledContainer,
  StyledContainerLeft,
  StyledContainerRight,
} from "src/ui/Container/style";
import ComponentErrors from "src/ui/Errors";
import { PropsLayout } from "./types";
import dynamic from "next/dynamic";
import { responsive } from "src/styled/mixins";

const StyledContentWrapper = styled.div`
  padding-top: 6rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  ${responsive.tabletL`
    padding-top: 4rem;
  `}
`;

const Footer = dynamic(async () => await import("src/ui/Footer"));
const Header = dynamic(async () => await import("src/ui/Header/HeaderDesktop"));
const HeaderMobile = dynamic(
  async () => await import("src/ui/Header/HeaderMobile")
);

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
