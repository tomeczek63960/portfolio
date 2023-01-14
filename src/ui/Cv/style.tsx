import styled, { css } from "styled-components";
import { responsive, variables } from "src/styled/mixins";

export const StyledCvSection = styled.section`
  margin-block: ${variables.sectionVerticalPadding};
  ${responsive.desktop`
    ${css`
      margin-block: ${variables.sectionVerticalPaddingDesktop};
    `}
  `}
`;
