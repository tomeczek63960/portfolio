import styled from 'styled-components'
import { responsive, colors } from 'src/styled/mixins';

export const StyledLink = styled.a.attrs((props: {isDisabled: Boolean}) => props)`
  margin: 5px 0;
  color: ${colors.black};
  font-family: 'Noto Serif Oriya', serif;
  font-size: 22px;
  line-height: 30px;
  display: ${ props => props.isDisabled ? 'none' : 'block' };
  font-weight: 700;
  transition: 0.3s;
  text-decoration: none;
  &::selection {
    background-color: ${colors.purple};
  }
  &:hover {
    color: ${colors.purpleSecondary};
    opacity: 1;
  }
  ${responsive.tabletL`
    font-size: 24px;
    line-height: 33px;
  `}
  ${responsive.desktop`
    margin: 10px 0;
    font-size: 26px;
    line-height: 36px;
  `}
  ${responsive.desktopHd`
    font-size: 36px;
    line-height: 48px;
  `}
`;
export const StyledDesktopNav = styled.div`
  height: 100%;
  display: none;
  ${responsive.tabletP`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`;
export const StyledDesktopNavSocialMeida = styled.div`
  margin-bottom: 20px;
  display: flex;
  a {
    display: block;
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
    svg {
      width: 30px;
      height: 30px;
      path {
        transition: 0.3s;
      }
    }
    &:hover svg path {
      fill: ${colors.purpleSecondary};
    }
  }
`;
