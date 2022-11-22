import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import styled from 'styled-components'
import {
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import Project from 'src/ui/Projects/Project';
import ProjectBox from 'src/ui/Projects/ProjectBox';

const ProjectsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const fetchProjects = async () => {
  // const res = await axios.get('https://app-portfolio-tk.herokuapp.com/projects?_locale=en');
  const res = await axios.get('http://localhost:1337/projects?_locale=en');
  return res
};

const ProjectsComponent = () => {
  const { data, status } = useQuery(["projects"], fetchProjects);
  const [activeProject, setActiveProject] = useState<any>({});
  const [isActiveProjectBox, setActiveProjectBox] = useState(false);
  const openProjectDetails = (project: object) => {
    setActiveProject(project);
    setActiveProjectBox(true);
  }

  return (
    <>
      <ProjectsGrid>
        { data?.data.map((project: any) => 
          <Project
            key={ project.id }
            onClickFunction={openProjectDetails}
            project={project}
          />
        )}
      </ProjectsGrid>
      <ProjectBox
        activeProject={activeProject}
        onCloseFunction={setActiveProjectBox}
        isActiveProjectBox={isActiveProjectBox}
      />
    </>
  );
}

export default ProjectsComponent;
