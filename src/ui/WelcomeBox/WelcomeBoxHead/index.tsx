import Image from "src/ui/Image";
import React, { FC } from "react";
import {
  StyledWelcomeBoxHead,
  StyledWelcomeBoxHeadHeading,
  StyledWelcomeBoxHeadParagraph,
  StyledWelcomeBoxHeadInfo,
  StyledWelcomeBoxImage,
} from "../style";
import { PropsWelcomeBoxHead } from "./types";

const ComponentWelcomeBoxHead: FC<PropsWelcomeBoxHead> = ({
  image,
  name,
  position,
}) => {
  return (
    <StyledWelcomeBoxHead>
      <StyledWelcomeBoxImage>
        <Image url={image} />
      </StyledWelcomeBoxImage>
      <StyledWelcomeBoxHeadInfo>
        <StyledWelcomeBoxHeadHeading>{name}</StyledWelcomeBoxHeadHeading>
        <StyledWelcomeBoxHeadParagraph>
          {position}
        </StyledWelcomeBoxHeadParagraph>
      </StyledWelcomeBoxHeadInfo>
    </StyledWelcomeBoxHead>
  );
};

export default ComponentWelcomeBoxHead;
