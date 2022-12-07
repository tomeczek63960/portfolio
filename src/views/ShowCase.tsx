import React from 'react';
import styled, {keyframes} from 'styled-components';
import { responsive, colors } from 'src/styled/mixins';

const H2 = styled.h2.attrs((props: {color?: string}) => props)`
  margin-top: 30px;
  color: transparent;
  /* font-size: 45px; */
  font-size: 25px;
  letter-spacing: 2px;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
  position: relative;
  width: fit-content;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  white-space: nowrap;
  ${responsive.tabletP`
    font-size: 32px;
  `}
  ${responsive.tabletL`
    font-size: 40px;
  `}
  ${responsive.desktopHd`
    font-size: 45px;
  `}
  &::selection {
    background-color: transparent;
    -webkit-text-fill-color: transparent
  }
  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 100%;
    color: ${({color}) => color ? color : 'white' };
    width: 0%;
    overflow: hidden;
    transition: 1s;
    border-right: 8px solid ${({color}) => color ? color : 'white' };
    -webkit-text-stroke: 1px ${({color}) => color ? color : 'white' };
    white-space: nowrap;
  }
  &:hover::before {
    width: 100%;
    filter: drop-shadow(0 0 25px ${({color}) => color ? color : 'white' });
    /* -webkit-text-stroke: 1px ${({color}) => color ? color : 'white' };; */
  }
`

const animate = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
`;
const HexagonContainer = styled.div`
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  animation: ${animate} 4s linear infinite;
  ${responsive.tabletP`
    width: 50%;
  `}
  .row {
    margin-top: -32px;
    margin-left: -50px;
    display: inline-flex;
    &:nth-child(even) {
      margin-left: 1px;
    }
  }
`;
const Hexagon = styled.div`
  margin: 1px;
  position: relative;
  width: 100px;
  height: 110px;
  /* background: #fff; */
  background: #111;
  /* clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%); */
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transition: 2s;
  &:hover {
    transition: 0s;
    background: #0f0
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    pointer-events: none;
    background: rgba(255,255,255,0.02);
  }
`;

const ShowCase: React.FC = () => {
  const hexagonArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  return (
    <>
      {/* <h1>Strona na której będą zaawansowane anikacje pokazującę zlepki ze wszystkich projektów (coś na zasadzie wideo tylko ze animowane przez js</h1> */}
      <HexagonContainer>
        <div className="row"> {hexagonArray.map(() => <Hexagon />)}</div>
        <div className="row"> {hexagonArray.map(() => <Hexagon />)}</div>
        <div className="row"> {hexagonArray.map(() => <Hexagon />)}</div>
        <div className="row"> {hexagonArray.map(() => <Hexagon />)}</div>
        <div className="row"> {hexagonArray.map(() => <Hexagon />)}</div>
        <div className="row"> {hexagonArray.map(() => <Hexagon />)}</div>
        <div className="row"> {hexagonArray.map(() => <Hexagon />)}</div>
        <div className="row"> {hexagonArray.map(() => <Hexagon />)}</div>
        <div className="row"> {hexagonArray.map(() => <Hexagon />)}</div>
        <div className="row"> {hexagonArray.map(() => <Hexagon />)}</div>
        <div className="row"> {hexagonArray.map(() => <Hexagon />)}</div>
        <div className="row"> {hexagonArray.map(() => <Hexagon />)}</div>
        <div className="row"> {hexagonArray.map(() => <Hexagon />)}</div>
      </HexagonContainer>

      <H2 data-text="&nbsp;Home&nbsp;" color='#f81ce5'>&nbsp;Home&nbsp;</H2>
      <H2 data-text="&nbsp;Home&nbsp;" color='#f80759'>&nbsp;Home&nbsp;</H2>
      <H2 data-text="&nbsp;Contact&nbsp;" color='#fdc830'>&nbsp;Contact&nbsp;</H2>
      <H2 data-text="&nbsp;Case Studies&nbsp;" color='#15ee11'>&nbsp;Case Studies&nbsp;</H2>
      <H2 data-text="&nbsp;Show case&nbsp;" color='#3F5EFB'>&nbsp;Show case&nbsp;</H2>

      {/* tutaj galerię ze zdjęciami (animowanymi customowym pluginem 'przerobić ten płatny plugin od jquery na czysty js') */}
    </>
  );
}

export default ShowCase;
