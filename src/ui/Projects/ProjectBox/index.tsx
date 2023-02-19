import React, { FC } from "react";
import { Github, World, ArrowLeft } from "src/Svg";

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
  StyledProjectLabel,
} from "./style";
import { PropsProjectBox } from "./types";
import { isTruthy } from "src/helpers/checkFalsyType";
import { useProjectBoxAnimation } from "src/hooks/useProjectBoxAnimation";
import {
  IStrapiProjectCategory,
  IStrapiProjectTechnology,
} from "../Project/types";
import { FormattedMessage } from "react-intl";

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
          <h3>{activeProject?.Title}</h3>
          <p>{activeProject?.ShortDescription}</p>

          <StyledProjectBoxCategories>
            {activeProject?.project_categories?.map(
              (category: IStrapiProjectCategory) => (
                <StyledProjectLabel
                  key={category.id}
                  className={category.Theme?.toLocaleLowerCase()}
                >
                  {category.Title}
                </StyledProjectLabel>
              )
            )}
            <StyledProjectLabel className="warning">
              {activeProject?.CreationDate}
            </StyledProjectLabel>
          </StyledProjectBoxCategories>

          {isTruthy(activeProject?.Image) ? (
            <CustomImage
              url={activeProject?.Image?.url}
              sizes="(max-width: 767px) 95vw,
              580px"
            />
          ) : (
            ""
          )}
          <StyledProjectBoxText>
            <h4>
              <FormattedMessage id="project.aboutProject" />
            </h4>
            <p>{activeProject?.Description}</p>
          </StyledProjectBoxText>
          <StyledProjectBoxText>
            <h4>
              <FormattedMessage id="project.technologies" />
            </h4>
            <StyledProjectBoxTechnologies>
              {activeProject?.project_technologies?.map(
                (technology: IStrapiProjectTechnology) => (
                  <StyledProjectLabel key={technology.id}>
                    {technology.Title}
                  </StyledProjectLabel>
                )
              )}
            </StyledProjectBoxTechnologies>
          </StyledProjectBoxText>
          <StyledProjectBoxReference>
            <h5>
              <World /> <FormattedMessage id="project.websiteUrl" />
            </h5>
            <a
              href={activeProject?.WebsiteUrl}
              target="_blank"
              rel="noreferrer"
            >
              {activeProject?.WebsiteUrl}
            </a>
          </StyledProjectBoxReference>
          <StyledProjectBoxReference>
            <h5>
              <Github /> <FormattedMessage id="project.github" />
            </h5>
            <a href={activeProject?.GithubUrl} target="_blank" rel="noreferrer">
              {activeProject?.GithubUrl}
            </a>
          </StyledProjectBoxReference>
          {isTruthy(activeProject?.GithubBackendUrl) && (
            <StyledProjectBoxReference>
              <h5>
                <Github /> <FormattedMessage id="project.github-backend" />
              </h5>
              <a
                href={activeProject?.GithubBackendUrl}
                target="_blank"
                rel="noreferrer"
              >
                {activeProject?.GithubBackendUrl}
              </a>
            </StyledProjectBoxReference>
          )}
        </StyledProjectBoxContent>
        <StyledProjectBoxLink
          href={activeProject?.WebsiteUrl}
          target="_blank"
          rel="noreferrer"
        >
          <FormattedMessage id="project.openProject" />
        </StyledProjectBoxLink>
      </StyledProjectBox>
    </>
  );
};

export default ComponentProjectBox;
