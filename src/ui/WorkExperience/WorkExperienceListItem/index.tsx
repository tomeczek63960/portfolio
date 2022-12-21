import React, { useRef } from 'react';
import { gsap } from 'gsap';
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import {
  StyledListItem,
  StyledListItemContent,
  StyledListItemLine,
  StyledListItemLineDot
} from './style';
import ArrowDown from '../../../../public/svg/arrow-down.svg';
import {WrokExperienceProps} from './types';

const WorkExperienceListItem: React.FC<WrokExperienceProps> = ({item, order}) => {
  return (
    <StyledListItem>
        <StyledListItemLine className="line" order={order}>
          <StyledListItemLineDot className="dot" order={order}></StyledListItemLineDot>
          {order === 'last' ? <ArrowDown /> : ''}
        </StyledListItemLine>
        <StyledListItemContent className="list-item-content">
          <h4>{item.date}</h4>
          <p>{item.content}</p>
        </StyledListItemContent>
    </StyledListItem>
  );
}

export default WorkExperienceListItem;
