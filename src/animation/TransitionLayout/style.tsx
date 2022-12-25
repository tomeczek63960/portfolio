import styled, {css} from "styled-components"
import {colors} from "src/styled/mixins";

export const LeftTransition = styled.div.attrs((props: {ref: HTMLButtonElement}) => props)`
  width: 50%;
  height: 100vh;
  background: ${colors.white};
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10;
  transform: translateY(100%);
`
export const RightTransition = styled.div.attrs((props: {ref: HTMLButtonElement}) => props)`
  width: 50%;
  height: 100vh;
  background: ${colors.white};
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10000;
  transform: translateY(-100%);
  @media screen and (min-width: 768px) {
    background: ${colors.black};
  }
`
export const CenterCircle = styled.div.attrs((props: {ref: HTMLButtonElement}) => props)`
  width: 100px;
  height: 100px;
  background: ${colors.black};
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 10000000;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: none;
  overflow: hidden;
  opacity: 0;
  transition: none;
  .circle-left {
    height: 100%;
    background: ${colors.black};
    display: flex;
    align-items: center;
    /* justify-content: center; */
    justify-content: right;
    padding-right: 8px;
    /*  */
    z-index: 10000000;
    transform-origin: bottom;
    color: ${colors.white};
    transform: scaleY(0);
    &-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: ${colors.white};
    }
    svg {
      height: 28px;
      width: auto;
      path {
        stroke-dasharray: 250;
        stroke-dashoffset: 250;
      }
    }
  }
  .circle-right {
    /* width: 50%; */
    height: 100%;
    background: ${colors.white};
    color: ${colors.black};
    display: flex;
    align-items: center;
    /* justify-content: center; */
    justify-content: left;
    padding-left: 8px;
    transform: scaleY(0);
    transform-origin: top;
    &-wrapper {
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
      height: 100%;
      background: ${colors.black};
      z-index: 10000000;
    }
    svg {
      height: 28px;
      width: auto;
      path {
        stroke-dasharray: 250;
        stroke-dashoffset: 250;
      }
    }
  }
`
export const HtmlTextWrapper = styled.div.attrs((props: {position: string}) => props)`
  position: fixed;
  top: 40%;
  transform: translateY(-50%);
  z-index: 1000000000;
  width: 50%;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  ${({ position }) => position === 'left' ? css`
    left: 0;
    display: flex;
    justify-content: flex-end;
    h4 {
      transform: translateX(50%);
    }
  ` : css `
    display: flex;
    justify-content: flex-start;
    left: 50%;
    h4 {
      transform: translateX(-50%);
    }
  `
  }
`;
export const HtmlText = styled.h4.attrs((props: {theme: string}) => props)`
  font-size: 22px;
  line-height: 1;
  font-family: Roboto;
  background-color: transparent;
  mix-blend-mode: darken;
  color: ${colors.black};
  @media screen and (min-width: 768px) {
    mix-blend-mode: ${({ theme }) => theme === 'light' ? 'darken' : 'screen'};
    color: ${({ theme }) => theme === 'light' ? 'black' : 'white'};
  }
  transition: none;
  & + h4 {
    transform: translateY(-100%);
  }
`;