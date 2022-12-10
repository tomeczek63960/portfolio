import React, { useEffect, useRef, useState } from 'react';
import useIsomorphicLayoutEffect from 'src/animation/useIsomorphicLayoutEffect';
import { colors } from 'src/styled/mixins';
import {
  StyledInputGroup,
  StyledInputGroupComponent,
  StyledLabel,
  StyledInput,
  StyledInputBorder,
  StyledInputBorderAfter
} from './style';
import {useTimeline} from 'src/hooks/useTimeline';
import {InputProps} from './types';

const createInputAnimation = (timeline: GSAPTimeline, border: HTMLSpanElement, borderAfter: HTMLSpanElement) => {
  timeline.to(border, {
    duration: 0.5,
    width: '100%'
  });
  timeline.to(borderAfter, {
    duration: 0.5,
    width: '100%'
  }, '-=0.3');
  timeline.to(borderAfter, {
    duration: 0.4,
    x: '100%'
  });
}

const Input: React.FC<InputProps> = ({ type, placeholder, validation, isFormDirty }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const input = useRef<HTMLInputElement>(null);
  const inputBorder = useRef<HTMLSpanElement>(null);
  const inputBorderAfter = useRef<HTMLSpanElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);
  const inputError = useRef<HTMLSpanElement>(null);
  const inputErrorAfter = useRef<HTMLSpanElement>(null);
  const inputSuccess = useRef<HTMLSpanElement>(null);
  const inputSuccessAfter = useRef<HTMLSpanElement>(null);
  const isInputDirty = useRef(false);

  const tlCallback = (timeline: GSAPTimeline) => {
    if (!inputBorder.current || !inputBorderAfter.current) return;
    createInputAnimation(timeline, inputBorder.current, inputBorderAfter.current)
  }
  const tlErrorCallback = (timeline: GSAPTimeline) => {
    if (!inputError.current || !inputErrorAfter.current) return;
    timeline.call(() => {
      input.current?.classList.add('error');
    });
    createInputAnimation(timeline, inputError.current, inputErrorAfter.current)
  }
  const tlSuccessCallback = (timeline: GSAPTimeline) => {
    if (!inputSuccess.current || !inputSuccessAfter.current) return;
    timeline.call(() => {
      input.current?.classList.remove('error');
    });
    createInputAnimation(timeline, inputSuccess.current, inputSuccessAfter.current)
  }
  const tlLabelCallback = (timeline: GSAPTimeline) => {
    timeline.to(labelRef.current, {
      duration: 0.2,
      ease: "M0,0 C0.4,0 0.2,1 1,1",
      color: colors.white,
      scale: 0.75,
      yPercent: -120
    });
  }

  const [tl] = useTimeline(tlCallback);
  const [tlSuccess] = useTimeline(tlSuccessCallback);
  const [tlError] = useTimeline(tlErrorCallback);
  const [tlLabel] = useTimeline(tlLabelCallback);

  const focusRef = () => {
    tlLabel.play();
    if (isInputDirty.current) return;
    tl.play();
  }
  const blurRef = (e: any) => {
    if (!e.target.value) {
      tlLabel.reverse();
    }
    if (isInputDirty.current) return;
    tl.reverse();
  }
  const onChange = (e?: React.FormEvent<HTMLInputElement>) => {
    let value = inputValue;
    if (e) {
      setInputValue(e.currentTarget.value);
      value = e.currentTarget.value;
    }
    const result = validation(value);
    if (!result.valid) {
      tlSuccess.reverse().then(() => {
        tlError.play().then(() => {
          if (!isInputDirty.current) {
            isInputDirty.current = true;
            tl.seek(0).pause().clear();
          }
        });
      });
    } else {
      tlError.reverse().then(() => {
        tlSuccess.play().then(() => {
          if (!isInputDirty.current) {
            isInputDirty.current = true;
            tl.seek(0).pause().clear();
          }
        });
      });
    }
  }

  useIsomorphicLayoutEffect(() => {
    if (!isFormDirty) return;
    onChange();
  }, [isFormDirty]);
  return (
    <StyledInputGroup>
      <StyledLabel htmlFor={placeholder} ref={labelRef}>{placeholder}</StyledLabel>
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
}

export default Input;
