import React, { FC, RefObject } from "react";
import { useScrollTrigger } from "src/hooks/useScrollTrigger";
import { StyledParagraph } from "./style";
import { ParagraphProps, paragraphDefaultProps } from "./types";

const Paragraph: FC<ParagraphProps> = ({ children, ...rest }) => {
  const [paragraph] = useScrollTrigger(0.6) as [RefObject<HTMLDivElement>];

  return (
    <StyledParagraph ref={paragraph} {...rest}>
      {children}
    </StyledParagraph>
  );
};

Paragraph.defaultProps = paragraphDefaultProps;
export default Paragraph;
