import Image from "next/image";
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
        <Image src={image} width="100%" height="100%" />
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
