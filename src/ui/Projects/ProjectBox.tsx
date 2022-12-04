import React, { useEffect, useRef, useState } from 'react';
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect"
import { gsap } from "gsap";
import styled from 'styled-components'
import ArrowLeft from "../../../public/svg/arrow-left.svg"
import World from "../../../public/svg/world.svg"
import Github from "../../../public/svg/github.svg"
import CustomImage from 'src/ui/Image/CustomImage';
import { responsive, colors } from 'src/styled/mixins';

const ProjectBox = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background: ${colors.white};
  z-index: 100;
  overflow-y: scroll;
  transform: translateX(100%);
  .blured {
    filter: blur(2px);
  }
`;
const ProjectBoxShadow = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    cursor: pointer;
`;
const ProjectBoxClose = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${colors.whiteSecondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  h4 {
    color: ${colors.black};
  }
`;
const ProjectBoxContent = styled.div`
  padding: 20px;
  color: ${colors.black};
  .project-box__text {
    margin-top: 30px;
  }
  p {
    color: ${colors.grayDark};
    font-size: 14px;
  }
  h3 {
    font-size: 20px;
  }
  h4 {
    font-size: 16px;
  }
  img {
    margin: 10px 0 40px;
  }
`;
const ProjectBoxReference = styled.div`
  margin-top: 30px;
  h5 {
    font-size: 18px;
    font-weight: 600;
  }
  a {
    word-break: break-all;
    color: ${colors.blackTertiary};
    font-weight: 600;
    font-size: 11px;
    ${responsive.tabletP`
      font-size: 13px;
      font-weight: 700;
    `}
  }
  svg {
    width: 15px;
    height: 15px;
  }
`;
const ProjectBoxLink = styled.a`
  margin-top: auto;
  display: block;
  width: 100%;
  padding: 25px;
  text-align: center;
  background-color: ${colors.black};
  color: ${colors.white};
  font-size: 20px;
`;
const ProjectBoxTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;
  span {
    display: block;
    padding: 5px 10px;
    background: ${colors.grayLight};
    color: black;
    margin: 5px;
    font-weight: 700;
    font-size: 12px;
  }
`;
const ProjectBoxCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px -5px 0;
  span {
    display: block;
    padding: 5px 10px;
    background: ${colors.grayLight};
    color: ${colors.black};
    margin: 5px;
    font-weight: 700;
    font-size: 12px;

    &.danger,
    &.success,
    &.warning {
      color: ${colors.white};
    }
    &.danger {
      background: ${colors.error};
    }
    &.success {
      background: ${colors.success};
    }
    &.warning {
      background: ${colors.warning};
    }
  }
`;

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
