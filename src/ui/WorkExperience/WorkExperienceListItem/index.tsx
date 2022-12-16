import React, { useRef } from 'react';
import { gsap } from 'gsap';
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import {
  StyledListItem,
  StyledListItemContent,
  StyledListItemLine,
} from './style';
import ArrowDown from '../../../../public/svg/arrow-down.svg';
import {WrokExperienceProps} from './types';

const WorkExperienceListItem: React.FC<WrokExperienceProps> = ({item, order}) => {
  return (
    <StyledListItem className="list-item">
        <StyledListItemLine className="line" order={order}>
          <div className="dot"></div>
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
