import React, { FC } from "react";
import { H1, H2, H3, H4, H5, H6 } from "./style";
import { useAnimatedChars } from "src/hooks/useAnimatedChars";
import { HeadingProps, headingDefaultProps } from "./types";

const HeadingComponent: FC<HeadingProps> = ({
  tagName,
  children,
  ...props
}) => {
  const mapStyle = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
  };
  const Heading = mapStyle[tagName];
  const [headingRef, animateChars] = useAnimatedChars(props);

  // TODO: w strapim dodać wyjątki na emotki (tablicę do której dodawać mozna będzie emotki które potem przy splitcie tekstu będą pakowane w spana i animowane razem z resztą znaków)
  return (
    <Heading ref={headingRef} {...props} onMouseMove={animateChars}>
      {children}
    </Heading>
  );
};

HeadingComponent.defaultProps = headingDefaultProps;
export default HeadingComponent;
