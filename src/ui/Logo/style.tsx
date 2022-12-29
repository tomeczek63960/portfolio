import styled from "styled-components";
import { colors } from "src/styled/mixins";

export const StyledLogo = styled.a`
  color: ${colors.white};
  font-size: 25px;
  line-height: 1;
  position: relative;
  z-index: 10;
  transition: 0.3s;
  text-decoration: none;
  display: flex;
  align-items: center;
  svg {
    height: 25px;
    & + svg {
      margin-left: 5px;
    }
    path {
      stroke-dasharray: 200;
      stroke-dashoffset: 200;
    }
  }
`;
