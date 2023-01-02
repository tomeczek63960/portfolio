import styled from "styled-components";
import { colors } from "src/styled/mixins";

export const StyledLogo = styled.a`
  color: ${colors.white};
  font-size: 2.5rem;
  line-height: 1;
  position: relative;
  z-index: 10;
  transition: 0.3s;
  text-decoration: none;
  display: flex;
  align-items: center;
  svg {
    height: 2.5rem;
    & + svg {
      margin-left: 0.5rem;
    }
    path {
      stroke-dasharray: 200;
      stroke-dashoffset: 200;
    }
  }
`;
