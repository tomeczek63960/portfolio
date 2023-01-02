import styled from "styled-components";
import { colors } from "src/styled/mixins";
import { isTruthy } from "src/helpers/checkFalsyType";

export const StyledInputGroup = styled.div`
  position: relative;
  margin-top: 3rem;
  opacity: 0;
  transform: translateY(-30%);
  &:first-child {
    margin-top: 0;
  }
  &:after {
    content: "";
    width: 0;
    height: 0.2rem;
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
  font-size: 1.8rem;
  line-height: 1;
  color: ${colors.blackSecondary};
  transform-origin: 0 0;
  cursor: pointer;
`;
export const StyledInput = styled.input`
  background: transparent;
  color: ${colors.pink};
  height: 3.5rem;
  font: 1.5rem/2.4rem "Lato", Arial, sans-serif;
  letter-spacing: 0.1rem;
  outline: none !important;
  width: 100%;
  transition: 0.3s ease-in-out;
  border: none;
  border-bottom: 0.2rem solid ${colors.blackSecondary}; ;
`;
export const StyledInputBorder = styled.span.attrs(
  (props: { background: string }) => props
)`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  height: 0.2rem;
  width: 0%;
  background: ${({ background }) =>
    isTruthy(background) ? background : colors.purple};
`;
export const StyledInputBorderAfter = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 15;
  height: 0.2rem;
  width: 0%;
  background: ${colors.blackSecondary};
`;
