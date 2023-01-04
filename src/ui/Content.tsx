import React, { FC } from "react";
import ComponentCv from "./Cv";
import ComponentIntroduction from "./Introduction";
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
      | "selection.cv";
  };
}

const ComponentContent: FC<IComponents> = ({ content }) => {
  console.log(content);
  const components = {
    "selection.introduction": ComponentIntroduction,
    "selection.welcomebox": ComponentWelcomeBox,
    "selection.work-experience": ComponentWorkExperience,
    "selection.skills": ComponentSkills,
    "selection.cv": ComponentCv,
  };

  const TagName: FC<{ content: any }> = components[content.__component];

  return (
    <>
      <TagName content={content} />
    </>
  );
};

export default ComponentContent;
