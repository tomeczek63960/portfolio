import React, { useEffect, useRef } from 'react';
import styled from 'styled-components'
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from 'src/animation/useIsomorphicLayoutEffect';
import { colors } from 'src/styled/mixins';

const StyledButton = styled.button.attrs((props: {ref: HTMLButtonElement}) => props)`
  margin-top: 40px;
  background: transparent;
  color: ${colors.gray};
  height: 40px;
  font: 16px/30px "Lato", Arial, sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
  outline: none !important;
  width: 100%;
  /* transition: 0.3s ease-in-out; */
  border: none;
  text-transform: uppercase;
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  width: 100%;
  &::after {
    content: "";
    height: 2px;
    width: 100%;
    background: ${colors.blackSecondary};
    position: absolute;
    bottom: 0;
    left: 0;
  }
`
const StyledButtonBorder = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  height: 2px;
  width: 0%;
  background: ${colors.purple};
`;
const StyledButtonBorderAfter = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 15;
  height: 2px;
  width: 0%;
  background: ${colors.blackSecondary};
`;

function ButtonComponent({ children }: { children: string }) {
  const btnRef = useRef<HTMLButtonElement>();
  const buttonBorder = useRef<any>(null);
  const buttonBorderAfter = useRef<any>(null);
  const tl = useRef<any>(null);

  useIsomorphicLayoutEffect(() => {
    tl.current = gsap.timeline({ paused: true });
    tl.current.to(buttonBorder.current, {
      duration: 0.5,
      width: '100%'
    }, 'start');
    tl.current.to(buttonBorderAfter.current, {
      duration: 0.5,
      width: '100%'
    }, '-=0.3');
    tl.current.to(buttonBorderAfter.current, {
      duration: 0.4,
      x: '100%'
    });
    tl.current.to(btnRef.current, {
      duration: 0.5,
      color: colors.purple
    }, 'start');
  }, []);

  const onHover = () => {
    tl.current.play();
  }
  const onBlur = () => {
    tl.current.reverse();
  }

  return (
    <StyledButton
      onTouchStart={onHover}
      onTouchEnd={onBlur}
      onMouseOver={onHover}
      onMouseLeave={onBlur}
      ref={btnRef}
    >
      { children }
      <StyledButtonBorder ref={buttonBorder} />
      <StyledButtonBorderAfter ref={buttonBorderAfter} />
    </StyledButton>
  );
}

export default ButtonComponent;
