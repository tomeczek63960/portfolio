import React, { FC } from "react";
import CustomImage from "src/ui/Image";
import { StyledProject, StyledProjectHover } from "./style";
import { ProjectProps } from "./types";
import { useProjectScrollAnimation } from "src/hooks/useProjectScrollAnimation";

const ProjectComponent: FC<ProjectProps> = ({ project, onClickFunction }) => {
  const [projectHover, projectHoverLine] = useProjectScrollAnimation();

  return (
    <StyledProject onClick={() => onClickFunction(project)}>
      <CustomImage url={project.Image.url} />
      <StyledProjectHover ref={projectHover}>
        <h4>
          {project.Title}
          <span ref={projectHoverLine}></span>
        </h4>
        <p>{project.Description}</p>
      </StyledProjectHover>
    </StyledProject>
  );
};

export default ProjectComponent;
