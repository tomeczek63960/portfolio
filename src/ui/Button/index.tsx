import React, {useRef} from "react";
import {StyledButton, StyledButtonBorder, StyledButtonBorderAfter} from "./style";
import {colors} from "src/styled/mixins";
import {useTimeline} from "src/hooks/useTimeline";
import {ButtonProps} from "./types";

const ButtonComponent: React.FC<ButtonProps> = ({ children }) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const buttonBorder = useRef<any>(null);
  const buttonBorderAfter = useRef<any>(null);

  const callback = (timeline: GSAPTimeline) => {
    timeline.to(buttonBorder.current, {
      duration: 0.5,
      width: '100%'
    }, 'start');
    timeline.to(buttonBorderAfter.current, {
      duration: 0.5,
      width: '100%'
    }, '-=0.3');
    timeline.to(buttonBorderAfter.current, {
      duration: 0.4,
      x: '100%'
    });
    timeline.to(btnRef.current, {
      duration: 0.5,
      color: colors.purple
    }, 'start');
  }

  const [tl] = useTimeline(callback);

  const onHover = () => {
    tl.play();
  }
  const onBlur = () => {
    tl.reverse();
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
