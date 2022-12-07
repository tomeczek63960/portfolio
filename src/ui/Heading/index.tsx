import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { simpleSplitText } from 'src/helpers/simpleSplitText';
import { H1, H2, H3, H4, H5, H6} from './style';
import {useAnimatedChars} from 'src/hooks/useAnimatedChars';

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

const HeadingComponent: React.FC<Props> = ({tagName, children, ...props} : Props) => {
  const mapStyle = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6
  }
  const Heading = mapStyle[tagName]
  const [headingRef, animateChars] = useAnimatedChars(props);

  // TODO: dodać jeszcze animację pisania przy pierwszym wczytaniu (na scroll triggera);
  return (
    <>
      <Heading ref={headingRef} {...props} onMouseMove={animateChars}>{children}</Heading>
    </>
  );
}

HeadingComponent.defaultProps = defaultProps;
export default HeadingComponent;
