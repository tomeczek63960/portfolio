import styled from "styled-components";
import { responsive, colors, variables } from "src/styled/mixins";

export const StyledProjectBox = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background: ${colors.white};
  z-index: 100;
  overflow-y: scroll;
  transform: translateX(100%);
  .blured {
    filter: blur(2px);
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
  padding: 20px;
  border-bottom: 1px solid ${colors.whiteSecondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  h4 {
    color: ${colors.black};
  }
`;
export const StyledProjectBoxContent = styled.div`
  padding: 20px;
  color: ${colors.black};
  p {
    color: ${colors.grayDark};
    font-size: 14px;
  }
  h3 {
    font-size: 20px;
  }
  h4 {
    font-size: 16px;
  }
  img {
    margin: 10px 0 40px;
  }
`;
export const StyledProjectBoxText = styled.div`
  margin-top: 30px;
`;
export const StyledProjectBoxReference = styled.div`
  margin-top: 30px;
  h5 {
    font-size: 18px;
    font-weight: ${variables.fontWeightSemiBold};
  }
  a {
    word-break: break-all;
    color: ${colors.blackTertiary};
    font-weight: ${variables.fontWeightSemiBold};
    font-size: 11px;
    ${responsive.tabletP`
      font-size: 13px;
      font-weight: ${variables.fontWeightBold.toString()};
    `}
  }
  svg {
    width: 15px;
    height: 15px;
  }
`;
export const StyledProjectBoxLink = styled.a`
  margin-top: auto;
  display: block;
  width: 100%;
  padding: 25px;
  text-align: center;
  background-color: ${colors.black};
  color: ${colors.white};
  font-size: 20px;
`;
export const StyledProjectBoxTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;
  span {
    display: block;
    padding: 5px 10px;
    background: ${colors.grayLight};
    color: black;
    margin: 5px;
    font-weight: ${variables.fontWeightBold};
    font-size: 12px;
  }
`;
export const StyledProjectBoxCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px -5px 0;
  span {
    display: block;
    padding: 5px 10px;
    background: ${colors.grayLight};
    color: ${colors.black};
    margin: 5px;
    font-weight: ${variables.fontWeightBold};
    font-size: 12px;

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
  }
`;
