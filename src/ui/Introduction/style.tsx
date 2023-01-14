import styled, { css } from "styled-components";
import { variables, responsive } from "src/styled/mixins";

export const StyledIntroductionSection = styled.section`
  margin-block: ${variables.sectionVerticalPadding};
  ${responsive.desktop`
    ${css`
      margin-block: calc(${variables.sectionVerticalPaddingDesktop} * 0.8);
    `}
  `}
`;

export const StyledIntroductionSvg = styled.div`
  margin-block: ${variables.sectionContentPadding};
  ${responsive.desktop`
    ${css`
      margin-block: ${variables.sectionContentPaddingDesktop};
    `}
  `}
`;
