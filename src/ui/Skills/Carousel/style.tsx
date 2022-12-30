import styled from "styled-components";
import { responsive, colors, variables } from "src/styled/mixins";

export const StyledCarousel = styled.div`
  position: relative;
  padding-top: 100%;
`;
export const StyledCarouselText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const StyledCarouselTextItem = styled.div`
  padding: 40px 45px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  text-align: center;
  ${responsive.desktopHd`
    padding: 180px 90px 80px;
  `}
  h5, p {
    transform: translateY(-40%);
    opacity: 0;
    pointer-events: none;
  }
  h5 {
    color: ${colors.orange};
    font-size: 14px;
    line-height: 1;
    font-weight: ${variables.fontWeightBold};
    ${responsive.tabletP`
      font-size: 18px;
    `}
    ${responsive.tabletL`
      font-size: 24px;
    `}
  }
  p {
    margin-top: 10px;
    min-height: 60px;
    max-width: 230px;
    color: ${colors.grayLightSecondary};
    font-size: 12px;
    line-height: 15px;
    ${responsive.tabletP`
      min-height: 80px;
      font-size: 14px;
      line-height: 19px;
    `}
    ${responsive.tabletL`
      margin-top: 30px;
      max-width: 270px;
      font-size: 16px;
      line-height: 20px;
    `}
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
`;
export const StyledPaginationItem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
export const StyledPaginationItemDot = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  pointer-events: auto;
  transition: 0.3s;
  svg {
    width: 30px;
    transition: 0.5s ease-in-out;
    filter: grayscale(100%);
    ${responsive.tabletP`
      width: 35px;
    `}
    ${responsive.tabletL`
      width: 45px;
    `}
    ${responsive.desktopHd`
      width: 80px;
    `}
  }
  &:hover {
    transform: translate(-50%, -50%);
    cursor: pointer;
    svg {
      filter: grayscale(0%) !important;
    }
  }
`;
