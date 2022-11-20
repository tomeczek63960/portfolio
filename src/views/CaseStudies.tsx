import axios from 'axios';
import React, { useRef, useState } from 'react';
import styled from 'styled-components'
import {
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import ArrowLeft from "../../public/svg/arrow-left.svg"
import World from "../../public/svg/world.svg"
import Github from "../../public/svg/github.svg"

const Project = styled.div`
  cursor: pointer;
  width: 100%;
  max-width: 100%;
  height: 300px;
  position: relative;
  flex-shrink: 0;
  border: 1px solid transparent;
  border-radius: 5px;
  overflow: hidden;
  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    transition: 0.3s ease-in-out;
  }
`
const ProjectHover = styled.div`
  padding: 20px 15px;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  height: 100px;
  bottom: -100px;
  left: 0;
  color: white;
  z-index: 100;
  transition: 0.3s ease-in-out;

  ${Project}:hover & {
    bottom: 0;
    h4 {
      opacity: 1;
      &::after {
        width: 100%;
      }
    }
    p {
      opacity: 1;
    }
  }

  h4 {
    position: relative;
    padding-bottom: 5px;
    margin-bottom: 10px;
    opacity: 0;
    transition: 0.3s ease-in-out;
    transition-delay: 350ms;
    &::after {
      content: "";
      width: 0;
      height: 2px;
      background: #00F260;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: 0.3s ease-in-out;
      transition-delay: 600ms;
    }
  }
  p {
    opacity: 0;
    transition: 0.3s ease-in-out;
    transition-delay: 900ms;
  }
`

const ProjectsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProjectBox = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: -100%;
  background: white;
  z-index: 10;
  transition: 0.3s;
  overflow-y: scroll;
  &.active {
    right: 0;
  }
`;
const ProjectBoxShadow = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
    &.active {
      opacity: 1;
      visibility: visible;
    }
`;
const ProjectBoxClose = styled.div`
  padding: 20px;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  h4 {
    color: black;
  }
`;
const ProjectBoxContent = styled.div`
  padding: 20px;
  color: black;
  .project-box__text {
    margin-top: 30px;
  }
  p {
    color: #545454;
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
    color: #0b0c15;
    font-weight: 600;
    font-size: 11px;
    @media screen and (min-width: 768px) {
      font-size: 13px;
      font-weight: 700;
    }
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
  background-color: black;
  color: white;
  font-size: 20px;
`;
const ProjectBoxTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;
  span {
    display: block;
    padding: 5px 10px;
    background: lightgray;
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
    background: lightgray;
    color: black;
    margin: 5px;
    font-weight: 700;
    font-size: 12px;
    &.danger {
      color: white;
      background: #dd1818;
    }
    &.success {
      color: white;
      background: #15ee11;
    }
    &.warning {
      color: white;
      background: #f37335;
    }
  }
`;

const fetchProjects = async () => {
    // const res = await axios.get('https://app-portfolio-tk.herokuapp.com/projects?_locale=en');
    const res = await axios.get('http://localhost:1337/projects?_locale=en');
    return res
  };

function CaseStudies() {
  const { data, status } = useQuery(["projects"], fetchProjects);
  const [activeProject, setActiveProject] = useState<any>({});
  const projectBox = useRef<any>(null);
  const projectBoxShadow = useRef<any>(null);
  const projectBoxClose = useRef<any>(null);

  const openProjectDetails = (project: object) => {
    setActiveProject(project);
    console.log(project)
    const html = document.querySelector<HTMLHtmlElement>('html');
    if (html) {
      html.style.overflow = 'hidden';
    }
    projectBox.current.classList.add('active');
    projectBoxShadow.current.classList.add('active')
  }
  const closeProjectBox = () => {
    const html = document.querySelector<HTMLHtmlElement>('html');
    if (html) {
      html.style.overflow = 'auto';
    }
    projectBox.current.classList.remove('active');
    projectBoxShadow.current.classList.remove('active')
  }
  return (
    <>
        <h1>Case studies listing page</h1>
        <h3>eher</h3>
        <ProjectsGrid>
          { data?.data.map((project: any) => 
            <Project
              key={ project.id }
              onClick={() => openProjectDetails(project)}
            >
              <img src={`http://localhost:1337${project.Image.url}`} />
              <ProjectHover>
                <h4>{ project.Title }</h4>
                <p>{ project.Description }</p>
              </ProjectHover>
            </Project>
          )}
        </ProjectsGrid>

        <ProjectBoxShadow ref={projectBoxShadow} onClick={closeProjectBox}/>
        <ProjectBox ref={projectBox}>
          <ProjectBoxClose ref={projectBoxClose}>
            <ArrowLeft onClick={closeProjectBox} />
            <h4>Close project</h4>
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

            <img src={`http://localhost:1337${activeProject?.Image?.url}`} />
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

export default CaseStudies;
