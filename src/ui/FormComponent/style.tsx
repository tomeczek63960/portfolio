import styled from "styled-components";
import {responsive} from "src/styled/mixins";

export const StyledForm = styled.form.attrs((props: {rotation: string, ref: HTMLFormElement}) => props)`
  margin-top: 100px;
  position: relative;
  border: 1px solid transparent;
  ${ responsive.tabletP`
    padding-right: 80px;
  `}

  h1 {
    margin-bottom: 20px;
  }
`;