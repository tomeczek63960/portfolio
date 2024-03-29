import { createGlobalStyle } from "styled-components";

export const StyledReset = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    line-height: 1;
  }

  blockquote {
    quotes: none;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  sup {
    top: -0.5em;
  }

  sub {
    bottom: -0.25em;
  }

  address {
    font-style: normal;
  }

  a:hover,
  a:active,
  input,
  textarea,
  select,
  button {
    outline: 0;
  }

  button {
    border: none;
    background-color: transparent;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  img {
    border: 0;
    -ms-interpolation-mode: bicubic;
    vertical-align: middle;
    width: 100%;
    max-width: 100%;
    height: auto;
  }

  main,
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  nav,
  section,
  summary {
    display: block;
  }

  @media print {
    * {
      background: transparent !important;
      color: #000 !important;
      box-shadow: none !important;
      text-shadow: none !important;
      filter: none !important;
    }

    a,
    a:visited {
      text-decoration: underline;
    }

    a[href]::after {
      content: " (" attr(href) ")";
    }

    a[href^="#"]::after {
      content: "";
    }

    img {
      max-width: 100% !important;
    }
  }

  li {
    list-style-type: none;
  }
`;
