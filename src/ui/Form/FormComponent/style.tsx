import styled from "styled-components";
import { responsive } from "src/styled/mixins";

export const StyledForm = styled.form.attrs(
  (props: { rotation: string; ref: HTMLFormElement }) => props
)`
  margin-top: 10rem;
  position: relative;
  border: 0.1rem solid transparent;
  ${responsive.tabletP`
    padding-right: 8rem;
  `}

  h1 {
    margin-bottom: 2rem;
  }
`;
