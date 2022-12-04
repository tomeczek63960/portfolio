import styled from 'styled-components'
import { responsive, colors, variables } from 'src/styled/mixins';

export const WorkExperienceSection = styled.section`
  padding-block: ${variables.sectionVerticalPadding};
`;
export const StyledTimeline = styled.div`
  margin-top: 35px;
  max-width: 310px;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
  }
  li {
    position: relative;
    width: 100%;
    display: flex;
    min-height: 140px;
  }
  li p {
    padding: 0 20px;
  }
  .timeline-paragraph {
    opacity: 1;
  }
  .data, p {
    font-size: 14px;
    line-height: 20px;
    transition: opacity 0.2s;
    color: ${colors.grayLightSecondary};
    ${responsive.tabletP`
      font-size: 16px;
      line-height: 23px;
    `}
  }
  .date {
    padding-right: 10px;
    font-size: 12px;
    width: 50px;
    flex-shrink: 0;
    text-align: right;
    opacity: 0;
    transform: translateX(-30%);
    font-weight: 700;
    color: ${colors.green};
    ${responsive.tabletP`
      font-size: 14px;
      line-height: 23px;
    `}
  }
  .timeline-line {
    background: ${colors.grayLightSecondary};
    width: 4px;
    border-radius: 12px;
    position: relative;
    justify-self: end;
  }
  .timeline-progress,
  .timeline-progress-active {
    width: 4px;
    position: absolute;
  }
  .timeline-progress {
    background: ${colors.grayLightSecondary};
    height: 100%;
    top: 10px;
    left: 50px;
  }
  .timeline-progress-active {
    height: 0%;
    background: ${colors.purpleSecondary};
    background-size: 0% 0%;
    z-index: 1;
    top: 0;
    left: 0;
  }

  .timeline-point {
    border: none;
    position: absolute;

    border-radius: 50%;
    background: ${colors.grayLightSecondary};
    width: 4px;
    height: 4px;
    transform: translate(-50%, -50%);
    z-index:10;
    top: 0;
    left: 50%;
  }
  .timeline-innerline {
    position: absolute;
    width: 4px;
    height: 0%;
    top: 0%;
    left: 0%;
  }
`;
export const StyledTimelineList = styled.ul``;
export const StyledTimelineListItem = styled.li``;