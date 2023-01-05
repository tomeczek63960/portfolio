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
import { IStrapiParagraphText } from "src/ui/Paragraph/types";
import { PropsCvBox } from "../types";
import { getEnvVars } from "src/helpers/getEnvVars";

const ComponentCvBox: FC<PropsCvBox> = ({ content }) => {
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
          <StyledCvDownloadIcon
            href={`${getEnvVars().apiUrl}${content.Cv.url}`}
            download
          >
            <Pdf />
          </StyledCvDownloadIcon>
          <StyledCvDownloadLink
            href={`${getEnvVars().apiUrl}${content.Cv.url}`}
            download
          >
            {content.LinkText}
          </StyledCvDownloadLink>
        </StyledCvCardHead>
        <StyedCvCardContent position="left" ref={refUl}>
          {content.ListItems.map((item: IStrapiParagraphText) => (
            <StyledCvCardListItem key={item.id}>
              {item.Text}
            </StyledCvCardListItem>
          ))}
        </StyedCvCardContent>
      </StyedCvCard>
    </StyledCvCardWrapper>
  );
};

export default ComponentCvBox;
