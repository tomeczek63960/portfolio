import React from "react";
import { useScrollTrigger } from "src/hooks/useScrollTrigger";
import { StyledFooter } from "./style";

const FooterComponent: React.FC = () => {
  const [links] = useScrollTrigger(0.9, "children") as [
    React.RefObject<HTMLDivElement>
  ];
  return (
    <StyledFooter>
      <div className="container">
        <div className="container__left" ref={links}>
          <h3>Sources</h3>
          <p>
            <a
              href="https://iconscout.com/illustrations/office"
              target="_blank"
              rel="noreferrer"
            >
              Office employee working overnight Illustration
            </a>
            <span> by </span>
            <a
              href="https://iconscout.com/contributors/iconscout"
              target="_blank"
              rel="noreferrer"
            >
              IconScout Store
            </a>
          </p>
          <p>
            <a
              href="https://iconscout.com/illustrations/employee-performance"
              target="_blank"
              rel="noreferrer"
            >
              Employee performance Illustration
            </a>
            <span> by </span>
            <a href="https://iconscout.com/contributors/manypixels-gallery">
              Manypixels Gallery
            </a>
            <span> on </span>
            <a href="https://iconscout.com">IconScout</a>
          </p>
        </div>
      </div>
    </StyledFooter>
  );
};

export default FooterComponent;
