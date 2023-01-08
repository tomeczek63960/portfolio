import React, { useRef, FC, FormEvent, RefObject, FocusEvent } from "react";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { colors } from "src/styled/mixins";
import {
  StyledInputGroup,
  StyledInputGroupComponent,
  StyledLabel,
  StyledInput,
  StyledInputBorder,
  StyledInputBorderAfter,
  StyledInputTextarea,
} from "./style";
import { IValidationResult, PropsInput, TFormInputTextarea } from "./types";
import { isFalsy, isTruthy } from "src/helpers/checkFalsyType";
import { useScrollTrigger } from "src/hooks/useScrollTrigger";
import { useInputAnimation } from "src/hooks/useInputAnimation";
import { useInputLabelAnimation } from "src/hooks/useInputLabelAnimation";
import { useErrorHandler } from "src/hooks/useErrorHandler";

const ComponentInput: FC<PropsInput> = ({
  type,
  placeholder,
  validation,
  isFormDirty,
  name,
  value,
  onChange,
  inputType,
}) => {
  const refInput = useRef<TFormInputTextarea>(null);
  const refIsInputDirty = useRef(false);

  const [inputGroup] = useScrollTrigger(0.55) as [RefObject<HTMLDivElement>];
  const [timelineLabel, refLabel] = useInputLabelAnimation();
  const [timeline, inputBorder, inputBorderAfter] = useInputAnimation();
  const [timelineSuccess, refInputSuccess, refInputSuccessAfter] =
    useInputAnimation(refInput, "success");
  const [timelineError, refInputError, refInputErrorAfter] = useInputAnimation(
    refInput,
    "error"
  );
  const [setError] = useErrorHandler();
  const focusRef = (): void => {
    timelineLabel.play();
    if (refIsInputDirty.current) return;
    timeline.play();
  };
  const blurRef = (e?: FocusEvent<TFormInputTextarea>): void => {
    const isEmpty = isFalsy(e) ? isFalsy(value) : isFalsy(e.target.value);
    if (isEmpty) {
      timelineLabel.reverse();
    }
    if (refIsInputDirty.current) return;
    timeline.reverse();
  };
  const handleChange = (e?: FormEvent<TFormInputTextarea>): void => {
    let result: IValidationResult;
    if (isTruthy(e)) {
      result = validation(e.currentTarget.value);
      onChange(e, result);
    } else {
      result = validation(value);
    }
    if (!result.valid) {
      timelineSuccess
        .reverse()
        .then(() => {
          timelineError
            .play()
            .then(() => {
              if (!refIsInputDirty.current) {
                refIsInputDirty.current = true;
                timeline.seek(0).pause();
              }
            })
            .catch(() => {
              setError();
            });
        })
        .catch(() => {
          setError();
        });
    } else {
      timelineError
        .reverse()
        .then(() => {
          timelineSuccess
            .play()
            .then(() => {
              if (!refIsInputDirty.current) {
                refIsInputDirty.current = true;
                timeline.seek(0).pause();
              }
            })
            .catch(() => {
              setError();
            });
        })
        .catch(() => {
          setError();
        });
    }
  };

  useIsomorphicLayoutEffect(() => {
    if (isFalsy(isFormDirty)) {
      refIsInputDirty.current = false;
      blurRef();
      timelineSuccess.reverse();
    } else {
      handleChange();
    }
  }, [isFormDirty]);

  return (
    <StyledInputGroup ref={inputGroup}>
      <StyledLabel htmlFor={placeholder} ref={refLabel}>
        {placeholder}
      </StyledLabel>
      <StyledInputGroupComponent inputType={inputType}>
        {inputType === "textarea" ? (
          <StyledInputTextarea
            name={name}
            id={placeholder}
            onInput={handleChange}
            onFocus={focusRef}
            onBlur={blurRef}
            ref={refInput as RefObject<HTMLTextAreaElement>}
            value={value}
          />
        ) : (
          <StyledInput
            name={name}
            id={placeholder}
            onInput={handleChange}
            onFocus={focusRef}
            onBlur={blurRef}
            ref={refInput as RefObject<HTMLInputElement>}
            type={type}
            value={value}
          />
        )}
        <StyledInputBorder background={colors.purple} ref={inputBorder}>
          <StyledInputBorderAfter ref={inputBorderAfter} />
        </StyledInputBorder>
        <StyledInputBorder background={colors.error} ref={refInputError}>
          <StyledInputBorderAfter ref={refInputErrorAfter} />
        </StyledInputBorder>
        <StyledInputBorder background={colors.success} ref={refInputSuccess}>
          <StyledInputBorderAfter ref={refInputSuccessAfter} />
        </StyledInputBorder>
      </StyledInputGroupComponent>
    </StyledInputGroup>
  );
};

export default ComponentInput;
