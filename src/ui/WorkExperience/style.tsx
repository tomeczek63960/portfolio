import styled from "styled-components";
import { responsive, colors, variables } from "src/styled/mixins";

export const StyledWorkExperienceSection = styled.section`
  padding-block: ${variables.sectionVerticalPadding};
`;
export const StyledWorkExperience = styled.div`
  overflow: hidden;
  border-radius: 10px;
`;
export const StyledWorkExperienceHead = styled.div`
  position: relative;
`;
export const StyledWorkExperienceHeadBackground = styled.div`
  background: ${colors.purple};
  display: flex;
  overflow: hidden;
  align-items: flex-start;
  z-index: -1;
  &,
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &::before {
    content: "";
    z-index: 1;
    backdrop-filter: blur(15px);
  }
  svg {
    height: auto;
    transform: rotate(180deg);
  }
`;
export const StyledWorkExperienceHeadContent = styled.div`
  padding: 20px 10px 50px 40px;
  position: relative;
  z-index: 1;
  ${responsive.tabletP`
    padding: 20px 10px 50px 40px;
  `}
  ${responsive.tabletL`
    padding: 50px 66px 60px 66px;
  `}
  ${responsive.desktopHd`
    padding: 60px 66px 80px 66px;
  `}
  h3, label {
    position: relative;
    opacity: 0;
    transform: translateY(-20%);
  }
  h3 {
    font-family: ${variables.fontFamilyOpenSans};
    font-style: normal;
    font-weight: ${variables.fontWeightBold};
    font-size: 22px;
    line-height: 30px;
  }
  label {
    margin-top: 10px;
    font-family: ${variables.fontFamilyOpenSans};
    font-style: normal;
    font-weight: ${variables.fontWeightNormal};
    font-size: 14px;
    line-height: 18px;
    display: block;
    ${responsive.tabletP`
      margin-top: 20px;
      font-size: 16px;
      line-height: 18px;
    `}
  }
`;
export const StyledWorkExperienceContent = styled.div`
  padding: 20px 10px 10px;
  width: 100%;
  background: ${colors.whiteBackground};
  ${responsive.tabletL`
    padding: 20px 30px 30px;
  `}
`;
export const StyledButtonSecondary = styled.button`
  width: 100%;
  height: 62px;
  mix-blend-mode: normal;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${variables.fontFamilyOpenSans};
  font-weight: ${variables.fontWeightBold};
  font-size: 14px;
  line-height: 19px;
  transition: background-color 0.3s;
  color: ${colors.white};
  background: ${colors.blue};
  opacity: 0;
  transform: translateY(-20%);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  &:hover {
    background: ${colors.purple};
  }
`;
