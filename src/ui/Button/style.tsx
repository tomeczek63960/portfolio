import styled from "styled-components";
import { colors } from "src/styled/mixins";

export const StyledButton = styled.button.attrs(
  (props: { ref: HTMLButtonElement }) => props
)`
  margin-top: 40px;
  background: transparent;
  color: ${colors.gray};
  height: 40px;
  font: 16px/30px "Lato", Arial, sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
  outline: none !important;
  width: 100%;
  border: none;
  text-transform: uppercase;
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  width: 100%;
  transition: color 0.6s;
  &:hover {
    color: ${colors.purple};
  }
  &::selection {
    background-color: ${colors.blue};
  }
  &::after {
    content: "";
    height: 2px;
    width: 100%;
    background: ${colors.blackSecondary};
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
export const StyledButtonBorder = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  height: 2px;
  width: 0%;
  background: ${colors.purple};
`;
export const StyledButtonBorderAfter = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 15;
  height: 2px;
  width: 0%;
  background: ${colors.blackSecondary};
`;
