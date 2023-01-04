import React, { FC } from "react";
import ComponentCv from "./Cv";
import ComponentExperienceList from "./ExperienceList";
import ComponentForm from "./Form";
import ComponentIntroduction from "./Introduction";
import { IStrapiProject } from "./Projects/Project/types";
import ComponentProjects from "./Projects/Projects";
import ComponentSkills from "./Skills";
import ComponentWelcomeBox from "./WelcomeBox";
import ComponentWorkExperience from "./WorkExperience";

interface IComponents {
  content: {
    __component:
      | "selection.introduction"
      | "selection.welcomebox"
      | "selection.work-experience"
      | "selection.skills"
      | "selection.cv"
      | "selection.contact-form"
      | "selection.projects-experience"
      | "selection.projects";
  };
  projects?: IStrapiProject[];
}

const ComponentContent: FC<IComponents> = ({ content, projects }) => {
  console.log(content);
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

  const TagName: FC<{ content: any; projects?: IStrapiProject[] }> =
    components[content.__component];
  const props: { projects?: IStrapiProject[] } = {};
  if (content.__component === "selection.projects") {
    props.projects = projects;
  }
  return <TagName content={content} {...props} />;
};

export default ComponentContent;
