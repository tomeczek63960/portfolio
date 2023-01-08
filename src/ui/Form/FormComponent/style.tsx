import styled from "styled-components";
import { colors, responsive } from "src/styled/mixins";

export const StyledFormWrapper = styled.div``;

export const StyledForm = styled.form.attrs(
  (props: { rotation: string; ref: HTMLFormElement }) => props
)`
  margin-top: 10rem;
  position: relative;
  border: 0.1rem solid transparent;
  padding-bottom: 5rem;
  ${responsive.tabletP`
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
