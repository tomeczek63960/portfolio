import styled from 'styled-components'
import { responsive, colors } from 'src/styled/mixins';

export const Project = styled.div`
  cursor: pointer;
  width: 100%;
  max-width: 100%;
  max-height: 300px;
  position: relative;
  flex-shrink: 0;
  border: 1px solid transparent;
  border-radius: 5px;
  overflow: hidden;
`
export const ProjectHover = styled.div`
  padding: 20px 15px;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.78) 70%);
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100%;
  color: ${colors.white};
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  ${responsive.tabletL`
    opacity: 0;
  `}
  h4 {
    position: relative;
    padding-bottom: 5px;
    margin-bottom: 10px;
    line-height: 1;
    font-size: 20px;
    width: fit-content;
    opacity: 1;
    ${responsive.tabletL`
      transform: translateY(0);
      opacity: 1;
    `}
    em {
      width: 100%;
      height: 2px;
      background: ${colors.purplePrimary};
      position: absolute;
      bottom: 0;
      left: 0;
      transform: scaleX(0);
      transform-origin: left;
    }
  }
  p {
    font-size: 12px;
    color: ${colors.whitePrimary};
    ${responsive.tabletL`
      transform: translateY(0);
      opacity: 1;
    `}
  }
`;
