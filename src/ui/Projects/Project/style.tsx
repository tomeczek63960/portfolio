import styled from "styled-components";
import { colors } from "src/styled/mixins";

export const StyledProject = styled.div`
  cursor: pointer;
  width: 100%;
  max-width: 100%;
  max-height: 30rem;
  min-height: 19rem;
  position: relative;
  flex-shrink: 0;
  border: 0.1rem solid transparent;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: 0.3s;
  &:hover {
    opacity: 0.7;
  }
`;
export const StyledProjectLabels = styled.div`
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
`;
export const StyledProjectHover = styled.div`
  padding: 2rem 1.5rem;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.78) 70%);
  position: absolute;
  left: 0;
  bottom: 0;
  color: ${colors.white};
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transform: translateY(100%);
  h4,
  p {
    opacity: 0;
    transform: translateY(-30%);
  }
  h4 {
    position: relative;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    line-height: 1;
    font-size: 2rem;
    width: fit-content;
    span {
      width: 100%;
      height: 0.2rem;
      background: ${colors.blue};
      position: absolute;
      bottom: 0;
      left: 0;
      transform: scaleX(0);
      transform-origin: left;
    }
  }
  p {
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: ${colors.whitePrimary};
  }
`;
