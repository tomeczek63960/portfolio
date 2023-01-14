import styled, { css } from "styled-components";
import { variables, responsive } from "src/styled/mixins";

export const StyledProjectsGrid = styled.section`
  margin-block: ${variables.sectionVerticalPadding};
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  ${responsive.desktop`
    ${css`
      margin-block: ${variables.sectionVerticalPaddingDesktop};
    `}
  `}
`;
