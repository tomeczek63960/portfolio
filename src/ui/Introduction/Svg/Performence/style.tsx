import styled from "styled-components";

export const Svg = styled.svg`
  .path-background,
  .path-person,
  .path-dot-1,
  .path-dot-2,
  .path-dot-3,
  .path-bottom-line {
    opacity: 0;
  }
  .path-progress-line {
    stroke-dasharray: 800;
    stroke-dashoffset: -800;
  }
  .path-bar-1,
  .path-bar-2,
  .path-bar-3,
  .path-bar-4 {
    transform: scaleY(0);
    transform-origin: bottom !important;
  }
`;
