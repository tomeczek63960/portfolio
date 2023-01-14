import styled, { css } from "styled-components";
import { colors, responsive, variables } from "src/styled/mixins";

export const StyledFormWrapper = styled.div`
  margin-top: calc(${variables.sectionContentPadding} * 1.6);
  ${responsive.desktop`
    ${css`
      margin-top: calc(${variables.sectionContentPaddingDesktop} * 1.6);
    `}
  `}
`;

export const StyledForm = styled.form.attrs(
  (props: { rotation: string; ref: HTMLFormElement }) => props
)`
  position: relative;
  border: 0.1rem solid transparent;
  padding-bottom: 5rem;
  ${responsive.desktopHd`
    padding-right: 8rem;
  `}

  h1 {
    margin-bottom: 2rem;
  }
`;
export const StyledSuccessMessage = styled.p.attrs(
  (props: { type: "success" | "error" | "pending" }) => props
)`
  color: ${({ type }) => colors[type]};
`;
export const StyledSuccessMessages = styled.div`
  min-height: 5rem;
`;
