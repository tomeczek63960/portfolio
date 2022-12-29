import styled from "styled-components";

export const Svg = styled.svg`
  .path-background,
  .path-dumpster-background,
  .path-chart-background,
  .path-chart-card,
  .path-elements,
  .path-lamp-bottom,
  .path-lamp-top,
  .path-leaf,
  .path-leaf-5,
  .path-cup,
  .path-laptop {
    opacity: 0;
  }
  .path-background-line {
    stroke-width: 1;
    stroke-dasharray: 600;
    stroke-dashoffset: 600;
  }
  .path-dumpster-top {
    stroke-width: 2;
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
  }
  .path-dumpster-dashes {
    stroke-width: 0.5;
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
  }
  .path-chart-legs {
    stroke-dasharray: 600;
    stroke-dashoffset: 600;
  }
  .path-chart-lines-first {
    stroke-width: 2;
    stroke-dasharray: 600;
    stroke-dashoffset: 600;
  }
  .path-chart-lines-second {
    stroke-width: 2;
    stroke-dasharray: 800;
    stroke-dashoffset: 800;
  }
  .path-table {
    stroke-dasharray: 800;
    stroke-dashoffset: 800;
  }
  .path-table-bottom {
    stroke-dasharray: 800;
    stroke-dashoffset: 800;
  }
  .path-lamp-middle {
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
  }
  .path-pot {
    opacity: 0;
    transform: translateY(-2%);
  }
  .path-pot-elements {
    transform: scale(0);
  }
  .path-floor {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
  }
`;
