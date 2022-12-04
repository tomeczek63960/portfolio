import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { simpleSplitText } from 'src/helpers/simpleSplitText';
import { H1, H2, H3, H4, H5, H6} from './style';

interface Props {
  tagName: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: React.ReactNode;
  color?: string;
  hoverColor?: string;
}

const defaultProps: Props = {
  tagName: "h1",
  color: "white"
};

interface TimelineProps {
  target: HTMLElement;
  color?: string;
  hoverColor?: string;
}
const createTimeline = ({target, color, hoverColor}: TimelineProps) => {
  let tl = gsap.timeline({paused: true});
  tl.add(
    gsap.to(target, {
      delay: 0.1,
      duration: 0,
      scaleY: 1,
      scaleX: 1,
    })
  );
  tl.add(
    gsap.to(target, {
      duration: 0.3,
      scaleY: 1.25,
      scaleX: 0.75
    })
  );
  hoverColor && tl.add(
    gsap.to(target, {
      duration: 0.2,
      color: hoverColor
    }), '-=0.3'
  )
  tl.add(
    gsap.to(target, {
      duration: 0.1,
      scaleY: 0.75,
      scaleX: 1.25
    })
  );
  tl.add(
    gsap.to(target, {
      duration: 0.1,
      scaleY: 1.15,
      scaleX: 0.85
    })
  );
  tl.add(
    gsap.to(target, {
      duration: 0.15,
      scaleY: 0.95,
      scaleX: 1.05
    })
  );
  tl.add(
    gsap.to(target, {
      duration: 0.1,
      scaleY: 1.05,
      scaleX: 0.95
    })
  );
  hoverColor && tl.add(
    gsap.to(target, {
      duration: 0.3,
      color: color
    }), '-=0.25'
  );
  tl.add(
    gsap.to(target, {
      duration: 0.25,
      scaleY: 1,
      scaleX: 1
    })
  );
  return tl;
}
const HeadingComponent = ({tagName, children, ...rest} : Props) => {
  const heading = useRef<any>();
  const tlEvents = useRef<{tl: any, animationIndex: string}[]>([]);
  const mapStyle = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6
  }
  const Heading = mapStyle[tagName]

  const animateChars = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains('splitted-text-animate')) {
      target.classList.remove('splitted-text-animate');
      if (target.dataset.animationIndex) {
        const animationIndex = target.dataset.animationIndex;
        const tlObject = tlEvents.current.find((tlElement) => tlElement.animationIndex === animationIndex);
        tlObject?.tl.play().then(() => {
          target.classList.add('splitted-text-animate');
          tlObject.tl.seek(0).pause();
        });
      } else {
        const animationIndex = (Math.random() * 10000000).toString();
        target.setAttribute('data-animation-index', animationIndex);
        const tl = createTimeline({target, color: rest.color, hoverColor: rest.hoverColor});
        tlEvents.current.push({
          animationIndex: animationIndex,
          tl: tl
        })
        const tlObject = tlEvents.current.find((tlElement) => tlElement.animationIndex === animationIndex);
        tlObject?.tl.play().then(() => {
            target.classList.add('splitted-text-animate');
            tlObject.tl.seek(0).pause();
        });
      }
    }
  }

  useEffect(() => {
    if (heading.current) {
      simpleSplitText(heading.current);
      heading.current.addEventListener('mousemove', animateChars);
    }
    return () => {
      tlEvents.current.forEach((tlObject) => {
        tlObject.tl?.kill();
        tlObject.tl?.clear();
        tlObject.tl = null;
      })
    };
  }, [heading.current]);

  // TODO: dodać jeszcze animację pisania przy pierwszym wczytaniu (na scroll triggera);
  return (
    <>
      <Heading ref={heading} {...rest}>{children}</Heading>
    </>
  );
}

HeadingComponent.defaultProps = defaultProps;
export default HeadingComponent;
