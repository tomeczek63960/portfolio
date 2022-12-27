import { createGlobalStyle, css } from "styled-components";
import { responsive } from "src/styled/mixins";

export const StyledBase = createGlobalStyle`
  :root {
    --contact-rotation: 0;
  }
  html {
    max-width: 100vw;
    -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
    font-size: 62.5%;
    font-style: normal;
    scroll-behavior: smooth;
    overflow-x: hidden;
    overflow-y: scroll;
    position: relative;
    &.no-scroll {
      overflow: hidden !important;
      height: 100vh;
      &.body-padding {
        @media screen and (hover) {
          padding-right: 17px;
        }
        .body--before {
          @media screen and (hover) {
            width: calc(50% + (17px / 2));
          }
        }
        .container__right {
          @media screen and (hover) {
            width: calc(50% + (17px / 2));
          }
        }
        &-thin {
          @media screen and (hover) {
            padding-right: 15px;
          }
          .body--before {
            @media screen and (hover) {
              width: calc(50% + (15px / 2));
            }
          }
          .container__right {
            @media screen and (hover) {
              width: calc(50% + (15px / 2));
            }
          }
        }
      }
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    text-size-adjust: 100%; // iOS on orientation change
    color: ${(props) => props.black};
    font-family: ${(props) => props.fontFamilyPrimary};
    font-weight: ${(props) => props.fontWeightMedium};
    font-size: 1.6rem;
    line-height: 2.3rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    backface-visibility: hidden;
    overflow-x: hidden;
    color: ${(props) => props.white};
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    background: black;
    font-family: "Inter", sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Noto Serif Oriya", serif;
    line-height: 1.2;
  }

  a,
  label,
  .button {
    -webkit-tap-highlight-color: transparent;
  }

  button {
    font-family: ${(props) => props.fontFamilyPrimary};
  }

  img,
  picture {
    display: block;
    max-width: 100%;
    height: auto;
  }
  picture {
    source,
    img {
      object-fit: cover;
      height: 100%;
    }
  }

  // placeholders
  input,
  textarea,
  select {
    &::-webkit-input-placeholder {
      color: ${(props) => props.black};
    }

    &::-moz-placeholder {
      opacity: 1;
      color: ${(props) => props.black};
    }

    &:-ms-input-placeholder {
      color: ${(props) => props.black};
    }
  }

  strong {
    font-weight: ${(props) => props.fontWeightBold};
  }

  // scrollbar ma być taki jak na macu (globalnie ostylowany)

  a {
    color: #7928ca;
    font-weight: 700;
    text-decoration: underline;
    transition: opacity 0.3s;
    &::selection {
      background-color: #6a82fb;
    }
    &:hover {
      opacity: 0.8;
    }
  }

  *::selection {
    background-color: ${(props) => props.violet};
    -webkit-text-fill-color: ${(props) => props.white};
  }

  p {
    color: ${(props) => props.white};
  }

  .container {
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    max-width: 47.8rem;
    height: 100%;
    padding-left: ${(props) => props.gridSpacerMobile};
    padding-right: ${(props) => props.gridSpacerMobile};
    z-index: 1000;
    display: flex;
    flex-direction: column;
    ${(props: any) => responsive.tabletP`
      flex-direction: row;
      max-width: 76.8rem;
      ${css`
        padding-left: ${props.gridSpacerTabletP};
        padding-right: ${props.gridSpacerTabletP};
      `}
    `}

    ${(props: any) => responsive.tabletL`
      max-width: 102.4rem;
      ${css`
        padding-left: ${props.gridSpacerTabletL};
        padding-right: ${props.gridSpacerTabletL};
      `}
    `}
    ${responsive.desktop`
      padding-left: 0;
      padding-right: 0;
      max-width: 99.8rem;
    `}
    ${responsive.desktopHd`
      max-width: 139rem;
    `}

    &__left {
      width: 100%;
      ${responsive.tabletP`
        padding-right: 30px;
        width: 50%;
      `}
    }
    &__right {
      order: -1;
      width: 100%;
      ${responsive.tabletP`
        order: 1;
        width: 50%;
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
      `}
      padding-left: 30px;
      ${responsive.tabletL`
        padding-left: 60px;
      `}
      ${responsive.desktop`
        padding-left: 80px;
      `}
    }
  }
`;
