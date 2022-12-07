import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from 'src/animation/useIsomorphicLayoutEffect';
import { colors } from 'src/styled/mixins';
import {
  InputGroup,
  InputGroupComponent,
  StyledLabel,
  StyledInput,
  StyledInputBorder,
  StyledInputBorderAfter,
  StyledInputErrorBorder,
  StyledInputErrorBorderAfter, StyledInputSuccessBorder, StyledInputSuccessBorderAfter
} from './style';
import {useTimeline} from 'src/hooks/useTimeline';

interface Props {
  type: string;
  placeholder: string; 
  validation: Function;
  isFormDirty: boolean;
}

const Input: React.FC<Props> = ({ type, placeholder, validation, isFormDirty }: Props ) => {
  const [inputValue, setInputValue] = useState<string>('');
  const input = useRef<any>(null);
  const inputBorder = useRef<any>(null);
  const inputBorderAfter = useRef<any>(null);
  const labelRef = useRef<any>(null);
  const inputError = useRef<any>(null);
  const inputErrorAfter = useRef<any>(null);
  const inputSuccess = useRef<any>(null);
  const inputSuccessAfter = useRef<any>(null);
  const isInputDirty = useRef(false);
  
  const tlCallback = (timeline: GSAPTimeline) => {
    timeline.to(inputBorder.current, {
      duration: 0.5,
      width: '100%'
    });
    timeline.to(inputBorderAfter.current, {
      duration: 0.5,
      width: '100%'
    }, '-=0.3');
    timeline.to(inputBorderAfter.current, {
      duration: 0.4,
      x: '100%'
    });
  }
  const tlErrorCallback = (timeline: GSAPTimeline) => {
    timeline.call(() => {
      input.current.classList.add('error');
    });
    timeline.to(inputError.current, {
      duration: 0.5,
      width: '100%'
    });
    timeline.to(inputErrorAfter.current, {
      duration: 0.5,
      width: '100%'
    }, '-=0.3');
    timeline.to(inputErrorAfter.current, {
      duration: 0.4,
      x: '100%'
    });
  }
  const tlSuccessCallback = (timeline: GSAPTimeline) => {
    timeline.call(() => {
      input.current.classList.remove('error');
    });
    timeline.to(inputSuccess.current, {
      duration: 0.5,
      width: '100%'
    });
    timeline.to(inputSuccessAfter.current, {
      duration: 0.5,
      width: '100%'
    }, '-=0.3');
    timeline.to(inputSuccessAfter.current, {
      duration: 0.4,
      x: '100%'
    });
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
  const [tlError] = useTimeline(tlErrorCallback);
  const [tlSuccess] = useTimeline(tlSuccessCallback);
  const [tlLabel] = useTimeline(tlLabelCallback);

  useIsomorphicLayoutEffect(() => {
    if (isFormDirty) {
      onChange();
    }
  }, [isFormDirty]);

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

  return (
    <InputGroup>
      <StyledLabel htmlFor={placeholder} ref={labelRef}>{placeholder}</StyledLabel>
      <InputGroupComponent>
        <StyledInput
          id={placeholder}
          onInput={onChange}
          onFocus={focusRef}
          onBlur={blurRef}
          ref={input}
          type={type}
          value={inputValue}
        />
        <StyledInputBorder ref={inputBorder}>
          <StyledInputBorderAfter ref={inputBorderAfter} />
        </StyledInputBorder>
        <StyledInputErrorBorder ref={inputError}>
          <StyledInputErrorBorderAfter ref={inputErrorAfter} />
        </StyledInputErrorBorder>
        <StyledInputSuccessBorder ref={inputSuccess}>
          <StyledInputSuccessBorderAfter ref={inputSuccessAfter} />
        </StyledInputSuccessBorder>
      </InputGroupComponent>
    </InputGroup>
  );
}

export default Input;
