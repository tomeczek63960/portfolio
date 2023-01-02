import styled from "styled-components";
import { responsive } from "src/styled/mixins";

export const StyledTimelineList = styled.div`
  margin-left: 1rem;
  width: auto;
  transform: translateY(-5rem);
  margin-bottom: -2rem;
  ${responsive.tabletL`
    margin-bottom: 0;
  `}
`;
