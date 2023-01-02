import styled, { keyframes } from "styled-components";
import { responsive, colors, variables } from "src/styled/mixins";

const widthAnimation = keyframes`
  0% {
    width: 0;
    transform-origin: right;
  }
  50% {
    width: 100%;
    transform-origin: right;
    transform: translateX(0);
  }
  51% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`;
export const StyledCvCardWrapper = styled.section.attrs(
  (props: { position: string }) => props
)`
  padding-left: 1.5rem;
  transform: ${({ position }) =>
    position === "left" ? "skewY(-5deg)" : "skewY(5deg)"};
`;
export const StyedCvCard = styled.div.attrs(
  (props: { position: string }) => props
)`
  margin: 4rem 0;
  position: relative;
  max-width: 30rem;
  min-height: 40rem;
  background: ${colors.white};
  transition: 0.5s;
  &::before,
  &::after {
    content: "";
    position: absolute;
    background: ${colors.blue};
    transition: 0.5s;
  }
  &:before {
    top: -1.5rem;
    left: 0;
    width: 100%;
    height: 1.5rem;
    filter: brightness(90%);
    transform-origin: bottom;
    transform: ${({ position }) =>
      position === "left" ? "skewX(45deg)" : "skewX(-45deg)"};
  }
  &:after {
    top: ${({ position }) => (position === "left" ? "-1.5rem" : "0")};
    left: ${({ position }) => (position === "left" ? "-1.5rem" : "unset")};
    right: ${({ position }) => (position === "left" ? "unset" : "-1.5rem")};
    width: 1.5rem;
    height: 100%;
    filter: brightness(80%);
    transform-origin: left;
    transform: ${({ position }) =>
      position === "left" ? "skewY(45deg)" : "skewY(-45deg)"};
  }
`;
export const StyledCvCardHead = styled.div`
  position: relative;
  max-width: 30rem;
  height: 20rem;
  background: ${colors.blue};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const StyledCvDownloadIcon = styled.a`
  opacity: 0;
  transform: translateY(-30%);
  display: block;
  transition: filter 0.3s;
  svg {
    width: 10rem;
    height: 10rem;
  }
  &:hover {
    filter: brightness(110%);
  }
`;
export const StyledCvDownloadLink = styled.a`
  margin-top: 2rem;
  position: relative;
  overflow-x: hidden;
  transform: translateY(-30%);
  opacity: 0;
  font-size: 2.2rem;
  line-height: 3rem;
  text-decoration: none;
  transition: filter 0.3s;
  &::before,
  &::after {
    content: "";
    width: 100%;
    height: 0.2rem;
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${colors.blue};
  }
  &::after {
    animation: ${widthAnimation} 2.5s infinite;
    background: ${colors.purple};
  }
  &:hover {
    filter: brightness(90%);
  }
`;
export const StyedCvCardContent = styled.ul.attrs(
  (props: { position: string }) => props
)`
  position: relative;
  width: 100%;
  min-height: 20rem;
  padding: 2.5rem 2.5rem;
  background: ${colors.white};
  text-align: center;
  &::before {
    content: "";
    position: absolute;
    top: -1.5rem;
    left: -1.5rem;
    width: 1.5rem;
    height: 100%;
    background: ${colors.white};
    filter: brightness(80%);
    transform-origin: left;
    transform: ${({ position }) =>
      position === "left" ? "skewY(45deg)" : "skewY(-45deg)"};
    z-index: 10;
  }
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40rem;
    background: linear-gradient(
      transparent,
      transparent,
      rgba(160, 160, 160, 0.2)
    );
    transform-origin: bottom;
    transform: ${({ position }) =>
      position === "left" ? "skewX(45deg)" : "skewX(-45deg)"};
    transition: 0.5s;
    pointer-events: none;
    z-index: -1;
    filter: blur(0.2rem);
    opacity: 0.8;
  }
`;
export const StyledCvCardListItem = styled.li`
  margin-bottom: 1rem;
  position: relative;
  opacity: 0;
  transform: translateY(-40%);
  color: #999;
  font-size: 1.3rem;
  line-height: 2rem;
  ${responsive.tabletP`
    font-size: 1.6rem;
    line-height: 2.4rem;
    margin-bottom: 1.5rem;
  `}
  &:last-child {
    margin-bottom: 0;
    color: ${colors.blue};
    font-weight: ${variables.fontWeightBold};
  }
`;
