import axios from 'axios';
import React, { useState } from 'react';
import {
  useQuery,
} from '@tanstack/react-query';
import Project from 'src/ui/Projects/Project';
import ProjectBox from 'src/ui/Projects/ProjectBox';
import {StyledProjectsGrid} from './style';

const fetchProjects = async () => {
  // const res = await axios.get('https://app-portfolio-tk.herokuapp.com/projects?_locale=en');
  const res = await axios.get('http://localhost:1337/projects?_locale=en');
  return res
};

const ProjectsComponent: React.FC = () => {
  const { data, status } = useQuery(["projects"], fetchProjects);
  const [activeProject, setActiveProject] = useState<any>({});
  const [isActiveProjectBox, setActiveProjectBox] = useState(false);
  const openProjectDetails = (project: object) => {
    setActiveProject(project);
    setActiveProjectBox(true);
  }

  return (
    <>
      <StyledProjectsGrid>
        { data?.data.map((project: any) => 
          <Project
            key={ project.id }
            onClickFunction={openProjectDetails}
            project={project}
          />
        )}
      </StyledProjectsGrid>
      <ProjectBox
        activeProject={activeProject}
        onCloseFunction={setActiveProjectBox}
        isActiveProjectBox={isActiveProjectBox}
      />
    </>
  );
}

export default ProjectsComponent;
