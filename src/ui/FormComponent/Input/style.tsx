import styled from 'styled-components'
import { colors } from 'src/styled/mixins';

export const StyledInputGroup = styled.div`
  position: relative;
  margin-top: 30px;
  &:first-child {
    margin-top: 0;
  }
  &:after {
    content: '';
    width: 0;
    height: 2px;
    background: ${colors.blackPrimary};
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: 0.3s;
    transform-origin: center center;
  }
  &:hover:after {
    width: 100%;
  }
`;
export const StyledInputGroupComponent = styled.div`
  overflow: hidden;
  position: relative;
`;
export const StyledLabel = styled.label`
  position: absolute;
  bottom: 35%;
  left: 0;
  font-size: 18px;
  line-height: 1;
  color: ${colors.blackSecondary};
  transform-origin: 0px 0px;
  cursor: pointer;
`;
export const StyledInput = styled.input`
    background: transparent;
    color: ${ colors.pink };
    height: 35px;
    font: 15px/24px "Lato", Arial, sans-serif;
    letter-spacing: 1px;
    outline: none !important;
    width: 100%;
    transition: 0.3s ease-in-out;
    border: none;
    border-bottom: 2px solid ${ colors.blackSecondary };;
`;
export const StyledInputBorder = styled.span.attrs((props: {background: string}) => props)`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  height: 2px;
  width: 0%;
  background: ${({ background }) => background || colors.purple};
`;
export const StyledInputBorderAfter = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 15;
  height: 2px;
  width: 0%;
  background: ${colors.blackSecondary};
`;
