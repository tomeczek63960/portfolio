import styled from "styled-components";
import { responsive, colors, variables } from "src/styled/mixins";
import { isTruthy } from "src/helpers/checkFalsyType";

export const StyledLink = styled.a.attrs(
  (props: { isDisabled: Boolean }) => props
)`
  margin-top: 20px;
  color: ${colors.white};
  font-size: 18px;
  line-height: 1;
  display: block;
  width: fit-content;
  font-family: ${variables.fontFamilyPrimary};
  transform: translateX(-50px);
  opacity: 0;
  display: ${(props) => (isTruthy(props.isDisabled) ? "none" : "block")};
  text-decoration: none;
  &::selection {
    background-color: ${colors.purple};
  }
  &:hover {
    opacity: 1;
  }
  &:first-child {
    margin-top: 0;
  }
`;
export const StyledMobileNav = styled.div`
  background: ${colors.black};
  width: 100%;
  position: fixed;
  top: 80px;
  left: 0;
  z-index: 2;
  height: 0;
  overflow: hidden;
`;
export const StyledMobileNavContainer = styled.div`
  padding: 50px 25px;
  display: flex;
  flex-direction: column;
`;
export const StyledBars = styled.button`
  width: 40px;
  height: 40px;
  position: relative;
  z-index: 110;
  display: block;
  border-radius: 10px;

  span {
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background: ${colors.white};
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  span:first-child {
    transform-origin: center center;
    left: calc(50% - 12px);
  }
  span:last-child {
    transform-origin: center center;
    left: calc(50% + 12px);
  }
`;
export const StyledHeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;
  width: 100%;
  background: ${colors.black};
  ${responsive.tabletP`
    display: none;
  `}
`;
