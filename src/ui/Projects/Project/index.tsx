import React, { FC } from "react";
import { StyledProject, StyledProjectHover } from "./style";
import { PropsProject } from "./types";
import CustomImage from "src/ui/Image";
import { useProjectScrollAnimation } from "src/hooks/useProjectScrollAnimation";

const ComponentProject: FC<PropsProject> = ({ project, onClickFunction }) => {
  const [refProjectHover, refProjectHoverLine] = useProjectScrollAnimation();
  // TODO: on hover show label (year of creation, type = new|legacy, main technology react|angular|vue)
  // TODO: add width & height images size
  return (
    <StyledProject onClick={() => onClickFunction(project)}>
      <CustomImage url={project.Image.url} />
      <StyledProjectHover ref={refProjectHover}>
        <h4>
          {project.Title}
          <span ref={refProjectHoverLine}></span>
        </h4>
        <p>{project.Description}</p>
      </StyledProjectHover>
    </StyledProject>
  );
};

export default ComponentProject;
