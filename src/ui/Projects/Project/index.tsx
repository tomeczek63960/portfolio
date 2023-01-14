import React, { FC } from "react";
import { StyledProject, StyledProjectHover } from "./style";
import { PropsProject } from "./types";
import CustomImage from "src/ui/Image";
import { useProjectScrollAnimation } from "src/hooks/useProjectScrollAnimation";

const ComponentProject: FC<PropsProject> = ({ project, onClickFunction }) => {
  const [refProjectHover, refProjectHoverLine] = useProjectScrollAnimation();
  // TODO: on hover show label (year of creation, type = new|legacy, main technology react|angular|vue)
  // TODO: add in strapi separate field for card image (to reduce FCP)
  return (
    <StyledProject onClick={() => onClickFunction(project)}>
      <CustomImage
        url={project.Image.url}
        sizes="(max-width: 767px) 90vw,
              (max-width: 1023px) 350px,
              (max-width: 1919px) 470px,
              680px"
      />
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
