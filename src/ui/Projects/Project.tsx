import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styled from 'styled-components'
import HandleText from 'src/helpers/handleText'
import CustomImage from 'src/ui/Image/CustomImage';

const Project = styled.div`
  cursor: pointer;
  width: 100%;
  max-width: 100%;
  max-height: 300px;
  position: relative;
  flex-shrink: 0;
  border: 1px solid transparent;
  border-radius: 5px;
  overflow: hidden;
`
const ProjectHover = styled.div`
  padding: 20px 15px;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.78) 70%);
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100%;
  color: white;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media screen and (min-width: 1024px) {
    opacity: 0;
  }
  h4 {
    position: relative;
    padding-bottom: 5px;
    margin-bottom: 10px;
    line-height: 1;
    font-size: 20px;
    width: fit-content;
    opacity: 1;
    /* transform: translateY(40%);
    opacity: 0; */
    @media screen and (min-width: 1024px) {
      transform: translateY(0);
      opacity: 1;
    }
    em {
      width: 100%;
      height: 2px;
      background: #6A82FB;
      position: absolute;
      bottom: 0;
      left: 0;
      transform: scaleX(0);
      transform-origin: left;
    }
  }
  p {
    font-size: 12px;
    color: #d5d5d5;
    @media screen and (min-width: 1024px) {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

const ProjectComponent = ({project, onClickFunction}: {project: any, onClickFunction: Function}) => {
  const timeline = useRef<any>();
  const mobileTl = useRef<any>();
  const projectHover = useRef<any>();
  const projectHoverHeading = useRef<any>();
  const projectHoverHeadingLine = useRef<any>();
  const projectHoverText = useRef<any>();
  const projectRef = useRef<any>();

  useEffect(() => {
    if (timeline.current || mobileTl.current) return;
    const heading = new HandleText(projectHoverHeading.current, {
      type:"chars, words",
      tag: 'span'
    });
    gsap.set(heading.chars, {
      scale: 4,
      autoAlpha: 0,
      rotationX: -180,
      transformOrigin: "100% 50%",
      ease: "back",
      stagger: 0.02,
    });
    const headingSpans = projectHoverHeading.current.querySelectorAll('span');
    const text = new HandleText(projectHoverText.current, {
      type:"chars, words",
      tag: 'span'
    });
    gsap.set(text.chars, {
      scale: 4,
      autoAlpha: 0,
      rotationX: -180,
      transformOrigin: "100% 50%",
      ease: "back",
      stagger: 0.02,
    });
    const spans = projectHoverText.current.querySelectorAll('span');
    if (window.innerWidth < 1024) {
      mobileTl.current = gsap.timeline({ paused: true }); 
      setTimeout(() => {
        ScrollTrigger.create({
          trigger: projectRef.current,
          start: 'top center',
          once: true,
          onEnter: () => {
            mobileTl.current.play();
          }
        });
      }, 500);
      mobileTl.current.to(projectHover.current, {
        duration: 0.2,
        opacity: 1,
      });
      mobileTl.current.to(headingSpans, {
        duration: 0.1,
        scale: 1,
        autoAlpha: 1,
        rotationX: 0,
        transformOrigin:"100% 50%",
        ease:"back",
        stagger: 0.01,
      });
      mobileTl.current.to(projectHoverHeadingLine.current, {
        duration: 0.2,
        scaleX: 1
      })
      mobileTl.current.to(spans, {
        duration: 0.05,
        scale: 1,
        autoAlpha: 1,
        rotationX: 0,
        transformOrigin:"100% 50%",
        ease:"back",
        stagger: 0.01,
      });
    } else {
      timeline.current = gsap.timeline({ paused: true });
      timeline.current.add(
        gsap.to(projectHover.current, {
          duration: 0.1,
          opacity: 1
        })
      );
      timeline.current.to(headingSpans, {
        duration: 0.1,
        scale: 1,
        autoAlpha: 1,
        rotationX: 0,
        transformOrigin:"100% 50%",
        ease:"back",
        stagger: 0.01
      });
      timeline.current.add(
        gsap.to(projectHoverHeadingLine.current, {
          duration: 0.2,
          scaleX: 1,
          ease: "power2.out"
        })
      );
      timeline.current.to(spans, {
        duration: 0.01,
        scale: 1,
        autoAlpha: 1,
        rotationX: 0,
        transformOrigin:"100% 50%",
        ease:"back",
        stagger: 0.01
      });
    }
  }, []);

  const projectHoverAction = () => {
    if (window.innerWidth < 1024) return;
    timeline.current.play();
  }
  const projectBlurAction = () => {
    if (window.innerWidth < 1024) return;
    timeline.current.reverse();
  }
  return (
    <Project
      onClick={() => onClickFunction(project)}
      onMouseEnter={projectHoverAction}
      onMouseLeave={projectBlurAction}
      onTouchStart={projectHoverAction}
      onTouchEnd={projectBlurAction}
      ref={projectRef}
    >
      <CustomImage url={project.Image.url} />
      <ProjectHover ref={projectHover}>
        <h4 ref={projectHoverHeading}>
          { project.Title }
          <em ref={projectHoverHeadingLine}></em>
        </h4>
        <p ref={projectHoverText}>{ project.Description }</p>
      </ProjectHover>
    </Project>
  );
}

export default ProjectComponent;
