import React, { useRef, FC } from "react";
import {
  StyledButton,
  StyledButtonBorder,
  StyledButtonBorderAfter,
} from "./style";
import { ButtonProps } from "./types";
import { useInputAnimation } from "src/hooks/useInputAnimation";

const ButtonComponent: FC<ButtonProps> = ({ children }) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [tl, buttonBorder, buttonBorderAfter] = useInputAnimation();

  const onHover = (): void => {
    tl.play();
  };
  const onBlur = (): void => {
    tl.reverse();
  };

  return (
    <StyledButton
      onTouchStart={onHover}
      onTouchEnd={onBlur}
      onMouseOver={onHover}
      onMouseLeave={onBlur}
      ref={btnRef}
    >
      {children}
      <StyledButtonBorder ref={buttonBorder} />
      <StyledButtonBorderAfter ref={buttonBorderAfter} />
    </StyledButton>
  );
};

export default ButtonComponent;
