import React, { FC } from "react";
import styled, { keyframes } from "styled-components";
import { responsive, variables } from "src/styled/mixins";
import { isTruthy } from "src/helpers/checkFalsyType";

const StyledH2 = styled.h2.attrs((props: { color?: string }) => props)`
  margin-top: 3rem;
  color: transparent;
  font-size: 2.5rem;
  letter-spacing: 0.2rem;
  -webkit-text-stroke: 0.1rem rgba(255, 255, 255, 0.5);
  position: relative;
  width: fit-content;
  text-transform: uppercase;
  font-family: ${variables.fontFamilyPoppins};
  font-weight: ${variables.fontWeightBold};
  white-space: nowrap;
  ${responsive.tabletP`
    font-size: 3.2rem;
  `}
  ${responsive.tabletL`
    font-size: 4rem;
  `}
  ${responsive.desktopHd`
    font-size: 4.5rem;
  `}
  &::selection {
    background-color: transparent;
    -webkit-text-fill-color: transparent;
  }
  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 100%;
    color: ${({ color }) => (isTruthy(color) ? color : "white")};
    width: 0%;
    overflow: hidden;
    transition: 1s;
    border-right: 0.8rem solid
      ${({ color }) => (isTruthy(color) ? color : "white")};
    -webkit-text-stroke: 0.1rem
      ${({ color }) => (isTruthy(color) ? color : "white")};
    white-space: nowrap;
  }
  &:hover::before {
    width: 100%;
    filter: drop-shadow(
      0 0 2.5rem ${({ color }) => (isTruthy(color) ? color : "white")}
    );
    /* -webkit-text-stroke: 1px ${({ color }) =>
      isTruthy(color) ? color : "white"};; */
  }
`;

const animate = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
`;
const StyledHexagonContainer = styled.div`
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
    margin-top: -3.2rem;
    margin-left: -5rem;
    display: inline-flex;
    &:nth-child(even) {
      margin-left: 0.1rem;
    }
  }
`;
const StyledHexagon = styled.div`
  margin: 0.1rem;
  position: relative;
  width: 10rem;
  height: 11rem;
  /* background: #fff; */
  background: #111;
  /* clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%); */
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transition: 2s;
  &:hover {
    transition: 0s;
    background: #0f0;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    pointer-events: none;
    background: rgba(255, 255, 255, 0.02);
  }
`;

const ViewShowCase: FC = () => {
  const hexagonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <>
      {/* <h1>Strona na której będą zaawansowane anikacje pokazującę zlepki ze wszystkich projektów (coś na zasadzie wideo tylko ze animowane przez js</h1> */}
      <StyledHexagonContainer>
        <div className="row">
          {" "}
          {hexagonArray.map((el: number) => (
            <StyledHexagon key={el * Math.random() * 1000} />
          ))}
        </div>
        <div className="row">
          {" "}
          {hexagonArray.map((el: number) => (
            <StyledHexagon key={el * Math.random() * 1000} />
          ))}
        </div>
        <div className="row">
          {" "}
          {hexagonArray.map((el: number) => (
            <StyledHexagon key={el * Math.random() * 1000} />
          ))}
        </div>
        <div className="row">
          {" "}
          {hexagonArray.map((el: number) => (
            <StyledHexagon key={el * Math.random() * 1000} />
          ))}
        </div>
        <div className="row">
          {" "}
          {hexagonArray.map((el: number) => (
            <StyledHexagon key={el * Math.random() * 1000} />
          ))}
        </div>
        <div className="row">
          {" "}
          {hexagonArray.map((el: number) => (
            <StyledHexagon key={el * Math.random() * 1000} />
          ))}
        </div>
        <div className="row">
          {" "}
          {hexagonArray.map((el: number) => (
            <StyledHexagon key={el * Math.random() * 1000} />
          ))}
        </div>
        <div className="row">
          {" "}
          {hexagonArray.map((el: number) => (
            <StyledHexagon key={el * Math.random() * 1000} />
          ))}
        </div>
        <div className="row">
          {" "}
          {hexagonArray.map((el: number) => (
            <StyledHexagon key={el * Math.random() * 1000} />
          ))}
        </div>
        <div className="row">
          {" "}
          {hexagonArray.map((el: number) => (
            <StyledHexagon key={el * Math.random() * 1000} />
          ))}
        </div>
        <div className="row">
          {" "}
          {hexagonArray.map((el: number) => (
            <StyledHexagon key={el * Math.random() * 1000} />
          ))}
        </div>
        <div className="row">
          {" "}
          {hexagonArray.map((el: number) => (
            <StyledHexagon key={el * Math.random() * 1000} />
          ))}
        </div>
        <div className="row">
          {" "}
          {hexagonArray.map((el: number) => (
            <StyledHexagon key={el * Math.random() * 1000} />
          ))}
        </div>
      </StyledHexagonContainer>

      <StyledH2 data-text="&nbsp;Home&nbsp;" color="#f81ce5">
        &nbsp;Home&nbsp;
      </StyledH2>
      <StyledH2 data-text="&nbsp;Home&nbsp;" color="#f80759">
        &nbsp;Home&nbsp;
      </StyledH2>
      <StyledH2 data-text="&nbsp;Contact&nbsp;" color="#fdc830">
        &nbsp;Contact&nbsp;
      </StyledH2>
      <StyledH2 data-text="&nbsp;Case Studies&nbsp;" color="#15ee11">
        &nbsp;Case Studies&nbsp;
      </StyledH2>
      <StyledH2 data-text="&nbsp;Show case&nbsp;" color="#3F5EFB">
        &nbsp;Show case&nbsp;
      </StyledH2>

      {/* tutaj galerię ze zdjęciami (animowanymi customowym pluginem 'przerobić ten płatny plugin od jquery na czysty js') */}
      {/* <h2>Proces tworzenia aktualnej strony (i tutaj ten slider ze zdjęciami z przerobionego plugina) - i po kliknięciu otwira zdjęcie w popupie</h2> */}
    </>
  );
};

export default ViewShowCase;
