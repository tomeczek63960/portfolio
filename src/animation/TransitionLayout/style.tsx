import styled, { css } from "styled-components";
import { colors, responsive } from "src/styled/mixins";

export const StyledTransition = styled.div.attrs(
  (props: { type: "left" | "right" }) => props
)`
  width: 50%;
  height: 100vh;
  background: ${colors.white};
  position: fixed;
  z-index: ${(props) => (props.type === "left" ? 10 : 100)};
  transform: ${(props) =>
    props.type === "left" ? "translateY(100%)" : "translateY(-100%)"};

  ${(props) =>
    props.type === "left"
      ? css`
          left: 0;
          bottom: 0;
        `
      : css`
          right: 0;
          top: 0;
        `}
  ${(props) =>
    props.type === "right" &&
    responsive.tabletP`
      background: ${colors.black}
  `}
`;
export const StyledTransitionCircle = styled.div.attrs(
  (props: { ref: HTMLButtonElement }) => props
)`
  width: 10rem;
  height: 10rem;
  background: ${colors.black};
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 10000000;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: none;
  overflow: hidden;
  opacity: 0;
  transition: none;
  pointer-events: none;
`;

export const StyledTransitionCirclePartWrapper = styled.span.attrs(
  (props: { type: "left" | "right" }) => props
)`
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  ${(props) =>
    props.type === "left"
      ? css`
          left: 0;
          background: ${colors.white};
          z-index: 1;
        `
      : css`
          right: 0;
          background: ${colors.black};
          z-index: 10000000;
        `}
`;

export const StyledTransitionCirclePart = styled.span.attrs(
  (props: { type: "left" | "right" }) => props
)`
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 10000000;
  transform: scaleY(0);
  ${(props) =>
    props.type === "left"
      ? css`
          color: ${colors.white};
          background: ${colors.black};
          padding-right: 0.8rem;
          transform-origin: bottom;
          justify-content: right;
        `
      : css`
          color: ${colors.black};
          background: ${colors.white};
          justify-content: left;
          transform-origin: top;
          padding-left: 0.8rem;
        `}
  svg {
    height: 2.8rem;
    width: auto;
    path {
      stroke-dasharray: 250;
      stroke-dashoffset: 250;
    }
  }
`;
