import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from 'src/animation/useIsomorphicLayoutEffect';
import { colors } from 'src/styled/mixins';

const InputGroup = styled.div`
  position: relative;
  margin-top: 30px;
  &:first-child {
    margin-top: 0;
  }
  &:after {
    content: '';
    width: 0;
    height: 2px;
    background: ${colors.blackPrimary};
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: 0.3s;
    transform-origin: center center;
  }
  &:hover:after {
    width: 100%;
  }
`;
const InputGroupComponent = styled.div`
  overflow: hidden;
  position: relative;
`;
const StyledLabel = styled.label`
  position: absolute;
  bottom: 35%;
  left: 0;
  font-size: 18px;
  line-height: 1;
  color: ${colors.blackSecondary};
  transform-origin: 0px 0px;
  cursor: pointer;
`;
const StyledInput = styled.input`
    background: transparent;
    color: ${ colors.pink };
    height: 35px;
    font: 15px/24px "Lato", Arial, sans-serif;
    letter-spacing: 1px;
    outline: none !important;
    width: 100%;
    transition: 0.3s ease-in-out;
    border: none;
    border-bottom: 2px solid ${ colors.blackSecondary };;
`;
const StyledInputBorder = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  height: 2px;
  width: 0%;
  background: ${colors.purple};
`;
const StyledInputBorderAfter = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 15;
  height: 2px;
  width: 0%;
  background: ${colors.blackSecondary};
`;
const StyledInputErrorBorder = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  height: 2px;
  width: 0%;
  background: ${colors.error};
`;
const StyledInputErrorBorderAfter = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  height: 2px;
  width: 0%;
  background: ${colors.blackSecondary};
`;
const StyledInputSuccessBorder = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  height: 2px;
  width: 0%;
  background: ${colors.success};
`;
const StyledInputSuccessBorderAfter = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  height: 2px;
  width: 0%;
  background: ${colors.blackSecondary};
`;

interface Props {
  type: string;
  placeholder: string; 
  validation: Function;
  isFormDirty: boolean;
}

const Input = ({ type, placeholder, validation, isFormDirty }: Props ) => {
  const [inputValue, setInputValue] = useState<string>('');
  const input = useRef<any>(null);
  const inputBorder = useRef<any>(null);
  const inputBorderAfter = useRef<any>(null);
  const labelRef = useRef<any>(null);
  const inputError = useRef<any>(null);
  const inputErrorAfter = useRef<any>(null);
  const inputSuccess = useRef<any>(null);
  const inputSuccessAfter = useRef<any>(null);
  const tl = useRef<any>(null);
  const tlLabel = useRef<any>(null);
  const tlError = useRef<any>(null);
  const tlSuccess = useRef<any>(null);
  const isInputDirty = useRef(false);

  useIsomorphicLayoutEffect(() => {
    tl.current = gsap.timeline({ paused: true });
    tlError.current = gsap.timeline({ paused: true });
    tlLabel.current = gsap.timeline({ paused: true });
    tlSuccess.current = gsap.timeline({ paused: true });

    tl.current.to(inputBorder.current, {
      duration: 0.5,
      width: '100%'
    });
    tl.current.to(inputBorderAfter.current, {
      duration: 0.5,
      width: '100%'
    }, '-=0.3');
    tl.current.to(inputBorderAfter.current, {
      duration: 0.4,
      x: '100%'
    });

    tlError.current.call(() => {
      input.current.classList.add('error');
    });
    tlError.current.to(inputError.current, {
      duration: 0.5,
      width: '100%'
    });
    tlError.current.to(inputErrorAfter.current, {
      duration: 0.5,
      width: '100%'
    }, '-=0.3');
    tlError.current.to(inputErrorAfter.current, {
      duration: 0.4,
      x: '100%'
    });

    tlSuccess.current.call(() => {
      input.current.classList.remove('error');
    });
    tlSuccess.current.to(inputSuccess.current, {
      duration: 0.5,
      width: '100%'
    });
    tlSuccess.current.to(inputSuccessAfter.current, {
      duration: 0.5,
      width: '100%'
    }, '-=0.3');
    tlSuccess.current.to(inputSuccessAfter.current, {
      duration: 0.4,
      x: '100%'
    });

    tlLabel.current.to(labelRef.current, {
      duration: 0.2,
      ease: "M0,0 C0.4,0 0.2,1 1,1",
      color: colors.white,
      scale: 0.75,
      yPercent: -120
    });
  }, []);
  useIsomorphicLayoutEffect(() => {
    if (isFormDirty) {
      onChange();
    }
  }, [isFormDirty]);

  const focusRef = () => {
    tlLabel.current.play();
    if (isInputDirty.current) return;
    tl.current.play();
  }
  const blurRef = (e: any) => {
    if (!e.target.value) {
      tlLabel.current.reverse();
    }
    if (isInputDirty.current) return;
    tl.current.reverse();
  }
  const onChange = (e?: React.FormEvent<HTMLInputElement>) => {
    let value = inputValue;
    if (e) {
      setInputValue(e.currentTarget.value);
      value = e.currentTarget.value;
    }
    const result = validation(value);
    if (!result.valid) {
      tlSuccess.current.reverse().then(() => {
        tlError.current.play().then(() => {
          if (!isInputDirty.current) {
            isInputDirty.current = true;
            tl.current.seek(0).pause().clear();
          }
        });
      });
    } else {
      tlError.current.reverse().then(() => {
        tlSuccess.current.play().then(() => {
          if (!isInputDirty.current) {
            isInputDirty.current = true;
            tl.current.seek(0).pause().clear();
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
