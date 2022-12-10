
import { responsive, colors } from 'src/styled/mixins';
import styled from 'styled-components';

const headingStyles = (color: string) => `
  font-family: 'Poppins', sans-serif;
  line-height: 1;
  letter-spacing: 2px;
  color: ${color};
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 900;
  .splitted-words {
    white-space: nowrap;
  }
  .splitted-text {
    display: inline-block;
    transition: color 0.3s;
    cursor: pointer;
  }
`;

export const H1 = styled.h1.attrs((props: {color?: string, hoverColor?: string}) => props)`
  margin: 30px 0;
  font-size: 35px;
  ${({color}) => headingStyles(color || colors.white)}
  ${responsive.tabletP`
    font-size: 40px;
  `}
  ${responsive.tabletL`
    font-size: 55px;
  `}
  ${responsive.desktopHd`
    font-size: 75px;
  `}
`; 
export const H2 = styled.h2.attrs((props: {color?: string, hoverColor?: string}) => props)`
  font-size: 30px;
  margin: 20px 0;
  ${({color}) => headingStyles(color || colors.white)}
  ${responsive.tabletP`
    font-size: 35px;
  `}
  ${responsive.tabletL`
    font-size: 45px;
  `}
  ${responsive.desktopHd`
    font-size: 55px;
  `}
`;
export const H3 = styled.h3.attrs((props: {color?: string, hoverColor?: string}) => props)`
  font-size: 20px;
  margin: 20px 0;
  ${({color}) => headingStyles(color || colors.white)}
  ${responsive.tabletP`
    font-size: 25px;
  `}
  ${responsive.tabletL`
    font-size: 30px;
  `}
`; 
export const H4 = styled.h4.attrs((props: {color?: string, hoverColor?: string}) => props)`
  font-size: 25px;
  ${({color}) => headingStyles(color || colors.white)}
`; 
export const H5 = styled.h5.attrs((props: {color?: string, hoverColor?: string}) => props)`
  font-size: 15px;
  ${({color}) => headingStyles(color || colors.white)}
`; 
export const H6 = styled.h6.attrs((props: {color?: string, hoverColor?: string}) => props)`
  ${({color}) => headingStyles(color || colors.white)}
`; 