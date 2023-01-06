import React, { useState, FC } from "react";
import Project from "src/ui/Projects/Project";
import ProjectBox from "src/ui/Projects/ProjectBox";
import { IStrapiProject } from "../Project/types";
import { StyledProjectsGrid } from "./style";
import { PropsProjects } from "./types";

const ComponentProjects: FC<PropsProjects> = ({ projects }) => {
  const [activeProject, setActiveProject] = useState<IStrapiProject>();
  const [isActiveProjectBox, setActiveProjectBox] = useState(false);
  const openProjectDetails = (project: IStrapiProject): void => {
    setActiveProject(project);
    setActiveProjectBox(true);
  };

  return (
    <>
      <StyledProjectsGrid>
        {projects?.map((project: IStrapiProject) => (
          <Project
            key={project.id}
            onClickFunction={openProjectDetails}
            project={project}
          />
        ))}
      </StyledProjectsGrid>
      <ProjectBox
        activeProject={activeProject}
        onCloseFunction={setActiveProjectBox}
        isActiveProjectBox={isActiveProjectBox}
      />
    </>
  );
};

export default ComponentProjects;
