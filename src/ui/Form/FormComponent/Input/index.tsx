import React, {
  useRef,
  useState,
  FC,
  FormEvent,
  RefObject,
  FocusEvent,
} from "react";
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
import { PropsInput } from "./types";
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
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const refInput = useRef<HTMLInputElement>(null);
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
  const blurRef = (e: FocusEvent<HTMLInputElement>): void => {
    if (isFalsy(e.target.value)) {
      timelineLabel.reverse();
    }
    if (refIsInputDirty.current) return;
    timeline.reverse();
  };
  const onChange = (e?: FormEvent<HTMLInputElement>): void => {
    let value = inputValue;
    if (isTruthy(e)) {
      setInputValue(e.currentTarget.value);
      value = e.currentTarget.value;
    }
    const result = validation(value);
    if (isFalsy(result.valid)) {
      timelineSuccess
        .reverse()
        .then(() => {
          timelineError
            .play()
            .then(() => {
              if (!refIsInputDirty.current) {
                refIsInputDirty.current = true;
                timeline.seek(0).pause().clear();
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
                timeline.seek(0).pause().clear();
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
    if (isFalsy(isFormDirty)) return;
    onChange();
  }, [isFormDirty]);
  return (
    <StyledInputGroup ref={inputGroup}>
      <StyledLabel htmlFor={placeholder} ref={refLabel}>
        {placeholder}
      </StyledLabel>
      <StyledInputGroupComponent>
        <StyledInput
          id={placeholder}
          onInput={onChange}
          onFocus={focusRef}
          onBlur={blurRef}
          ref={refInput}
          type={type}
          value={inputValue}
        />

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
