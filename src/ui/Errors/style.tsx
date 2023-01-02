import styled from "styled-components";
import { colors, variables } from "src/styled/mixins";
export const StyledErrorList = styled.div`
  position: fixed;
  top: 5%;
  left: 5%;
  z-index: 10;
`;
export const StyledError = styled.div`
  margin-bottom: 10px;
  box-shadow: 1rem 1rem 1rem -1rem ${colors.black};
  background: ${colors.white};
  color: ${colors.error};
  font-weight: ${variables.fontWeightBold};
  padding: 15px;
  border-radius: 15px;
  width: 95%;
  max-width: 300px;
  &:last-child {
    margin-bottom: 0;
  }
`;
