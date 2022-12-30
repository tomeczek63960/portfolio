import React, { FC, RefObject } from "react";
import { useScrollTrigger } from "src/hooks/useScrollTrigger";
import { StyledFooter, StyledContainerLeftFooter } from "./style";
import { StyledContainer } from "src/ui/Container/style";

const ComponentFooter: FC = () => {
  const [refLinks] = useScrollTrigger(0.9, "children") as [
    RefObject<HTMLDivElement>
  ];
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledContainerLeftFooter ref={refLinks}>
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
        </StyledContainerLeftFooter>
      </StyledContainer>
    </StyledFooter>
  );
};

export default ComponentFooter;
