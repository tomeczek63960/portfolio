import React, { FC } from "react";
import { StyledTimelineList } from "./style";
import WorkExperienceListItem from "src/ui/WorkExperience/WorkExperienceListItem";
import { IWrokExperienceItem } from "src/ui/WorkExperience/WorkExperienceListItem/types";

const ComponentWorkExperienceList: FC = () => {
  const workExperienceItems = [
    {
      date: "2018 czerwiec",
      content: "Rozpoczęcie nauki programowania",
    },
    {
      date: "2019 - luty 2020",
      content: "Bootcamp Vavatech z podstaw programowania html/css/js",
    },
    {
      date: "2020 październik",
      content:
        "Październik 2020 był miesiącem w którym podjąłem się pierwszej pracy jako frontend dev (która trwa aż do teraz)",
    },
    {
      date: "Now",
      content:
        "Chcesz być następny? nie wahaj się 🤭 sprawdź moje Cv w sekcji poniżej, jeżeli wszystko się zgadzaj odezwij się poprzez Linkedin (tutaj link) lub formularz na stronie kontaktowej (tutaj link).",
    },
  ];

  return (
    <StyledTimelineList>
      {workExperienceItems.map((item: IWrokExperienceItem, index: number) => {
        let order = "";
        if (index === 0) {
          order = "first";
        } else if (index === workExperienceItems.length - 1) {
          order = "last";
        }
        return (
          <WorkExperienceListItem
            order={order}
            item={item}
            key={item.content}
          />
        );
      })}
    </StyledTimelineList>
  );
};

export default ComponentWorkExperienceList;
