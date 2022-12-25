
import styled from "styled-components"
import {responsive, colors} from "src/styled/mixins";

export const StyledFooter = styled.footer`
  margin-top: auto;
  position: relative;
  z-index: 1;
  .container__left {
    padding-top: 40px;
    padding-bottom: 40px;
    &::before {
      content: '';
      width: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      background: ${colors.grayFooter};
      z-index: -1;
      ${responsive.tabletP`
        width: 50%;
      `}
    }
    p {
      color: ${colors.grayFooterText};
      font-size: 12px;
      & + p {
        margin-top: 20px;
      }
    }
    a {
      text-decoration: underline;
      color: ${colors.grayFooterText};
      transition: 0.3s;
      &::selection {
        background-color: ${colors.purple};
      }
      &:hover {
        opacity: 0.7;
      }
    }
  }
`;