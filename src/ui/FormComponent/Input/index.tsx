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
import { useTimeline } from "src/hooks/useTimeline";
import { InputProps } from "./types";
import { isFalsy } from "src/helpers/checkFalsyType";
import { useScrollTrigger } from "src/hooks/useScrollTrigger";

const createInputAnimation = (
  timeline: GSAPTimeline,
  border: HTMLSpanElement,
  borderAfter: HTMLSpanElement
): void => {
  timeline.to(border, {
    duration: 0.5,
    width: "100%",
  });
  timeline.to(
    borderAfter,
    {
      duration: 0.5,
      width: "100%",
    },
    "-=0.3"
  );
  timeline.to(borderAfter, {
    duration: 0.4,
    x: "100%",
  });
};

const Input: FC<InputProps> = ({
  type,
  placeholder,
  validation,
  isFormDirty,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const input = useRef<HTMLInputElement>(null);
  const inputBorder = useRef<HTMLSpanElement>(null);
  const inputBorderAfter = useRef<HTMLSpanElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);
  const inputError = useRef<HTMLSpanElement>(null);
  const inputErrorAfter = useRef<HTMLSpanElement>(null);
  const inputSuccess = useRef<HTMLSpanElement>(null);
  const inputSuccessAfter = useRef<HTMLSpanElement>(null);
  const isInputDirty = useRef(false);

  const tlCallback = (timeline: GSAPTimeline): void => {
    if (inputBorder.current == null || inputBorderAfter.current == null) return;
    createInputAnimation(
      timeline,
      inputBorder.current,
      inputBorderAfter.current
    );
  };
  const tlErrorCallback = (timeline: GSAPTimeline): void => {
    if (inputError.current == null || inputErrorAfter.current == null) return;
    timeline.call(() => {
      input.current?.classList.add("error");
    });
    createInputAnimation(timeline, inputError.current, inputErrorAfter.current);
  };
  const tlSuccessCallback = (timeline: GSAPTimeline): void => {
    if (inputSuccess.current == null || inputSuccessAfter.current == null)
      return;
    timeline.call(() => {
      input.current?.classList.remove("error");
    });
    createInputAnimation(
      timeline,
      inputSuccess.current,
      inputSuccessAfter.current
    );
  };
  const tlLabelCallback = (timeline: GSAPTimeline): void => {
    timeline.to(labelRef.current, {
      duration: 0.2,
      ease: "M0,0 C0.4,0 0.2,1 1,1",
      color: colors.white,
      scale: 0.75,
      yPercent: -120,
    });
  };

  const [tl] = useTimeline(tlCallback);
  const [tlSuccess] = useTimeline(tlSuccessCallback);
  const [tlError] = useTimeline(tlErrorCallback);
  const [tlLabel] = useTimeline(tlLabelCallback);

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
    if (e != null) {
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

  const [inputGroup] = useScrollTrigger(0.55) as [RefObject<HTMLDivElement>];

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
