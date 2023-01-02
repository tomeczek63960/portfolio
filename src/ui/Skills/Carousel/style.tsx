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
  padding: 4rem 4.5rem;
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
    padding: 18rem 9rem 8rem;
  `}
  h5, p {
    transform: translateY(-40%);
    opacity: 0;
    pointer-events: none;
  }
  h5 {
    color: ${colors.orange};
    font-size: 1.4rem;
    line-height: 1;
    font-weight: ${variables.fontWeightBold};
    ${responsive.tabletP`
      font-size: 1.8rem;
    `}
    ${responsive.tabletL`
      font-size: 2.4rem;
    `}
  }
  p {
    margin-top: 1rem;
    min-height: 6rem;
    max-width: 23rem;
    color: ${colors.grayLightSecondary};
    font-size: 1.2rem;
    line-height: 1.5rem;
    ${responsive.tabletP`
      min-height: 8rem;
      font-size: 1.4rem;
      line-height: 1.9rem;
    `}
    ${responsive.tabletL`
      margin-top: 3rem;
      max-width: 27rem;
      font-size: 1.6rem;
      line-height: 2rem;
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
  width: 5rem;
  height: 5rem;
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
    width: 3rem;
    transition: 0.5s ease-in-out;
    filter: grayscale(100%);
    ${responsive.tabletP`
      width: 3.5rem;
    `}
    ${responsive.tabletL`
      width: 4.5rem;
    `}
    ${responsive.desktopHd`
      width: 8rem;
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
