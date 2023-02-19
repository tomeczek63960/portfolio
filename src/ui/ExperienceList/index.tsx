import React, { FC } from "react";
import Heading from "src/ui/Heading";
import Paragraph from "src/ui/Paragraph";
import {
  StyledExperienceItem,
  StyledExperienceItemSpan,
  StyledExperienceListSection,
} from "./style";
import { IStrapiExperienceListItem, PropsExperienceList } from "./types";
import { isTruthy } from "src/helpers/checkFalsyType";
import { FormattedMessage } from "react-intl";

const ComponentExperienceList: FC<PropsExperienceList> = ({ content }) => {
  // TODO add personal projects
  // TODO: add translations
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
                Exceptions: "",
              }}
            />

            {isTruthy(project.Role) && (
              <Paragraph>
                <StyledExperienceItemSpan>
                  <FormattedMessage id="project-listing.role" />:{" "}
                </StyledExperienceItemSpan>
                {project.Role}
              </Paragraph>
            )}
            {isTruthy(project.Technologies) && (
              <Paragraph>
                <StyledExperienceItemSpan>
                  <FormattedMessage id="project-listing.technologies" />:{" "}
                </StyledExperienceItemSpan>
                {project.Technologies}
              </Paragraph>
            )}
            {isTruthy(project.Sector) && (
              <Paragraph>
                <StyledExperienceItemSpan>
                  <FormattedMessage id="project-listing.sector" />:{" "}
                </StyledExperienceItemSpan>
                {project.Sector}
              </Paragraph>
            )}

            {isTruthy(project.Description) && (
              <Paragraph>
                <StyledExperienceItemSpan>
                  <FormattedMessage id="project-listing.description" />:{" "}
                </StyledExperienceItemSpan>
                {project.Description}
              </Paragraph>
            )}
            {isTruthy(project.Accomplishments) && (
              <Paragraph>
                <StyledExperienceItemSpan>
                  <FormattedMessage id="project-listing.accomplishments" />:{" "}
                </StyledExperienceItemSpan>
                {project.Accomplishments}
              </Paragraph>
            )}
          </StyledExperienceItem>
        )
      )}
    </StyledExperienceListSection>
  );
};

export default ComponentExperienceList;
