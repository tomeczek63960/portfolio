import React, { FC, RefObject } from "react";
import { useScrollTrigger } from "src/hooks/useScrollTrigger";
import {
  StyledFooter,
  StyledContainerLeftFooter,
  StyledFooterLink,
} from "./style";
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
            <StyledFooterLink
              href="https://iconscout.com/illustrations/office"
              target="_blank"
              rel="noreferrer"
            >
              Office employee working overnight Illustration
            </StyledFooterLink>
            <span> by </span>
            <StyledFooterLink
              href="https://iconscout.com/contributors/iconscout"
              target="_blank"
              rel="noreferrer"
            >
              IconScout Store
            </StyledFooterLink>
          </p>
          <p>
            <StyledFooterLink
              href="https://iconscout.com/illustrations/employee-performance"
              target="_blank"
              rel="noreferrer"
            >
              Employee performance Illustration
            </StyledFooterLink>
            <span> by </span>
            <StyledFooterLink href="https://iconscout.com/contributors/manypixels-gallery">
              Manypixels Gallery
            </StyledFooterLink>
            <span> on </span>
            <StyledFooterLink href="https://iconscout.com">
              IconScout
            </StyledFooterLink>
          </p>
          <p>
            Created with 💜 by{" "}
            <StyledFooterLink
              href="https://www.linkedin.com/in/tomek-kardel-3b98671a5/"
              target="_blank"
              rel="noreferrer"
              light={true}
            >
              Tomasz Kardel
            </StyledFooterLink>
          </p>
        </StyledContainerLeftFooter>
      </StyledContainer>
    </StyledFooter>
  );
};

export default ComponentFooter;
