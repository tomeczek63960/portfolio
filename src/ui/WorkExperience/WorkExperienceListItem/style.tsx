import styled from "styled-components";
import { responsive, colors } from "src/styled/mixins";

export const StyledListItem = styled.div`
  position: relative;
  padding: 0 0 15px 20px;
  ${responsive.tabletP`
    padding: 0 0 15px 20px;
  `}
  ${responsive.tabletL`
    padding: 0 0 20px 20px;
  `}
`;
export const StyledListItemContent = styled.div`
  padding: 15px;
  background: ${colors.white};
  border-radius: 10px;
  box-shadow: 0px 16px 15px -10px ${colors.shadowColor};
  position: relative;
  transform: translateY(-40%);
  opacity: 0;
  ${responsive.tabletP`
    padding: 20px;
  `}
  ${responsive.desktopHd`
    padding: 30px;
  `}
  h4 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 1;
    margin-bottom: 10px;
    color: ${colors.purple};
    &::selection {
      background-color: ${colors.blue};
    }
    ${responsive.tabletP`
      margin-bottom: 10px;
      font-size: 16px;
    `}
    ${responsive.tabletL`
      margin-bottom: 15px;
      font-size: 18px;
    `}
    ${responsive.desktopHd`
      margin-bottom: 20px;
    `}
  }
  p {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: #2b2862;
    ${responsive.tabletP`
      font-size: 14px;
      line-height: 20px;
    `}
    ${responsive.tabletL`
      font-size: 16px;
      line-height: 24px;
    `}
  }
`;
export const StyledListItemLine = styled.div.attrs(
  (props: { order?: string }) => props
)`
  width: 3px;
  height: ${({ order }) => (order === "first" ? "calc(100% - 30px)" : "100%")};
  position: absolute;
  top: ${({ order }) => (order === "first" ? "30px" : "0")};
  left: 0;
  background: ${colors.blue};

  svg {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -70%);
    width: auto;
    height: 25px;
  }
`;
export const StyledListItemLineDot = styled.div.attrs(
  (props: { order?: string }) => props
)`
  width: 14px;
  height: 14px;
  background: ${colors.blue};
  border-radius: 7px;
  position: absolute;
  top: ${({ order }) => (order === "first" ? "calc(50% - 20px)" : "50%")};
  left: 50%;
  transform: translate(-50%, -50%);
`;
