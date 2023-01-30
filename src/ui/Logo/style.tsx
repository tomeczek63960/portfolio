import styled from "styled-components";
import { colors } from "src/styled/mixins";

export const StyledLogo = styled.a`
  max-width: 5.1rem;
  color: ${colors.white};
  font-size: 2.5rem;
  line-height: 1;
  position: relative;
  z-index: 10;
  transition: 0.3s;
  text-decoration: none;
  display: flex;
  align-items: center;
  width: auto;
  margin-right: auto;
  svg {
    height: 2.5rem;
    max-width: 2.5rem;
    & + svg {
      margin-left: 0.5rem;
    }
    path {
      stroke-dasharray: 200;
      stroke-dashoffset: 200;
    }
  }
  &.active {
    pointer-events: none;
  }
`;
