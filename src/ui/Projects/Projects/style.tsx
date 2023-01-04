import styled from "styled-components";
import { variables } from "src/styled/mixins";

export const StyledProjectsGrid = styled.section`
  padding-block: ${variables.sectionVerticalPadding};
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;
