import React, { FC } from "react";
// import ComponentCv from "./Cv";
// import ComponentExperienceList from "./ExperienceList";
// import ComponentForm from "./Form";
// import ComponentIntroduction from "./Introduction";
// import ComponentProjects from "./Projects/Projects";
// import ComponentSkills from "./Skills";
// import ComponentWelcomeBox from "./WelcomeBox";
// import ComponentWorkExperience from "./WorkExperience";
import { IDynamicContent } from "src/types";
import dynamic from "next/dynamic";
// dynamic(() => import("../components/header"));

const ComponentCv = dynamic(async () => await import("./Cv"));
const ComponentExperienceList = dynamic(
  async () => await import("./ExperienceList")
);
const ComponentForm = dynamic(async () => await import("./Form"));
const ComponentIntroduction = dynamic(
  async () => await import("./Introduction")
);
const ComponentProjects = dynamic(
  async () => await import("./Projects/Projects")
);
const ComponentSkills = dynamic(async () => await import("./Skills"));
const ComponentWelcomeBox = dynamic(async () => await import("./WelcomeBox"));
const ComponentWorkExperience = dynamic(
  async () => await import("./WorkExperience")
);

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
