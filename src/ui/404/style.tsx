import styled from "styled-components";

export const Styled404 = styled.section`
  .svg-404-background {
    & > path,
    & > g {
      opacity: 0;
    }
  }
  .svg-404-plants,
  .svg-404-plate,
  .svg-404-ballon,
  .svg-404-monster {
    opacity: 0;
  }
  .svg-404-lightning polygon {
    stroke: #ff725e;
    stroke-width: 1px;
    stroke-dasharray: 150;
    stroke-dashoffset: 150;
    fill: transparent;
  }
  .svg-404-floor {
    stroke-width: 1;
    stroke-dasharray: 950;
    stroke-dashoffset: 950;
    stroke: #263238;
    fill: none !important;
  }
`;
