import React, { FC } from "react";
import {
  StyledProject,
  StyledProjectHover,
  StyledProjectLabels,
} from "./style";
import { IStrapiProjectCategory, PropsProject } from "./types";
import CustomImage from "src/ui/Image";
import { useProjectScrollAnimation } from "src/hooks/useProjectScrollAnimation";
import { StyledProjectLabel } from "../ProjectBox/style";
const ComponentProject: FC<PropsProject> = ({ project, onClickFunction }) => {
  const [refProjectHover, refProjectHoverLine] = useProjectScrollAnimation();
  return (
    <StyledProject onClick={() => onClickFunction(project)}>
      <CustomImage
        url={project.ImageCard?.url}
        sizes="(max-width: 767px) 90vw,
              (max-width: 1023px) 350px,
              (max-width: 1919px) 470px,
              680px"
      />
      <StyledProjectLabels>
        <StyledProjectLabel className="warning">
          {project.ShortCreationDate}
        </StyledProjectLabel>
        {project.project_categories?.map((category: IStrapiProjectCategory) => (
          <StyledProjectLabel key={category.id} className={category.Theme}>
            {category.Title}
          </StyledProjectLabel>
        ))}
      </StyledProjectLabels>

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
