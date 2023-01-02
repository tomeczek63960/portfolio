import styled from "styled-components";
import { responsive, colors, variables } from "src/styled/mixins";

export const StyledWorkExperienceSection = styled.section`
  padding-block: ${variables.sectionVerticalPadding};
`;
export const StyledWorkExperience = styled.div`
  overflow: hidden;
  border-radius: 1rem;
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
    backdrop-filter: blur(1.5rem);
  }
  svg {
    height: auto;
    transform: rotate(180deg);
  }
`;
export const StyledWorkExperienceHeadContent = styled.div`
  padding: 2rem 1rem 5rem 4rem;
  position: relative;
  z-index: 1;
  ${responsive.tabletP`
    padding: 2rem 1rem 5rem 4rem;
  `}
  ${responsive.tabletL`
    padding: 5rem 6.6rem 6rem 6.6rem;
  `}
  ${responsive.desktopHd`
    padding: 6rem 6.6rem 8rem 6.6rem;
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
    font-size: 2.2rem;
    line-height: 3rem;
  }
  label {
    margin-top: 1rem;
    font-family: ${variables.fontFamilyOpenSans};
    font-style: normal;
    font-weight: ${variables.fontWeightNormal};
    font-size: 1.4rem;
    line-height: 1.8rem;
    display: block;
    ${responsive.tabletP`
      margin-top: 2rem;
      font-size: 1.6rem;
      line-height: 1.8rem;
    `}
  }
`;
export const StyledWorkExperienceContent = styled.div`
  padding: 2rem 1rem 1rem;
  width: 100%;
  background: ${colors.whiteBackground};
  ${responsive.tabletL`
    padding: 2rem 3rem 3rem;
  `}
`;
export const StyledButtonSecondary = styled.button`
  width: 100%;
  height: 6.2rem;
  mix-blend-mode: normal;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${variables.fontFamilyOpenSans};
  font-weight: ${variables.fontWeightBold};
  font-size: 1.4rem;
  line-height: 1.9rem;
  transition: background-color 0.3s;
  color: ${colors.white};
  background: ${colors.blue};
  opacity: 0;
  transform: translateY(-20%);
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  &:hover {
    background: ${colors.purple};
  }
`;
