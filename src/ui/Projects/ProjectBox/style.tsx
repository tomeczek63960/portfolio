import styled, { css } from "styled-components";
import { responsive, colors, variables } from "src/styled/mixins";

export const StyledProjectBox = styled.div`
  width: 100%;
  max-width: 60rem;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background: ${colors.white};
  z-index: 100;
  overflow-y: scroll;
  transform: translateX(100%);
  .blured {
    filter: blur(0.2rem);
  }
`;
export const StyledProjectBoxShadow = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  cursor: pointer;
`;
export const StyledProjectBoxClose = styled.div`
  padding: 2rem;
  border-bottom: 0.1rem solid ${colors.whiteSecondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
  }
  h4 {
    color: ${colors.black};
  }
`;
export const StyledProjectBoxContent = styled.div`
  padding: 2rem;
  color: ${colors.black};
  p {
    color: ${colors.grayDark};
    font-size: 1.4rem;
  }
  h3 {
    font-size: 2rem;
  }
  h4 {
    font-size: 1.6rem;
  }
  img {
    margin: 1rem 0 4rem;
  }
`;
export const StyledProjectBoxText = styled.div`
  margin-top: 3rem;
`;
export const StyledProjectBoxReference = styled.div`
  margin-top: 3rem;
  h5 {
    font-size: 1.8rem;
    font-weight: ${variables.fontWeightSemiBold};
  }
  a {
    word-break: break-all;
    color: ${colors.blackTertiary};
    font-weight: ${variables.fontWeightSemiBold};
    font-size: 1.1rem;
    ${responsive.tabletP`
      ${css`
        font-size: 1.3rem;
        font-weight: ${variables.fontWeightBold.toString()};
      `}
    `}
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
export const StyledProjectBoxLink = styled.a`
  margin-top: auto;
  display: block;
  width: 100%;
  padding: 2.5rem;
  text-align: center;
  background-color: ${colors.black};
  color: ${colors.white};
  font-size: 2rem;
`;
export const StyledProjectBoxTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.5rem;
`;
export const StyledProjectBoxCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 3rem -0.5rem 0;
`;

export const StyledProjectLabel = styled.span`
  display: block;
  padding: 0.5rem 1rem;
  background: ${colors.grayLight};
  color: ${colors.black};
  margin: 0.5rem;
  font-weight: ${variables.fontWeightBold};
  font-size: 1.2rem;
  line-height: 2;

  &.danger,
  &.success,
  &.warning {
    color: ${colors.white};
  }
  &.danger {
    background: ${colors.error};
  }
  &.success {
    background: ${colors.success};
  }
  &.warning {
    background: ${colors.warning};
  }
`;
