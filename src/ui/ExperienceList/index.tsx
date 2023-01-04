import React, { FC } from "react";
import Heading from "src/ui/Heading";
import Paragraph from "src/ui/Paragraph";
import {
  StyledExperienceItem,
  StyledExperienceItemSpan,
  StyledExperienceListSection,
} from "./style";
import { IStrapiExperienceListItem, PropsExperienceList } from "./types";

const ComponentExperienceList: FC<PropsExperienceList> = ({ content }) => {
  // TODO add personal projects
  return (
    <StyledExperienceListSection>
      {content.ProjectsExperienceItem.map(
        (project: IStrapiExperienceListItem, index: number) => (
          <StyledExperienceItem key={project.Name}>
            <Heading
              heading={{
                HeadingType: "h3",
                Color: "purple",
                HoverColor: "purple",
                SelectionColor: "blue",
                Text: [
                  {
                    Text: `${index + 1}. ${project.Name}`,
                    __v: 0,
                    id: `${project.Name}-${index}`,
                    _id: `${project.Name}-${index}`,
                  },
                ],
                id: "",
              }}
            />

            <Paragraph>
              <StyledExperienceItemSpan>Role: </StyledExperienceItemSpan>
              {project.Role}
            </Paragraph>

            <Paragraph>
              <StyledExperienceItemSpan>
                Technologies:{" "}
              </StyledExperienceItemSpan>
              {project.Technologies}
            </Paragraph>

            <Paragraph>
              <StyledExperienceItemSpan>
                Sector/ Business Domain:{" "}
              </StyledExperienceItemSpan>
              {project.Sector}
            </Paragraph>

            <Paragraph>
              <StyledExperienceItemSpan>Description: </StyledExperienceItemSpan>
              {project.Description}
            </Paragraph>
            <Paragraph>
              <StyledExperienceItemSpan>
                Accomplishments:{" "}
              </StyledExperienceItemSpan>
              {project.Accomplishments}
            </Paragraph>
          </StyledExperienceItem>
        )
      )}
    </StyledExperienceListSection>
  );
};

export default ComponentExperienceList;
