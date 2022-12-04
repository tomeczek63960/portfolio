import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from 'src/animation/useIsomorphicLayoutEffect';
import {StyledButton, StyledButtonBorder, StyledButtonBorderAfter} from './style';
import { colors } from 'src/styled/mixins';

interface Props {
  children: string;
}

const ButtonComponent = ({ children }: Props) => {
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
