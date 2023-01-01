import React, { FC, RefObject } from "react";
import { Pdf } from "src/Svg";
import { useScrollTrigger } from "src/hooks/useScrollTrigger";
import {
  StyledCvCardWrapper,
  StyedCvCard,
  StyledCvCardHead,
  StyledCvDownloadIcon,
  StyledCvDownloadLink,
  StyedCvCardContent,
  StyledCvCardListItem,
} from "./style";

const ComponentCvBox: FC = () => {
  const [refUl] = useScrollTrigger(0.6, "children") as [
    RefObject<HTMLUListElement>
  ];
  const [refBox] = useScrollTrigger(0.6, "children") as [
    RefObject<HTMLDivElement>
  ];
  return (
    <StyledCvCardWrapper position="left">
      <StyedCvCard position="left">
        <StyledCvCardHead ref={refBox}>
          <StyledCvDownloadIcon href="/cv.pdf">
            <Pdf />
          </StyledCvDownloadIcon>
          <StyledCvDownloadLink href="/cv.pdf" download>
            Download CV
          </StyledCvDownloadLink>
        </StyledCvCardHead>
        <StyedCvCardContent position="left" ref={refUl}>
          <StyledCvCardListItem>
            Spodobały Ci się moje projekty
          </StyledCvCardListItem>
          <StyledCvCardListItem>
            Mój stack technologiczny pasuje do twojej firmy/ogłoszenia
          </StyledCvCardListItem>
          <StyledCvCardListItem>
            Oraz moje doświadczenie jest tym czego szukasz?
          </StyledCvCardListItem>
          <StyledCvCardListItem>
            kliknij w link powyżej żeby pobrać moje Cv 😊.
          </StyledCvCardListItem>
        </StyedCvCardContent>
      </StyedCvCard>
    </StyledCvCardWrapper>
  );
};

export default ComponentCvBox;
