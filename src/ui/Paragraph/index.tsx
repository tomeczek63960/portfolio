import React from 'react';
import {StyledParagraph} from './style';
import {ParagraphProps, paragraphDefaultProps} from './types';

const Paragraph: React.FC<ParagraphProps> = ({children, ...rest}) => {
  return (
    <StyledParagraph {...rest}>{children}</StyledParagraph>
  );
}

Paragraph.defaultProps = paragraphDefaultProps;
export default Paragraph;
