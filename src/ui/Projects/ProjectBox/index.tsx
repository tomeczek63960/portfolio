import React, { useRef, FC } from "react";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { gsap } from "gsap";
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
} from "./style";
import { useTimeline } from "src/hooks/useTimeline";
import { ProjectBoxProps } from "./types";
import { isTruthy } from "src/helpers/checkFalsyType";

// TODO: move animation to hook
const ProjectBoxComponent: FC<ProjectBoxProps> = ({
  activeProject,
  onCloseFunction,
  isActiveProjectBox,
}) => {
  const projectBox = useRef<HTMLDivElement>(null);
  const projectBoxShadow = useRef<HTMLDivElement>(null);

  const tlCallback = (timeline: GSAPTimeline): void => {
    timeline.add(
      gsap.to(projectBox.current, {
        duration: 0.3,
        x: 0,
      })
    );
    timeline.add(
      gsap.to(projectBoxShadow.current, {
        duration: 0.3,
        opacity: 1,
        visibility: "visible",
      }),
      "-=0.3"
    );
  };
  const [tl] = useTimeline(tlCallback);

  useIsomorphicLayoutEffect((): void => {
    const bluerdElements = projectBox.current;
    const html = document.querySelector("html");
    if (isActiveProjectBox) {
      html?.classList.add("no-scroll");
      tl.play()
        .then(() => {
          gsap.to(bluerdElements, {
            duration: 0.3,
            filter: "blur(0px)",
            delay: 0.2,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      html?.classList.remove("no-scroll");
      tl.reverse()
        .then(() => {
          if (projectBox.current != null) projectBox.current.scrollTop = 0;
          gsap.set(bluerdElements, {
            filter: "blur(2px)",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isActiveProjectBox]);

  return (
    <>
      <StyledProjectBoxShadow
        ref={projectBoxShadow}
        onClick={() => onCloseFunction(false)}
      />
      <StyledProjectBox className="blured" ref={projectBox}>
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
          <div className="project-box__text">
            <h4>About project</h4>
            <p>{activeProject.Description}</p>
          </div>
          <div className="project-box__text">
            <h4>Technologies</h4>
            <StyledProjectBoxTechnologies>
              {activeProject.project_technologies?.map((technology: any) => (
                <span key={technology.id}>{technology.Title}</span>
              ))}
            </StyledProjectBoxTechnologies>
          </div>
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

export default ProjectBoxComponent;
