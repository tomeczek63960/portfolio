import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'
import colors from 'src/ui/globalStyled/variables';

const InputGroup = styled.div`
  position: relative;
  width: calc(50% - 15px);
`;

const StyledInput = styled.input`
    border: 1px solid #222;
    background: transparent;
    color: ${ colors.$pink };
    height: 40px;
    padding: 0 10px;
    font: 15px/24px "Lato", Arial, sans-serif;
    letter-spacing: 1px;
    outline: none !important;
    width: 100%;
    transition: 0.3s ease-in-out;
    /* border-radius: 1px; */
    
    &::placeholder {
        color: #333;
        opacity: 0.5;
        transition: opacity 0.3s ease-in-out;
        /* background-image: linear-gradient(to left, #FC466B, #f69d3c, #7928ca, #f81ce5, #FC466B ); */
        /* background-image: linear-gradient(to right, white,orange, blue ); */
        /* -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; */
        /* background-size: 500%; */
        /* animation: bganimation 2s infinite alternate; */
    }

    &:hover {
      border-color: #333;
    }
    &:focus::placeholder {
      /* background: linear-gradient(to right, #f69d3c, #7928ca); */
      opacity: 0.7;
    }
`;

const StyledInputFocus = styled.span`
  &:before,
  &:after {
	  content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 1px;
    /* background-color: #3399FF; */
    transition: 0.2s;
    transition-delay: 0.2s;
    overflow: hidden;
  }
  &:after {
    top: auto;
    bottom: 0;
    right: auto;
    left: 0;
    transition-delay: 0.6s;
  }
  i:before,
  i:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 0;
    /* background-color: #3399FF; */
    transition: 0.2s;
    overflow: hidden;
  }

  &:before {
    /* góra */
    background: linear-gradient(to left, #f81ce5, #FC466B);
    /* border-top-left-radius: 5px;
    border-top-right-radius: 5px; */
  }
  &:after {
    background: linear-gradient(to right, #f69d3c, #7928ca);
    /* border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px; */
    /* dół */
  } 

  & i:before {
    /* lewa strona (pierwsza część) */
    background: linear-gradient(to bottom, #FC466B, #f69d3c);
    /* border-top-left-radius: 5px;
    border-bottom-left-radius: 5px; */
  }
  & i:after {
    /* prawa strona (trzecia część po dolnej) */
    background: linear-gradient(to top, #7928ca, #f81ce5);
    /* border-top-right-radius: 5px;
    border-bottom-right-radius: 5px; */
  }


  & i:after {
    left: auto;
    right: 0;
    top: auto;
    bottom: 0;
    transition-delay: 0.4s;
  }
  
  input:focus ~ &:before,
  input:focus ~ &:after {
    width: 100%;
    transition: 0.1s;
    transition-delay: 0.2s;
  }
  
  input:focus ~ &:after {
    transition-delay: 0.05s;
  }
  
  input:focus ~ & i:before,
  input:focus ~ & i:after {
    height: 100%;
    transition: 0.05s;
  }
  
  input:focus ~ & i:after {
    transition-delay: 0.15s;
  }
`;

function Input({ type, placeholder }: { type: string, placeholder: string }) {
  
  return (
    <InputGroup>
      <StyledInput type={ type } placeholder={ placeholder } />
      <StyledInputFocus>
        <i></i>
      </StyledInputFocus>
    </InputGroup>
  );
}

export default Input;
