import React from "react";
import Linkedin from "../../../public/svg/linkedin.svg";
import Github from "../../../public/svg/github.svg";
import { StyledSocialMeidaLinks } from "./style";
import { SocialMediaProps } from "./types";

const SocialMedia = React.forwardRef<HTMLDivElement, SocialMediaProps>(
  ({ theme = "dark" }, ref) => (
    <StyledSocialMeidaLinks theme={theme} ref={ref}>
      <a
        href="https://github.com/tomeczek63960"
        rel="noreferrer"
        target="_blank"
      >
        <Linkedin />
      </a>
      <a
        href="https://github.com/tomeczek63960"
        rel="noreferrer"
        target="_blank"
      >
        <Github />
      </a>
    </StyledSocialMeidaLinks>
  )
);
SocialMedia.displayName = "SocialMedia";

export default SocialMedia;
