import React, { FC } from "react";
import { IDynamicContent } from "src/types";
import dynamic from "next/dynamic";

const ComponentContent: FC<IDynamicContent> = ({ content, projects }) => {
  const components = {
    "selection.introduction": dynamic(
      async () => await import("./Introduction")
    ),
    "selection.welcomebox": dynamic(async () => await import("./WelcomeBox")),
    "selection.work-experience": dynamic(
      async () => await import("./WorkExperience")
    ),
    "selection.skills": dynamic(async () => await import("./Skills")),
    "selection.cv": dynamic(async () => await import("./Cv")),
    "selection.contact-form": dynamic(async () => await import("./Form")),
    "selection.projects-experience": dynamic(
      async () => await import("./ExperienceList")
    ),
    "selection.projects": dynamic(
      async () => await import("./Projects/Projects")
    ),
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
