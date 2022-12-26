import { css } from "styled-components";

function getProps(
  ...args: Array<TemplateStringsArray | string>
): Array<TemplateStringsArray | string> {
  return args;
}

export const responsive = {
  tabletP: (...props: Array<TemplateStringsArray | string>) => css`
    @media (min-width: 768px) {
      ${getProps(...props)};
    }
  `,
  /* ${css(...props)}; */
  tabletL: (...props: Array<TemplateStringsArray | string>) => css`
    @media (min-width: 1024px) {
      ${getProps(...props)};
    }
  `,
  // ${css(...props)};
  desktop: (...props: Array<TemplateStringsArray | string>) => css`
    @media (min-width: 1366px) {
      ${getProps(...props)};
    }
  `,
  /* ${css(...props)}; */
  desktopHd: (...props: Array<TemplateStringsArray | string>) => css`
    @media (min-width: 1920px) {
      ${getProps(...props)};
    }
  `,
  // ${css(...props)};
};
// ustawić tutaj jakieś globlane fonty sizy i line height i się tego trzymać na przestrzeni całego projektu
// to samo dla font family
export const colors = {
  white: "#fff",
  whiteBackground: "#fbfcfd", // zmienić nazwę / ogarnąć mniej kolorów
  whitePrimary: "#d5d5d5",
  whiteSecondary: "#eaeaea",
  whiteTertiary: "#eaf0f6",
  black: "#000",
  blackPrimary: "#111",
  blackSecondary: "#222",
  blackTertiary: "#0b0c15",
  darken: "#ffffff0f",
  dark: "#161614",
  gray: "#555",
  grayDark: "#545454",
  grayLight: "#d3d3d3",
  grayFooter: "#1d1d1d",
  grayFooterText: "#999",
  grayLightSecondary: "#cacaca",
  error: "#dd1818",
  success: "#15ee11",
  green: "#28b434",
  warning: "#f37335",
  orange: "#ffa500",
  pink: "#f81ce5",
  purple: "#7928ca",
  blue: "#6A82FB",
  purpleSecondary: "#6428b4",
  shadowColor: "#6960d717",
};

export const variables = {
  sectionVerticalPadding: "30px",
};
