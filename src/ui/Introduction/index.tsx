import React, { FC } from "react";
import { StyledIntroductionSection } from "./style";
import Heading from "src/ui/Heading";
import Paragraph from "src/ui/Paragraph";
import Chart from "src/ui/Introduction/Svg/Chart";
import Performence from "src/ui/Introduction/Svg/Performence";
import { isTruthy } from "src/helpers/checkFalsyType";
import { IStrapiParagraphText } from "src/ui/Paragraph/types";
import { PropsIntroduction } from "./types";

const ComponentIntroduction: FC<PropsIntroduction> = ({ content }) => {
  const SvgTag = {
    None: null,
    Chart,
    Performence,
  };
  const SvgTagName = SvgTag[content.Svg];
  return (
    <StyledIntroductionSection id="Introduction">
      <Heading heading={content.Heading} />
      {isTruthy(SvgTagName) && <SvgTagName />}
      {content.Paragraphs.map((paragraph: IStrapiParagraphText) => (
        <Paragraph key={paragraph.id}>{paragraph.Text}</Paragraph>
      ))}
    </StyledIntroductionSection>
  );
};

export default ComponentIntroduction;
