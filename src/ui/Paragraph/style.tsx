import { responsive } from 'src/styled/mixins';
import styled from 'styled-components';

export const StyledParagraph = styled.p.attrs((props: {color?: string}) => props)`
  margin: 15px 0;
  font-size: 16px;
  line-height: 23px;
  color: ${({color}) => color};
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