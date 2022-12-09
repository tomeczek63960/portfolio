import { useRef } from 'react';
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from 'src/animation/useIsomorphicLayoutEffect';
import { simpleSplitText } from 'src/helpers/simpleSplitText';

interface TimelineProps {
  target: HTMLHeadingElement;
  color?: string;
  hoverColor?: string;
}
const createTimeline = ({target, color, hoverColor}: TimelineProps): GSAPTimeline => {
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

// do refactoru
export const useAnimatedChars = (props: any): [React.RefObject<HTMLHeadingElement>, React.MouseEventHandler<HTMLHeadingElement>] => {
  const heading = useRef<HTMLHeadingElement>(null);
  const tlEvents = useRef<{tl: any, animationIndex: string}[]>([]);

  const handleAnimation = (animationIndex: string, target: HTMLHeadingElement) => {
    const tlObject = tlEvents.current.find((tlElement) => tlElement.animationIndex === animationIndex);

    tlObject?.tl.play().then(() => {
      target.classList.add('splitted-text-animate');
      tlObject.tl.seek(0).pause();
    });
  }

  const animateChars = (event: React.MouseEvent<HTMLHeadingElement>) => {
    const target = event.target as HTMLHeadingElement;
    if (!target.classList.contains('splitted-text-animate')) return;
    target.classList.remove('splitted-text-animate');
    let animationIndex = target.dataset.animationIndex;
    if (!animationIndex) {
      animationIndex = (Math.random() * 10000000).toString();
      target.setAttribute('data-animation-index', animationIndex);
      const tl = createTimeline({target, color: props.color, hoverColor: props.hoverColor});
      tlEvents.current.push({
        animationIndex: animationIndex,
        tl: tl
      })
    }
    handleAnimation(animationIndex, target)
  }

  useIsomorphicLayoutEffect(() => {
    if (!heading.current) return;
    simpleSplitText(heading.current);
    return () => {
      tlEvents.current.forEach((tlObject) => {
        tlObject.tl?.kill();
        tlObject.tl?.clear();
        tlObject.tl = null;
      })
    };
  }, [heading.current]);
  
  return [heading, animateChars];
}