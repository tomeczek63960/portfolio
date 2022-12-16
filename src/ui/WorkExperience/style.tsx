import styled from 'styled-components'
import { responsive, colors, variables } from 'src/styled/mixins';

export const StyledWorkExperienceSection = styled.section`
  padding-block: ${variables.sectionVerticalPadding};
  margin-bottom: -200px;
`;
export const StyledWorkExperienceHeadBackground = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");
  width: 100%;
  height: 200px;
  background: ${colors.purple};
  border-radius: 10px;
  display: flex;
  overflow: hidden;
  align-items: flex-start;
  svg {
    height: auto;
    transform: rotate(180deg);
  }
`;
export const StyledWorkExperienceHead = styled.div`
  padding: 50px 66px 60px 66px;
  opacity: 0;
  h3 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;
  }
  label {
    margin-top: 20px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: block;
  }
`;
export const StyledWorkExperienceContent = styled.div`
  background: ${colors.whiteBackground};
  padding: 20px 30px;
  width: 100%;
`;
export const StyledWorkExperience = styled.div`
  transform: translateY(-200px);
  backdrop-filter: blur(15px);
  overflow: hidden;
  border-radius: 10px;
`;
export const StyledButtonSecondary = styled.button`
  width: 100%;
  height: 62px;
  mix-blend-mode: normal;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  transition: background-color 0.3s;
  color: ${colors.white};
  background: ${colors.blue};
  opacity: 0;
  transform: translateY(-20%);
  &:hover {
    background:${colors.purple};
  }
`;