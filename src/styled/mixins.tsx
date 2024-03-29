import { css, FlattenSimpleInterpolation } from "styled-components";

function getProps(
  ...args: Array<TemplateStringsArray | string | FlattenSimpleInterpolation>
): Array<TemplateStringsArray | string | FlattenSimpleInterpolation> {
  return args;
}

export const responsive = {
  tabletP: (
    ...props: Array<TemplateStringsArray | string | FlattenSimpleInterpolation>
  ) => css`
    @media (min-width: ${variables.tabletP}) {
      ${getProps(...props)};
    }
  `,
  tabletL: (
    ...props: Array<TemplateStringsArray | string | FlattenSimpleInterpolation>
  ) => css`
    @media (min-width: ${variables.tabletL}) {
      ${getProps(...props)};
    }
  `,
  desktop: (
    ...props: Array<TemplateStringsArray | string | FlattenSimpleInterpolation>
  ) => css`
    @media (min-width: ${variables.desktop}) {
      ${getProps(...props)};
    }
  `,
  desktopHd: (
    ...props: Array<TemplateStringsArray | string | FlattenSimpleInterpolation>
  ) => css`
    @media (min-width: ${variables.desktopHd}) {
      ${getProps(...props)};
    }
  `,
};
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
  pending: "#999",
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
  sectionVerticalPadding: "5rem",
  sectionVerticalPaddingDesktop: "9rem",
  sectionContentPadding: "4rem",
  sectionContentPaddingDesktop: "5rem",
  fontFamilyRoboto: "Roboto",
  fontFamilyTimes: "Times",
  fontFamilyInter: "Inter, sans-serif",
  fontFamilyPrimary: "Arial, sans-serif",
  fontFamilySecondary: "Noto Serif Oriya",
  fontFamilyPoppins: "Poppins, sans-serif",
  fontFamilySourceSans: "Source Sans Pro, sans-serif",
  fontFamilyOpenSans: "Open Sans",
  fontWeightNormal: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  fontWeightBlack: 900,
  tabletP: "768px",
  tabletL: "1024px",
  desktop: "1336px",
  desktopHd: "1920px",
  containerPadding: "2.5rem",
};
