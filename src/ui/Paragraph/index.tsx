import React from "react";
import { useTransformAnimation } from "src/hooks/useTransformAnimation";
import { StyledParagraph } from "./style";
import { ParagraphProps, paragraphDefaultProps } from "./types";

const Paragraph: React.FC<ParagraphProps> = ({ children, ...rest }) => {
  const [paragraph] = useTransformAnimation();
  return (
    <StyledParagraph ref={paragraph} {...rest}>
      {children}
    </StyledParagraph>
  );
};

Paragraph.defaultProps = paragraphDefaultProps;
export default Paragraph;
