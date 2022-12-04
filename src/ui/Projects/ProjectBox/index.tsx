import React, { useEffect, useRef, useState } from 'react';
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect"
import { gsap } from "gsap";
import ArrowLeft from "../../../../public/svg/arrow-left.svg"
import World from "../../../../public/svg/world.svg"
import Github from "../../../../public/svg/github.svg"
import CustomImage from 'src/ui/Image';
import {
  ProjectBox,
  ProjectBoxShadow,
  ProjectBoxClose,
  ProjectBoxContent,
  ProjectBoxReference,
  ProjectBoxLink,
  ProjectBoxTechnologies,
  ProjectBoxCategories,
} from './style';

interface Props {
  activeProject: any; // tutaj dodać kolejny interface na Project i z niego mozna wtedy skorzystać;
  onCloseFunction: Function;
  isActiveProjectBox: boolean;
}

const ProjectBoxComponent = ({activeProject, onCloseFunction, isActiveProjectBox}: Props) => {
  const projectBox = useRef<any>(null);
  const projectBoxShadow = useRef<any>(null);
  const timeline = useRef<any>();

  useIsomorphicLayoutEffect(() => {
    if (timeline.current) return;
    timeline.current = gsap.timeline({ paused: true });
    timeline.current.add(
      gsap.to(projectBox.current, {
        duration: 0.3,
        x: 0
      })
    );
    timeline.current.add(
      gsap.to(projectBoxShadow.current, {
        duration: 0.3,
        opacity: 1,
        visibility: 'visible'
      }), '-=0.3'
    );
  }, []);

  useIsomorphicLayoutEffect(() => {
    const bluerdElements = projectBox.current;
    const html = document.querySelector('html');
    if (isActiveProjectBox) {
      html?.classList.add('no-scroll');
      timeline.current.play().then(() => {
        gsap.to(bluerdElements, {
          duration: 0.3,
          filter: "blur(0px)",
          delay: 0.2
        });
      });
    } else {
      html?.classList.remove('no-scroll');
      timeline.current.reverse().then(() => {
        projectBox.current.scrollTop = 0;
        gsap.set(bluerdElements, {
          filter: "blur(2px)",
        });
      });
    }
  }, [isActiveProjectBox]);

  return (
    <>
      <ProjectBoxShadow ref={projectBoxShadow} onClick={() => onCloseFunction(false)}/>
      <ProjectBox className='blured' ref={projectBox}>
        <ProjectBoxClose>
          <ArrowLeft onClick={() => onCloseFunction(false)} />
        </ProjectBoxClose>
        <ProjectBoxContent>
          <h3>{activeProject.Title}</h3>
          <p>{activeProject.ShortDescription}</p>

          <ProjectBoxCategories>
            { 
              activeProject.project_categories?.map((category: any) => 
                <span key={category.id} className={category.Theme}>
                  {category.Title}
                </span>
              )
            }
          </ProjectBoxCategories>

          {activeProject?.Image ? <CustomImage url={activeProject?.Image?.url} /> : ''}
          <div className="project-box__text">
            <h4>About project</h4>
            <p>{activeProject.Description}</p>
          </div>
          <div className="project-box__text">
            <h4>Technologies</h4>
            <ProjectBoxTechnologies>
              { 
                activeProject.project_technologies?.map((technology: any) => <span key={technology.id}>{technology.Title}</span>)
              }
            </ProjectBoxTechnologies>
          </div>
          <ProjectBoxReference>
            <h5><World /> Website</h5>
            <a href={activeProject.WebsiteUrl} target="_blank">{activeProject.WebsiteUrl}</a>
          </ProjectBoxReference>
          <ProjectBoxReference>
            <h5><Github /> Github</h5>
            <a href={activeProject.GithubUrl} target="_blank">{activeProject.GithubUrl}</a>
          </ProjectBoxReference>
        </ProjectBoxContent>
        <ProjectBoxLink href={activeProject.WebsiteUrl} target="_blank">
          Open Project
        </ProjectBoxLink>
      </ProjectBox>
    </>
  );
}

export default ProjectBoxComponent;
