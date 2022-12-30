import React, { FC } from "react";
import ArrowLeft from "../../../../public/svg/arrow-left.svg";
import World from "../../../../public/svg/world.svg";
import Github from "../../../../public/svg/github.svg";
import CustomImage from "src/ui/Image";
import {
  StyledProjectBox,
  StyledProjectBoxShadow,
  StyledProjectBoxClose,
  StyledProjectBoxContent,
  StyledProjectBoxReference,
  StyledProjectBoxLink,
  StyledProjectBoxTechnologies,
  StyledProjectBoxCategories,
  StyledProjectBoxText,
} from "./style";
import { PropsProjectBox } from "./types";
import { isTruthy } from "src/helpers/checkFalsyType";
import { useProjectBoxAnimation } from "src/hooks/useProjectBoxAnimation";

const ComponentProjectBox: FC<PropsProjectBox> = ({
  activeProject,
  onCloseFunction,
  isActiveProjectBox,
}) => {
  const [refProjectBox, refProjectBoxShadow] =
    useProjectBoxAnimation(isActiveProjectBox);

  return (
    <>
      <StyledProjectBoxShadow
        ref={refProjectBoxShadow}
        onClick={() => onCloseFunction(false)}
      />
      <StyledProjectBox className="blured" ref={refProjectBox}>
        <StyledProjectBoxClose>
          <ArrowLeft onClick={() => onCloseFunction(false)} />
        </StyledProjectBoxClose>
        <StyledProjectBoxContent>
          <h3>{activeProject.Title}</h3>
          <p>{activeProject.ShortDescription}</p>

          <StyledProjectBoxCategories>
            {activeProject.project_categories?.map((category: any) => (
              <span key={category.id} className={category.Theme}>
                {category.Title}
              </span>
            ))}
          </StyledProjectBoxCategories>

          {isTruthy(activeProject?.Image) ? (
            <CustomImage url={activeProject?.Image?.url} />
          ) : (
            ""
          )}
          <StyledProjectBoxText>
            <h4>About project</h4>
            <p>{activeProject.Description}</p>
          </StyledProjectBoxText>
          <StyledProjectBoxText>
            <h4>Technologies</h4>
            <StyledProjectBoxTechnologies>
              {activeProject.project_technologies?.map((technology: any) => (
                <span key={technology.id}>{technology.Title}</span>
              ))}
            </StyledProjectBoxTechnologies>
          </StyledProjectBoxText>
          <StyledProjectBoxReference>
            <h5>
              <World /> Website
            </h5>
            <a href={activeProject.WebsiteUrl} target="_blank" rel="noreferrer">
              {activeProject.WebsiteUrl}
            </a>
          </StyledProjectBoxReference>
          <StyledProjectBoxReference>
            <h5>
              <Github /> Github
            </h5>
            <a href={activeProject.GithubUrl} target="_blank" rel="noreferrer">
              {activeProject.GithubUrl}
            </a>
          </StyledProjectBoxReference>
        </StyledProjectBoxContent>
        <StyledProjectBoxLink href={activeProject.WebsiteUrl} target="_blank">
          Open Project
        </StyledProjectBoxLink>
      </StyledProjectBox>
    </>
  );
};

export default ComponentProjectBox;
