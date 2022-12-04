import styled from 'styled-components'
import { responsive, colors, variables } from 'src/styled/mixins';

export const SkillsSection = styled.section`
  padding-block: ${variables.sectionVerticalPadding};
`;
export const StyledCircleCarousel = styled.div`
  position: relative;
	padding-top: 100%;
  svg {
    width: 30px;
    ${responsive.tabletP`
      width: 35px;
    `}
    ${responsive.tabletL`
      width: 45px;
    `}
    ${responsive.desktopHd`
      width: 80px;
    `}
    &.svg-large {
      transform: scale(2);
    }
  }
`
export const StyledSlidesText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 45px;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background: rgba(red,.3);
    ${responsive.desktopHd`
      padding: 180px 90px 80px;
    `}
    h5, p {
      transform: translateY(-40%);
      opacity: 0;
      pointer-events: none;
    }
    h5 {
      line-height: 1;
      font-weight: 700;
      color: ${colors.orange};
      text-align: center;
      font-size: 14px;
      ${responsive.tabletP`
        font-size: 18px;
      `}
      ${responsive.tabletL`
        font-size: 24px;
      `}
    }
    p {
      margin-top: 10px;
      color: ${colors.grayLightSecondary};
      font-size: 12px;
      line-height: 15px;
      min-height: 60px;
      max-width: 230px;
      ${responsive.tabletP`
        font-size: 14px;
        line-height: 19px;
        min-height: 80px;
      `}
      ${responsive.tabletL`
        margin-top: 30px;
        font-size: 16px;
        line-height: 20px;
        max-width: 270px;
      `}
    }
  }
`;
export const StyledPagination = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 90%;
  height: 90%;
  border-radius: 50%;
  transition-property: transform;
  transition-timing-function: ease-out;
  pointer-events: none;
  user-select: none;
  svg {
    transition: 0.5s ease-in-out;
    filter: grayscale(100%);
  }

  .dot {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    pointer-events: auto;
    transition: .3s;
    &:hover {
      transform: translate(-50%, -50%);
      cursor: pointer;
      svg {
        filter: grayscale(0%);
      }
    }
  }
  .item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .item.active {
    svg {
      transform: scale(1.5);
      filter: grayscale(0%);
      &.svg-large {
        transform: scale(2.5);
      }
    }
  }
`;