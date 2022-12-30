import React, { FC, RefObject } from "react";
import { useScrollTrigger } from "src/hooks/useScrollTrigger";
import { StyledParagraph } from "./style";
import { PropsParagraph, propsParagraphDefault } from "./types";

const ComponentParagraph: FC<PropsParagraph> = ({ children, ...rest }) => {
  const [refParagraph] = useScrollTrigger(0.6) as [RefObject<HTMLDivElement>];

  return (
    <StyledParagraph ref={refParagraph} {...rest}>
      {children}
    </StyledParagraph>
  );
};

ComponentParagraph.defaultProps = propsParagraphDefault;
export default ComponentParagraph;
