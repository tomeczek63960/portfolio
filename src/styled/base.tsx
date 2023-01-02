import { createGlobalStyle } from "styled-components";
import { colors, variables } from "src/styled/mixins";
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
        /* seek using classes .no-scroll.body-padding to find section dependent on this pattern */
        @media screen and (hover) {
          padding-right: 1.7rem;
        }
        &-thin {
          @media screen and (hover) {
            padding-right: 1.5rem;
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
    color: ${colors.black};
    font-weight: ${variables.fontWeightMedium};
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
    color: ${colors.white};
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    background: ${colors.black};
    font-family: ${variables.fontFamilyInter};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${variables.fontFamilySecondary};
    line-height: 1.2;
  }

  a,
  label,
  .button {
    -webkit-tap-highlight-color: transparent;
  }

  button {
    font-family: ${variables.fontFamilyPrimary};
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
      color: ${colors.black};
    }

    &::-moz-placeholder {
      opacity: 1;
      color: ${colors.black};
    }

    &:-ms-input-placeholder {
      color: ${colors.black};
    }
  }

  strong {
    font-weight: ${variables.fontWeightBold};
  }

  a {
    color: ${colors.purple};
    font-weight: ${variables.fontWeightBold};
    text-decoration: underline;
    transition: opacity 0.3s;
    &::selection {
      background-color: ${colors.blue};
    }
    &:hover {
      opacity: 0.8;
    }
  }

  *::selection {
    background-color: ${colors.purple};
    -webkit-text-fill-color: ${colors.white};
  }

  p {
    color: ${colors.white};
  }
`;
