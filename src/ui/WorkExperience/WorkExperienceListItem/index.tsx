import React, { FC } from "react";
import {
  StyledListItem,
  StyledListItemContent,
  StyledListItemLine,
  StyledListItemLineDot,
} from "./style";
import ArrowDown from "../../../../public/svg/arrow-down.svg";
import { PropsWrokExperience } from "./types";

const ComponentWorkExperienceListItem: FC<PropsWrokExperience> = ({
  item,
  order,
}) => {
  return (
    <StyledListItem>
      <StyledListItemLine className="line" order={order}>
        <StyledListItemLineDot
          className="dot"
          order={order}
        ></StyledListItemLineDot>
        {order === "last" ? <ArrowDown /> : ""}
      </StyledListItemLine>
      <StyledListItemContent className="list-item-content">
        <h4>{item.date}</h4>
        <p>{item.content}</p>
      </StyledListItemContent>
    </StyledListItem>
  );
};

export default ComponentWorkExperienceListItem;
