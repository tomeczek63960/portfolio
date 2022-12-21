import styled from 'styled-components'
import { responsive, colors, variables } from 'src/styled/mixins';

export const StyledTimelineList = styled.div`
  margin-left: 10px;
  width: auto;
  transform: translateY(-50px);
  margin-bottom: -20px;
  ${responsive.tabletL`
    margin-bottom: 0;
  `}
`;
