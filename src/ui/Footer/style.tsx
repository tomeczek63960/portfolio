import styled from "styled-components";
import { responsive, colors } from "src/styled/mixins";
import { StyledContainerLeft } from "src/ui/Container/style";
export const StyledFooter = styled.footer`
  margin-top: auto;
  position: relative;
  z-index: 1;
`;

export const StyledContainerLeftFooter = styled(StyledContainerLeft)`
  padding-top: 40px;
  padding-bottom: 40px;
  &::before {
    content: "";
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background: ${colors.grayFooter};
    z-index: -1;
    ${responsive.tabletP`
        width: 50%;
      `}
  }
  h3,
  p {
    opacity: 0;
    transform: translateY(-30%);
  }
  p {
    margin-top: 15px;
    color: ${colors.grayFooterText};
    font-size: 12px;
  }
  a {
    color: ${colors.grayFooterText};
    transition: 0.3s;
    &::selection {
      background-color: ${colors.purple};
    }
    &:hover {
      opacity: 0.7;
    }
  }
`;
