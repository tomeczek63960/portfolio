import React, { FC } from "react";
import { StyledTimelineList } from "./style";
import WorkExperienceListItem from "src/ui/WorkExperience/WorkExperienceListItem";
import { IStrapiWorkExperienceItem } from "../WorkExperienceListItem/types";
import { PropsWorkExperienceList } from "./types";

const ComponentWorkExperienceList: FC<PropsWorkExperienceList> = ({
  items,
}) => {
  return (
    <StyledTimelineList>
      {items.map((item: IStrapiWorkExperienceItem, index: number) => {
        let order = "";
        if (index === 0) {
          order = "first";
        } else if (index === items.length - 1) {
          order = "last";
        }
        return (
          <WorkExperienceListItem order={order} item={item} key={item.id} />
        );
      })}
    </StyledTimelineList>
  );
};

export default ComponentWorkExperienceList;
