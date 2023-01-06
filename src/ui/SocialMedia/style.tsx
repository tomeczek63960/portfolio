import styled, { css } from "styled-components";
import { colors } from "src/styled/mixins";

export const StyledSocialMeidaLinks = styled.div.attrs(
  (props: { theme: string }) => props
)`
  margin-bottom: 2rem;
  display: flex;
  ${({ theme }) =>
    theme === "dark" &&
    css`
      opacity: 0;
      transform: translateY(-40%);
      pointer-events: none;
    `};
  a {
    display: block;
    margin-right: 2rem;
    ${({ theme }) =>
      theme !== "dark" &&
      css`
        opacity: 0;
        transform: translateX(-40%);
      `};
    &:last-child {
      margin-right: 0;
    }
    svg {
      width: 3rem;
      height: 3rem;
      path {
        transition: 0.3s;
        fill: ${(props) =>
          props.theme === "dark" ? colors.dark : colors.white};
      }
    }
    &:hover svg path {
      fill: ${colors.purpleSecondary};
    }
  }
`;
