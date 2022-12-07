import React, { useEffect, useRef } from 'react';
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect"
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import HandleText from 'src/helpers/handleText'
import CustomImage from 'src/ui/Image';
import {Project, ProjectHover} from './style';
import {useTimeline} from 'src/hooks/useTimeline';

interface Props {
  project: any;
  onClickFunction: Function;
}

const ProjectComponent: React.FC<Props> = ({project, onClickFunction}: Props) => {
  const projectHover = useRef<any>();
  const projectHoverHeading = useRef<any>();
  const projectHoverHeadingLine = useRef<any>();
  const projectHoverText = useRef<any>();
  const projectRef = useRef<any>();

  const tlCallback = (timeline: GSAPTimeline) => {
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
      setTimeout(() => {
        ScrollTrigger.create({
          trigger: projectRef.current,
          start: 'top center',
          once: true,
          onEnter: () => {
            timeline.play();
          }
        });
      }, 500);
      timeline.to(projectHover.current, {
        duration: 0.2,
        opacity: 1,
      });
      timeline.to(headingSpans, {
        duration: 0.1,
        scale: 1,
        autoAlpha: 1,
        rotationX: 0,
        transformOrigin:"100% 50%",
        ease:"back",
        stagger: 0.01,
      });
      timeline.to(projectHoverHeadingLine.current, {
        duration: 0.2,
        scaleX: 1
      })
      timeline.to(spans, {
        duration: 0.05,
        scale: 1,
        autoAlpha: 1,
        rotationX: 0,
        transformOrigin:"100% 50%",
        ease:"back",
        stagger: 0.01,
      });
    } else {
      timeline.add(
        gsap.to(projectHover.current, {
          duration: 0.1,
          opacity: 1
        })
      );
      timeline.to(headingSpans, {
        duration: 0.1,
        scale: 1,
        autoAlpha: 1,
        rotationX: 0,
        transformOrigin:"100% 50%",
        ease:"back",
        stagger: 0.01
      });
      timeline.add(
        gsap.to(projectHoverHeadingLine.current, {
          duration: 0.2,
          scaleX: 1,
          ease: "power2.out"
        })
      );
      timeline.to(spans, {
        duration: 0.01,
        scale: 1,
        autoAlpha: 1,
        rotationX: 0,
        transformOrigin:"100% 50%",
        ease:"back",
        stagger: 0.01
      });
    }
  }
  const [tl] = useTimeline(tlCallback);

  const projectHoverAction = () => {
    if (window.innerWidth < 1024) return;
    tl.play();
  }
  const projectBlurAction = () => {
    if (window.innerWidth < 1024) return;
    tl.reverse();
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
