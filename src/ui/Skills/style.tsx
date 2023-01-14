import styled, { css } from "styled-components";
import { variables, responsive } from "src/styled/mixins";

export const StyledSkillsSection = styled.section`
  margin-block: ${variables.sectionVerticalPadding};
  ${responsive.desktop`
    ${css`
      margin-block: ${variables.sectionVerticalPaddingDesktop};
    `}
  `}
`;

export const StyledSillCarouselWrapper = styled.div`
  margin-block: calc(${variables.sectionVerticalPadding} * 0.8);
  ${responsive.desktop`
    ${css`
      margin-block: calc(${variables.sectionVerticalPaddingDesktop} * 1);
    `}
  `}
`;
