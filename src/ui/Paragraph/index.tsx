import React, { FC } from "react";
import { useTransformAnimation } from "src/hooks/useTransformAnimation";
import { StyledParagraph } from "./style";
import { ParagraphProps, paragraphDefaultProps } from "./types";

const Paragraph: FC<ParagraphProps> = ({ children, ...rest }) => {
  // TODO: change usetransformAnimation to useScrollTrigger
  const [paragraph] = useTransformAnimation();
  return (
    <StyledParagraph ref={paragraph} {...rest}>
      {children}
    </StyledParagraph>
  );
};

Paragraph.defaultProps = paragraphDefaultProps;
export default Paragraph;
