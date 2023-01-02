import styled from "styled-components";
import { responsive, colors, variables } from "src/styled/mixins";
import { isTruthy } from "src/helpers/checkFalsyType";

export const StyledLink = styled.a.attrs(
  (props: { isDisabled: Boolean }) => props
)`
  margin-top: 2rem;
  color: ${colors.white};
  font-size: 1.8rem;
  line-height: 1;
  display: block;
  width: fit-content;
  font-family: ${variables.fontFamilyPrimary};
  transform: translateX(-5rem);
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
  top: 8rem;
  left: 0;
  z-index: 2;
  height: 0;
  overflow: hidden;
`;
export const StyledMobileNavContainer = styled.div`
  padding: 5rem 2.5rem;
  display: flex;
  flex-direction: column;
`;
export const StyledBars = styled.button`
  width: 4rem;
  height: 4rem;
  position: relative;
  z-index: 110;
  display: block;
  border-radius: 1rem;

  span {
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 0.2rem;
    background: ${colors.white};
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  span:first-child {
    transform-origin: center center;
    left: calc(50% - 1.2rem);
  }
  span:last-child {
    transform-origin: center center;
    left: calc(50% + 1.2rem);
  }
`;
export const StyledHeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2.5rem;
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
