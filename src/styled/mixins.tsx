import { css } from 'styled-components'

export const responsive = {
  tabletP: (...props: (TemplateStringsArray|string)[]) => css`
    @media (min-width: 768px) {
      ${css(...props)};
    }
  `,
  tabletL: (...props: (TemplateStringsArray|string)[]) => css`
    @media (min-width: 1024px) {
      ${css(...props)};
    }
  `,
  desktop: (...props: (TemplateStringsArray|string)[]) => css`
    @media (min-width: 1366px) {
      ${css(...props)};
    }
  `,
  desktopHd: (...props: (TemplateStringsArray|string)[]) => css`
    @media (min-width: 1920px) {
      ${css(...props)};
    }
  `
};
// ustawić tutaj jakieś globlane fonty sizy i line height i się tego trzymać na przestrzeni całego projektu
// to samo dla font family
export const colors = {
  white: '#fff',
  whitePrimary: '#d5d5d5',
  whiteSecondary: '#eaeaea',
  whiteTertiary: '#eaf0f6',
  black: '#000',
  blackPrimary: '#111',
  blackSecondary: '#222',
  blackTertiary: '#0b0c15',
  darken: '#ffffff0f',
  dark: '#161614',
  gray: '#555',
  grayDark: '#545454',
  grayLight: '#d3d3d3',
  grayFooter: '#1d1d1d',
  grayFooterText: '#999',
  grayLightSecondary: '#cacaca',
  error: '#dd1818',
  success: '#15ee11',
  green: '#28b434',
  warning: '#f37335',
  orange: '#ffa500',
  pink: '#f81ce5',
  purple: '#7928ca',
  purplePrimary: '#6A82FB',
  purpleSecondary: '#6428b4',
  lightBlue: '#3788d1',
};