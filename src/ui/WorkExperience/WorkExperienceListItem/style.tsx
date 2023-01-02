import styled from "styled-components";
import { responsive, colors, variables } from "src/styled/mixins";

export const StyledListItem = styled.div`
  position: relative;
  padding: 0 0 1.5rem 2rem;
  ${responsive.tabletP`
    padding: 0 0 1.5rem 2rem;
  `}
  ${responsive.tabletL`
    padding: 0 0 2rem 2rem;
  `}
`;
export const StyledListItemContent = styled.div`
  padding: 1.5rem;
  background: ${colors.white};
  border-radius: 1rem;
  box-shadow: 0 1.6rem 1.5rem -1rem ${colors.shadowColor};
  position: relative;
  transform: translateY(-40%);
  opacity: 0;
  ${responsive.tabletP`
    padding: 2rem;
  `}
  ${responsive.desktopHd`
    padding: 3rem;
  `}
  h4 {
    font-family: ${variables.fontFamilyOpenSans};
    font-style: normal;
    font-weight: ${variables.fontWeightBold};
    font-size: 1.4rem;
    line-height: 1;
    margin-bottom: 1rem;
    color: ${colors.purple};
    &::selection {
      background-color: ${colors.blue};
    }
    ${responsive.tabletP`
      margin-bottom: 1rem;
      font-size: 1.6rem;
    `}
    ${responsive.tabletL`
      margin-bottom: 1.5rem;
      font-size: 1.8rem;
    `}
    ${responsive.desktopHd`
      margin-bottom: 2rem;
    `}
  }
  p {
    font-family: ${variables.fontFamilyOpenSans};
    font-style: normal;
    font-weight: ${variables.fontWeightNormal};
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: #2b2862;
    ${responsive.tabletP`
      font-size: 1.4rem;
      line-height: 2rem;
    `}
    ${responsive.tabletL`
      font-size: 1.6rem;
      line-height: 2.4rem;
    `}
  }
`;
export const StyledListItemLine = styled.div.attrs(
  (props: { order?: string }) => props
)`
  width: 0.3rem;
  height: ${({ order }) => (order === "first" ? "calc(100% - 3rem)" : "100%")};
  position: absolute;
  top: ${({ order }) => (order === "first" ? "3rem" : "0")};
  left: 0;
  background: ${colors.blue};

  svg {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -70%);
    width: auto;
    height: 2.5rem;
  }
`;
export const StyledListItemLineDot = styled.div.attrs(
  (props: { order?: string }) => props
)`
  width: 1.4rem;
  height: 1.4rem;
  background: ${colors.blue};
  border-radius: 0.7rem;
  position: absolute;
  top: ${({ order }) => (order === "first" ? "calc(50% - 2rem)" : "50%")};
  left: 50%;
  transform: translate(-50%, -50%);
`;
