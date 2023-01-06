import React, { FC } from "react";
import ComponentCv from "./Cv";
import ComponentExperienceList from "./ExperienceList";
import ComponentForm from "./Form";
import ComponentIntroduction from "./Introduction";
import ComponentProjects from "./Projects/Projects";
import ComponentSkills from "./Skills";
import ComponentWelcomeBox from "./WelcomeBox";
import ComponentWorkExperience from "./WorkExperience";
import { IDynamicContent } from "src/types";

const ComponentContent: FC<IDynamicContent> = ({ content, projects }) => {
  const components = {
    "selection.introduction": ComponentIntroduction,
    "selection.welcomebox": ComponentWelcomeBox,
    "selection.work-experience": ComponentWorkExperience,
    "selection.skills": ComponentSkills,
    "selection.cv": ComponentCv,
    "selection.contact-form": ComponentForm,
    "selection.projects-experience": ComponentExperienceList,
    "selection.projects": ComponentProjects,
  };
  const TagName: FC<IDynamicContent> = components[
    content.__component
  ] as FC<IDynamicContent>;

  const props: IDynamicContent = { content };
  if (content.__component === "selection.projects") {
    props.projects = projects;
  }
  return <TagName {...props} />;
};

export default ComponentContent;
