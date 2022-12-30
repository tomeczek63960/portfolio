import React, { FC } from "react";
import {
  StyledButton,
  StyledButtonBorder,
  StyledButtonBorderAfter,
} from "./style";
import { PropsButton } from "./types";
import { useInputAnimation } from "src/hooks/useInputAnimation";

const ComponentButton: FC<PropsButton> = ({ children }) => {
  const [timeline, refButtonBorder, refButtonBorderAfter] = useInputAnimation();

  const onHover = (): void => {
    timeline.play();
  };
  const onBlur = (): void => {
    timeline.reverse();
  };

  return (
    <StyledButton
      onTouchStart={onHover}
      onTouchEnd={onBlur}
      onMouseOver={onHover}
      onMouseLeave={onBlur}
    >
      {children}
      <StyledButtonBorder ref={refButtonBorder} />
      <StyledButtonBorderAfter ref={refButtonBorderAfter} />
    </StyledButton>
  );
};

export default ComponentButton;
