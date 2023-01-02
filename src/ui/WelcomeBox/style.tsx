import styled, { css, keyframes } from "styled-components";
import { responsive, colors, variables } from "src/styled/mixins";
import { isTruthy } from "src/helpers/checkFalsyType";
const writingAnimationKeyframes = keyframes`
  50% {
    opacity: 0;
    transform: scale(0.7) translateY(0.1rem);      
  }
`;

export const StyledWelcomeBoxSection = styled.section`
  padding-block: ${variables.sectionVerticalPadding};
`;
export const StyledWelcomeBox = styled.div`
  background: ${colors.white};
  border-radius: 0.5rem;
  overflow: hidden;
`;
export const StyledWelcomeBoxHead = styled.div`
  background: linear-gradient(
    -225deg,
    ${colors.purple} 25%,
    ${colors.blue} 100%
  );
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
`;
export const StyledWelcomeBoxHeadHeading = styled.h4`
  font-size: 1.6rem;
  line-height: 1.3;
`;
export const StyledWelcomeBoxHeadParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 1;
`;
export const StyledWelcomeBoxHeadInfo = styled.div`
  color: ${colors.white};
  font-family: ${variables.fontFamilyPrimary};
`;
export const StyledWelcomeBoxImage = styled.div`
  width: 4rem !important;
  height: 4rem !important;
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
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  height: 25rem;
  overflow-y: scroll;
  scroll-behavior: smooth;
  ${responsive.tabletL`
    height: 35rem;
  `}
`;
export const StyledWelcomeBoxMessage = styled.div.attrs(
  (props: { position?: string; writingAnimation?: boolean }) => props
)`
  font-size: 1.1rem;
  display: flex;
  gap: 1rem;
  ${responsive.tabletP`
    font-size: 1.2rem;
  `}
  ${({ position }) =>
    position === "right" &&
    css`
      justify-content: flex-end;
      padding-left: 1.5rem;
      ${responsive.tabletP`
        padding-left: 6rem;
      `}
    `}
  ${({ position }) =>
    position === "left" &&
    css`
      padding-right: 1.5rem;
      ${responsive.tabletP`
        padding-right: 6rem;
      `}
    `}
`;
export const StyledWelcomeBoxMessageImage = styled.div.attrs(
  (props: { type: string }) => props
)`
  margin-top: 1.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  ${responsive.tabletP`
    margin-top: 0;
  `}
  ${({ type }) => (type === "user" ? "order: 1;" : "order: -1;")};
  img {
    width: 100%;
    height: 100%;
  }
`;
export const StyledWelcomeBoxMessageText = styled.div.attrs(
  (props: {
    position?: string;
    writingAnimation?: boolean;
    visible?: boolean;
  }) => props
)`
  margin-top: 1rem;
  padding: 0.8rem 1.1rem;
  background: ${colors.whiteTertiary};
  border-bottom-right-radius: 0.4rem;
  border-bottom-left-radius: 0.4rem;
  color: ${colors.black};
  line-height: 1.4;
  width: fit-content;
  ${responsive.tabletP`
    padding: 1rem 1.3rem;
  `}
  ${({ position }) =>
    position === "right"
      ? "border-top-left-radius: 0.4rem;"
      : "border-top-right-radius: 0.4rem;"};

  ${({ writingAnimation }) =>
    isTruthy(writingAnimation) &&
    css`
      transform: scale(0);
      opacity: 0;
      span {
        width: 0.6rem;
        height: 0.6rem;
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
          margin-left: 0.5rem;
        }
      }
    `}
`;
export const StyledWelcomeBoxOptions = styled.div`
  margin-top: 0rem;
  padding: 2rem 1rem;
  h4 {
    color: ${colors.black};
    font-family: ${variables.fontFamilyPrimary};
  }
  button {
    text-align: left;
    cursor: pointer;
    background-color: ${colors.black};
    color: ${colors.white};
    line-height: 1.4;
    width: fit-content;
    padding: 0.8rem 1.1rem;
    font-size: 1.1rem;
    font-weight: ${variables.fontWeightSemiBold};
    transition: 0.3s;
    border: 0.2rem solid ${colors.black};
    ${responsive.tabletP`
      padding: 1rem 1.3rem;
      font-size: 1.2rem;
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
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
