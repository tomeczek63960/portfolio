import styled from "styled-components"

export const StyledImage = styled.div`
  width: 100%;
  & > span {
    position: unset !important;
  }
  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    transition: 0.3s ease-in-out;
    object-fit: cover;
    object-position: left top;
    background-position: top;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`;