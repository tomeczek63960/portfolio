import React from 'react';
import styled from 'styled-components'
import { responsive, colors } from 'src/styled/mixins';

const StyledFooter = styled.footer`
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
      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

const FooterComponent = () => {
  return (
    <StyledFooter>
      <div className="container">
        <div className="container__left">
          <h3>Sources</h3>
          <p>
            <a
              href="https://iconscout.com/illustrations/office"
              target="_blank"
            >Office employee working overnight Illustration</a>
            <span> by </span>
            <a
              href="https://iconscout.com/contributors/iconscout"
              target="_blank"
            >IconScout Store</a>
          </p>
          <p>
            <a
              href="https://iconscout.com/illustrations/employee-performance"
              target="_blank"
            >Employee performance Illustration</a>
            <span> by </span>
            <a
              href="https://iconscout.com/contributors/manypixels-gallery"
            >Manypixels Gallery</a>
            <span> on </span>
            <a href="https://iconscout.com">IconScout</a>
          </p>
        </div>
      </div>
    </StyledFooter>
  );
}

export default FooterComponent;
