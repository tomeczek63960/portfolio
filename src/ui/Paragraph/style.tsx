import { responsive } from "src/styled/mixins";
import styled from "styled-components";

export const StyledParagraph = styled.p.attrs(
  (props: { color?: string }) => props
)`
  margin: 1.5rem 0;
  font-size: 1.6rem;
  line-height: 2.3rem;
  color: ${({ color }) => color};
  opacity: 0;
  transform: translateY(20%);
  ${responsive.tabletL`
    font-size: 2rem;
    line-height: 2.8rem;
  `}
  ${responsive.desktop`
    font-size: 2.2rem;
    line-height: 3.2rem;
  `}
  ${responsive.desktopHd`
    font-size: 2.6rem;
    line-height: 3.8rem;
  `}
`;
