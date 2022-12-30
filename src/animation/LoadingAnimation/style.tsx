import styled from "styled-components";
import { colors, responsive, variables } from "src/styled/mixins";

export const StyledPageAnimation = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: ${colors.white};
  overflow: hidden;
  font-family: ${variables.fontFamilyTimes};
`;
export const StyledPageAnimationBall = styled.span`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  background: ${colors.black};
  border-radius: 50%;
  display: block;
`;
export const StyledPageAnimationText = styled.span`
  width: 70px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 200px;
  left: 50%;
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 1;
  opacity: 0;
  color: ${colors.white};
  font-size: 25px;
  font-weight: ${variables.fontWeightBold};
  svg {
    height: 50px;
    width: auto;
    & + svg {
      margin-left: 5px;
    }
    path {
      stroke-dasharray: 250;
      stroke-dashoffset: 250;
    }
  }
`;
export const StyledPageAnimationBackground = styled.div`
  display: block;
  height: 0%;
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${colors.white};
  z-index: 10000000;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;

  ${responsive.tabletP`
    width: 50%;
    opacity: 1;
    pointer-events: all;
    visibility: visible;
  `} /*  */
  .no-scroll.body-padding & {
    @media screen and (hover) {
      width: calc(50% + (17px / 2));
    }
  }
  .no-scroll.body-padding-thin & {
    @media screen and (hover) {
      width: calc(50% + (15px / 2));
    }
  }
`;
export const StyledPageContent = styled.div`
  opacity: 0;
  pointer-events: none;
  height: 100vh;
  overflow: hidden;
`;
