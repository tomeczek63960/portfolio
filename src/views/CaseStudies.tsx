import axios from 'axios';
import React from 'react';
import styled from 'styled-components'
import {
    useQuery,
    useQueryClient,
  } from '@tanstack/react-query';

const Project = styled.div`
  width: 250px;
  height: 300px;
  position: relative;
  /* background: linear-gradient(black, black) padding-box,linear-gradient(110deg,#50e3c2 0,#0070f3 100%) border-box; */
  border: 1px solid transparent;
  border-radius: 5px;
  max-width: 250px;
  overflow: hidden;
  img {
    max-width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    transition: 0.3s ease-in-out;
  }
  /* &:hover img {
    filter: grayscale(0) !important; TODO: gdy mamy kilka Case Studies to po najechaniu na jeden reszta staje się wyszarzona (tylko ten na którym jest kursor jest podświetlony)
  } */
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

const fetchProjects = async () => {
    const res = await axios.get('https://app-portfolio-tk.herokuapp.com/projects?_locale=en');
    return res
  };

function CaseStudies() {
    const { data, status } = useQuery(["projects"], fetchProjects);
    // console.log(data, status);
  return (
    <>
        <h1>Case studies listing page</h1>
        <h3>eher</h3>
        { data?.data.map((project: any) => <Project key={ project.id }>
          <img src={`http://localhost:1337${project.Image.url}`} />
          <h4>{ project.Title }</h4>
          <p>{ project.Description }</p>
          <ProjectHover>
            <h4>Project hover</h4>
            <p>Short desc porject</p>
          </ProjectHover>
          {/* dodać projekt TODO APP tylko ze taką zaawansowaną (czyli z draggable js i innymi fancy rzeczami) */}
        </Project>
        )}
    </>
  );
}

export default CaseStudies;
