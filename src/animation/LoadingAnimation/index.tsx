import { gsap } from "gsap";
import { TransitionContext } from "src/context/TransitionContext";
import { useState, useContext, useRef, useEffect, useLayoutEffect } from "react";
import useIsomorphicLayoutEffect from "src/animation/useIsomorphicLayoutEffect";
import { useRouter } from "next/router";
import {Html, HtmlBefore, HtmlAfter, BodyBefore, BodyContent} from './style';
import {ScrollTriggerContext} from 'src/context/ScrollTriggerContext';

export default function LoadingAnimation({ children }: {children: any}) {
  const {pathname, locale} = useRouter();
  const {setIsInitAnimation} = useContext<any>(TransitionContext)
  const {setActive} = useContext<any>(ScrollTriggerContext)
  const [displayChildren, setDisplayChildren] = useState();
  // const [timeline, setTimeline] = useState<any>();
  const timeline = useRef<any>(false);
  const timelineEnter = useRef<any>(false);
  const el = useRef<any>();
  const flag = useRef<any>(false);
  const htmlBefore = useRef<any>(false);
  const htmlAfter = useRef<any>(false);
  const bodyBefore = useRef<any>(false);
  
  useEffect(() => {
    // setTimeline();
    if (timeline.current) return;
    timeline.current = gsap.timeline({ paused: true });
    timelineEnter.current = gsap.timeline({ paused: true });
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.7,
        y: 240
      }), 'start'
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        width: 40,
      }), 'start'
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        height: 30,
        width: 57,
      }), '-=0.35'
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.7,
        y: 0
      }), 'back'
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        height: 50,
      }), 'back'
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        width: 50
      }), '-=0.35'
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.7,
        y: 240
      }), 'start2'
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        width: 40
      }), 'start2'
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        height: 30,
        width: 57
      }), '-=0.35'
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.7,
        y: 0
      }), 'back2'
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        height: 50,
      }), 'back2'
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.35,
        width: 50
      }), '-=0.35'
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 0.7,
        scale: 3,
      })
    );
    timeline.current.add(
      gsap.to(htmlAfter.current, {
        duration: 0.7,
        opacity: 1
      })
    );
    timeline.current.add(
      gsap.to('.svg-letter path', {
        duration: 2,
        strokeDashoffset: 0,
      })
    );
    timeline.current.add(
      gsap.to('.svg-letter path', {
        duration: 1,
        fill: '#fff',
      })
    );
    timeline.current.add(
      gsap.to(htmlBefore.current, {
        duration: 2.45,
        delay: 0.5,
        scale: 100,
      })
    );
    timeline.current.add(
      gsap.to(htmlAfter.current, {
        duration: 0.35,
        opacity: 0
      }), '-=0.7'
    );
      
    timelineEnter.current.add(
      gsap.to(bodyBefore.current, {
        delay: 1,
        duration: 0.4,
        height: '100%'
      })
    );
    timelineEnter.current.add(
      gsap.to(bodyBefore.current, {
        delay: 1,
        duration: 0.4,
        height: '100%'
      })
    );
    timelineEnter.current.add(
      gsap.to(el.current, {
        delay: 1.4,
        duration: 0.4,
        opacity: 1,
        pointerEvents: 'all'
      })
    );
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (!timeline.current) return;
    console.log('here?')
    // return setDisplayChildren(children)
    // if (timeline.current.duration() === 0 || flag.current) {
    //   if (!flag.current) {
    //     setDisplayChildren(children);
    //   } else if (!timeline.current.isActive()) {
    //     setDisplayChildren(children);
    //   }
    // } else {
      if (timeline.current.isActive()) {
        console.log('timeline is active');
      } else {
        timeline.current.play().then(() => {
          timeline.current.pause();
          setIsInitAnimation(false);
          // timeline.current.seek(0).pause().clear()
          setDisplayChildren(children);
          // tutaj zamiast tego wykonania animacji powinna iść jakaś globalna ze stora na którą tylko damy .play()

          timelineEnter.current.play().then(() => {
            setActive(true);
          });
        });
      }
    // }
    flag.current = true;
  }, [timeline.current, locale, pathname])

  return <>
    <Html>
      <HtmlBefore ref={ htmlBefore } className="html--before"></HtmlBefore>
      <HtmlAfter ref={ htmlAfter } className="html--after">
        
    {/* <svg className="svg-letter" width="63.3" height="71.4" viewBox="0 0 63.3 71.4" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#fff" stroke-width="0.25mm" fill="none" ><path d="M 48.9 71.4 L 14.4 71.4 L 14.4 66.1 L 18.6 66.1 A 7.24 7.24 0 0 0 20.264 65.918 A 5.228 5.228 0 0 0 22.25 65 A 2.622 2.622 0 0 0 22.999 64.033 Q 23.693 62.605 23.7 59.661 A 25.338 25.338 0 0 0 23.7 59.6 L 23.7 6.1 L 15.7 6.1 Q 11.851 6.1 10.05 7.49 A 4.089 4.089 0 0 0 9.5 8 A 7.691 7.691 0 0 0 8.061 10.414 Q 7.676 11.421 7.48 12.631 A 14.427 14.427 0 0 0 7.4 13.2 L 6.7 19.4 L 0 19.4 L 0.5 0 L 62.8 0 L 63.3 19.4 L 56.6 19.4 L 55.9 13.2 A 12.383 12.383 0 0 0 55.424 10.944 Q 55.012 9.646 54.317 8.653 A 6.993 6.993 0 0 0 53.8 8 Q 52.1 6.1 47.6 6.1 L 39.6 6.1 L 39.6 59.6 A 19.789 19.789 0 0 0 39.669 61.328 Q 39.917 64.141 41.05 65 Q 42.5 66.1 44.7 66.1 L 48.9 66.1 L 48.9 71.4 Z" vector-effect="non-scaling-stroke"/></g></svg>
    <svg className="svg-letter" width="70.6" height="71.4" viewBox="0 0 70.6 71.4" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#fff" stroke-width="0.25mm" fill="none" ><path d="M 34.5 71.4 L 0 71.4 L 0 66.1 L 4.2 66.1 Q 6.3 66.1 7.8 65.1 A 2.502 2.502 0 0 0 8.623 64.121 Q 9.099 63.183 9.24 61.575 A 16.922 16.922 0 0 0 9.3 60.1 L 9.3 11.4 Q 9.3 8.584 8.557 7.231 A 2.54 2.54 0 0 0 7.8 6.35 A 5.776 5.776 0 0 0 5.243 5.37 A 7.563 7.563 0 0 0 4.2 5.3 L 0 5.3 L 0 0 L 34.5 0 L 34.5 5.3 L 30.3 5.3 A 7.302 7.302 0 0 0 28.568 5.496 A 5.487 5.487 0 0 0 26.6 6.4 Q 25.1 7.5 25.1 11.8 L 25.1 35.1 L 40.6 18.2 A 61.412 61.412 0 0 0 42.246 16.33 Q 44.152 14.067 45.05 12.45 A 10.86 10.86 0 0 0 45.902 10.518 A 7.842 7.842 0 0 0 46.3 8.1 Q 46.3 6.4 45.05 5.8 A 4.311 4.311 0 0 0 44.228 5.517 Q 43.361 5.301 42.043 5.232 A 25.804 25.804 0 0 0 40.7 5.2 L 40.7 0 L 67.8 0 L 67.8 5.2 A 12.562 12.562 0 0 0 60.566 7.499 A 15.297 15.297 0 0 0 60.35 7.65 Q 56.9 10.1 53.4 14 L 40.2 28.5 L 58.8 58 A 41.488 41.488 0 0 0 60.452 60.362 Q 62.191 62.662 63.766 63.917 A 10.183 10.183 0 0 0 64.35 64.35 A 10.012 10.012 0 0 0 69.841 66.095 A 12.219 12.219 0 0 0 70.2 66.1 L 70.6 66.1 L 70.6 71.4 L 65.2 71.4 Q 59.5 71.4 55.8 70.85 A 29.237 29.237 0 0 1 53.24 70.359 Q 52.014 70.063 50.986 69.679 A 13.834 13.834 0 0 1 49.75 69.15 A 13.601 13.601 0 0 1 47.493 67.773 A 10.945 10.945 0 0 1 45.9 66.3 Q 44.4 64.6 43 62.2 L 29.5 39.2 L 25.1 42.7 L 25.1 59.6 A 19.133 19.133 0 0 0 25.172 61.328 Q 25.428 64.141 26.6 65 Q 28.1 66.1 30.3 66.1 L 34.5 66.1 L 34.5 71.4 Z" vector-effect="non-scaling-stroke"/></g></svg> */}

{/* 
<svg className="svg-letter" viewBox="0 0 57.3 71.4" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#fff" stroke-width="0.25mm" fill="none"><path d="M 44.1 71.4 L 13 71.4 L 13 67.2 L 15.3 67.2 A 18.863 18.863 0 0 0 17.664 67.058 A 15.182 15.182 0 0 0 19.35 66.75 Q 21.2 66.3 22.35 64.85 Q 23.179 63.805 23.41 62.007 A 11.832 11.832 0 0 0 23.5 60.5 L 23.5 5 L 13.9 5 Q 11.343 5 9.698 5.828 A 4.991 4.991 0 0 0 7.8 7.45 Q 6.1 9.9 5.7 13.2 L 5.2 17.5 L 0 17.5 L 0.5 0 L 56.8 0 L 57.3 17.5 L 52.1 17.5 L 51.6 13.2 A 13.62 13.62 0 0 0 50.739 9.756 A 11.607 11.607 0 0 0 49.5 7.45 Q 48.152 5.507 45.043 5.105 A 13.611 13.611 0 0 0 43.3 5 L 33.6 5 L 33.6 60 A 14.094 14.094 0 0 0 33.687 61.621 Q 33.898 63.435 34.618 64.53 A 4.105 4.105 0 0 0 34.7 64.65 Q 35.8 66.2 37.7 66.7 A 15.233 15.233 0 0 0 40.454 67.151 A 18.189 18.189 0 0 0 41.8 67.2 L 44.1 67.2 L 44.1 71.4 Z" vector-effect="non-scaling-stroke"/></g></svg>

<svg className="svg-letter" viewBox="0 0 67.4 71.4" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#fff" stroke-width="0.25mm" fill="none"><path d="M 29.1 71.4 L 0 71.4 L 0 67.2 L 1.3 67.2 A 18.863 18.863 0 0 0 3.664 67.058 A 15.182 15.182 0 0 0 5.35 66.75 Q 7.2 66.3 8.35 64.85 Q 9.179 63.805 9.41 62.007 A 11.832 11.832 0 0 0 9.5 60.5 L 9.5 11 A 12.54 12.54 0 0 0 9.409 9.435 Q 9.185 7.659 8.409 6.627 A 3.715 3.715 0 0 0 8.35 6.55 Q 7.2 5.1 5.35 4.65 A 15.785 15.785 0 0 0 2.901 4.263 A 19.693 19.693 0 0 0 1.3 4.2 L 0 4.2 L 0 0 L 29.1 0 L 29.1 4.2 L 27.8 4.2 A 17.148 17.148 0 0 0 25.167 4.395 A 14.51 14.51 0 0 0 23.7 4.7 A 5.523 5.523 0 0 0 21.782 5.604 A 5.171 5.171 0 0 0 20.7 6.7 Q 19.671 8.104 19.605 10.996 A 17.684 17.684 0 0 0 19.6 11.4 L 19.6 39.6 L 40.3 15.9 A 55.987 55.987 0 0 0 41.688 14.264 Q 42.895 12.781 43.65 11.6 A 27.028 27.028 0 0 0 44.364 10.422 Q 44.972 9.353 45.3 8.5 A 9.831 9.831 0 0 0 45.574 7.69 Q 45.8 6.905 45.8 6.3 A 2.143 2.143 0 0 0 45.689 5.587 Q 45.474 4.976 44.847 4.658 A 2.437 2.437 0 0 0 44.6 4.55 A 5.255 5.255 0 0 0 43.822 4.332 Q 42.961 4.155 41.706 4.113 A 24.281 24.281 0 0 0 40.9 4.1 L 40.9 0 L 63 0 L 63 4.1 Q 60.7 4.1 58.65 5.25 A 17.533 17.533 0 0 0 56.695 6.537 Q 55.78 7.225 54.837 8.091 A 30.527 30.527 0 0 0 54.4 8.5 A 72.944 72.944 0 0 0 52.398 10.491 Q 51.063 11.869 49.6 13.5 L 35.1 29.8 L 56.2 59.2 A 45.3 45.3 0 0 0 57.959 61.462 Q 58.821 62.496 59.66 63.357 A 26.843 26.843 0 0 0 59.9 63.6 Q 61.693 65.393 63.535 66.292 A 10.227 10.227 0 0 0 63.55 66.3 A 9.207 9.207 0 0 0 65.502 67.002 A 7.515 7.515 0 0 0 67.2 67.2 L 67.4 67.2 L 67.4 71.4 L 66.3 71.4 Q 61.3 71.4 58.05 71 Q 54.8 70.6 52.65 69.6 Q 50.5 68.6 48.85 66.85 A 30.446 30.446 0 0 1 47.468 65.271 Q 46.428 64.003 45.3 62.4 L 28.1 37.7 L 19.6 46.1 L 19.6 60 A 14.094 14.094 0 0 0 19.687 61.621 Q 19.898 63.435 20.618 64.53 A 4.105 4.105 0 0 0 20.7 64.65 Q 21.8 66.2 23.7 66.7 A 15.233 15.233 0 0 0 26.454 67.151 A 18.189 18.189 0 0 0 27.8 67.2 L 29.1 67.2 L 29.1 71.4 Z" vector-effect="non-scaling-stroke"/></g></svg> */}

<svg className="svg-letter" width="61.3" height="71.4" viewBox="0 0 61.3 71.4" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#fff" stroke-width="0.25mm" fill="none"><path d="M 47.3 71.4 L 14 71.4 L 14 66.5 L 17.5 66.5 A 9.775 9.775 0 0 0 19.551 66.295 A 7.076 7.076 0 0 0 21.9 65.35 Q 23.429 64.373 23.659 61.123 A 17.35 17.35 0 0 0 23.7 59.9 L 23.7 5.7 L 15.1 5.7 A 14.411 14.411 0 0 0 12.967 5.846 Q 10.252 6.254 9 7.8 A 9.133 9.133 0 0 0 7.44 10.714 A 12.845 12.845 0 0 0 6.9 13.2 L 6.2 18.8 L 0 18.8 L 0.5 0 L 60.8 0 L 61.3 18.8 L 55.1 18.8 L 54.5 13.2 A 12.848 12.848 0 0 0 53.96 10.717 Q 53.409 9.047 52.4 7.8 Q 50.762 5.776 46.524 5.703 A 18.64 18.64 0 0 0 46.2 5.7 L 37.6 5.7 L 37.6 59.7 A 17.478 17.478 0 0 0 37.686 61.508 Q 37.879 63.352 38.503 64.394 A 2.836 2.836 0 0 0 39.4 65.35 A 7.13 7.13 0 0 0 41.891 66.325 A 9.902 9.902 0 0 0 43.8 66.5 L 47.3 66.5 L 47.3 71.4 Z" vector-effect="non-scaling-stroke"/></g></svg>

<svg className="svg-letter" width="69.6" height="71.4" viewBox="0 0 69.6 71.4" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#fff" stroke-width="0.25mm" fill="none"><path d="M 32.7 71.4 L 0 71.4 L 0 66.5 L 3.3 66.5 Q 5.8 66.5 7.6 65.45 A 2.844 2.844 0 0 0 8.679 64.254 Q 9.231 63.186 9.36 61.379 A 16.52 16.52 0 0 0 9.4 60.2 L 9.4 11.3 Q 9.4 7.1 7.6 6 A 7.389 7.389 0 0 0 4.954 5.033 A 9.891 9.891 0 0 0 3.3 4.9 L 0 4.9 L 0 0 L 32.7 0 L 32.7 4.9 L 29.5 4.9 A 9.775 9.775 0 0 0 27.449 5.105 A 7.076 7.076 0 0 0 25.1 6.05 A 2.973 2.973 0 0 0 24.075 7.236 Q 23.512 8.334 23.358 10.193 A 18.312 18.312 0 0 0 23.3 11.7 L 23.3 36.6 L 40.5 17.4 A 61.412 61.412 0 0 0 42.146 15.53 Q 44.052 13.267 44.95 11.65 Q 45.942 9.864 46.147 8.299 A 6.158 6.158 0 0 0 46.2 7.5 A 3.139 3.139 0 0 0 46.101 6.683 A 1.945 1.945 0 0 0 44.95 5.35 A 4.711 4.711 0 0 0 44.116 5.084 Q 43.221 4.878 41.876 4.821 A 25.729 25.729 0 0 0 40.8 4.8 L 40.8 0 L 66.2 0 L 66.2 4.8 A 11.307 11.307 0 0 0 59.88 6.748 A 14.272 14.272 0 0 0 59.1 7.3 A 40.443 40.443 0 0 0 56.155 9.775 Q 54.708 11.106 53.207 12.705 A 70.458 70.458 0 0 0 52.2 13.8 L 38.5 28.9 L 58 58.4 A 39.043 39.043 0 0 0 59.783 60.901 Q 61.644 63.291 63.374 64.559 A 10.909 10.909 0 0 0 63.5 64.65 Q 66.1 66.5 69.2 66.5 L 69.6 66.5 L 69.6 71.4 L 65.6 71.4 A 100.145 100.145 0 0 1 62.049 71.341 Q 58.88 71.228 56.55 70.9 A 27.393 27.393 0 0 1 54.094 70.446 Q 52.919 70.169 51.934 69.804 A 12.927 12.927 0 0 1 50.75 69.3 A 13.035 13.035 0 0 1 47.987 67.504 A 11.631 11.631 0 0 1 46.95 66.5 Q 45.618 65.039 44.249 62.987 A 43.066 43.066 0 0 1 43.8 62.3 L 29.1 38.7 L 23.3 43.8 L 23.3 59.7 A 17.478 17.478 0 0 0 23.386 61.508 Q 23.579 63.352 24.203 64.394 A 2.836 2.836 0 0 0 25.1 65.35 A 7.13 7.13 0 0 0 27.591 66.325 A 9.902 9.902 0 0 0 29.5 66.5 L 32.7 66.5 L 32.7 71.4 Z" vector-effect="non-scaling-stroke"/></g></svg>
      </HtmlAfter>
      <BodyBefore ref={ bodyBefore } className="body--before"></BodyBefore>
    </Html>

    <BodyContent ref={el}>
      { displayChildren }
    </BodyContent>
  </>
}