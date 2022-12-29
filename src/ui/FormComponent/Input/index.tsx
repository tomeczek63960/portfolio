import React, { useRef, useState, FC, FormEvent, RefObject } from "react";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { colors } from "src/styled/mixins";
import {
  StyledInputGroup,
  StyledInputGroupComponent,
  StyledLabel,
  StyledInput,
  StyledInputBorder,
  StyledInputBorderAfter,
} from "./style";
import { InputProps } from "./types";
import { isFalsy, isTruthy } from "src/helpers/checkFalsyType";
import { useScrollTrigger } from "src/hooks/useScrollTrigger";
import { useInputAnimation } from "src/hooks/useInputAnimation";
import { useInputLabelAnimation } from "src/hooks/useInputLabelAnimation";

const Input: FC<InputProps> = ({
  type,
  placeholder,
  validation,
  isFormDirty,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const input = useRef<HTMLInputElement>(null);
  const isInputDirty = useRef(false);

  const [inputGroup] = useScrollTrigger(0.55) as [RefObject<HTMLDivElement>];
  const [tlLabel, labelRef] = useInputLabelAnimation();
  const [tl, inputBorder, inputBorderAfter] = useInputAnimation();
  const [tlSuccess, inputSuccess, inputSuccessAfter] = useInputAnimation(
    input,
    "success"
  );
  const [tlError, inputError, inputErrorAfter] = useInputAnimation(
    input,
    "error"
  );

  const focusRef = (): void => {
    tlLabel.play();
    if (isInputDirty.current) return;
    tl.play();
  };
  const blurRef = (e: any): void => {
    if (isFalsy(e.target.value)) {
      tlLabel.reverse();
    }
    if (isInputDirty.current) return;
    tl.reverse();
  };
  const onChange = (e?: FormEvent<HTMLInputElement>): void => {
    let value = inputValue;
    if (isTruthy(e)) {
      setInputValue(e.currentTarget.value);
      value = e.currentTarget.value;
    }
    const result = validation(value);
    if (isFalsy(result.valid)) {
      tlSuccess
        .reverse()
        .then(() => {
          tlError
            .play()
            .then(() => {
              if (!isInputDirty.current) {
                isInputDirty.current = true;
                tl.seek(0).pause().clear();
              }
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      tlError
        .reverse()
        .then(() => {
          tlSuccess
            .play()
            .then(() => {
              if (!isInputDirty.current) {
                isInputDirty.current = true;
                tl.seek(0).pause().clear();
              }
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useIsomorphicLayoutEffect(() => {
    if (!isFormDirty) return;
    onChange();
  }, [isFormDirty]);
  return (
    <StyledInputGroup ref={inputGroup}>
      <StyledLabel htmlFor={placeholder} ref={labelRef}>
        {placeholder}
      </StyledLabel>
      <StyledInputGroupComponent>
        <StyledInput
          id={placeholder}
          onInput={onChange}
          onFocus={focusRef}
          onBlur={blurRef}
          ref={input}
          type={type}
          value={inputValue}
        />

        <StyledInputBorder background={colors.purple} ref={inputBorder}>
          <StyledInputBorderAfter ref={inputBorderAfter} />
        </StyledInputBorder>
        <StyledInputBorder background={colors.error} ref={inputError}>
          <StyledInputBorderAfter ref={inputErrorAfter} />
        </StyledInputBorder>
        <StyledInputBorder background={colors.success} ref={inputSuccess}>
          <StyledInputBorderAfter ref={inputSuccessAfter} />
        </StyledInputBorder>
      </StyledInputGroupComponent>
    </StyledInputGroup>
  );
};

export default Input;
