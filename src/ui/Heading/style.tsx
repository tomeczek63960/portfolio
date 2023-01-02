import { isTruthy } from "src/helpers/checkFalsyType";
import { responsive, colors, variables } from "src/styled/mixins";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

const headingStyles = (
  color: string,
  selectionColor?: string
): FlattenSimpleInterpolation | any => css`
  line-height: 1;
  letter-spacing: 0.2rem;
  color: ${color};
  font-family: ${variables.fontFamilySourceSans};
  font-weight: ${variables.fontWeightBlack};
  opacity: 0;
  .splitted-words {
    white-space: nowrap;
  }
  .splitted-text {
    display: inline-block;
    transition: color 0.3s;
    cursor: pointer;
    transform: scale(0);
  }
  ${isTruthy(selectionColor) &&
  css`
    &::selection,
    .splitted-text::selection {
      background-color: ${selectionColor} !important;
      -webkit-text-fill-color: ${colors.white};
    }
  `}
`;

export const H1 = styled.h1.attrs(
  (props: { color: string; hoverColor?: string; selectionColor?: string }) =>
    props
)`
  margin: 3rem 0;
  font-size: 3.5rem;
  ${({ color, selectionColor }) => headingStyles(color, selectionColor)}
  ${responsive.tabletP`
    font-size: 4rem;
  `}
  ${responsive.tabletL`
    font-size: 5.5rem;
  `}
  ${responsive.desktopHd`
    font-size: 7.5rem;
  `}
`;
export const H2 = styled.h2.attrs(
  (props: { color: string; hoverColor?: string; selectionColor?: string }) =>
    props
)`
  font-size: 3rem;
  margin: 2rem 0;
  ${({ color, selectionColor }) => headingStyles(color, selectionColor)}
  ${responsive.tabletP`
    font-size: 3.5rem;
  `}
  ${responsive.tabletL`
    font-size: 4.5rem;
  `}
  ${responsive.desktopHd`
    font-size: 5.5rem;
  `}
`;
export const H3 = styled.h3.attrs(
  (props: { color: string; hoverColor?: string; selectionColor?: string }) =>
    props
)`
  font-size: 2rem;
  margin: 2rem 0;
  ${({ color, selectionColor }) => headingStyles(color, selectionColor)}
  ${responsive.tabletP`
    font-size: 2.5rem;
  `}
  ${responsive.tabletL`
    font-size: 3rem;
  `}
`;
export const H4 = styled.h4.attrs(
  (props: { color: string; hoverColor?: string; selectionColor?: string }) =>
    props
)`
  font-size: 2.5rem;
  ${({ color, selectionColor }) => headingStyles(color, selectionColor)}
`;
export const H5 = styled.h5.attrs(
  (props: { color: string; hoverColor?: string; selectionColor?: string }) =>
    props
)`
  font-size: 1.5rem;
  ${({ color, selectionColor }) => headingStyles(color, selectionColor)}
`;
export const H6 = styled.h6.attrs(
  (props: { color: string; hoverColor?: string; selectionColor?: string }) =>
    props
)`
  ${({ color, selectionColor }) => headingStyles(color, selectionColor)}
`;
