import styled from 'styled-components'
import { responsive, colors, variables } from 'src/styled/mixins';

export const StyledWorkExperienceSection = styled.section`
  padding-block: ${variables.sectionVerticalPadding};
`;
export const StyledTimelineHeadBackground = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");
  width: 100%;
  height: 200px;
  background: ${colors.purple};
  border-radius: 10px;
  display: flex;
  overflow: hidden;
  align-items: flex-start;
  svg {
    height: auto;
    transform: rotate(180deg);
  }
`;
export const StyledTimelineHead = styled.div`
  padding: 50px 66px 60px 66px;
  h3 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;
  }
  label {
    margin-top: 20px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    display: block;
  }
`;
export const StyledTimelineContent = styled.div`
  background: ${colors.whiteBackground};
  padding: 20px 30px;
  width: 100%;
`;
export const StyledTimeline = styled.div`
  transform: translateY(-200px);
  backdrop-filter: blur(15px);
  overflow: hidden;
  border-radius: 10px;
`;
export const StyledTimelineList = styled.div`
  margin-left: 12px;
  width: 100%;
  transform: translateY(-50px);
`;
export const StyledCard = styled.div`
  position: relative;
  padding: 0 20px 20px;
`;
export const StyledCardContent = styled.div`
  padding: 20px;
  background: ${colors.white};
  border-radius: 10px;
  box-shadow: 0px 16px 15px -10px ${colors.shadowColor};
  position: relative;
  h4 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    margin-bottom:5px;
    color: ${colors.purple};
    &::selection {
      background-color: ${colors.blue};
    }
  }
  p {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #2B2862;
  }
`;
export const StyledCardLine = styled.div.attrs((props: {order?: string}) => props)`
  width: 3px;
  height: ${({ order }) => order === 'first' ? 'calc(100% - 30px)' : '100%'};
  position: absolute;
  top: ${({ order }) => order === 'first' ? '30px' : '0'};
  left: 0;
  background: ${colors.blue};
  .dot {
    width: 14px;
    height: 14px;
    background: ${colors.blue};
    border-radius: 7px;
    position: absolute;
    top: ${({ order }) => order === 'first' ? 'calc(50% - 20px)' : '50%'};
    left: 50%;
    transform: translate(-50%, -50%);
  }
  svg {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -60%);
    width: auto;
    height: 25px;
  }
`;
export const StyledButtonSecondary = styled.button`
  width: 100%;
  height: 62px;
  mix-blend-mode: normal;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  transition: 0.3s;
  color: ${colors.white};
  background: ${colors.blue};
  &:hover{
    background:${colors.purple};
    transform: scale(1.03);
  }
`;