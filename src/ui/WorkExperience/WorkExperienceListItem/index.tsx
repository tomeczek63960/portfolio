import React, { FC, RefObject } from "react";
import {
  StyledListItem,
  StyledListItemContent,
  StyledListItemLine,
  StyledListItemLineDot,
} from "./style";
import { ArrowDown } from "src/Svg";
import { PropsWrokExperience } from "./types";
import { useScrollTrigger } from "src/hooks/useScrollTrigger";

const ComponentWorkExperienceListItem: FC<PropsWrokExperience> = ({
  item,
  order,
}) => {
  const [refExperienceListItem] = useScrollTrigger(0.4, "", 1.5) as [
    RefObject<HTMLDivElement>
  ];
  return (
    <StyledListItem>
      <StyledListItemLine order={order}>
        <StyledListItemLineDot order={order}></StyledListItemLineDot>
        {order === "last" ? <ArrowDown /> : ""}
      </StyledListItemLine>
      <StyledListItemContent ref={refExperienceListItem}>
        <h4>{item.Date}</h4>
        <p>{item.Text}</p>
      </StyledListItemContent>
    </StyledListItem>
  );
};

export default ComponentWorkExperienceListItem;
