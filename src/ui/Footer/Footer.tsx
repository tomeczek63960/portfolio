import React from 'react';
import styled from 'styled-components'

const StyledFooter = styled.footer`

`;

function FooterComponent() {
  return (
    <StyledFooter>
      <div className="container">
        <div className="container__left">
          <h3>Sources</h3>
          <a href="https://iconscout.com/illustrations/office" target="_blank">Office employee working overnight Illustration</a> by <a href="https://iconscout.com/contributors/iconscout" target="_blank">IconScout Store</a>

          <a href="https://iconscout.com/illustrations/employee-performance" target="_blank">Employee performance Illustration</a> by <a href="https://iconscout.com/contributors/manypixels-gallery">Manypixels Gallery</a> on <a href="https://iconscout.com">IconScout</a>
        </div>
      </div>
    </StyledFooter>
  );
}

export default FooterComponent;
