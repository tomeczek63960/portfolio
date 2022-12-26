import React from "react";
import Pdf from "../../../../public/svg/pdf.svg";
import { useScrollTrigger } from "src/hooks/useScrollTrigger";
import {
  StyledCvCardWrapper,
  StyedCvCard,
  StyledCvCardHead,
  StyledDownloadCvIcon,
  StyledDownloadCvLink,
  StyedCvCardContent,
  StyledCardListItem,
} from "./style";

const CvBoxComponent: React.FC = () => {
  const [ul] = useScrollTrigger(0.6, "children") as [
    React.RefObject<HTMLUListElement>
  ];
  const [box] = useScrollTrigger(0.6, "children") as [
    React.RefObject<HTMLDivElement>
  ];
  return (
    <StyledCvCardWrapper position="left">
      <StyedCvCard position="left">
        <StyledCvCardHead ref={box}>
          <StyledDownloadCvIcon href="/cv.pdf">
            <Pdf />
          </StyledDownloadCvIcon>
          <StyledDownloadCvLink href="/cv.pdf" download>
            Download CV
          </StyledDownloadCvLink>
        </StyledCvCardHead>
        <StyedCvCardContent position="left" ref={ul}>
          <StyledCardListItem>
            Spodobały Ci się moje projekty
          </StyledCardListItem>
          <StyledCardListItem>
            Mój stack technologiczny pasuje do twojej firmy/ogłoszenia
          </StyledCardListItem>
          <StyledCardListItem>
            Oraz moje doświadczenie jest tym czego szukasz?
          </StyledCardListItem>
          <StyledCardListItem>
            kliknij w link powyżej żeby pobrać moje Cv 😊.
          </StyledCardListItem>
        </StyedCvCardContent>
      </StyedCvCard>
    </StyledCvCardWrapper>
  );
};

export default CvBoxComponent;
