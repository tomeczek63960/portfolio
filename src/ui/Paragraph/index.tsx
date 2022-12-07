import React, { useRef, useEffect } from 'react';
import {ParagraphStyled} from './style';

interface Props {
  children?: React.ReactNode;
  color?: string;
}

const defaultProps: Props = {
  color: "#cacaca"
};

const Paragraph: React.FC<Props> = ({children, ...rest} : Props) => {
  return (
    <ParagraphStyled {...rest}>{children}</ParagraphStyled>
  );
}

Paragraph.defaultProps = defaultProps;
export default Paragraph;
