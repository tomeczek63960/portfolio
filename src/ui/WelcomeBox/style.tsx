import styled, { css, keyframes } from 'styled-components'
import { responsive, colors, variables } from 'src/styled/mixins';
const writingAnimationKeyframes = keyframes`
  50% {
    opacity: 0;
    transform: scale(0.7) translateY(1px);      
  }
`;
export const StyledWelcomeBoxSection = styled.section`
  padding-block: ${variables.sectionVerticalPadding};
`;
export const StyledWelcomeBox = styled.div`
  background: ${colors.white};
  border-radius: 5px;
  overflow: hidden;
`;
export const StyledWelcomeBoxHead = styled.div`
  background: linear-gradient(-225deg, ${colors.purple} 25%, ${colors.blue} 100%);
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;
`;
export const StyledWelcomeBoxHeadHeading = styled.h4`
  font-size: 16px;
  line-height: 1.3;
`;
export const StyledWelcomeBoxHeadParagraph = styled.p`
  font-size: 11px;
  line-height: 1;
`;
export const StyledWelcomeBoxHeadInfo = styled.div`
  color: ${colors.white};
  font-family: Arial;
`;
export const StyledWelcomeBoxImage = styled.div`
  width: 40px!important;
  height: 40px!important;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const StyledWelcomeBoxConversation = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  height: 250px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  ${responsive.tabletL`
    height: 350px;
  `}
`;
export const StyledWelcomeBoxMessage = styled.div.attrs((props: {position?: string, writingAnimation?: boolean}) => props)`
  font-size: 11px;
  display: flex;
  gap: 10px;
  padding-right: 15px;
  ${responsive.tabletP`
    padding-right: 60px;
    font-size: 12px;
  `}
  ${
    ({ position }) => position === 'right' && css`
      justify-content: flex-end;
      padding-right: 0;
      padding-left: 15px;
      ${responsive.tabletP`
        padding-left: 60px;
        padding-right: 0;
      `}
    `
  }
`;
export const StyledWelcomeBoxMessageImage = styled.div.attrs((props: {type: string}) => props)`
  margin-top: 15px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  ${responsive.tabletP`
    margin-top: 0;
  `}
  ${
    ({ type }) => type === 'user' ? "order: 1;" : "order: -1;"
  };
  img {
    width: 100%;
    height: 100%;
  }
`;
export const StyledWelcomeBoxMessageText = styled.div.attrs((props: {position?: string, writingAnimation?: boolean, visible?: boolean}) => props)`
  margin-top: 10px;
  padding: 8px 11px;
  background: ${colors.whiteTertiary};
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  color: ${colors.black};
  line-height: 1.4;
  width: fit-content;
  ${responsive.tabletP`
    padding: 10px 13px;
  `}
  ${
    ({ position }) => position === 'right' ? "border-top-left-radius: 4px;" : "border-top-right-radius: 4px;"
  };

  ${
    ({ writingAnimation }) => writingAnimation && css`
      transform: scale(0);
      opacity: 0;
      span {
        width: 6px;
        height: 6px;
        background: ${colors.black};
        border-radius: 50%;
        display: inline-block;
        &:first-child {
          animation: 2s ${writingAnimationKeyframes} infinite ease-in-out;
        }
        &:nth-child(2) {
          animation: 2s ${writingAnimationKeyframes} 0.4s infinite ease-in-out;
        }
        &:nth-child(3) {
          animation: 2s ${writingAnimationKeyframes} 0.8s infinite ease-in-out;
        }
        & + span {
          margin-left: 5px;
        }
      }
    `
  }
`;
export const StyledWelcomeBoxOptions = styled.div`
  margin-top: 0px;
  padding: 20px 10px;
  h4 {
    color: ${colors.black};
    font-family: Arial;
  }
  button {
    text-align: left;
    cursor: pointer;
    background-color: ${colors.black};
    color: ${colors.white};
    line-height: 1.4;
    width: fit-content;
    padding: 8px 11px;
    font-size: 11px;
    font-weight: 600;
    transition: 0.3s;
    border: 2px solid ${colors.black};
    ${responsive.tabletP`
      padding: 10px 13px;
      font-size: 12px;
    `}
    &[disabled] {
      pointer-events: none;
      color: ${colors.black};
      background-color: ${colors.whiteTertiary};
      text-decoration: line-through;
    }
    &:hover {
      color: ${colors.black};
      background-color: ${colors.white};
    }
  }
`;
export const StyledWelcomeBoxOptionsList = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;