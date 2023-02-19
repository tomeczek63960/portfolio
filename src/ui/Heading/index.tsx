import React, { FC, Fragment } from "react";
import { H1, H2, H3, H4, H5, H6 } from "./style";
import { useAnimatedChars } from "src/hooks/useAnimatedChars";
import { colors } from "src/styled/mixins";
import { IStrapiHeadingText, PropsHeading } from "./types";
import { isFalsy } from "src/helpers/checkFalsyType";

const ComponentHeading: FC<PropsHeading> = ({ heading }) => {
  if (isFalsy(heading)) return <></>;
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
    colors[heading.HoverColor],
    heading.Exceptions?.split(",")
  );

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
