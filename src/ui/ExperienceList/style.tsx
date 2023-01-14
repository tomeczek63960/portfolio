import { variables, responsive, colors } from "src/styled/mixins";
import styled, { css } from "styled-components";

export const StyledExperienceListSection = styled.section`
  margin-block: ${variables.sectionVerticalPadding};
  ${responsive.desktop`
    ${css`
      margin-block: ${variables.sectionVerticalPaddingDesktop};
    `}
  `}
`;
export const StyledExperienceItem = styled.div`
  margin-block: calc(${variables.sectionContentPadding} * 1.5);
  ${responsive.desktop`
    ${css`
      margin-block: calc(${variables.sectionContentPaddingDesktop} * 1.5);
    `}
  `}
  p {
    margin-top: 1rem;
  }
`;
export const StyledExperienceItemSpan = styled.span`
  color: ${colors.blue};
  font-weight: 700;
`;
