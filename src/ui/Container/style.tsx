import styled, { css } from "styled-components";
import { responsive } from "src/styled/mixins";
const gridSpacerMobile = "2.5rem";

export const StyledContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  max-width: 47.8rem;
  height: 100%;
  padding-left: ${gridSpacerMobile};
  padding-right: ${gridSpacerMobile};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  ${(props: any) => responsive.tabletP`
    flex-direction: row;
    max-width: 76.8rem;
    ${css`
      padding-left: ${props.gridSpacerTabletP};
      padding-right: ${props.gridSpacerTabletP};
    `}
  `}

  ${(props: any) => responsive.tabletL`
    max-width: 102.4rem;
    ${css`
      padding-left: ${props.gridSpacerTabletL};
      padding-right: ${props.gridSpacerTabletL};
    `}
  `}
  ${responsive.desktop`
    padding-left: 0;
    padding-right: 0;
    max-width: 99.8rem;
  `}
  ${responsive.desktopHd`
    max-width: 139rem;
  `}
`;
export const StyledContainerLeft = styled.div`
  width: 100%;
  ${responsive.tabletP`
    padding-right: 3rem;
    width: 50%;
  `}
`;
export const StyledContainerRight = styled.div`
  order: -1;
  width: 100%;
  padding-left: 3rem;
  z-index: 2;
  ${responsive.tabletP`
    order: 1;
    width: 50%;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
  `}
  ${responsive.tabletL`
    padding-left: 6rem;
  `}
  ${responsive.desktop`
    padding-left: 8rem;
  `}

  .no-scroll.body-padding & {
    @media screen and (hover) {
      width: calc(50% + (1.7rem / 2));
    }
  }
  .no-scroll.body-padding-thin & {
    @media screen and (hover) {
      width: calc(50% + (1.5rem / 2));
    }
  }
`;
