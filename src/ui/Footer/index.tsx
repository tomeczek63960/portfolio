import React from 'react';
import {StyledFooter} from './style';

const FooterComponent: React.FC = () => {
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
