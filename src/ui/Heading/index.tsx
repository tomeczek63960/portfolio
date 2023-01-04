import React, { FC, Fragment } from "react";
import { H1, H2, H3, H4, H5, H6 } from "./style";
import { useAnimatedChars } from "src/hooks/useAnimatedChars";
import { colors } from "src/styled/mixins";
import { IStrapiHeadingText, PropsHeading } from "./types";

const ComponentHeading: FC<PropsHeading> = ({ heading }) => {
  const mapStyle = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
  };
  const Heading = mapStyle[heading.HeadingType];
  const [headingRef, animateChars] = useAnimatedChars(
    colors[heading.Color],
    colors[heading.HoverColor]
  );

  // TODO: w strapim dodać wyjątki na emotki (tablicę do której dodawać mozna będzie emotki które potem przy splitcie tekstu będą pakowane w spana i animowane razem z resztą znaków)
  return (
    <Heading
      ref={headingRef}
      color={colors[heading.Color]}
      hoverColor={colors[heading.HoverColor]}
      selectionColor={colors[heading.SelectionColor]}
      onMouseMove={animateChars}
    >
      {heading.Text.map((text: IStrapiHeadingText) => (
        <Fragment key={text.id}>
          {text.Text}
          <br />
        </Fragment>
      ))}
    </Heading>
  );
};

export default ComponentHeading;
