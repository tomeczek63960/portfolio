import styled from "styled-components";
import { responsive, colors, variables } from "src/styled/mixins";
import { isTruthy } from "src/helpers/checkFalsyType";

export const StyledLink = styled.a.attrs(
  (props: { isDisabled: Boolean }) => props
)`
  margin: 0.5rem 0;
  color: ${colors.black};
  font-family: ${variables.fontFamilySecondary};
  font-size: 2.2rem;
  line-height: 3rem;
  display: ${(props) => (isTruthy(props.isDisabled) ? "none" : "block")};
  font-weight: ${variables.fontWeightBold};
  transition: color 0.3s;
  text-decoration: none;
  opacity: 0;
  transform: translateY(-30%);
  pointer-events: none;
  &::selection {
    background-color: ${colors.purple};
  }
  &:hover {
    color: ${colors.purpleSecondary};
  }
  ${responsive.tabletL`
    font-size: 2.4rem;
    line-height: 3.3rem;
  `}
  ${responsive.desktop`
    margin: 1rem 0;
    font-size: 2.6rem;
    line-height: 3.6rem;
  `}
  ${responsive.desktopHd`
    font-size: 3.6rem;
    line-height: 4.8rem;
  `}
`;
export const StyledDesktopNav = styled.div`
  height: 100%;
  display: none;
  ${responsive.tabletP`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`;
export const StyledDesktopNavSocialMeida = styled.div`
  margin-bottom: 2rem;
  display: flex;
  opacity: 0;
  transform: translateY(-30%);
  pointer-events: none;
  a {
    display: block;
    margin-right: 2rem;
    &:last-child {
      margin-right: 0;
    }
    svg {
      width: 3rem;
      height: 3rem;
      path {
        transition: 0.3s;
      }
    }
    &:hover svg path {
      fill: ${colors.purpleSecondary};
    }
  }
`;
