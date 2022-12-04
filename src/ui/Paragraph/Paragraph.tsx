import React, { useRef, useEffect } from 'react';
import { responsive, colors } from 'src/styled/mixins';
import styled, { css } from 'styled-components';

const ParagraphStyled = styled.p.attrs((props: {color?: string}) => props)`
  margin: 15px 0;
  font-size: 16px;
  line-height: 23px;
  color: ${({color}) => color};
  ${responsive.tabletP`
  `}
  ${responsive.tabletL`
    font-size: 20px;
    line-height: 28px;
  `}
  ${responsive.desktop`
    font-size: 22px;
    line-height: 32px;
  `}
  ${responsive.desktopHd`
    font-size: 26px;
    line-height: 38px;
  `}
`;

interface Props {
  children?: React.ReactNode;
  color?: string;
}

const defaultProps: Props = {
  color: "#cacaca"
};

const Paragraph = ({children, ...rest} : Props) => {
  return (
    <>
      <ParagraphStyled {...rest}>{children}</ParagraphStyled>
    </>
  );
}

Paragraph.defaultProps = defaultProps;
export default Paragraph;
