import styled, {keyframes} from "styled-components"
import {responsive, colors} from "src/styled/mixins";

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
export const StyledCvCardWrapper = styled.section.attrs((props: {position: string}) => props)`
	padding-left: 15px;
  transform: ${({ position }) => position === 'left' ? 'skewY(-5deg)' : 'skewY(5deg)'};
`;
export const StyedCvCard = styled.div.attrs((props: {position: string}) => props)`
  margin: 40px 0;
  position: relative;
  max-width: 300px;
  min-height: 400px;
  background: ${colors.white};
  transition: 0.5s;
  &::before,
  &::after {
    content: '';
    position: absolute;
    background: ${colors.blue};
    transition: 0.5s;
  }
  &:before {
    top: -15px;
    left: 0;
    width: 100%;
    height: 15px;
    filter: brightness(90%);
    transform-origin: bottom;
    transform: ${({ position }) => position === 'left' ? 'skewX(45deg)' : 'skewX(-45deg)'};
  }
  &:after {
    top: ${({ position }) => position === 'left' ? '-15px' : '0'};
    left: ${({ position }) => position === 'left' ? '-15px' : 'unset'};
    right: ${({ position }) => position === 'left' ? 'unset' : '-15px'};
    width: 15px;
    height: 100%;
    filter: brightness(80%);
    transform-origin: left;
    transform: ${({ position }) => position === 'left' ? 'skewY(45deg)' : 'skewY(-45deg)'};
  }
`;
export const StyledCvCardHead = styled.div`
  position: relative;
  max-width: 300px;
  height: 200px;
  background: ${colors.blue};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const StyledDownloadCvIcon = styled.a`
  opacity: 0;
  transform: translateY(-30%);
  display: block;
  transition: filter 0.3s;
  svg {
    width: 100px;
    height: 100px;
  }
  &:hover {
    filter: brightness(110%);
  }
`;
export const StyledDownloadCvLink = styled.a`
  margin-top: 20px;
  position: relative;
  overflow-x: hidden;
  transform: translateY(-30%);
  opacity: 0;
  font-size: 22px;
  line-height: 30px;
  text-decoration: none;
  transition: filter 0.3s;
  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 2px;
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
export const StyedCvCardContent = styled.ul.attrs((props: {position: string}) => props)`
  position: relative;
  width: 100%;
  min-height: 200px;
  padding: 25px 25px;
  background: ${colors.white};
  text-align: center;
  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: -15px;
    width: 15px;
    height: 100%;
    background: ${colors.white};
    filter: brightness(80%);
    transform-origin: left;
    transform: ${({ position }) => position === 'left' ? 'skewY(45deg)' : 'skewY(-45deg)'};
    z-index: 10;
  }
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 400px;
    background: linear-gradient(transparent,transparent,rgba(160,160,160,.2));
    transform-origin: bottom;
    transform: ${({ position }) => position === 'left' ? 'skewX(45deg)' : 'skewX(-45deg)'};
    transition: 0.5s;
    pointer-events: none;
    z-index: -1;
    filter: blur(2px);
    opacity: 0.8;
  }
`;
export const StyledCardListItem = styled.li`
  margin-bottom: 10px;
  position: relative;
  opacity: 0;
  transform: translateY(-40%);
  color: #999;
  font-size: 13px;
  line-height: 20px;
  ${responsive.tabletP`
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 15px;
  `}
  &:last-child {
    margin-bottom: 0;
    color: ${colors.blue};
    font-weight: 700;
  }
`;